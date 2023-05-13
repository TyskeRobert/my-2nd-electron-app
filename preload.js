const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    time: () => ipcRenderer.invoke("time")
});

contextBridge.exposeInMainWorld("myString", "rpa021");