import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import LImg from "../../assets/image/mobile.svg";
import { useLocation, useParams } from "react-router-dom";
import Wave from "../../assets/image/wave.jpg";
import avatar from "../../assets/image/m_avtar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";

export default function ResetPassword() {
  // let { id } = useParams();
  const id = useLocation().search.split("=")[1];

  useEffect(() => {
    axios
      .get("verifyemail?id=" + id)
      .then((res) => {
        console.log(res);
        const status = res.data.success;
        if (status) {
          localStorage.setItem("adminkey", id);
          axios
            .get(`admin/${id}`)
            .then((ress) => {
              console.log(ress);
              setEmail(ress.data.admin.email);
              // const emaildata =ress.data.admin.email
              // console.log(emaildata);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const history = useHistory();
  const HandleClick = (evt) => {
    evt.preventDefault();
    const data = {
      password: password,
      conpass: confirmpassword,
    };

    axios
      .post(`reset/${id}`, data)
      .then((resp) => {
        console.log(resp);
        const success= resp.data.admin.status;
        if(success)
        {
          console.log(success)
          history.push("/");
          toast.success("success", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        else{
          toast.error("error", {
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
              <div className='i'></div>
              <div className='div'>
                <input
                  id='inputEmail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='input-div'>
              <div className='i'>
                <FontAwesomeIcon className='icon' icon={faUser} />
              </div>
              <div className='div'>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  onChange={(evt) => setPassword(evt.target.value)}
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
                  name='confirmpassword'
                  placeholder='confirm password'
                  name='password'
                  onChange={(evt) => setConfirmPassword(evt.target.value)}
                />
              </div>
            </div>

            <input
              type='submit'
              className='form-btn'
              style={{ textAlign: "center" }}
              value='Reset Password'
              onClick={(evt) => HandleClick(evt)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
