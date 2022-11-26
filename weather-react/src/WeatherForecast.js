import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecast() {
   return (
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
           <div className="WeatherForecast-day">Thu</div>
           <WeatherIcon code="01d" size={32} />
           <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
            </div>
           </div>
           </div>  
    </div>

   );
}