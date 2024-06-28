import './App.css'
import Calculator from './Components/Calculator/Calculator'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Calculator />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
