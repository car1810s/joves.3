import CardItem from "./CardItem";
import Fetch from "../utils/promesa";
import items from "../utils/data";
import "../styles/containerItems.css"
import { useState, useEffect } from "react";

function ContainerCardItems() {
 
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    
    Fetch(items, 3000)
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, []);

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