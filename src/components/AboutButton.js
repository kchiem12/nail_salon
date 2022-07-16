import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AboutButton = () => {
  return (
    <Link to={"/about"}>
      <Button variant="text" className="button">
        About
      </Button>
    </Link>
  );
};

export default AboutButton;
