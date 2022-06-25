import React, { useEffect, useState } from 'react'
import { fetchRestaurant } from '../../api';
import Card from '../Card'

function Dashboard() {
  const [result, setresult] = useState();
 
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token) {
      fetchRestaurant(token).then((res) => {
        if(res.status===200){
          setresult(res?.data);
          console.log(res.data)
        }
      });
    }
  },[])
  
  return (
    <>
      <div className="dashboard-title">
        <h2 className="otp-title">Connaught place</h2>
        <div>
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="card-container">
        {result &&
          result.map((res) => {
            return (
              <Card
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

export default Dashboard