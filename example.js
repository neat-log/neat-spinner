var neatLog = require('neat-log')
var neatSpinner = require('.')

var spinner = neatSpinner('dots')
var spinner2 = neatSpinner('point')
var spinner3 = neatSpinner('toggle6')

var neat = neatLog(function () {
  return `
    ${spinner.view()}
    ${spinner2.view()}
    ${spinner3.view()}
  `
}, {logspeed: Math.min(spinner.logspeed, spinner2.logspeed, spinner3.logspeed)})
neat.use(spinner.use)
neat.use(spinner2.use)
neat.use(spinner3.use)
