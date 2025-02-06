import { expect, test } from "vitest";
import * as codec from "./json-codec.ts";

test("stringifies correctly", () => {
	expect(
		codec.stringify({
			key: "value",
		})
	).toEqual('{"key":"value"}');
});

test("parses correctly", () => {
	expect(
		codec.parse(
			codec.stringify({
				key: "value",
			})
		)
	).toEqual({
		key: "value",
	});
});
