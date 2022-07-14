import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const GalleryCard = (props) => {
  const [clicked, setClicked] = useState(false);

  //if it is not a string, use curly braces
  return (
        <div
          onClick={() => {
            setClicked(!clicked);
            console.log("This was clicked");
          }} className='gall-card'
        >

          <img src={props.image} alt="" className="nail-img"/>

          <p>{props.title}</p>

          {/* Add animation to card's extra info */}
          <CSSTransition in={clicked} timeout={500} className="card-info" unmountOnExit>
            <div className="extra-info">
                <h2 className="name">titleofnails</h2>
                <p className="description"></p>
            </div>
          </CSSTransition>

        </div>
  );
};

export default GalleryCard;
