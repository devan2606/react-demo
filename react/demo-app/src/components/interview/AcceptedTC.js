import React from 'react'
import './StartPracticeInterview.css'
import InterviewHeader from "../header/InterviewHeader";
import Footer from '../footer/Footer'

export default function AcceptedTC
() {
    return (
        <div>
            <InterviewHeader/>
            <div id="start" class="start">
		<section class="dbContent">
			<div class="video vcontainer" >
				<div class="videoheader" id="videoheader" >
					<p className="para_title">This is practice interview. Use it to get acquainted with the interview process.</p>
				</div>
				 {/* <video id="faststart-video" type="video/mp4" autoplay="" src="/public/assets/img/Taking_Interview.mp4"
					controls="">
				</video> */}
				<p>TIPS</p>
				<p>	•	Test your internet connection, camera, sound, video program, and test it all again right before the interview process.</p>
				<p> •	Select the proper location for the interview, control the lighting, and display a generic background.   </p>	
				<p> •	Dress professionally and avoid bright colors. Remember nothing too flashy or suggestive with clothing.</p>
				<p>•	You need to speak very clearly and avoid mumbling or talking too fast, they are much more noticeable in an online interview.</p>	
				<p>	•	Look directly into the camera and not at the screen or monitor to make good eye contact.</p>	
					
				<div class="agree-for-interview" >
					<div class="form__radio-group">
						<input type="checkbox" class="form__radio-input" id="acceptedTC" name="acceptedTC"
							value="acceptedTC" />
						<label for="acceptedTC" class="form__radio-label">
							<span class="form__radio-button"></span>
							I Agree
						</label>
					</div>
					<button type="button" id="startTest" class="btn btn-pink">Continue</button>
				</div>
			</div>

		</section>
	</div>
<Footer/>
</div>
    
    )
}
