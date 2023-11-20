import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormTicket from './components/FormTicket';
import DashboardTickets from './components/DashboardTickets';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormTicket />}></Route>
        <Route path='/dashboard' element={<DashboardTickets />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
