import React, { useState ,useEffect} from "react";
import "./Form.css";
// import  './LoginJs';
import LImg from "../../assets/image/mobile.svg";
import Wave from "../../assets/image/wave.jpg";
import avatar from "../../assets/image/m_avtar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { addLoginData } from "../../redux/action/LoginAction";

toast.configure();

// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

const Login = ({ loginDataAdd, loginData }) => {
  //   const validationSchema = Yup.object().shape({
  //     username: Yup.string()
  //     .required('Required')
  //     .email('Username  is invalid'),
  //     password: Yup.string() .min(6, 'Password must be at least 6 characters').required('Required'),
  //   });

  //   const { register, handleSubmit, errors } = useForm({
  //     resolver: yupResolver(validationSchema)
  // });

  console.log(loginData);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const HandleClick = (e) => {
    e.preventDefault();
    const data = {
      email: username,
      password: password,
    };


   
  

    axios
      .post("/login", data)
      .then((res) => {
        console.log(res);
   
        const token = res.data.token;
        const success = res.data.success;
        if (success) {
          localStorage.setItem("token", token);
          console.log(token);
          history.push("/CompanyProfile");
          toast.success("Login Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          //** Redux
          loginDataAdd(data);
          //**
        } else {
          toast.error(res.data.message, {
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
                  name='username'
                  placeholder='Username'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className='input-div'>
              <div className='i'>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className='div'>
                <input
                  type='password'
                  placeholder='password'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='fpwd'>
              <Link to='/forgot-password'>Forgot Password?</Link>{" "}
            </div>
            <div className='signup'>
              <Link to='/signup'>Create New Account</Link>
            </div>
            <input
              type='submit'
              className='form-btn'
              style={{ textAlign: "center" }}
              value='Login'
              onClick={(e) => HandleClick(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

//redux....
const mapStateToProps = (state) => ({
  loginData: state && state.LoginState,
});
const mapDispatchToProps = (dispatch) => {
  return {
    loginDataAdd: (data) => dispatch(addLoginData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
