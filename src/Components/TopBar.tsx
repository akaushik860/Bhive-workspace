import React from "react";

const TopBar = () => {
  return (
    <div>
      <div className="topbar-div">
        <img
          className="topbar-bhive"
          src="/assets/bhive-logo.png"
          width="125px"
          height="40px"
        ></img>
        <div className="topbar-call">
          <img src="/assets/call.png" width="24px" height="24px"></img>
        </div>
      </div>
      <div className="poster-outer">
        <img
          className="poster-bg1"
          src="/assets/bhiveBG.png"
          width="50%"
          height="300px"
        ></img>
        <img
          className="poster-bg2"
          src="/assets/yellowEffect.png"
          width="35%"
          height="360px"
        ></img>
        <img
          className="poster-bg3"
          src="/assets/poster1.png"
          width="30%"
          height="300px"
        ></img>
        <div className="poster-outer-heading-box">
          <div className="poster-outer-heading">
            Host your meeting with world-class amenities.
          </div>
          <div className="poster-outer-heading">
            Starting at <span>₹199/-!</span>
          </div>
        </div>
      </div>
      <div id="mobile" className="poster-outer-mobile">
        <div style={{ height: "350px" }}>
          <img
            src="/assets/yellowEffect.png"
            className="poster1-mobile"
            width="100%"
            height="350px"
          ></img>
          <img
            src="/assets/poster1.png"
            className="poster2-mobile"
            width="100%"
            height="350px"
          ></img>
        </div>
       
      </div>
      <div id="mobile" className="poster-outer-heading-box">
          <div className="poster-outer-heading">
            Host your meeting with world-class amenities. Starting at <span>₹199/-!</span>
          </div>
        </div>
    </div>
  );
};
export default TopBar;
