
import HeaderWithNavbar from "./components/HeaderWithNavbar";
import React from "react";
import ProductGallery from "./components/ProductGallery";
import Footer from './components/Footer';

import './App.css';



function App(){
  return ( 
    <div>
      <HeaderWithNavbar />
      <ProductGallery />
      <Footer />
    </div>
  );
  }
  

export default App;