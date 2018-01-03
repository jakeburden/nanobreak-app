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
        <h1 class='f3 fw2 mv3'>nanobreak</h1>
        <h2 class='f5 fw2 mt0 lh-copy'>relax for half a minute</h2>
      </header>
      <main class='mw9 center ph3 flex items-center'>
        <div class='w-50 pa2 tc'>
          <a class='f6 link pointer w-100 ba bw1 ph3 pv2 mb2 dib'>Start</a>
        </div>
        <div class='w-50 pa2 tc'>
          <div class='fl fn-l w-100 lh-title mr5-l'>
            <p class='f6 fw4 ml0 mb0'>Next break:</p>
            <p class='f3 fw6 ml0 mt0'>${state.countdown}</p>
          </div>
        </div>
      </main>
    </body>
  `
}

function timeStore (state, emitter) {
  state.minutes = 24
  state.seconds = 59
  state.countdown = state.minutes + ':' + state.seconds
  setInterval(function () {
    state.seconds--
    if (state.seconds === 0) {
      state.seconds = 59
      state.minutes--
      if (state.minutes === 0) {
        state.minutes = 24
      }
    }
    state.countdown = state.minutes + ':' + state.seconds
    emitter.emit('render')
  }, 1000)
}

if (!module.parent) app.mount('body')
else module.exports = app