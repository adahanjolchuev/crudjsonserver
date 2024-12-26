import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const API = "http://localhost:3000/data";

  async function getData() {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function deleteCat(id) {
    try {
      await axios.delete(`${API}/${id}`);
      setData(data.filter((el) => el.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="blocks">
          {data.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                Здесь Пусто
              </h1>
            </div>
          ) : (
            data.map((el, index) => (
              <div className="block" key={index}>
                <img className="imgBlock" src={el.url} alt="" />
                <div className="texts">
                  <h2 className="name">{el.name}</h2>
                  <div className="colorYears">
                    <h2 className="color">{el.color}</h2>
                    <h2 className="age">{el.age} years</h2>
                  </div>
                  <h1 className="price">{el.price}$</h1>
                </div>
                <button onClick={() => deleteCat(el.id)}>DELETE CAT</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
