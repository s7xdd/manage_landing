import './App.css'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
    </BrowserRouter>
  )
}

export default App
