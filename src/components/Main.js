import{Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Carrito from "./Carrito"
/*
/:landing page
/ropa
*/
const Main = () => {
  return (
    <main>
  
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/productos/:nombrecategoria" element={<ItemListContainer/>}/> 
    <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
    {/* <Route path="/carrito" element={}/> */}
    <Route path="/Carrito" element={<Carrito/>}/>
    </Routes>
    </main>
  )
}

export default Main