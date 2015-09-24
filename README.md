# number-to-css-color

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Converts a number to a CSS hex color. It even supports the [upcoming CSS4 8 digits notation](https://drafts.csswg.org/css-color/#hex-notation) with alpha.

## Install

```sh
npm install number-to-css-color
```

## Usage

```javascript
import convert from 'number-to-css-color'

console.log(convert(0xf)) // -> "#00000f"
console.log(convert(0x10c, {alpha: true}); // -> "#0000010c"
```

## Test

```sh
npm test
```

## License

[MIT](LICENSE)

