import React from 'react'
 import './style.css';
 //import bgImg from './cutm.jpeg';




function Form() {
    
    return (
      <>
      <div className="cotainer">
        <h1>Centurion University Entrance Exam (Phd)</h1>
      </div>
     <div className="container">
        <div className="container1">
        <div className="split-screen">
            <div className="left">
               <section className="copy">
                <h1>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT</h1>
               </section>
            </div>
            <div className="right">
            <form>
                <section className="copy">
                <h2>Application Form</h2>
                
                </section>
            <div className="user-details"  >
          <div className="input-box ">
            <span className ="details">Your Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box ">
            <span className="details">Mobile</span>
            <input type="text" placeholder="Enter mobile number" required />
          </div>
          <div className="input-box ">
            <span classNae="details">Email</span>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-box ">
            <span className="details">City</span>
            <input type="text" placeholder="Enter your city" required/>
          </div>
          <div className="input-box ">
            <span className="details">State</span>
            <input type="text" placeholder="Enter your state" required/>
          </div>
          <div className="input-box ">
            <span className="details">Pincode</span>
            <input type="text" placeholder="Confirm your pincode" required/>
          </div>
          <div className="input-box ">
            <span classNae="details">10th</span>
            <input type="text" placeholder="Enter your 10th mark" required />
          </div>
          <div className="input-box ">
            <span className="details">12th</span>
            <input type="text" placeholder="Enter your 12th mark" required/>
          </div>
          <div className="input-box ">
            <span className="details">Graduation</span>
            <input type="text" placeholder="Enter your graduation" required/>
          </div>
          <div className="input-box ">
            <span className="details">Perferences </span>
            <select type="text" name="languages" id="lang">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
          </div>
          </div>
          <div class="input-container cta">
            <label class="checkbox-container"></label>
            <input type="checkbox"></input>
            <span class="checkmark"></span>
            I understand, Once the form is Submitted, I wont be able to edit information provided in the form
          </div>
        
    
        <div class="button">
          <input type="submit" value="Register" />
        </div>
            </form>
            </div>
        </div>
     </div>
     </div>


      </>
    );
  }
  
  export default Form;