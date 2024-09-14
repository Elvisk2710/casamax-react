import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logoblack.png";
import Dropdown from "../dropDown/DropDown";
import CustomButton from "../commonElements/button/CustomButton";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropDownList = ["As Landlord", "As Agent"];

  return (
    <nav className="navbar">
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <ul className="navbar-options">
          <li>
            <a href="/manage">Manage-Rental</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
        </ul>
        <div className="navbar-logo">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>
        <div className="right-menu">
          <Dropdown options={dropDownList} defaultValue={"Advertise"}/>
          <CustomButton title={"Sign In"} />
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <h2>CasaMax</h2>
        <div className="icon">
          <IoMenu size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
