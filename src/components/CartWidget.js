import cart from "../img/cart.svg"

function CartWidget(){
   
    return(
        <div className="containerLength">
          <img src={cart} alt="carrito" title="carrito"></img>
          <span className="cantidadCart">
            1
          </span>
        </div>
        
    )
}

export default CartWidget;