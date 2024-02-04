//terminal == npm run dev
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Headerss'
import Login from './login'
import Forms from './Forms/cj'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='font-link'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Forms/cj' element={<Forms/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
