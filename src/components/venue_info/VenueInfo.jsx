import React from "react";
import icon_calender from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          {/* Vn Item Start */}

          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red">
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_calender})`
                      }}
                    >
                      bo
                    </div>
                    <div className="vn_title">Event Date & Time</div>

                    <div className="vn_desc">26th Feb 2019 @10:00a.m</div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          {/* Vn Item End */}

          {/* Vn Item Start */}

          <Zoom duration={500} delay={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow">
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  >
                    bo
                  </div>
                  <div className="vn_title">Event Date & Time</div>

                  <div className="vn_desc">26th Feb 2019 @10:00a.m</div>
                </div>
              </div>
            </div>
          </div>
            </Zoom>



          {/* Vn Item End */}
        </div>
        <div />
      </div>
    </div>
  );
};

export default VenueInfo;
