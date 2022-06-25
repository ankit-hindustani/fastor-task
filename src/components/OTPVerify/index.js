import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { verifyOtp } from '../../api';

function OTPVerify() {
  const navigate = useNavigate();
  const refs = useRef([]);
  const [loading, setloading] = useState(false);
  const [errorMessage, seterrorMessage] = useState();
  const [otpValue, setotpValue] = useState({"otp-0":"","otp-1":"","otp-2":"","otp-3":"","otp-4":"","otp-5":""});

  const handleOtpChange = (e) => {
    if (e.target.value.length >= 1) {
      const refIndex = parseInt(e.target.name.split("-")[1]);
      if(refIndex<5) refs.current[refIndex+1].focus();
      setotpValue({...otpValue,[e.target.name]:e.target.value});
    }
  };
  const queryParams = new URLSearchParams(window.location.search);


  const handleSubmit = () => {
    const otp = Object.values(otpValue).join("");
    const queryParams = new URLSearchParams(window.location.search);
    const phone = queryParams.get("phone");
    const dial_code = "+91";
      if (otp.length <6) return;
      setloading(true);
      verifyOtp(phone, dial_code,otp)
        .then((res) => {
          if (res?.data?.status_code === 200) {
            navigate("/dashboard");
          }
          if (res?.data?.status_code === 500) {
            seterrorMessage(res?.data?.error_message);
          }
          localStorage.setItem("token",res?.data?.data?.token);
        })
        .catch(function (error) {
          console.log(error);
        }).finally(()=>{
          setloading(false);
        });
  }


  return (
    <div className="main-container">
      <div className="sub-container">
        <h3 className="otp-title">Verification Code</h3>
        <p className="otp-sub-title">
          We have sent the code verification to You Mobile Number{" "}
          +91{queryParams.get("phone")}
        </p>
        <div className="otp-field">
          <input
            ref={(element) => {
              refs.current[0] = element;
            }}
            onChange={handleOtpChange}
            type="number"
            className="otp-field_input"
            name={"otp-0"}
            maxLength={1}
            autoFocus
            autoComplete="off"
          />
          <input
            ref={(element) => {
              refs.current[1] = element;
            }}
            onChange={handleOtpChange}
            type="number"
            className="otp-field_input"
            name={"otp-1"}
            maxLength={1}
            autoComplete="off"
          />
          <input
            ref={(element) => {
              refs.current[2] = element;
            }}
            onChange={handleOtpChange}
            type="number"
            className="otp-field_input"
            name={"otp-2"}
            maxLength={1}
            autoComplete="off"
          />
          <input
            ref={(element) => {
              refs.current[3] = element;
            }}
            onChange={handleOtpChange}
            type="number"
            className="otp-field_input"
            name={"otp-3"}
            maxLength={1}
            autoComplete="off"
          />
          <input
            ref={(element) => {
              refs.current[4] = element;
            }}
            onChange={handleOtpChange}
            type="number"
            className="otp-field_input"
            name={"otp-4"}
            maxLength={1}
            autoComplete="off"
          />
          <input
            ref={(element) => {
              refs.current[5] = element;
            }}
            onChange={handleOtpChange}
            type="number"
            className="otp-field_input"
            name={"otp-5"}
            maxLength={1}
            autoComplete="off"
          />
        </div>
        {errorMessage && (
          <label className="text-sm text-danger">{errorMessage}</label>
        )}

        <p className="otp-bottom-label">
          Didn't recieve code?{" "}
          <Link className="link" to="/">
            Request again
          </Link>
        </p>
        <button onClick={() => handleSubmit()} className="submit-btn">
          {loading ? (
            <span>
              <span
                className="spinner-border spinner-border-sm mr-1"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="">Validating...</span>
            </span>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
}

export default OTPVerify