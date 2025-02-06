# json-codec

Serializes JSON expressions while retaining the original object type.

Accepts the following primitives, including arrays and objects:

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

## Installation

```sh
npm install json-codec
```

## Usage

```ts
import * as jsonCodec from "json-codec";

const encoded = jsonCodec.stringify({
	key: "value",
});
// encoded = "{"key":"value"}"

const decoded = jsonCodec.parse(encoded);
// decoded = { key: "value" }
```

## Other codecs

- [@skyrpex/string-codec](https://github.com/skyrpex/string-codec)
- [devalue-codec](https://github.com/skyrpex/devalue-codec)
- [superjson-codec](https://github.com/skyrpex/superjson-codec)
