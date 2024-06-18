import './App.css'
import Home from './views/Home'
import NoEncontrada from './views/NoEcontrada'
import { Routes, Route } from 'react-router-dom'
import Pokemon from './views/Pokemon'
import Consult from './views/Consut'
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/consult/pokemon/:name" element={<Pokemon />} />
        <Route path='*' element={<NoEncontrada />} />
      </Routes>
    </>
  )
}

export default App
