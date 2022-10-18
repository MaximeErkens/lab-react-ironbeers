import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import axios from "axios";

function SingleBeer() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { beerId } = useParams();

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

  return (
    <div>
      <Header />
      <h1>Beer details</h1>

      {data
        .filter((singleBeer) => {
          return singleBeer._id === beerId;
        })
        .map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt="beer" />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
          );
        })}
    </div>
  );
}

export default SingleBeer;
