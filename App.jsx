import { useState, useEffect } from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Headerss'
import Login from './login'
import Forms from './Forms/cj'
import Test from './test'

function App() {

  return (
    <>
      <div className='font-link'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Forms/cj' element={<Forms/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
