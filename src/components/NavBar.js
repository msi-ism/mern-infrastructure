import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const {user} = props
    return(
    <nav>
        <Link to='/orders'>Order History</Link> {" "}|{" "}
        <Link to='/orders/new'>New Order</Link>
        {user ? <span>  Welcome, {user.name}</span> : ''}
    </nav>
    )
}

export default NavBar