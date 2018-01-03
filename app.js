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
        <h2 class='f5 fw2 mt0 lh-copy'>smol breaks, reminding you to take a breath</h2>
      </header>
      <main class='mw9 center ph3 flex items-center'>
        <div class='w-50 pa2 tc'>
          <a class='f6 link pointer w-100 ba bw1 ph3 pv2 mb2 dib'>Start</a>
        </div>
        <div class='w-50 pa2 tc'>
          <div class='fl fn-l w-100 lh-title mr5-l'>
            <p class='f6 fw4 ml0 mb0'>Next break:</p>
            <p class='f3 fw6 ml0 mt0'>${state.time}</p>
          </div>
        </div>
      </main>
    </body>
  `
}

function timeStore (state, emitter) {
  state.time = 25
  setInterval(function () {
    state.time--
    if (state.time === 0) state.time = 25
    emitter.emit('render')
  }, 1000)
}

if (!module.parent) app.mount('body')
else module.exports = app