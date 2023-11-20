import { useEffect, useState } from "react";
import '../styles/DashboardTickets.css'
import { useNavigate } from "react-router-dom";

function DashboardTickets(){
    const [ticketsNoSolved, setTicketsNoSolved] = useState([]);
    const goTo = useNavigate();
    async function fetchTickets(){
        const result = await fetch('http://localhost:4200/v1/mesa/obtener-tickets');
        const resulJson = await result.json();
        setTicketsNoSolved(resulJson);
    }

    function handleClick(e){
        goTo("/solve-ticket", {replace: true, state: {titulo: e.target.id}})
    }

    useEffect(()=>{
        fetchTickets();
    },[])
    return (
        <div>
            <h2>Tickets para resolver disponibles</h2>
            <div className>
                {(ticketsNoSolved.length > 0) ? ticketsNoSolved.map((ticket)=>{
                    if(ticket.resuelto === 'No'){
                        return <div className="tickets-no-solved">
                            <h4>{ticket.tituloTicket}</h4>
                            <p><b>Descripción</b> {ticket.descripcion}</p>
                            <p><b>Prioridad</b> {ticket.prioridad}</p>
                            <button id={ticket.tituloTicket} onClick={handleClick}>Dar solución</button>
                        </div>
                    }
                }): <p>No hay tickets disponibles</p>}
            </div>
        </div>
    )
}

export default DashboardTickets;