import axios from "axios";
import qs from "qs";

export function login(phone, dial_code) {

var data = qs.stringify({
  phone: phone,
  dial_code: dial_code,
});
var config = {
  method: "post",
  url: "https://staging.fastor.in/v1/pwa/user/register",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};
return axios(config)
}

export function verifyOtp(phone, dial_code,otp) {
  var data = qs.stringify({
    phone: phone,
    dial_code: dial_code,
    otp:otp
  });
  var config = {
    method: "post",
    url: "https://staging.fastor.in/v1/pwa/user/login",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  return axios(config);
}


export function fetchRestaurant(token) {
  var config = {
    method: "get",
    url: "https://staging.fastor.in/v1/m/restaurant?city_id=118",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': `Bearer ${token}`
    },
  };
  return axios(config);
}

