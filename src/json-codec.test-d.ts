import { assertType, test } from "vitest";
import * as codec from "./json-codec.ts";

test("stringify retains type", () => {
	const encoded = codec.stringify({
		key: "value",
	});

	assertType<codec.Stringified<{ key: string }>>(encoded);

	// @ts-expect-error Cannot assign a string to a number
	assertType<codec.Stringified<{ key: number }>>(encoded);
});

test("parse retains type", () => {
	const encoded = codec.stringify({
		key: "value",
	});

	const decoded = codec.parse(encoded);

	assertType<{ key: string }>(decoded);
});
