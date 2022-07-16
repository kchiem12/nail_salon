import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ServicesButton = () => {
  return (
    <Link to={"/Services"}>
      <Button variant="text" className="button">
        Services
      </Button>
    </Link>
  );
};

export default ServicesButton;
