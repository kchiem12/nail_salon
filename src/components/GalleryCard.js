import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import GalleryCardInfo from "./GalleryCardInfo";

const GalleryCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  //if it is not a string, use curly braces
  return (
    <CSSTransition
      in={clicked}
      appear={true}
      timeout={500}
      classNames="gall-card-transition"
      onEntered={() => setIsHidden(false)}
      onExiting={() => setIsHidden(true)}
    >
      <div
        onClick={() => {
          setClicked(!clicked);
          console.log("This was clicked");
        }}
        className={`gall-card ${
          clicked ? "gall-card-transition-enter-active permahover" : "hovered"
        }`}
      >
        <CSSTransition
          in={!isHidden}
          classNames="cardinfo-transition"
          timeout={300}
        >
          <GalleryCardInfo
            hidden={isHidden}
            header="what's good"
            content="hi"
          />
        </CSSTransition>

        <img src={props.image} alt="" className="nail-img" />

        <div className="card-title">
          <p>{props.title}</p>
        </div>

        {/* Add animation to card's extra info */}
        {/* <CSSTransition
          in={clicked}
          timeout={500}
          className="card-info"
          unmountOnExit
          onEnter={(e) => console.log("hi!")}
        >
          <div className="extra-info">
            <h2 className="name">titleofnails</h2>
            <p className="description"></p>
          </div>
        </CSSTransition> */}
      </div>
    </CSSTransition>
  );
};

export default GalleryCard;
