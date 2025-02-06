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

export function stringify<T extends JsonSerializable>(value: T) {
	return JSON.stringify(value) as JsonEncoded<T>;
}

export function parse<T extends JsonSerializable>(json: JsonEncoded<T>) {
	return JSON.parse(json) as T;
}

declare const type: unique symbol;
export type JsonEncoded<T extends JsonSerializable = JsonSerializable> = Opaque<
	string,
	{ readonly [type]: T }
>;
