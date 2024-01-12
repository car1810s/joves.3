import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App(){
  return(
     <BrowserRouter>
     
       <Routes>
        
        
          
          <Route path="/" element={<ItemListContainer/>}>
           <Route path="productos" element={<ItemListContainer/>}/>
           <Route path="productos/:productoId" element={<ItemDetailContainer/>}/>
           <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Route>
          
       </Routes>
    
     </BrowserRouter>
  )
}

export default App;