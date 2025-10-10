import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


import Home from './Pages/Home'
import Form from './Pages/Form'
import Display from './Pages/Display'
import Layout from './Pages/Layout'
import Search from './Pages/Search'
import Update from './Pages/Update'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/display" element={<Display />} />
          <Route path="/search" element={<Search />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
