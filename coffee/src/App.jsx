import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Component/Homepage'
import Espresso from './Component/Subtypes/Espresso'
import Latte from './Component/Subtypes/Latte'
import Macchiato from './Component/Subtypes/Macchiato'
import Mocha from './Component/Subtypes/Mocha'
import Americano from './Component/Subtypes/Americano'
import Cappuccino from './Component/Subtypes/Cappuccino'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/espresso' element={<Espresso/>}/>
        <Route path='/latte' element={<Latte/>}/>
        <Route path='/macchiato' element ={<Macchiato/>}/>
        <Route path='/mocha' element={<Mocha/>}/>
        <Route path='/americano' element={<Americano/>}/>
        <Route path='/cappuccino' element={<Cappuccino/>}/>
      </Routes>
    </Router>
  )
}

export default App
