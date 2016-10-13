# number-to-css-color

[![es6](https://camo.githubusercontent.com/d25414161ebfbbdd0f69a4a3e6a188a76ae2e82a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f65732d362d627269676874677265656e2e737667)](https://babeljs.io/docs/usage/polyfill/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![CircleCI](https://circleci.com/gh/layflags/number-to-css-color.svg?style=svg)](https://circleci.com/gh/layflags/number-to-css-color)

Converts a number to a CSS hex color. It even supports the [upcoming CSS4 8 digits notation](https://drafts.csswg.org/css-color/#hex-notation) with alpha.

**A note about compatibility**

The [npm package](https://www.npmjs.com/package/number-to-css-color) should be used in
an **ES6 environment**. Even though the published code has ES5 syntax it uses
some ES6 features, so you have to make sure to use ES5 and ES6 polyfills if you
are in an ancient environment.

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

