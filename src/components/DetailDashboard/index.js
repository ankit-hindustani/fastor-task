import React from 'react'
import { Rating } from 'react-simple-star-rating'
import Slider from 'react-slick';


function DetailDashboard() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="detail-container">
        <Slider {...settings}>
          <div className="detail-img-container">
            <img
              className="detail-img"
              src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
              alt=""
            />
            <div className="detail-watermark">
              <img
                className=""
                src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="detail-img-container">
            <img
              className="detail-img"
              src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
              alt=""
            />
            <div className="detail-watermark">
              <img
                className=""
                src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="detail-img-container">
            <img
              className="detail-img"
              src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
              alt=""
            />
            <div className="detail-watermark">
              <img
                className=""
                src="https://res.cloudinary.com/myedugatetech/image/upload/v1646746577/india/stores/4/menu/kihxojj5cryp6b5dlriw.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>

        <div className="detail-title">
          <h2 className="otp-title">Res Name</h2>
          <h2 className="otp-title">$200</h2>
        </div>
        <div className="detail-cuisine-name">cuisine name, cuisine name 2</div>
        <div className="res-weight">232g</div>
        <div className="detail-rating">
          <Rating size={24} initialValue={3} readonly="true" />
        </div>
      </div>
    </>
  );
}

export default DetailDashboard