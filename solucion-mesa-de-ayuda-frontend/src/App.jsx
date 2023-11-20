import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardTickets from './components/DashboardTickets';
import FormToSolve from './components/FormToSolve';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardTickets />}></Route>
        <Route path='/solve-ticket' element={<FormToSolve />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
