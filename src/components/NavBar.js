import Brand from "./Brand";
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer";


const NavBar =()=>{
    return(
        <header>
            <div className="containerBrand">
               <Brand/>
            </div>
            <nav className="containerItemList">
               <ItemListContainer
                 item1= "Alfajores"
                 item2="Chocolates"
                 item3="Barritas"
                 item4="Jugos"
               />
               
            </nav>
            <div className="containerCart">
               <CartWidget/>
            </div>
        </header>
    )
};

export default NavBar;