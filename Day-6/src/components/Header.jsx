import React from "react";
import logo from "../assets/logo--dark.png";
import menu from "../assets/menu--dark.png";
import { Link } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import InfoIcon from '@mui/icons-material/Info';
// import CallIcon from '@mui/icons-material/Call';
// import PersonIcon from '@mui/icons-material/Person';
export default function Header() {
  return (
    <div className="absolute top-8 w-11/12 md:w-10/12 left-1/2 -translate-x-1/2 flex justify-between">
      <Link to={"/"} style={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G9p0hcB-EbujOyx5vO-2QDT02scqzQ51XQ&usqp=CAU" style={{height:'50px'}}></img>
      <b><h1 style={{fontFamily:'cursive',height:'20px'}}>ZenFlowYoga</h1></b>
      </Link>

      <div className="hidden md:block">
        <div className="flex" style={{backgroundColor:'',height:'40px'}}>
          <Link to={"/"}>
            <div className=" mr-7 relative group" >
              Home
              {/* <HomeIcon /> */}
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/personal-training"}>
            <div className=" mr-7 relative group">
              Personal Training
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/pricing"}>
            <div className=" mr-7 relative group">
              Pricing
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/blog"}>
            <div className=" mr-7 relative group">
              Blog
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/contact"} className="mr-7">
            <div className="relative group">
              Contact
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/login"} className="mr-7">
            <div className="relative group">
              Login
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/profile"}>
            <div className="relative group">
              Profile
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
      <img src={menu} alt="" className="w-7 md:hidden" />
    </div>
  );
}
