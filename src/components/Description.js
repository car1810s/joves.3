

function Description (props){
    return(
        <div className="cardDescription">
            <h3 className="title">
              {props.title}
            </h3>
            <div className="description">
               <span className="descriptionTitle">Descripcion</span>
                  <p className="texto">
                    {props.description}
                  </p>
            </div>
               <span className="cantidad2">
                 cantidad: {props.stock}
               </span>
               <span className="precio">
                  ${props.price}
               </span>
            
         
        </div>
    )
}

export default Description;