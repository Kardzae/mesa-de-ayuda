import { useEffect, useState } from "react";
import '../styles/DashboardTickets.css';

function DashboardTickets(){
    const [tickets, setTickets] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4200/v1/mesa/obtener-tickets');
          const result = await response.json();
          setTickets(result);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div>
            <h3>Solicitudes radicadas</h3>
            {(tickets.length > 0) ? tickets.map((ticket)=>{
                return <div className="ticket">
                    <h4>{ticket.tituloTicket}</h4>
                    <p><b>Descripción</b> {ticket.descripcion}</p>
                    <p><b>Prioridad</b> {ticket.prioridad}</p>
                </div>
            }): <p>No hay tickets para mostrar</p>}

            <h3>Solicitudes resueltas</h3>

            {(tickets.length > 0) ? tickets.map((ticket)=>{
                if(ticket.resuelto === 'Si'){
                    return <div className="ticket">
                    <h4>{ticket.tituloTicket}</h4>
                    <p><b>Descripción</b> {ticket.descripcion}</p>
                    <p><b>Prioridad</b> {ticket.prioridad}</p>
                </div>
                }
            }): <p>No hay tickets para mostrar</p>}
        </div>
    )
}

export default DashboardTickets;