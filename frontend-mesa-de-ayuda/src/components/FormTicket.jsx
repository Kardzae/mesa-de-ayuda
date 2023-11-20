import { useState } from "react";

function FormTicket(){
    // Datos del Ticket
    const [tituloTicket, setTituloTicket] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [prioridad, setPrioridad] = useState("");

    // Datos personales
    const [idEmp, setIdEmp] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    async function handleClickForm(e){
        e.preventDefault();
        await fetch('http://localhost:4200/v1/mesa/enviar-ticket', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                tituloTicket,
                descripcion,
                prioridad,
                idEmp,
                nombre,
                correo,
                telefono
            })
        });
    }
    return (
        <div>
            <a href="http://localhost:5173/dashboard">Tus solicitudes</a>
            <h2>Radicación de un Ticket para mesa de ayuda</h2>
            <form>
                <label htmlFor="titulo_ticket">Titulo del Ticket </label>
                <input type="text" onChange={(e)=>{setTituloTicket(e.target.value)}} id="titulo_ticket"/><br />

                <p>Descripcion de  la solicitud </p>
                <textarea onChange={(e)=>{setDescripcion(e.target.value)}} id="descripcion" cols="50" rows="10"></textarea><br />

                <label htmlFor="prioridad">Seleccione la prioridad </label>
                <select id="prioridad" onClick={(e)=>{setPrioridad(e.target.value)}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>

                <h3>Datos personales de quien radica</h3>
                <label htmlFor="NIT">Id de Empleado </label>
                <input type="text" onChange={(e)=>{setIdEmp(e.target.value)}} id="NIT"/><br />

                <label htmlFor="nombre">Nombre completo </label>
                <input type="text" id="nombre" onChange={(e)=>{setNombre(e.target.value)}} /><br />

                <label htmlFor="correo">Correo electrónico </label>
                <input type="text" id="correo" onChange={(e)=>{setCorreo(e.target.value)}} /><br />

                <label htmlFor="telefono">Numero de telefono </label>
                <input type="text" id="telefono" onChange={(e)=>{setTelefono(e.target.value)}}/><br />

                <button onClick={handleClickForm}>Radicar solicitud</button>
            </form>
        </div>
    )
}

export default FormTicket;