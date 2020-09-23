const fs = require('fs');
const si = require('systeminformation');

let systemInfo = new Object();

async function getSystemInformation(){
    let System = new Promise((resolve, reject) => {
        si.system().then(systemData => resolve(systemData)).catch(error => console.error(error));
    });

    let OS = new Promise((resolve, reject) => {
        si.osInfo().then(OSData => resolve(OSData)).catch(error => console.error(error));
    });

    let Baseboard = new Promise((resolve, reject) => {
        si.baseboard().then(baseboardData => resolve(baseboardData)).catch(error => console.error(error));
    });

    let CPU = new Promise((resolve, reject) => {
        si.cpu().then(cpuData => resolve(cpuData)).catch(error => console.error(error));
    });

    let MEM = new Promise((resolve, reject) => {
        si.mem().then(memData => resolve(memData)).catch(error => console.error(error));
    });

    let GPU = new Promise((resolve, reject) => {
        si.graphics().then(graphicsData => resolve(graphicsData)).catch(error => console.error(error));
    });

    // let Storage = new Promise((resolve, reject) => {
    //     si.diskLayout().then(diskLayoutData => resolve(diskLayoutData)).catch(error => console.error(error));
    // });

    let Battery = new Promise((resolve, reject) => {
        si.battery().then(batteryData => resolve(batteryData)).catch(error => console.error(error));
    });

    let sysInfo = await System;
    let OSInfo = await OS;
    let baseboardInfo = await Baseboard;
    let cpuInfo = await CPU;
    let memInfo = await MEM;
    let gpuInfo = await GPU;
    // let storageInfo = await Storage;
    let batteryInfo = await Battery;

    systemInfo.System = new Object();
    systemInfo.System.manufacturer = sysInfo.manufacturer;

    systemInfo.SystemOS = new Object();
    systemInfo.SystemOS.distro = OSInfo.distro;
    systemInfo.SystemOS.arch = OSInfo.arch;

    systemInfo.Motherboard = new Object();
    systemInfo.Motherboard.manufacturer = baseboardInfo.manufacturer;
    systemInfo.Motherboard.model = baseboardInfo.model;

    systemInfo.Processor = new Object();
    systemInfo.Processor.manufacturer = cpuInfo.manufacturer;
    systemInfo.Processor.brand = cpuInfo.brand;
    systemInfo.Processor.speedmax = cpuInfo.speedmax + " GHz";
    systemInfo.Processor.cores = cpuInfo.cores;
    systemInfo.Processor.socket = cpuInfo.socket;

    systemInfo.Memory = new Object();
    systemInfo.Memory.formatted = formatBytes(memInfo.total);
    systemInfo.Memory.bytes = memInfo.total;

    function formatBytes(bytes, decimals = 0) {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    systemInfo.GraphicCards = new Array();

    for(i = 0; i < gpuInfo.controllers.length; i++) {
        systemInfo.GraphicCards[i] = new Object();
        systemInfo.GraphicCards[i].model = gpuInfo.controllers[i].model;
        systemInfo.GraphicCards[i].vram = gpuInfo.controllers[i].vram;
    }

    // systemInfo.Storage = new Array();

    systemInfo.Battery = new Object();
    systemInfo.Battery.hasbattery = batteryInfo.hasbattery;
    systemInfo.Battery.acconnected = batteryInfo.acconnected;
    systemInfo.Battery.percent = batteryInfo.percent;

    fs.writeFile('./assets/json/systeminformation.json', JSON.stringify(systemInfo, null,  4), () => {
        console.debug('Updated the system specifications');
    });
}

getSystemInformation();