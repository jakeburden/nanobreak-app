var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

var app = choo()

app.use(timeStore)

app.route('/', mainView)

function mainView (state, emit) {
  return html`
    <body class='bg-black white sans-serif'>
      <header class='tc ph4'>
        <h1 class='f3 fw2 mv3 tracked'>nanobreak</h1>
        <h2 class='f5 fw2 mt0 lh-copy'>relax for half a minute</h2>
      </header>
      <main class='mw9 center ph3 flex items-center'>
        <div class='w-50 pa2 tc'>
          <a class='f6 link pointer w-100 ba bw1 ph3 pv2 mb2 dib tracked ttu'>Start</a>
        </div>
        <div class='w-50 pa2 tc'>
          <div class='fl fn-l w-100 lh-title mr5-l'>
            <p class='f6 fw4 ml0 mb0'>Next break:</p>
            <p class='f3 fw6 ml0 mt0 tracked'>${state.countdown}</p>
          </div>
        </div>
      </main>
    </body>
  `
}

function timeStore (state, emitter) {
  // set countdown minutes and seconds
  state.minutes = 24
  state.seconds = 59

  // format countdown timer as minutes:seconds (e.g. 23:41)
  state.countdown = state.minutes + ':' + state.seconds

  // starts a timer
  // the timer should reset when it reaches the end
  setInterval(function () {
    state.seconds--

    // reset the seconds if seconds is zero then decrement the minute
    if (state.seconds === 0) {
      state.seconds = 59
      state.minutes--
      // reset the minutes if minutes is zero
      if (state.minutes === 0) {
        state.minutes = 24
      }
    }
    // formart single digit seconds to have a leading zero (e.g. 23:05)
    if (state.seconds < 10) state.seconds = '0' + state.seconds

    // set the countdown state for use in the view
    state.countdown = state.minutes + ':' + state.seconds
    emitter.emit('render')
  }, 1000)
}

if (!module.parent) app.mount('body')
else module.exports = app