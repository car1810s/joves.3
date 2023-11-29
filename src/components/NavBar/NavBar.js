import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h3>Jove's</h3>
            <div>
                <button>Alfajores</button>
                <button>Chocolates</button>
                <button>Barritas</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar 