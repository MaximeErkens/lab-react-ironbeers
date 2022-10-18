import React from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../routes";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <article>
      {ROUTES.filter((element) => {
        return location.pathname !== element.path;
      }).map((element) => {
        return (
          <div>
            <Link key={element.path + element.name} to={element.path}>
              {element.name}
            </Link>
          </div>
        );
      })}
    </article>
  );
}

export default Home;
