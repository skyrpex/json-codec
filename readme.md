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
import { stringify, parse } from "json-codec";

const encoded = stringify({
	key: "value",
});

const decoded = parse(encoded);
```

## Other codecs

- [@skyrpex/string-codec](https://github.com/skyrpex/string-codec)
- [devalue-codec](https://github.com/skyrpex/devalue-codec)
- [superjson-codec](https://github.com/skyrpex/superjson-codec)
