import { Link, useLocation } from "react-router-dom";
import CurrentDay from "./CurrentDay";

const Footer = () => {
    const location = useLocation();
    return (
        <footer className="footer">
            <CurrentDay />
            {location.pathname === '/addDay' ?
                <Link to='/' >Back to main</Link> :
                <Link to='/addDay' >Add work day</Link>
            }
            
        </footer>
    )
}

export default Footer;