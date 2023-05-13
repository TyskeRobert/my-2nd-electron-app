const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

document.getElementById("button").addEventListener("click", () => func());

document.getElementById("user").innerText = myString;

async function func() {
    const response = await versions.time();
    const res = document.getElementById("result");
    res.innerText = response;
}