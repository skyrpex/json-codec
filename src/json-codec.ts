import type { Opaque } from "opaque-type";

export type JsonSerializablePrimitive =
	| string
	| number
	| boolean
	| undefined
	| null;

export interface JsonSerializableRecord {
	[key: string]:
		| JsonSerializablePrimitive
		| JsonSerializablePrimitive[]
		| JsonSerializableRecord
		| JsonSerializableRecord[];
}

export type JsonSerializable =
	| JsonSerializablePrimitive
	| JsonSerializablePrimitive[]
	| JsonSerializableRecord
	| JsonSerializableRecord[];

export const stringify = <T extends JsonSerializable>(value: T) =>
	JSON.stringify(value) as JsonEncoded<T>;

export const parse = <T extends JsonSerializable>(json: JsonEncoded<T>) =>
	JSON.parse(json) as T;

declare const type: unique symbol;
export type JsonEncoded<T extends JsonSerializable = JsonSerializable> = Opaque<
	string,
	{ readonly [type]: T }
>;
