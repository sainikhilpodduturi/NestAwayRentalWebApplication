import React from "react";
import "../styles/property.css";

const Property = (props) => {
  let { image, title, location, city, rent, mode, id } = props;
  let propBgColor;

  if (mode === "light") {
    propBgColor = {
      backgroundColor: "rgb(180, 180, 180)",
      color: "rgb(30,30,30)",
    };
  } else {
    propBgColor = {
      backgroundColor: "rgb(30,30,30)",
      color: "rgb(200, 200, 200)",
    };
  }

  return (
    <>
      <div className="container" style={propBgColor}>
        <img src={image} alt="Rental Property " className="prop-image" />
        <div className="property-detail">

          <div className="headline">
            <p className="prop-title">{title}</p>
            <p>{id}</p>
          </div>

          <p className="prop-location">
            <strong>Location:</strong> {location}, {city}
          </p>
          <p className="prop-rent">
            <strong>Rent: </strong>
            {rent}{" "}
          </p>
        </div>
 
        <button className="btn">More Details</button>
        <button className="btn">Book Property</button>
      </div>
    </>
  );
};

export default Property;
