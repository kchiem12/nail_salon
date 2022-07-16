import React from "react";

const GalleryCardInfo = (props) => {
  return (
      <div className={`${props.hidden ? "cardinfo-hidden" : "cardinfo cardinfo-transition"}`}>
        <h5>{props.header}</h5>
        <p>{props.content}</p>
      </div>
  );
};

export default GalleryCardInfo;
