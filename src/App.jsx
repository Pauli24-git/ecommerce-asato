import "./App.css";
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PageNotFound} from "./componentes/PageNotFound"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="categories/:categoryId" element={<ItemListContainer />}/>
        <Route path="product/:productId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;
