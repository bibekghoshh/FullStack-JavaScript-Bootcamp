import React from "react";

const Card = ({title="Bootball",buttonText="Play Here"}) => {
    return (
        <div class="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success">{buttonText}</a>
              </div>
            </div>
    )
};

export default Card;