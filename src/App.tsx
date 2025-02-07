import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/HomePage'
import CheckoutPage from './pages/checkout'


// import NotFound from './pages/ErrorPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
       
       


        {/* <Route path="*" element={<NotFound />} /> */}


       
      </Routes>
    </BrowserRouter>
  )
}

export default App
