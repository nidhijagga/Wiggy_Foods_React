import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const authentication = () => {
  return true;
};

const Title = () => {
  return (
    <div className="title">
      <a href="/">
        <img
          src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62305fb67598423e883cc643/0x0.png"
          alt="logo"
          className="logo"
        />
      </a>

      <h1 id="titleId" key="titleKey">
        Foods
      </h1>
    </div>
  );
};

const NavBar = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="nav-items">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>

      {IsLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
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
    <div className="header">
      <Title />
      <NavBar />
    </div>
  );
};

export default Header;
