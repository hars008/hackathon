import React from "react";
import CardBoot from "../items/CardBoot";
import "./moviespage.css"
import NewCard from "../items/NewCard";
import { useState,useEffect } from "react";

function Movies() {

  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("http://localhost:80/api/movie/get")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShop(data);
      });
  },[])
  console.log(shop);
  const movies = [
    {
      cover: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
      title: "The Shawshank Redemption",
      releaseYear: "1994",
    }];
  return (
    <>
      <h1>Movies</h1>

      <h1>hello</h1>

      <div className="row">
        {shop.map((item)=>{
          return(
            <CardBoot
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.description}
              img={item.image}
              genre={item.genre}
              rating={item.rating}
            />
          )
        })}
        
      </div>
      
     
    </>
  );
}
export default Movies;
