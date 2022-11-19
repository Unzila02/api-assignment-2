import React, { useState, useEffect} from "react";
import axios from 'axios';
import './Form.css';
const gitHubUrl = "https://jsonplaceholder.typicode.com/users";
function MyForm() {
    const [Email, myEmail] = useState("");
  const [eNameRequire, emailRequire] = useState(false);


  const [userList, setUserList] = useState({});

  // useEffect (() => {
  //     const URL="https://jsonplaceholder.typicode.com/users";
  //     axios.get(URL).then(function (response){
  //       var value = `${response.data.email}`;
  //         console.log(value);
  //         if(response.data){
  //         setUserList(response.data)
  //         }
  //     })
  //     .catch((error)=>{
          
  //     });
  // }, []
  // );

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    setUserData(await response.json());
    console.log(response);
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    if(Email===''){
        emailRequire(true)
      }
    if(Email==='getEmail')
   {
    alert("sucessfull")
   }
      };


      const emailhandler = (event) => {
        myEmail(event.target.value)
        if (event.target.value !== '') {
          emailRequire(false)
     
      }
    };
    
    
      return (
        
          <div className="container-fluid align-items-center ">
            <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        
        <h5 className="info-item">{userData.email}</h5>
      </div>
    </div>
            <div className=" row custom_design form-style ">
              <h2 className="heading text-center">Create New Password</h2>
              <div className="col-12 text-left">   
              <form onSubmit={handleSubmit}>
              <div className="style-form">
            <label>Email:</label>
            <input type="email" value={Email} placeholder="name@gmail.com" onChange={(event)=>emailhandler(event)} />
          {eNameRequire && <p className="Alert-design">*Please Enter your email </p>}
          </div>
          <div className="style-form">
          <label>New Password:</label>
          <input type="password"/>
          </div>
          <div className="style-form">
          <label>Confirm New Password:</label>
          <input type="password"/>
          </div>
            <button className="btn btn-dark btn-md btn-col" type="submit" > Reset Password </button>
          </form>
          <div/>
        </div>
        </div>
    </div>

  );
}

export default MyForm;