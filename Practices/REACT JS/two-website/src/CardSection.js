import React from "react";
import Card from "./Card";

const CardSection = () => {
    return(
        <section class="contact bg-success ">
      <div class="container ">
        <h2 class="text-white">
          We love new friends!
        </h2>
        <div class="row">
          <div class="col-4">
            <Card title="Basketball" buttonText="Let's Play" />
          </div>
          <div class="col-4">
            <Card title="Tennis" buttonText="Play Here" />
          </div>
          <div class="col-4">
            <Card title="Footbal" buttonText="Play Here" />
          </div>
        </div>
      </div>
    </section>
    )
};

export default CardSection;