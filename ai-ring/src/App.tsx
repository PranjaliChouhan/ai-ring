import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/HomePage'
import CheckoutPage from './pages/checkout'
import { CartProvider } from './components/cart-provider'
import PrivacyPolicy from './pages/privacy-policy'
import TermsOfService from './pages/terms-of-service'

// import NotFound from './pages/ErrorPage'
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
         
         


          {/* <Route path="*" element={<NotFound />} /> */}


         
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
