import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Button from '@mui/material/Button';
import MicExternalOnRounded from '@mui/icons-material/MicExternalOnRounded';


function Navbar()
{

    return <nav className="nav">
        <Link to="/" id="site-title">Studio Andromeda</Link>
            <ul>
                <CustomLink to="/about">About us</CustomLink>
                <li className ="dropdown">
                    Project A.E.G.I.S
                    <ul  className="dropdown-content" >
                    <CustomLink to="/antony">Antony</CustomLink>
                    <CustomLink to="/Emanuel">Emanuel</CustomLink>
                    <CustomLink to="/Gaius">Gaius</CustomLink>
                    <CustomLink to="/Ireen">Ireen</CustomLink>
                    <CustomLink to="/Sidra">Sidra</CustomLink>
                    </ul>
                </li>
            </ul>
      
        <div id="navbar-bottom-button">
            <Button startIcon={<MicExternalOnRounded />} variant="contained">Audition now !</Button>
        </div>
    </nav>
}

function CustomLink({to, children, ...props})
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
   
    return (
        <li className ={isActive ? "active" : ""} >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
export default Navbar
