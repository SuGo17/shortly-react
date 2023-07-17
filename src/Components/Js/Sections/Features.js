import React from "react";
import LinksContainer from "./LinksContainer";

function Features() {
  return (
    <section className="features-section">
      <LinksContainer />
      <div className="container">
        <h2 className="title">Advanced Statistics</h2>
        <p className="sub-title">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="features-container">
          <div className="inner-container">
            <div className="feature-card">
              <div className="card-img">
                <img
                  src="./images/icon-brand-recognition.svg"
                  alt="Brand Recognition"
                />
              </div>
              <h3 className="card-title">Brand Recognition</h3>
              <p className="card-description">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-img">
                <img
                  src="./images/icon-detailed-records.svg"
                  alt="Detailed Records"
                />
              </div>
              <h3 className="card-title">Detailed Records</h3>
              <p className="card-description">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                descisions.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-img">
                <img
                  src="./images/icon-fully-customizable.svg"
                  alt="Fully Customizable"
                />
              </div>
              <h3 className="card-title">Fully Customizable</h3>
              <p className="card-description">
                Improve brand awareness and content discoverabilit through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
