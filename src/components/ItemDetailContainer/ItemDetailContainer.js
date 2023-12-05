import { useParams, Link } from "react-router-dom";
import listaProductos from "../../asyncMock";



function ItemDetailContainer(){

    console.log(useParams());

    const {productoId}= useParams();

    const producto = listaProductos.find((producto)=>producto.id ==productoId)

    const {image, title, price,description} = producto; 


    return(
        
        <div className="galeria">
            <h2>{title}</h2>
            <img src={image}/>
            <h4>{description}</h4>
            <h2>{price}</h2>
            <Link to="/productos">Volver</Link>

        </div>
    )
}

export default ItemDetailContainer;
