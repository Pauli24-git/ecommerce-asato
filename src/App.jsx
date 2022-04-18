import "./App.css";
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PageNotFound} from "./componentes/PageNotFound"
import CustomProvider from "./componentes/CartContext"
import { Cart } from "./componentes/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <CustomProvider>
      <NavBar />
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
