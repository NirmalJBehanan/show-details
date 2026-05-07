import React from 'react'
import Button from './components/button/Button'
import Card from './components/card/Card'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
       <Card name="Nirmal" email="abcd@gmail.com" btnname="Btn1" />
       <Card name="Ammu" email="ammu@gmail.com"  btnname="Btn2"/>
       <Card name="kero" email="kero@gmail.com"  btnname="Btn3"/>
    
    </div>
  )
}

export default App