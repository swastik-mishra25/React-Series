import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  // When used as a variable

  // let btnName = "Login";

  // When used as a state variable

  const [btnNameReact, setBtnNameReact] = useState("Login");

  // It is basically a proof to showcase that the react will re-render the whole header component
  console.log("Header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

          {/* When used as a variable */}

          {/* <button
            className="login"
            onClick={() => {
              btnName = "Logout";
              console.log(btnName);
            }}
          > */}

          {/* {btnName} */}

          {/* When used as a state variable */}

          {/* Here only one thing is happening Login -> Logout */}

          {/* <button
            className="login"
            onClick={() => {
              setBtnNameReact("Logout");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button> */}

          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
