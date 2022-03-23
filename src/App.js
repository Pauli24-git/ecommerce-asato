import './App.css';
import Navbar from "./Navbar";
import {Item} from "./componentes/ItemListContainer";


const App = () => {
  const categorias = [{link: "Remeras", tag:"#"}, {link: "Buzos", tag:"#"}, {link: "Shorts", tag:"#"}]
  const bienvenida = "Bienvenido a la tienda online, compras rápidas y seguras"

  return (
    <>
    <Navbar links={categorias}></Navbar>
    <h1><Item bienvenida={bienvenida} /></h1>
    </>
  );
}

export default App;
