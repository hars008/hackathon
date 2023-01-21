import React from "react";
import CardBoot from "../items/CardBoot";
import "./moviespage.css"
import NewCard from "../items/NewCard";
import { useState } from "react";
function Movies() {
  const movies = [
    {
      cover: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
      title: "The Shawshank Redemption",
      releaseYear: "1994",
    }];
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      <h1>Movies</h1>

      <h1>hello</h1>

      <div className="row">
        <CardBoot
          id="1"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <CardBoot
          id="2"
          title="The Godfather"
          description="The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <CardBoot
          id="3"
          title="The Godfather: Part II"
          description="The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <CardBoot
          id="3"
          title="The Godfather: Part II"
          description="The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <CardBoot
          id="4"
          title="The Dark Knight"
          description="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
      </div>
      
     
    </>
  );
}
export default Movies;
