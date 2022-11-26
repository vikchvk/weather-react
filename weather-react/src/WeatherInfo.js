import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
   return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
<ul>
    <li>
       <FormattedDate date={props.data.date} />
    </li>
    <li>{props.data.description}</li>
</ul>
<div className="row">
    <div className="col-6">
     <div className="mt-3">
      <WeatherIcon 
      code={props.data.icon} 
      size={56}
      />
        <WeatherTemperature celsius={props.data.temperature} />
       </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)}{" "}km/h</li>
      </ul>
    </div>

</div>
    </div>
   );}