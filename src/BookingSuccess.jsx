import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./BookingPage.css"
import "./BookingSuccess.css"

const BookingSuccess = () => {
  return (
    <div className='booksucc'>
      <h1>Successfully Booked</h1>
        <div>
            <Link to="/" className="go-home">Home</Link>
        </div>
    </div>
  )
}

export default BookingSuccess