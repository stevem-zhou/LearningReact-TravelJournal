import React from "react";
import Location from "../images/location.png";
import "./Panel.css";

export default function Panel(props) {
  return (
    <>
      <div className="panel">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="location--image"
        />
        <div className="panel--infosection">
          <div className="panel--location">
            <img
              src={Location}
              alt="location marker"
              className="location--marker"
            />
            <span className="location--title">{props.location}</span>
            <a href={props.googleMapsUrl}>
              <span className="google--maps">View on Google maps</span>
            </a>
          </div>
          <div className="panel--info">
            <h2>{props.title}</h2>
            <h3>
              {props.startDate} - {props.endDate}
            </h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
