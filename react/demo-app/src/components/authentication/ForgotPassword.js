import React from "react";
import "./Form.css";
// import  './LoginJs';
import LImg from "../../assets/image/mobile.svg";

import Wave from "../../assets/image/wave.jpg";
import avatar from "../../assets/image/m_avtar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
            <div className='input-div one'>
              <div className='i'>
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
              </div>
              <div className='div'>
                <input type='text' className='input' placeholder='Email...' />
              </div>
            </div>
            <div className='signup'>
              <Link to='/'>Back to Login?</Link>{" "}
            </div>
            <input
              type='submit'
              style={{ textAlign: "center" }}
              className='form-btn'
              value='Forgot Password'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
