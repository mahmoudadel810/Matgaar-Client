
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategProvider } from './contexts/categories.context.jsx'
import { ProdProvider } from './contexts/product.context.jsx'
import Navbar from "./componants/Navbar/Navbar.jsx";
import Footer from "./componants/Footer/Footer.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProdProvider>
     <CategProvider>
      <BrowserRouter>
          <Navbar />
            <App />
            <Footer />
      </BrowserRouter>
    </CategProvider>
   </ProdProvider>
  </StrictMode>,
)