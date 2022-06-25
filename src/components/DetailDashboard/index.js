import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import Slider from 'react-slick';
import { fetchRestaurant } from '../../api';
import Fastor_Logo from "./../../assets/Fastor_Logo.png";
import { RWebShare } from "react-web-share";


function DetailDashboard({result}) {
  const [loading, setloading] = useState(false);
  const [heartToggle, setheartToggle] = useState(true);
  const navigate = useNavigate();
  const [singleResult, setsingleResult] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
   const token = localStorage.getItem("token");
   const queryParams = new URLSearchParams(window.location.search);
   const restaurant_id = queryParams.get("restaurant_id");
   if (result) {
     let filterResult =
       result && result.filter((res) => res.restaurant_id === restaurant_id);
     setsingleResult(filterResult[0]);
   } else if (token) {
      setloading(true);
     fetchRestaurant(token)
       .then((res) => {
         if (res.status === 200) {
           let filterResult = res?.data.filter(
             (res) => res.restaurant_id === restaurant_id
           );
           setsingleResult(filterResult[0]);
         }
       })
       .finally(() => {
         setloading(false);
       });
   } else {
     navigate("/");
   }
  }, [result])


  return (
    <>
      <div className="detail-container">
        <div className="detail-header">
          {loading && (
            <span>
              <span
                className="spinner-border mr-1"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="">Loading...</span>
            </span>
          )}
          <div className="d-flex justify-content-between">
            <h2 className="m-2">
              <i
                className="fa fa-angle-left text-light font-weight-bold"
                onClick={() => {
                  navigate("/dashboard");
                }}
              ></i>
            </h2>
            <h2 className="m-2">
              <i
                onClick={() => {
                  setheartToggle(!heartToggle);
                }}
                className={`fa fa-heart ${
                  heartToggle ? "text-light" : "text-danger"
                }`}
              ></i>
            </h2>
          </div>
        </div>
        <Slider {...settings}>
          {singleResult?.images.map((imgs) => {
            return (
              <div className="detail-img-container">
                <img className="detail-img" src={imgs?.url} alt="imgages" />

                <div className="detail-watermark">
                  <img className="" src={Fastor_Logo} alt="" />
                </div>
                <div className="share-container">
                  <RWebShare
                    data={{
                      text: `${singleResult?.restaurant_name}`,
                      url: `${window.location.href}`,
                      title: `${singleResult?.restaurant_name}`,
                    }}
                    onClick={() => console.info("share successful!")}
                  >
                    <button>
                      <i
                        className="fa fa-share text-info"
                        style={{ "font-size": "1.3rem" }}
                      ></i>
                    </button>
                  </RWebShare>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="detail-title">
          <h2 className="otp-title">{singleResult?.restaurant_name}</h2>
          <h2 className="otp-title">${singleResult?.avg_cost_for_two}</h2>
        </div>
        <div className="detail-cuisine-name">
          {singleResult?.cuisines.map((res) => `${res.cuisine_name} `)}
        </div>
        <div className="res-weight">{"395g"}</div>
        <div className="detail-rating">
          <Rating
            size={24}
            initialValue={singleResult?.rating?.restaurant_avg_rating}
            readonly="true"
          />
        </div>
      </div>
    </>
  );
}

export default DetailDashboard