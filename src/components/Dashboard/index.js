import React, { useEffect, useState } from "react";
import { fetchRestaurant } from "../../api";
import Card from "../Card";


function Dashboard({result,setresult}) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setloading(true);
      setresult(null)
      fetchRestaurant(token).then((res) => {
        if (res.status === 200) {
          setresult(res?.data);
        }
      }).finally(()=>{
        setloading(false);
      });
    }
  }, []);

  return (
    <>
      <div className="dashboard-title">
        <h2 className="otp-title ml-4">Connaught place</h2>
        <div>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="card-container">
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
        {result &&
          result.map((res) => {
            return (
              <Card
                key={res.restaurant_id}
                res={res}
                restaurant_name={res.restaurant_name}
                cuisines={res.cuisines}
                restaurant_avg_rating={res.rating?.restaurant_avg_rating}
                images={res.images}
                avg_cost_for_two={res.avg_cost_for_two}
              />
            );
          })}
      </div>
    </>
  );
}

export default Dashboard;
