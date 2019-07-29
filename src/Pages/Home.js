import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <br />
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Home;
