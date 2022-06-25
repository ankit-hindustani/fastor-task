import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import Slider from 'react-slick';
import Fastor_Logo from "./../../assets/Fastor_Logo.png";





function DetailDashboard({result}) {
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
    const queryParams = new URLSearchParams(window.location.search);
    const restaurant_id = queryParams.get("restaurant_id");
    let filterResult = result && result.filter((res)=>res.restaurant_id===restaurant_id)
    setsingleResult(filterResult[0])
  }, [result])
  

  return (
    <>
      <div className="detail-container">
        <div className='detail-header'>
          <div className="d-flex justify-content-between">
            <h2 className="m-3">
              <i
                className="fa fa-angle-left text-light"
                onClick={() => {
                  navigate("/dashboard");
                }}
              ></i>
            </h2>
            <h2 className="m-3 float-right">
              <i className="fa fa-heart text-light"></i>
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