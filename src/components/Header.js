import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const authentication = () => {
  return true;
};

const Title = () => {
  return (
    <div className="flex items-center">
      <a href="/">
        <img
          src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62305fb67598423e883cc643/0x0.png"
          alt="logo"
          className="w-28 ml-9"
        /> 
      </a>

      <h1 id="titleId" key="titleKey" className="text-3xl font-bold mx-3">
        Foods
      </h1>
    </div>
  );
};

const NavBar = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex items-center">
      <ul className="flex">
        <Link to="/">
          <li className="p-5">Home</li>
        </Link>
        <Link to="/about" >
          <li className="p-5">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="p-5">Contact Us</li>
        </Link>
        <Link to="/cart">
          <li className="p-5">Cart</li>
        </Link>
        <Link to="/instamart">
          <li className="p-5">Instamart</li>
        </Link>
      </ul>

      {IsLoggedIn ? (
        <button className="bg-purple-300 px-3 py-1 rounded-lg"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button className="bg-purple-300 px-3 py-1 rounded-lg"
          onClick={() => {  
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      <h1>{isOnline? "🟢" : "🔴"}</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between m-3 bg-purple-100 rounded-2xl">
      <Title />
      <NavBar />
    </div>
  );
};

export default Header;
