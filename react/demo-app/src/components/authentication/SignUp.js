import React, { useState } from "react";
import "./Form.css";
// import  './LoginJs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LImg from "../../assets/image/mobile.svg";

import Wave from "../../assets/image/wave.jpg";
import avatar from "../../assets/image/m_avtar.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function SignUp() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [companyemail, setCompanyemail] = useState();
  const history = useHistory();
  const HandleClick = (e) => {
    e.preventDefault();
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: companyemail,
    };

    axios
      .post("/register", data)
      .then((res) => {
        console.log(res);
        const status = res.data.status;
        if (status) {
          history.push("/");  
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Something Went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        } 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <img className='wave' src={Wave} alt='AskAway' />
      <div className='container'>
        <div className='img'>
          <img src={LImg} alt='AskAway' />
        </div>
        <div className='content'>
          <form>
            <img src={avatar} alt='AskAway' />
            <h2 className='title'>Welcome</h2>
           
            <div className='input-div'>
              <div className='i'>
                <FontAwesomeIcon className='icon' icon={faUser} />
              </div>
              <div className='div'>
                <input
                  type='text'
                  name='firstname'
                  className='input'
                  placeholder='First Name'
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
            </div>
            <div className='input-div'>
              <div className='i'>
                <FontAwesomeIcon className='icon' icon={faUser} />
              </div>
              <div className='div'>
                <input
                  type='text'
                  name='lastname'
                  className='input'
                  placeholder='Last Name'
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div className='input-div'>
              <div className='i'>
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
              </div>
              <div className='div'>
                <input
                  type='text'
                  name='companyemail'
                  className='input'
                  placeholder='Company Email'
                  onChange={(e) => setCompanyemail(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-2 mb-2'>
              <div className='signup w-100'>
                <Link to='/'>Back to Login?</Link>{" "}
              </div>
            </div>
            <input
              type='submit'
              style={{ textAlign: "center" }}
              className='form-btn'
              value='Sign up'
              onClick={(e) => HandleClick(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
