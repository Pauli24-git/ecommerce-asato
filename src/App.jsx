import "./App.css";
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PageNotFound} from "./componentes/PageNotFound"
import CustomProvider from "./componentes/CartContext"
import { Cart } from "./componentes/Cart";
import Carousel from "react-elastic-carousel";
import Card from "./componentes/Card"


const App = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  
  return (
    <BrowserRouter>
    <CustomProvider>
      <NavBar />
      <Carousel breakPoints={breakPoints}>
        <Card cardImage="https://imgur.com/N8x2GBm.jpg"/>
        <Card cardImage="https://imgur.com/GzxyNoK.jpg"/>
        <Card cardImage="https://imgur.com/uM38EUZ.jpg"/>
        <Card cardImage="https://imgur.com/ypflWTr.jpg"/>
        <Card cardImage="https://imgur.com/3HWgSsR.jpg" />
        <Card cardImage="https://imgur.com/arp2G5m.jpg"/>
        <Card cardImage="https://imgur.com/WgFAzF2.jpg"/>
      </Carousel>
      <Routes>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="categories/:categoryId" element={<ItemListContainer />}/>
        <Route path="product/:productId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="cart" element={<Cart />}/>
      </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
