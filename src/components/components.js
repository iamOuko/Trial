import React from "react";
import image from "../images/image.jpg";
import "../css/index.css";
import ceo from "../images/ceo.jpg";
import director from "../images/director.jpg";

const Homepage = () => {
  return (
    <div>
      <h1 className="heading">MY TRIAL WEBSITE</h1>
      <p className="welcomeParagraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut mi
        in justo pulvinar malesuada. Donec ante metus, scelerisque sit amet
        laoreet scelerisque, sagittis vitae risus. Sed semper porttitor nulla a
        aliquet. Mauris sagittis diam vitae lectus efficitur, eget mollis massa
        sagittis. Quisque tempor tellus sit amet malesuada aliquet. Cras
        dignissim sodales ligula, eu pulvinar lorem ullamcorper et. Morbi
        pharetra ligula sagittis laoreet dignissim. In eu est eu mi volutpat
        porttitor ut in leo. Suspendisse ac tincidunt arcu. Pellentesque
        ultricies in quam scelerisque porttitor. Pellentesque et sapien ipsum.
        Nulla quis tortor lobortis, ornare odio sed, hendrerit dui. Nam finibus
        risus at magna blandit malesuada eu in velit. Vestibulum felis tortor,
        sodales congue diam cursus, convallis rhoncus neque. Maecenas vel dolor
        ultrices, blandit turpis non, porttitor turpis.
      </p>
      <img className="image" src={image} alt="image" />;
    </div>
  );
};

const AboutUs = (props) => {
  return (
    <div>
      <h1 className="headingB">THIS IS US!</h1>
      <p className="contentParagraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate
        nisl at massa cursus, in facilisis nulla porttitor. Praesent tincidunt
        quam a lectus cursus, vel tempus dolor pretium. Mauris consequat augue
        nunc, a porttitor mi facilisis ut. Nulla vitae molestie justo. Quisque
        tempus nisi lectus, at gravida enim viverra eget. Duis et commodo justo.
        Quisque nec accumsan lacus. Nunc a enim velit. Mauris laoreet quis orci
        ut facilisis. Nulla lacus nulla, eleifend efficitur semper vel, rutrum
        scelerisque leo. Nam id sodales dui, vitae laoreet libero. Aliquam ut
        turpis sed est viverra facilisis. In eget lacinia elit.
      </p>
      <h2 className="headingC">OUR TEAM:</h2>
      <img className="teamImage" src={ceo} alt="ceo" />;
      <img className="teamImage" src={director} alt="director" />;
      {/* <p>
        <button onClick={() => props.history.goBack()}>Back</button>
      </p>  */}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <h1 className="headingD">Get us through:</h1>
      <p className="contact">0739300482</p>
    </div>
  );
};

const Marble = (props) => {
  return <div>This is Marble number {props.match.params.id}!</div>;
};

const NotFound = () => {
  return "Page not found.";
};

export { Homepage, AboutUs, ContactUs, Marble, NotFound };
