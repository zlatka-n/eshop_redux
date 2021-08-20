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
          the intention to improve my React / Redux skills. It took me about
          four weeks to finish this bookstore, and I can't say how much I
          learned from this project (and how happy I am happy having finished
          it). Firstly, I pushed myself to use effectively Stackoverflow, think
          more about nested data structures and finally learn more of css. The
          latest was my most procrastinated front-end thing to learn in depth.
          So pardon me, if this website is not perfectly responsive, but I truly
          tried to make it responsive for smarpthones, tablets and various
          screen sizes.
        </p>
        <p>
          Below I include my techstack that I used and also my github account.
          Don't hesitate to contact me either by phone +420735204082 or email
          zlatka094@seznam.cz. Once again thank you for visiting my page.
        </p>
        Greetings, <br></br>Zlatka
      </div>
      <br></br>
      <div>
        <h4>Used techstack</h4>
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
