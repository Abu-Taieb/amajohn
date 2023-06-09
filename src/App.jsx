import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Product from './component/Product/Product'
import Shop from './component/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Product></Product>
    </div>
  )
}

export default App
