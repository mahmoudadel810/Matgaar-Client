import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './componants/Home/Home';
import NotFound from './componants/Notfound/NotFound';
import Shop from './componants/shop/shop';




function App() {
 


  return (
     <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/shop"        element={<Shop />} />
        <Route path="*"        element={<NotFound />} />
      </Routes>
  )
}

export default App
