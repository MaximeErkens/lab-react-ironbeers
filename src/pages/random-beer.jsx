import React, { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";

function RandomBeer() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Getting data...</div>;
  }

  if (isError) {
    return <div>Oops failing to load</div>;
  }

  const generateRandomBeer = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setIndex(randomIndex);
  };

  return (
    <div>
      <Header />
      <button onClick={generateRandomBeer}>Random Beer</button>
      <h1>Random Beer</h1>
      <img src={data[index].image_url} alt="beer" />
      <p>{data[index].name}</p>
      <p>{data[index].tagline}</p>
      <p>{data[index].first_brewed}</p>
      <p>{data[index].attenuation_level}</p>
      <p>{data[index].description}</p>
      <p>{data[index].contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
