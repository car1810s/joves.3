import listaProductos from "../../asyncMock"

import {Link} from "react-router-dom"

function ItemListContainer(){
  console.log(listaProductos)

    return(
      <div >
          <h2>Productos</h2>
          <div className="galeria">
            {listaProductos.map((producto)=>{
              return(
                <article>
                  <h4>{producto.title}</h4>
                  <img src={producto.image} alt={producto.title}/>
                  <Link to={`/productos/${producto.id}`}>Detalle</Link>
                </article>
              )
            })}
          </div>
      </div>
  
    )
  
  }
  export default ItemListContainer;