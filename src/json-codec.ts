import { type SerializableRecord, parser, stringifier } from "codec-builder";

export type { Stringified } from "codec-builder";

export type SerializablePrimitive =
	| string
	| number
	| boolean
	| undefined
	| null;

export type Serializable = SerializableRecord<SerializablePrimitive>;

export type Forbidden =
	| symbol
	| Date
	| bigint
	| Map<unknown, unknown>
	| Set<unknown>
	| Int8Array
	| Int16Array
	| Int32Array
	| Uint8Array
	| Uint16Array
	| Uint32Array
	| Uint8ClampedArray
	| Error
	| RegExp
	| URL
	// biome-ignore lint/complexity/noBannedTypes: we need to forbid Function
	| Function;

/**
 * Serializes a {@link SerializablePrimitive} object to a string.
 */
// @__NO_SIDE_EFFECTS__
export const stringify = stringifier<SerializablePrimitive, Forbidden>(
	JSON.stringify,
);

/**
 * Parses a stringified {@link SerializablePrimitive} object to its original value.
 */
// @__NO_SIDE_EFFECTS__
export const parse = parser<SerializablePrimitive>(JSON.parse);
