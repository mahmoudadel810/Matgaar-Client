import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './componants/Home/Home';
import NotFound from './componants/Notfound/NotFound';
import Shop from './componants/shop/shop';
import Categories from './componants/categories/categories';
import Cart from './Cart/cart';
import Brands from './componants/Brands/Brands';
import Login from './componants/Login/Login';
import Register from './componants/Register/Register';




function App() {
 


  return (
     <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/shop"        element={<Shop />} />
        <Route path="/categories"        element={<Categories />} />
        <Route path="/categories/:id"        element={<Categories />} />
        <Route path="/cart"        element={<Cart />} />
        <Route path="/brands"        element={<Brands />} />
        <Route path="/login"        element={<Login />} />
        <Route path="/register"        element={<Register />} />
        

        <Route path="*"        element={<NotFound />} />
      </Routes>
  )
}

export default App
