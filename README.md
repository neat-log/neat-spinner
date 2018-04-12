# neat-spinner

cli spinner to use with neat-log

Uses [cli-spinners](https://github.com/sindresorhus/cli-spinners) for spinners

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/neat-spinner.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/neat-spinner
[travis-image]: https://img.shields.io/travis/joehand/neat-spinner.svg?style=flat-square
[travis-url]: https://travis-ci.org/joehand/neat-spinner
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install neat-spinner
```

## Usage

```js
var neatSpinner = require('neat-spinner')
var neatLog = require('neat-log')

var spinner = neatSpinner('dots')

var neat = neatLog(function () {
  return `
    Check out my spinner: 
    
    ${spinner.view()}
  `
}, {logspeed: spinner.logspeed}) // use spinner logspeed for best results
neat.use(spinner.use)
```

## License

[MIT](LICENSE.md)
