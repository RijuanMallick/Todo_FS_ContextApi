import React from 'react'
import Home from './pages/Home'
import UpdateModal from './components/UpdateModal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:id" element={<UpdateModal />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  )
}

export default App


//todoContext
//todoProvider --- global data -- return -- global values
//custom hook useTodo
//wrap in app jsx
//where ever needed just call useTodo destructure