// import React, { useState } from "react";

// const Contact = () => {
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//    password:"",
//   });

//   let name, value;
//   const postUserData = (event) => {
//     name = event.target.name;
//     value = event.target.value;

//     setUserData({ ...userData, [name]: value });
//   };

//   // connect with firebase
//   const submitData = async (event) => {
//     event.preventDefault();
//     const { firstName, lastName, phone, email, password } = userData;

//     if (firstName && lastName && phone && email && password) {
//       const res = fetch(
//         "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             firstName,
//             lastName,
//             phone,
//             email,
//             password,
//           }),
//         }
//       );

//       if (res) {
//         setUserData({
//           firstName: "",
//           lastName: "",
//           phone: "",
//           email: "",
//           password:""
//         });
//         alert("Data Stored");
//       } else {
//         alert("plz fill the data");
//       }
//     } else {
//       alert("plz fill the data");
//     }
//   };

//   return (
//     <>
//     <section className="contactus-section md-4" >
//     <div className="container-fluid div-color mx-auto ">
// 		<div className="row align-center mx-auto">
// 			<div className="col-md-4 offset-md-4">
// 				<div className="card mt-5">
// 					<div className="card-header text-center text-white bg-custom">
// 						<i className="fa fa-user-plus fa-3x" aria-hidden="true"></i>
// 						<h2>SignUp</h2>
// 					</div>


					
// 					<div className="card-body " style={{ width: '100%' , height:'100%'}}>
// 						<form  method="post align-center">
// 							<div className="form-group  col-lg-12">
// 								<label >FirstName</label> <input type="text"
//                           name="firstName"
//                           id=""
//                           className="form-control"
//                           placeholder="First Name"
//                           value={userData.firstName}
//                           onChange={postUserData} />

// 							</div>
//               <div className="form-group">
// 								<label>LastName</label> <input type="text"
//                           name="lastName"
//                           id=""
//                           className="form-control"
//                           placeholder="LastName"
//                           value={userData.lastName}
//                           onChange={postUserData} />
//               </div>
// 							<div className="form-group">
// 								<label>Phone</label> <input 
//                           type="text"
//                           name="phone"
//                           id=""
//                           className="form-control"
//                           placeholder="Phone Number "
//                           value={userData.phone}
//                           onChange={postUserData}
//                         />

// 							</div>
//               <div className="form-group">
// 								<label>Email</label> <input 
//                           type="text"
//                           name="email"
//                           id=""
//                           className="form-control"
//                           placeholder="Email ID "
//                           value={userData.email}
//                           onChange={postUserData}
//                         />

// 							</div>

// 							<div className="form-group">
// 								<label for="exampleInputPassword1">Enter Password</label> <input 
//                           type="password"
//                           name="password"
//                           id=""
//                           className="form-control"
//                           placeholder="Password "
//                           value={userData.password}
//                           onChange={postUserData}
//                         />

// 							</div>
// 							<button type="submit"
// 								className="btn btn-primary bodge-pill btn.block"  onClick={submitData}>Register</button>
// 						</form>
// 					</div>
// 				</div>

// 			</div>
// 		</div>
// 	</div>
//   </section>       
     
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
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
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
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
                  <h1 style={{ textAlign: "center" }}>SignUp</h1>
                  <br></br>
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
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
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
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
                      Submit
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
