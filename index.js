var cliSpinners = require('cli-spinners')

module.exports = function (style) {
  var spinner = cliSpinners[style || 'dots']
  var i = 0
  var frames = spinner.frames

  return { use, view, logspeed: spinner.interval }

  function view () {
    return frames[i % frames.length]
  }

  function use (_, bus) {
    setInterval(() => {
      i = ++i
      bus.emit('render')
    }, spinner.interval)
  }
}
