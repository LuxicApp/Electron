let systeminformation;

try {
    systeminformation = require('./assets/json/systeminformation.json');
    setSystemInformation();
} catch {
    console.log('222');
    document.getElementsByClassName('settings__button').innerHTML = 'Get';
}

function setSystemInformation() {
    console.debug("%cReading systeminformation.json", 'color: #B30EE6');
    document.getElementById('writeDataSYS').innerHTML = `Manufactured by ${systeminformation.system.manufacturer}`;
    document.getElementById('writeDataOS').innerHTML = `${systeminformation.systemOS.distro} ${systeminformation.systemOS.arch}`;
    document.getElementById('writeDataMOBO').innerHTML = `${systeminformation.baseboard.manufacturer} ${systeminformation.baseboard.model}`;
    document.getElementById('writeDataCPU').innerHTML = `${systeminformation.cpu.manufacturer} ${systeminformation.cpu.brand} w/ ${systeminformation.cpu.cores} cores @ ${systeminformation.cpu.speedmax}`;
    document.getElementById('writeDataMEM').innerHTML = `${systeminformation.memory.formatted} (${systeminformation.memory.bytes} bytes)`;
    systeminformation.graphics.forEach((cardObject) => document.getElementById("writeDataGPU").innerHTML += `<p class="settings__descriptionGraphics">${cardObject.model}</p>`);
    console.debug("%cFinished reading systeminformation.json", 'color: #B30EE6;');
}

async function updateSystemInformation() {
    console.debug("%cUpdating system information", 'color: #B30EE6');
    await getSystemInformation();
    systeminformation = require('./assets/json/systeminformation.json');
    document.getElementById("writeDataGPU").innerHTML = '';
    document.getElementById('writeDataSYS').innerHTML = `Manufactured by ${systeminformation.system.manufacturer}`;
    document.getElementById('writeDataOS').innerHTML = `${systeminformation.systemOS.distro} ${systeminformation.systemOS.arch}`;
    document.getElementById('writeDataMOBO').innerHTML = `${systeminformation.baseboard.manufacturer} ${systeminformation.baseboard.model}`;
    document.getElementById('writeDataCPU').innerHTML = `${systeminformation.cpu.manufacturer} ${systeminformation.cpu.brand} w/ ${systeminformation.cpu.cores} cores @ ${systeminformation.cpu.speedmax}`;
    document.getElementById('writeDataMEM').innerHTML = `${systeminformation.memory.formatted} (${systeminformation.memory.bytes} bytes)`;
    systeminformation.graphics.forEach((cardObject) => document.getElementById("writeDataGPU").innerHTML += `<p class="settings__descriptionGraphics">${cardObject.model}</p>`);
    console.debug("%cUpdated system information", 'color: #B30EE6');
}