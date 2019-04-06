# type-array-convert
[![Build Status](https://travis-ci.com/rearn/type-array-convert.svg?branch=master)](https://travis-ci.com/rearn/type-array-convert)

`type-array-convert` is TypeArray convert library.

## Installation

``` sh
npm install --save type-array-convert
```

## Usage

Example :

``` js
var tac = require("type-array-convert");

var u8Array = new Uint8Array([0x01, 0x23, 0x45, 0x67]);
var out = tac.uint8toUint32(u8Array);
console.log(out);
// Uint32Array [ 19088743 ]
console.log(0x01234567);
// 19088743

```

For details, see test code. (`basic.test.ts` and `advancd.test.ts`)

## License

MIT
