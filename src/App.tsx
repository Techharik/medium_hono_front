import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App