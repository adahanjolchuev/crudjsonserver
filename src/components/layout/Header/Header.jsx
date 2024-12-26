import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [cats, setCats] = useState([]);
  const API = 'http://localhost:3000/data';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API);
        setCats(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="header1">
          <img src={logo} alt="Logo" />
          <nav>
            <Link to={"/"}>Main</Link>
            <Link to={"admin"}>Admin</Link>
          </nav>
          <span>
            <h3>+544 3490 00000</h3>
            <h4>Звони скорее!</h4>
          </span>
        </div>
        <h1 className="lengthCat">Найдено {cats.length} котов</h1> 
      </div>
    </div>
  );
};

export default Header;
