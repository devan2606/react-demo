import React from "react";
import "./Footer.css";
import Logo from "../../assets/image/askaway-logo.png";

export default function Footer() {
  return (
    <div className='margin-top' style={{ marginTop: 80 }}>
      <footer class='footer' className='footerclass fixed-bottom'>
        <a href='/' target='_blank' id='image'>
          <img className='img-logo ' src={Logo} alt='Askaway' />
        </a>

        <p id='paragraph'>AskAway © 2021. All Rights Reserved</p>
      </footer>
    </div>
  );
}
