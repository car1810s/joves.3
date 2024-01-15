import cart from "../img/cart.svg"

function ButtonAddCart(){
    return(
        <button id="AddCart">
            <img src={cart} alt="carrito" title="carrito"/>
        </button>
    )
}

export default ButtonAddCart;