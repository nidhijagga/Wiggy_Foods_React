import { useState } from "react";

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
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
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
