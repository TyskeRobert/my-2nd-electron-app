require('update-electron-app')();

const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    ipcMain.handle("ping", () => "pong");
    ipcMain.handle("time", () => timeNow());
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function() {
        if (BrowserWindow.getAllWindows().length == 0) 
            createWindow();
    });
});

app.on("window-all-closed", function() {
    if (process.platform != "darwin") 
        app.quit();
});

const timeNow = () => Date().substring(16, 24);