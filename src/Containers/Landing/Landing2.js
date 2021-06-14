import React from 'react';
import Style from './Landing2.module.css';
import Accordion from './Accordion';
import net from './image.png';

function Landing2() {
  return (
    <div className={Style.Landing}>
      <img alt="pic" src={net} className={Style.image} width="16" height="9" />
      <div className={Style.acc}>
        <h1 className={Style.how}>How it works</h1>
        <Accordion
          title="Install Netflix Party"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Accordion
          title="Open a Netflix video"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Accordion
          title="Create a Netflix Party"
          content="
				   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				   </br>
				   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				   </br>
				   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
        />
        <Accordion
          title="Join a Netflix Party"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}
export default Landing2;
