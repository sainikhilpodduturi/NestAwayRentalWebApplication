import React, { useEffect, useState } from "react";
import Property from "./Property";
import "../styles/properties.css";

const Properties = (props) => {
  let { mode } = props;
  let [rentalDetails, setRentalDetails] = useState([]);
  let containerBgColor;

  if (mode === 'dark'){
    containerBgColor = {
      backgroundColor: 'rgb(50, 50, 50)'
    }
  } else {
    containerBgColor = {
      backgroundColor: 'rgb(210, 210, 210)'
    }
  }

  useEffect(() => {

    const getData = async () => {
      let url = `https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17`;
      let data = await fetch(url);
      data = await data.json();
      setRentalDetails(data.houses);
    };
    getData();

  }, []);

  console.log(rentalDetails);

  return (
    <>
      <div className="properties-container" style={containerBgColor}>
        {rentalDetails.map((element) => {
          return (
            <div key={element.id}>
              <Property
                image={element.image_url}
                title={element.title}
                city={element.city}
                location={element.sublocality_level1}
                rent={element.rent}
                id={element.nestaway_id}
                mode = {mode}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Properties;
