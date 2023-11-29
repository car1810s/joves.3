import { BrowserRouter,Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";




function App(){
    
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<Productos/>}/>
            <Route path="*" element={<Error/>}/>

          </Routes>

        </BrowserRouter>
    )
    
   
}

export default App;