import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

function Login() {
  const navigate = useNavigate();
  const [phone, setphone] = useState("");
  const dial_code = "+91";

  const handleChange = (e) => {
    setphone(e.target.value);
  };

  const onSubmit = () => {
    if (!phone) return;
    login(phone, dial_code).then((res) => {
        console.log(res)
      if (res?.data?.status_code === 200) {
        navigate(`/otpVerify?phone=${phone}&&dial_code=${dial_code}`);
      }
    }).catch(function (error) {
    console.log(error);
  });
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <h2 className="title">Login</h2>
        <p className="sub-title">Welcome back!</p>
        <p className="sub-title">Please login to continue</p>
        <label htmlFor="phone" className="label-title">
          Mobile Number
        </label>
        <br />
        <div className="form-group mt-2 d-inline-block">
          <span className="border-end country-code px-2">+91</span>
          <input
            type="text"
            className="form-control"
            id="mobile-number"
            aria-describedby="mobileHelp"
            onChange={handleChange}
            value={phone}
            placeholder="Enter Mobile Number"
            required
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            onSubmit();
          }}
        >
          Request OTP
        </button>
      </div>
    </div>
  );
}

export default Login;
