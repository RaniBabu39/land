import './App.css'
import Landingpg from './pages/Landingpg'
import { Routes, Route } from 'react-router-dom'   // ✅ use Routes instead of Router

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpg />} />
      </Routes>
    </>
  )
}

export default App
