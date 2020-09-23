require('fs');
const systeminformation = require('./assets/json/systeminformation.json');

readSystemInformation();

function readSystemInformation(){
    console.debug("%cAttempting to read systeminformation.json", 'color: #B30EE6;');
    document.getElementById('writeDataSYS').innerHTML = "Manufactured by " + systeminformation.System.manufacturer;
    document.getElementById('writeDataOS').innerHTML = systeminformation.SystemOS.distro + " (" + systeminformation.SystemOS.arch + ")";
    document.getElementById('writeDataMOBO').innerHTML = systeminformation.Motherboard.manufacturer + " " + systeminformation.Motherboard.model;
    document.getElementById('writeDataCPU').innerHTML = systeminformation.Processor.manufacturer + " " + systeminformation.Processor.brand + " w/ " + systeminformation.Processor.cores + " cores @ " + systeminformation.Processor.speedmax;
    document.getElementById('writeDataMEM').innerHTML = systeminformation.Memory.formatted + " (" + systeminformation.Memory.bytes + " bytes)";
    document.getElementById('writeDataGPU').innerHTML = systeminformation.GraphicCards[0].model;
    console.debug("%cFinished reading data from systeminformation.json", 'color: #B30EE6;');
}

// if (document.getElementById('writeDataOS').innerHTML.indexOf("Microsoft Windows") != -1) {document.getElementById("WindowsOS").style.display = "block";}
// if (document.getElementById('writeDataOS').innerHTML.indexOf("Linux") != -1) {document.getElementById("LinuxOS").style.display = "block";}
// if (document.getElementById('writeDataOS').innerHTML.indexOf("macos") != -1) {document.getElementById("MacOS").style.display = "block";}
if (document.getElementById('writeDataGPU').innerHTML.indexOf("RTX") != -1) {document.getElementById("NVIDIA").style.display = "block";}
if (document.getElementById('writeDataGPU').innerHTML.indexOf("AMD") != -1) {document.getElementById("AMD").style.display = "block";}