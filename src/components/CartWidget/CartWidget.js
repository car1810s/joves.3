

import cart from './assets/cart.svg'
import "../NavBar/NavBar.css"

const CartWidget = () => {
     return(
        <div> 
            <img src={cart} alt="cart-wdiget"/>
        </div>
     )
}

export default CartWidget