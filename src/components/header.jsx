import React from "react";
import { Link } from "react-router-dom";
import APP_PATHS from "../app-paths";

function Header() {
  return (
    <nav>
      <Link to={APP_PATHS.HOME}>Home</Link>
    </nav>
  );
}

export default Header;
