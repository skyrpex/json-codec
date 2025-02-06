# @skyrpex/json-codec

Encodes and decodes JS objects into a JSON string while retaining the original object type.

Accepts the following primitives, including arrays and objects:

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

## Installation

```sh
npm install @skyrpex/json-codec
```

## Usage

```ts
import * as jsonCodec from "@skyrpex/json-codec";

const encoded = jsonCodec.stringify({
	key: "value",
});
// encoded = "{"key":"value"}"

const decoded = jsonCodec.parse(encoded);
// decoded = { key: "value" }
```

## Other codecs

- [@skyrpex/string-codec](https://github.com/skyrpex/string-codec)
- [@skyrpex/devalue-codec](https://github.com/skyrpex/devalue-codec)
- [@skyrpex/superjson-codec](https://github.com/skyrpex/superjson-codec)
