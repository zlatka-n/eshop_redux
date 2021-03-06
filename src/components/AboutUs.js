import React from "react";
import "../css/about.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h3>About this website</h3>
      <div>
        <p>Hello,</p>
        <p>
          thank you for visiting my bookstore page. I created this website with
          the intention to primarily improve my React and Redux skills. It took
          me about four weeks to finish this bookstore - it's been the most
          extensive project I've made so far. <br />
          <div className="learnt">
            I learnt several things doing this project:
            <ul>
              <li>I started being better at using Stackoverflow</li>
              <li>I learned more about nested data structures </li>
              <li>
                I learned more about responsive design (css was my
                procrastination)
              </li>
            </ul>
          </div>{" "}
          Pardon me, if this website is not perfectly responsive, but I truly
          tried to make it responsive for smarpthones, tablets and various
          screen sizes.
        </p>
        <p>
          The inspiration for this website layout came from&nbsp;
          <a href="https://www.bookdepository.com/">Book Depository</a> and{" "}
          <a href="https://www.cosstores.com/en_eur/index.html">COS</a>.
        </p>
        <p>
          Below I include my tech stack that I used and also my github account.
          Don't hesitate to contact me either by phone +420 735 204 082 or email
          zlatka094@seznam.cz. Once again thank you for visiting my page.
        </p>
        Greetings, <br></br>Zlatka
      </div>
      <br></br>
      <div>
        <h4>Used tech stack</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Redux Form</li>
          <li>React Router</li>
          <li>Lodash</li>
          <li>React Icons</li>
        </ul>
      </div>
      <div>
        <h4>My github account</h4>
        <a href="https://github.com/zlatka-n">https://github.com/zlatka-n</a>
      </div>
    </div>
  );
}

export default AboutUs;
