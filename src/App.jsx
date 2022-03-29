import './App.css';
import Navbar from "./Navbar";
import { Item } from "./componentes/ItemListContainer";
import ItemCount from './componentes/ItemCount';

const App = () => {
  return (
    <>
      <Navbar/>
      <Item/>
      <ItemCount stock={10} inicial={1}/>
    </>
  );
}

export default App;
