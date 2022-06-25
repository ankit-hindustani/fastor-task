import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function Card({
  restaurant_name,
  cuisines,
  restaurant_avg_rating,
  images,
  avg_cost_for_two,
  res
}) {
const navigate = useNavigate();
  return (
    <div className="card" onClick={()=>{navigate(`/detail-dashboard?restaurant_id=${res.restaurant_id}`);}}>
      <div className="res-img-container">
        <img
          className="res-img"
          src={images?.[0]?.["url"]}
          alt="RestaurantImage"
        />
      </div>
      <div className="res-name">{restaurant_name}</div>
      <div className="res-cuisine-name">
        {cuisines.map((cuisine) =>`${cuisine.cuisine_name} `)}
      </div>
      <div className="res-rating">
        <Rating size={16} initialValue={restaurant_avg_rating} readonly="true" />
      </div>
      <div className="res-price">${avg_cost_for_two}</div>
    </div>
  );
}

export default Card;
