import React from "react";
import "./ArtTherapy.css";

const ArtTherapy = () => {
  return (
    <div className="art-therapy-section">
      <div className="art-therapy-container">
        <h1 className="art-therapy-heading">
          Introducing Art Therapy Services at Alinda Kring Art Advisory
        </h1>

        <p className="art-therapy-intro">
          We are excited to announce that Alinda Kring Art Advisory now offers Art Therapy Services to support emotional well-being through the healing power of art.
        </p>

        <div className="art-therapy-block">
          <h2 className="art-therapy-question">What is Art Therapy?</h2>
          <p className="art-therapy-answer">
            Art Therapy is a unique therapeutic approach that uses the creative process of making art to help individuals explore emotions, relieve stress, and gain personal insight. Unlike traditional talk therapy, art therapy enables self-expression and self-discovery through visual means, making it an effective tool for personal growth, healing, and clarity.
          </p>
        </div>

        <div className="art-therapy-block">
          <h2 className="art-therapy-question">Why Choose Art Therapy?</h2>
          <p className="art-therapy-answer">
            Whether you’re seeking support for mental wellness, exploring personal issues, or simply interested in learning more about yourself, art therapy provides a safe, non-verbal space to process feelings and experiences. Our sessions are guided by certified art therapy professionals and tailored to meet individual needs, ensuring a meaningful and beneficial experience for every participant.
          </p>
        </div>

        <div className="art-therapy-block">
          <h2 className="art-therapy-question">Start Your Journey</h2>
          <p className="art-therapy-answer">
            We invite you to discover the benefits of art therapy with a complimentary first session. Connect with us today to schedule your session and begin a transformative journey towards balance and self-awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtTherapy;
