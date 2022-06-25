import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

function Login() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [errorMessage, seterrorMessage] = useState();
  const [phone, setphone] = useState("");
  const dial_code = "+91";

  const handleChange = (e) => {
    setphone(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setloading(true);
    login(phone, dial_code).then((res) => {
      if (res?.data?.status_code === 200) {
        navigate(`/otpVerify?phone=${phone}&&dial_code=${dial_code}`);
      }
      if (res?.data?.status_code === 400) {
        seterrorMessage(res?.data?.error_message);
      }
    }).catch(function (error) {
    console.log(error);
  }).finally(()=>{
    setloading(false);
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
        <form onSubmit={onSubmit}>
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
            {errorMessage && (
              <label className="text-sm text-danger">{errorMessage}</label>
            )}
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            {loading ? (
              <span>
                <span
                  className="spinner-border spinner-border-sm mr-1"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="">Requesting...</span>
              </span>
            ) : (
              "Request OTP"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
