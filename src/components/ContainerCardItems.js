import CardItem from "./CardItem";
import Fetch from "../utils/promesa";
import items from "../utils/data";
import "../styles/containerItems.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContainerCardItems() {
 
 
  const [datos, setDatos] = useState([]);
  let {idCategory}= useParams();
  
  useEffect(() => {
   if(idCategory == undefined){
    Fetch(items, 2000)
    .then((resp) => setDatos(resp))
    .catch((error) => console.log(error));
   }else{
    Fetch(items.filter(filter=> filter.category == idCategory), 2000)
    .then((resp) => setDatos(resp))
    .catch((error) => console.log(error));
   }
  }, [idCategory]);

  return (
    <div className="containerCartItems">
      { datos.map((item) => (
        <CardItem
          key={item.id}
          imagen={item.image}
          title={item.title}
          cantidad={item.stock}
          precio={item.price}
        />
      ))}
    </div>
  );
}

export default ContainerCardItems;