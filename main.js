const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function onReady () {
 win = new BrowserWindow({width: 1200, height: 6700})
 win.loadURL(url.format({
  pathname: path.join(
   __dirname,
   'dist/Robix/index.html'),
  protocol: 'file:',
  slashes: true
 }))
}

var minsNum = 5; // Minutes in between each focus.
setInterval(function ()
{
    win.focus();
}, minsNum * 60 * 1000);

app.on('ready', onReady);
