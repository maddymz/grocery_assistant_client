import React, { useState } from "react";
import cloudLogo from "../assets/supermarket-banner.jpeg";
import "./Home.css";
import Product from "./Product";
import { useEffect } from "react";
import {GPT_JAM_BACKEND_URL, ITEMS_PATH,GET_TOP_PATH } from "../constants/UrlValues"

function Home() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          GPT_JAM_BACKEND_URL+ITEMS_PATH+GET_TOP_PATH
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
        <img className="home__image" src={cloudLogo} alt=""></img>
        </div>
        <div className="home__row">
          {(() => {
            return products
              .slice(0,3)
              .map((product, idx) => (
                <Product
                  key={idx}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              ));
          })()}
        </div>
        <div className="home__row">
        {(() => {
            return products
              .slice(3, 7)
              .map((product, idx) => (
                <Product
                  key={idx}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              ));
          })()}
        </div>
        <div className="home__row">
        {(() => {
            return products
              .slice(7, 9)
              .map((product, idx) => (
                <Product
                  key={idx}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              ));
          })()}
        </div>
        <div className="home__row">
        {(() => {
            return products
              .slice(9,12)
              .map((product, idx) => (
                <Product
                  key={idx}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              ));
          })()}
        </div>
      </div>
    </div>
  );
}

export default Home;
