import { Link } from "react-router-dom";

function ItemListContainer (props){
    return(
        <ul>
            <li>
                <Link to="category/Alfajores">
                  {props.item1}
                </Link>
            </li>
            <li>
                <Link to="category/Chocolates">
                  {props.item2}
                </Link>
            </li>
            <li>
                <Link to="category/Barritas">
                  {props.item3}
                </Link>
            </li>
            <li>
                <Link to="category/Jugos">
                  {props.item4}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;