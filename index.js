const electron = require('electron');
const {
    app,
    BrowserWindow
} = require('electron');
const {
    ipcMain
} = require('electron');
const fs = require('fs');





app.on('ready', () => {
    let win = new BrowserWindow({
        frame: false
    });
    win.loadURL(`file://${__dirname}/src/main.html`)

});