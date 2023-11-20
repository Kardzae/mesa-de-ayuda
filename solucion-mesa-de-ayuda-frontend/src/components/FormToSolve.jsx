import { useState } from "react";
import { useLocation } from "react-router-dom"; 

function FormToSolve(){
    const [descSolucion, setDescSolucion] = useState('');
    const location = useLocation();
    
    async function sendSolution(e){
        e.preventDefault();
        const {titulo} = location.state;
        const resultado = await fetch('http://localhost:4200/v1/mesa/enviar-solucion', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({titulo, descripcionSolucion: descSolucion})
        })
        const resultJson = await resultado.json();
        console.log(resultJson);
    }
    return (
        <div>
            <form>
                <h3>Redacte la solución hacia el ticket generado</h3>
                <textarea cols="50" rows="10" onChange={(e)=>setDescSolucion(e.target.value)}></textarea><br />
                <button onClick={sendSolution}>Enviar solucion</button>
            </form>
        </div>
    )
}

export default FormToSolve;