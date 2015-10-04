# number-to-css-color

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Converts a number to a CSS hex color. It even supports the [upcoming CSS4 8 digits notation](https://drafts.csswg.org/css-color/#hex-notation) with alpha.

**A note about compatibility**

The [npm package](https://www.npmjs.com/package/number-to-css-color) should be used in an ES6 environment. Even though the published code has ES5 syntax you have to make sure to use ES5 and ES6 polyfills if you are in an ancient environment. That's why I added [core-js](https://www.npmjs.com/package/core-js) as a peer dependency.

## Install

```bash
npm install number-to-css-color
```

## Usage

```javascript
import convert from 'number-to-css-color'

console.log(convert(0xf)) // -> "#00000f"
console.log(convert(0x10c, {alpha: true})) // -> "#0000010c"
```

## Test

```bash
npm test
```

## License

[MIT](LICENSE)

