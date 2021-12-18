import fs from 'fs-extra';

fs.copy("./src","./LEVERING/Kode", err => {
    if(err){
        console.log('An error occured while copying the src-folder to LEVERING.');
        return console.error(err)
    }
})

fs.copy("./beskjed-til-sensor.txt", "./LEVERING/beskjed-til-sensor.txt", err => {
    if(err){
        console.log('An error occured while copying "beskjed-til-sensor.txt" to LEVERING.');
        return console.error(err)
    }
})