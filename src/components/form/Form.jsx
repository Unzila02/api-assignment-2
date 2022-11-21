import React, { useState } from "react";
import logo from "./images/Image.jpg";

import "./Form.css";
function MyForm() {
  const [email, myEmail] = useState("");
  const [showSuccessScreen, setshowSuccessScreen] = useState(false);
  const [data, setData] = useState(false)

  const handleSubmit = async (event) => {
    let fetchEmail = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()
    .then((user) => setData(user[0].email))
    // .then((user) => setData(user.map((item) => item[0].email)))
    );  
    if (email===data) {
      setshowSuccessScreen(true);
    } else{
      alert("Invalid Email enter");
    }
  };

  const emailhandler = (event) => {
    myEmail(event.target.value);

  };
  return (
    <>
    {showSuccessScreen ? 
    <div className=" row design ">
        <h2 className="heading text-center">Password Set Successfully!</h2>
        <div className="col-12 text-center ">
          <div className="para ">
            <p className="mar">Your Password has been set successfully.</p>
            <p className="mar">You can now sign in with your new password.</p>
          </div>
          <div>
            <img src={logo} alt="success" className="images" />

            <button className="btn btn-dark btn-md btn-col" type="submit">
             
              SIGN IN
            </button>
            <p className="last text-center">
              Not a member?
              <span className="last-style "> Signup for an account now</span>
            </p>
          </div>
        </div>
      </div>
      :
      <div className="container-fluid align-items-center ">
      <div className=" row custom_design form-style ">
        <h2 className="heading text-center">Create New Password</h2>
        <div className="col-12 text-left">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="style-form">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                placeholder="name@gmail.com"
                onChange={(event) => emailhandler(event)}
              />
            </div>
            <div className="style-form">
              <label>New Password:</label>
              <input type="password" />
            </div>
            <div className="style-form">
              <label>Confirm New Password:</label>
              <input type="password" />
            </div>
            <button className="btn btn-dark btn-md btn-col"onClick={handleSubmit} type="submit" >
              {" "}
              Reset Password{" "}
            </button>
          </form>
          <div />
        </div>
      </div>
    </div>
      }
    </>
  );
}

export default MyForm;
