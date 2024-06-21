import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const API_URI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const Main = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URI);
        // console.log(response.data.meals);

        setItems(response.data.meals);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="items-container">
      {items.map(({ strMealThumb, strMeal, idMeal }) => (
        <section className="card">
          <img src={strMealThumb} alt={strMealThumb} />
          <section className="content ">
            <ul>
              <li>{idMeal}</li>
            </ul>
            <p>{strMeal}</p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default Main;
