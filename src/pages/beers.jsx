import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

function Beers() {
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
        console.log("err:", err);
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

  return (
    <div>
      <Header />
      <h1>Beers</h1>
      <div>
        {data.map((beer) => {
          return (
            <article key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt="beer" />
              </Link>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Beers;
