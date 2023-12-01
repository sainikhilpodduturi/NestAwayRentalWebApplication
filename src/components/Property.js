import React, { useRef, useState } from "react";
import "../styles/property.css";
import Modal from "./Modal";

const Property = (props) => {
  let {
    image,
    title,
    location,
    city,
    rent,
    mode,
    id,
    shortDescription,
    longDescription,
    amenities,
    availability,
    roomAvailability,
  } = props;
  let propBgColor;
  let amenity = [];

  let modalDetailsRef = useRef(null);
  let modalBookingRef = useRef(null);

  let [showDetailsModal, setShowDetailsModal] = useState(false);
  let [showBookingModal, setShowBookingModal] = useState(false);
  let [rooms, setRooms] = useState(roomAvailability);
  let [formData, setFormData] = useState({
    fname: "",
    email: "",
    mobile: "",
    date: "",
  });
  const [errors, setErrors] = useState({});


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


  if (amenities.length === 0) {
    amenity = "NA";
  } else {
    for (let i = 0; i < amenities.length; i++) {
      let x = amenities[i];
      if (i === amenities.length - 1) {
        amenity.push(Object.values(x)[0] + ".");
      } else {
        amenity.push(Object.values(x)[0] + ", ");
      }
    }
  }


  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.fname.trim() === "") {
      newErrors.fname = "Username is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSumbit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setRooms(--rooms);
      setShowBookingModal(false);
      alert("Your Response has been submitted.");
    } else {
      alert("Please Input Valid Details.");
    }
  };

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
          <p className="prop-availability">
            <strong>Room Available Count: </strong> {rooms}
          </p>
        </div>
        <button
          className="btn"
          onClick={() => {
            modalDetailsRef.current.click();
          }}
        >
          More Details
        </button>
        {!(rooms === 0) && (
          <button
            className="btn"
            onClick={() => {
              modalBookingRef.current.click();
            }}
          >
            Book Property
          </button>
        )}


        {/* Below button is used to open modal which is hidden. We are clicking this button using useRef() hook */}
        <button
          onClick={() => {
            setShowDetailsModal(true);
          }}
          style={{ display: "none" }}
          ref={modalDetailsRef}
        >
          Modal
        </button>

        {/* Below is the modal for view details button */}
        <Modal
          show={showDetailsModal}
          title={title}
          onClose={() => setShowDetailsModal(false)}
        >
          <strong>Description: </strong>{" "}
          <p className="detail-para">{shortDescription}</p>{" "}
          <p>{longDescription}</p>
          <strong>Amenities: </strong> <p className="detail-para">{amenity}</p>
          <strong>Available From: </strong>
          <p className="detail-para">{availability ? availability : "NA"}</p>
        </Modal>


        {/* Below button is used to open modal which is hidden. We are clicking this button using useRef() hook */}
        <button
          onClick={() => {
            setShowBookingModal(true);
          }}
          style={{ display: "none" }}
          ref={modalBookingRef}
        >
          Modal
        </button>

        {/* Below is the modal for Book Property button */}
        <Modal
          show={showBookingModal}
          title="Enter Your Details"
          onClose={() => setShowBookingModal(false)}
        >

          <form className="form">
            <input
              type="text"
              name="fname"
              value={FormData.fname}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your Name"
              required
            />
            {errors.fname && <p>{errors.fname}</p>}
            <input
              type="email"
              name="email"
              value={FormData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your Mail Id"
              required
            />
            {errors.email && <p>{errors.email}</p>}
            <input
              type="number"
              name="mobile"
              value={FormData.mobile}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your Contact Number"
              required
            />
            {errors.mobile && <p>{errors.mobile}</p>}
            <input
              type="date"
              name="date"
              value={FormData.date}
              onChange={handleChange}
              className="input-field"
              required
            />
          </form>
          
          <button
            type="submit"
            className="button input-field"
            onClick={handleSumbit}
          >
            Submit
          </button>
        </Modal>
      </div>
    </>
  );
};

export default Property;
