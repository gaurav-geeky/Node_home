import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Form from './Pages/Form'
import Display from './Pages/Display'
import Layout from './Pages/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/display" element={<Display />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
