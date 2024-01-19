
import brand from "../img/brand.svg";
import { Link } from "react-router-dom";


const Brand = ()=>{
    return(
        <Link to="/">
          <img src={brand} alt="joves kiosco" title="joves kiosco"/>
        </Link>
        
         )
}

export default Brand;
