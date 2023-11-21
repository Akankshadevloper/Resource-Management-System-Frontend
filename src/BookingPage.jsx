import React from "react";
import "./BookingPage.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const BookingPage = () => {
  const location = useLocation();
  let type_of_booking;
  if (location.state != undefined) {
    const { type } = location.state;
    type_of_booking = type;
  } else {
    type_of_booking = "NO DATA";
  }
  return (
    <div className="main">
      <form className="booking-form">
        <h1 className="heading">BOOK {type_of_booking} NOW</h1>
        {/* Conditional Rendering based on the type of item */}
        {type_of_booking == "FOOD" ? (
          <div className="">
            <div className="radio-group">
              <input type="radio" value="veg" name="veg-nonveg" />{" "}
              <span>Veg</span>
              <input type="radio" value="non-veg" name="veg-nonveg" />{" "}
              <span>Non-Veg</span>
              <input type="radio" value="Soft Drink" name="Soft Drink-Cold Drink" />{" "}
              <span>Soft Drink</span>
              <input type="radio" value="Cold Drink" name="Soft Drink-Cold Drink" />{" "}
              <span>Cold Drink</span>
            </div>
            <input type="number" placeholder="Number of plates" />
          </div>
        ) : (
          <></>
        )}
        {type_of_booking == "ELECTRICITY" ? (
          <>
            <div className="radio-group">
              <input type="radio" value="KAMM ELECTRICITY" name="electricity-radio" />{" "}
              <span>JYADA VOLTAGE</span>
              <input type="radio" value="KAMM ELECTRICITY" name="electricity-radio" />{" "}
              <span>KAMM ELECTRICITY</span>
            </div>
            <input type="number" placeholder="Kitna voltage chahiye batao" />
          </>
        ) : (
          <></>
        )}
        {type_of_booking == "FURNITURE" ? (
          <>
            <input type="number" placeholder="NUMBER OF CHAIRS" />
            <input type="number" placeholder="NUMBER OF TABLES" />
          </>
        ) : (
          <></>
        )}
        {type_of_booking == "ROOM" ? (
          <>
            <input type="number" placeholder="NUMBER OF BEDS" />
            <div className="radio-group">
              <input type="radio" value="HALL NO" name="room-radio" />{" "}
              <span>HALL NO</span>
              <input type="radio" value="CLASSROOM" name="room-radio" />{" "}
              <span>CLASSROOM</span>
            </div>
          </>
        ) : (
          <></>
        )}
        {type_of_booking == "OTHER" ? (
          <>
            <input type="text" placeholder="You want anythining else...Please mention it here." />
          </>
        ) : (
          <></>
        )}
        <Link to="/book-success" className="btn-book" type="button">
          Book Now
        </Link>
      </form>
    </div>
  );
};

export default BookingPage;
