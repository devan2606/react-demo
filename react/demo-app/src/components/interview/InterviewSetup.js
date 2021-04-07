import React from "react";
import Previw from "../../assets/image/preview-chat-boss.png";
import Rerecord from "../../assets/image/recording.svg";
import Stop from "../../assets/image/stop.svg";
import Play from "../../assets/image/play.svg";
import "./InterviewSetup.css";
import InterviewHeader from "../header/InterviewHeader";
import Footer from '../footer/Footer'

export default function InterviewSetup() {
  return (
    <div>
		 <InterviewHeader/>
      <div id='interview'>
        <div class='interview__setup interview_screen'>
          <div class='interview__text'>
            <h1 class='heading-primary'> PREPARE YOUR EQUIPMENT</h1>
            <p class='paragraph--small'>
              <br />
              When prompted, please let AskAway use your camera and microphone,
              and record a short video clip.
    
              <br />
              After recording the clip, play it back and verify the video and
              audio are working fine.
            </p>

            <button
              type='button'
              disabled
              id='camera_test_success'
              class='btn btn-pink btn-small'
            >
              Start Interview
            </button>

            <div class='interview__image'>
              <img src={Previw} alt='our Priview Boss nice flat image :)' />
            </div>
          </div>
          <div class='interview__video'>
            <div id='video-holder'>
              <video
                autoplay
                class='video-cube video-cube-intial'
                type='video/mp4'
              ></video>
            </div>
            <div class='interview__video--buttons practice_interview_btn'>
              <button id='btn-start-recording' class='btn-icon'>
                <img src={Rerecord} alt='Start Recording' />
              </button>
              {/* <button id='btn-again-record-video' disabled class='btn-icon'>
                <img src={Rerecord} alt='Rerecord Video' />
              </button> */}
              <button id='btn-stop-recording' disabled class='btn-icon'>
                <img src={Stop} alt='Stop Recording' />
              </button>
              <button id='btn-play-video' disabled class='btn-icon'>
                <img src={Play} alt='Play Video' />
              </button>
              <span id='play-timer'></span>
            </div>
          </div>
        </div>
      </div>
	  <Footer/>
    </div>
  );
}
