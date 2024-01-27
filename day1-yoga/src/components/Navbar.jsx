import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
// import Face6Icon from '@mui/icons-material/Face6';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
const logoUrl="https://t3.ftcdn.net/jpg/03/89/30/64/360_F_389306425_zAsiEURL3pnvNC3gPotVFrz5whXzMsiB.jpg";
function Navbar(){
    return(
        <div id="header">
          <div id="siteinfo"> 
          </div>      
        <div id="navbar">
            <div id="icon">
            <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>ZenFlowYoga</h1>
                <img src={logoUrl} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%", marginLeft: "10px" }}/>
            </div>
            <Link className="navlink" to="/">Home
            <HomeIcon />
            </Link>
            <Link className="navlink" to="/about">About
            <InfoIcon/>
            </Link>
            <Link className="navlink" to="/classes">Classes
            <CallIcon/>
            </Link>
            {/* <Link className="navlink" to="/login"> 
             <AccountCircleIcon></AccountCircleIcon>
            </Link> */}
            <Link className="loginlink" to="login">
            Login
                <ListAltIcon />
            </Link>
        </div>
        </div>
    )
}
export default Navbar;