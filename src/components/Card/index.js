import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Card({
  restaurant_name,
  cuisines,
  restaurant_avg_rating,
  images,
  avg_cost_for_two,
}) {
  return (
    <div className="card">
      <div className="res-img-container">
        <img
          className="res-img"
          src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
          alt="RestaurantImage"
        />
      </div>
      <div className="res-name">{restaurant_name}</div>
      <div className="res-cuisine-name">
        {cuisines.map((cuisine) => `${cuisine.cuisine_name} `)}
      </div>
      <div className="res-rating">
        <Rating size={16} initialValue={restaurant_avg_rating} readonly="true" />
      </div>
      <div className="res-price">${avg_cost_for_two}</div>
    </div>
  );
}

export default Card;
