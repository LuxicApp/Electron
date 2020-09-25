const fs = require('fs');
const si = require('systeminformation');

function formatBytes(bytes, decimals = 0) {
    if (bytes == 0) return '0 Bytes';
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(dm))} ${sizes[i]}`;
}

async function getSystemInformation() {
    console.debug('%cStarted writing data to systeminformation.json', 'color: #B30EE6')
    const system = await si.system();
    const os = await si.osInfo();
    const baseboard = await si.baseboard();
    const cpu = await si.cpu();
    const memory = await si.mem();
    const graphics = await si.graphics();

    const systeminformation = {
        system: {
            manufacturer: system.manufacturer
        },
        systemOS: {
            distro: os.distro,
            arch: os.arch
        },
        baseboard: {
            manufacturer: baseboard.manufacturer,
            model: baseboard.model
        },
        cpu: {
            manufacturer: cpu.manufacturer,
            brand: cpu.brand,
            speedmax: `${cpu.speedmax} GHz`,
            cores: cpu.cores
        },
        memory: {
            bytes: memory.total,
            formatted: formatBytes(memory.total)
        }
    };

    systeminformation.graphics = [];

    graphics.controllers.forEach((controller, index) => systeminformation.graphics[index] = {
        model: controller.model,
        vram: controller.vram
    });

    fs.writeFile('./assets/json/systeminformation.json', JSON.stringify(systeminformation, null,  4), () => console.debug('Updated the system specifications'));
    console.debug('%cWritten system specifications to systeminformation.json', 'color: #B30EE6')
}