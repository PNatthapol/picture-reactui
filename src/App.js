import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  NavBar  from "./components/NavBar"
import { Home } from "./pages/Home"
import { Sell } from "./pages/Sell"
import { Buy } from "./pages/Buy"
import { Dashboard } from "./pages/Dashboard"
import './App.css'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
          
      </BrowserRouter>
    </div>
  )
}

export default App;