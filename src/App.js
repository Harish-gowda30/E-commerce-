
import './App.css';
// import React, { useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop';
import LoginSignup from './Pages/login_signup';
import Shopcategory from './Pages/shopcategory';
import Product from './Pages/product';
import Cart from './Pages/cart';
import Footer from './Components/Footer/footer';
import mobile_banner from './Components/Assets/mobile_banner.png'
import laptop_banner from './Components/Assets/laptop_banner.png'
import tv_banner from './Components/Assets/tv_banner.png'
// import ShopcontextProvider from './Context/shopcontext';
import Payment from './Components/Payment/payment';
import Address from './Components/Address/address';

let App=()=> {
  // const myRef = useRef(null);
  return (<> 
    
    <div>
    <BrowserRouter> 
     <Navbar/>
     <Routes>
      <Route path='/'element={<Shop/>}/>
      <Route path='/mobile'element={<Shopcategory banner={mobile_banner} category="mobile"/>}/>
      <Route path='/laptop'element={<Shopcategory banner={laptop_banner} category="laptop"/>}/>
      <Route path='/tv'element={<Shopcategory banner={tv_banner} category="tv"/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     <Route path='/login'element={<LoginSignup/>}/>
     <Route path='/new_image'element={<Payment />}/>
     <Route path='/address'element={<Address />}/>
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
