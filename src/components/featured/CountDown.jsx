import React, { useState } from "react";
import Slide from "react-reveal/Slide";

const CountDown = () => {
  return (
    <Slide left delay={500}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event Starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">23</div>
            <div className="countdown_tage">Days</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">2</div>
            <div className="countdown_tage">Hs</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">20</div>
            <div className="countdown_tage">Min</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">40</div>
            <div className="countdown_tage">Sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CountDown;
