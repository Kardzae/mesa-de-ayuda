const fs = require('fs/promises');
const path = require('path');

async function enviarTicket(req, res){
    const {body} = req;
    const resultMesaData = await fs.readFile(path.join(__dirname, '../db/mesa.json'));
    const objMesa = JSON.parse(resultMesaData);
    const latestTitle = objMesa[objMesa.length - 1].tituloTicket;
    const separateSpaces = latestTitle.split(' ')
    const latestId = separateSpaces[separateSpaces.length - 1]
    const titleToInput = body.tituloTicket;
    const intId = parseInt(latestId);
    objMesa.push({
        ...body,
        tituloTicket: `TI002 - ${titleToInput} - ${intId+1}`,
        resuelto: "No"
    });
    await fs.writeFile(path.join(__dirname, '../db/mesa.json'), JSON.stringify(objMesa, null, 2), {encoding: 'utf-8'})
    res.json({
        mensaje: "ticket guardado"
    })
}

async function obtenerSolicitudes(req, res){
    const resultData = await fs.readFile(path.join(__dirname, '../db/mesa.json'));
    const objData = JSON.parse(resultData);
    res.json(objData);
}

async function enviarSolucion(req, res){
    const {titulo, descripcionSolucion} = req.body;
    const resultData = await fs.readFile(path.join(__dirname, '../db/mesa.json'));
    const resultJson = JSON.parse(resultData);
    const alterObj = resultJson.map((ticket)=>{
        if(ticket.tituloTicket === titulo){
            return {
                ...ticket,
                resuelto: "Si",
                solucion: descripcionSolucion
            }
        }else{
            return ticket;
        }
    })
    await fs.writeFile(path.join(__dirname, '../db/mesa.json'), JSON.stringify(alterObj, null, 2), {encoding: 'utf-8'})
    res.json({
        message: "ticket resuelto"
    })
}

module.exports = {
    enviarTicket,
    obtenerSolicitudes,
    enviarSolucion
}