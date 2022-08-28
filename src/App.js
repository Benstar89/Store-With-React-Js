import React from 'react';

//SPA-Packages
import { Route , Routes , Navigate } from 'react-router-dom';

//Context
import ProductContextProvider from './Context/ProductContextProvider';
import CardContextProvider from './Context/CardContextProvider';
import Navbar from './Shared/Navbar';

// Components
import Store from './Components/Store';
import ProductDetailsPage from "./Shared/ProductDetailsPage";
import ShopCart from './Components/ShopCart';

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element = {<ProductDetailsPage />}/>
        <Route path="/products" element = {<Store />} />
        <Route path="/cart" element = {<ShopCart />}/>
        <Route path="/*" element = {<Navigate to = "/products"/>}/>
      </Routes>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;