import Image from "./Image";
import Description from "./Description";
import ButtonAddCart from "./ButtonAddCart";
import ButtonDetails from "./ButtonDetails";



import "../styles/cartItem.css"

function CardItem(props){
    return(
        <div className="cardItem">
               <Image imagen={props.imagen} />
               <Description title={props.title}
                            cantidad={props.stock}
                            precio={props.price}
                             
                             />
               <div className="buttons">
                 <ButtonDetails/>
                 <ButtonAddCart/>
               </div>
        </div>
    )
}

export default CardItem;