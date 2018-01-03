var path = require('path')
var electron = require('electron')
var menubar = require('menubar')

var app = electron.app
var shell = electron.shell
var Menu = electron.Menu

var mb = menubar({
  width: 440,
  height: 200,
  //preloadWindow: true,
  alwaysOnTop: true
})

mb.on('ready', function () {
 console.log('app is ready')
})
  
