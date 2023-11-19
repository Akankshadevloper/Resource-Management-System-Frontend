import React, { useState } from "react";


const Contact = () => {
  const [userData, setUserData] = useState({
    // firstName: "",
    // lastName: "",
    // phone: "",
    // email: "",
    username: "",
    password: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { username, password } = userData;

    if (username && password) {
      const res = fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            
            username,
            password,
          }),
        }
      );

      if (res) {
        setUserData({
          
          username: "",
          password: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section ">
        <div className="container">
          <div className="row">
            <div className="col-7 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  {/* <h1 className="main-heading fw-bold">
                     <br />   
                  </h1> */}
                  {/* <p className="main-hero-para">
                  
                  </p> */}
                  <figure>
                    <img
                      src="./images/cutm.jpeg"
                      alt="contatUsImg"
                      className="img-fluid"
                      // style={{background-size:"cover"}}
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <h1 style={{ textAlign: "center" }}>Login</h1>
                  <br></br>
                  <form method="POST">
                    <div className="row">
                      {/* <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row"> */}
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="username"
                          id=""
                          className="form-control"
                          placeholder="username"
                          value={userData.username}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="password"
                          id=""
                          className="form-control"
                          placeholder="password"
                          value={userData.password}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      {/* <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      /> */}
                      {/* <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the staff members may contact me at the
                        email address or phone number above
                      </label> */}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
