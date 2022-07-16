import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const GalleryButton = () => {
  return (
    <Link className="links-button" to={"/gallery"}>
      <Button variant="text" className="button">
        Gallery
      </Button>
    </Link>
  );
};

export default GalleryButton;
