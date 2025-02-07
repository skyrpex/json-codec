import { parser, stringifier } from "codec-builder";

export type { Stringified } from "codec-builder";

export type Serializable = string | number | boolean | undefined | null;

type Forbidden =
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
 * Serializes a {@link Serializable} object to a string.
 */
// @__NO_SIDE_EFFECTS__
export const stringify = stringifier<Serializable, Forbidden>(JSON.stringify);

/**
 * Parses a stringified {@link Serializable} object to its original value.
 */
// @__NO_SIDE_EFFECTS__
export const parse = parser<Serializable>(JSON.parse);
