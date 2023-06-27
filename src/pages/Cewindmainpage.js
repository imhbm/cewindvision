import { useCallback } from "react";
import "./Cewindmainpage.css";
const Cewindmainpage = () => {
  const onSubmitContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='dashboardContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGetquotebuttonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='map']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="cewindmainpage">
      <div className="header">
        <div className="about">
          <div className="about1">ABOUT</div>
        </div>
        <div className="how-it-works">
          <div className="how-it-works1">HOW IT WORKS</div>
        </div>
        <div className="contact">
          <div className="about1">CONTACT</div>
        </div>
      </div>
      <div className="footercard">
        <div className="media" />
        <div className="card-header">
          <div className="content">
            <div className="visualmedia" />
            <div className="text">
              <div className="card-title">Card title</div>
              <div className="secondary-text">Secondary text</div>
            </div>
          </div>
          <img
            className="navigationexpand-more-icon"
            alt=""
            src="/navigationexpand-more.svg"
          />
        </div>
        <div className="content-area">
          <div className="greyhound-divisively-hello">
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </div>
        </div>
        <div className="card-action-area">
          <div className="text-buttons">
            <div className="button">
              <div className="text-label">Button</div>
            </div>
            <div className="button">
              <div className="text-label">Button</div>
            </div>
          </div>
          <div className="icon-buttons">
            <img
              className="actionfavorite-border-icon"
              alt=""
              src="/actionfavorite-border.svg"
            />
            <img
              className="actionfavorite-border-icon"
              alt=""
              src="/navigationmore-vert.svg"
            />
          </div>
        </div>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="vector-icon3" alt="" src="/vector.svg" />
      <img className="vector-icon4" alt="" src="/vector3.svg" />
      <img className="vector-icon5" alt="" src="/vector4.svg" />
      <img className="vector-icon6" alt="" src="/vector5.svg" />
      <img className="vector-icon7" alt="" src="/vector6.svg" />
      <img className="vector-icon8" alt="" src="/vector7.svg" />
      <img className="vector-icon9" alt="" src="/vector8.svg" />
      <img className="vector-icon10" alt="" src="/vector9.svg" />
      <img className="vector-icon11" alt="" src="/vector10.svg" />
      <img className="vector-icon12" alt="" src="/vector11.svg" />
      <img className="vector-icon13" alt="" src="/vector11.svg" />
      <img className="vector-icon14" alt="" src="/vector12.svg" />
      <img className="vector-icon15" alt="" src="/vector13.svg" />
      <img className="vector-icon16" alt="" src="/vector14.svg" />
      <img className="vector-icon17" alt="" src="/vector15.svg" />
      <img className="vector-icon18" alt="" src="/vector16.svg" />
      <img className="vector-icon19" alt="" src="/vector17.svg" />
      <img className="vector-icon20" alt="" src="/vector18.svg" />
      <img className="vector-icon21" alt="" src="/vector19.svg" />
      <img className="vector-icon22" alt="" src="/vector20.svg" />
      <img className="vector-icon23" alt="" src="/vector21.svg" />
      <img className="vector-icon24" alt="" src="/vector22.svg" />
      <img className="vector-icon25" alt="" src="/vector23.svg" />
      <img className="vector-icon26" alt="" src="/vector24.svg" />
      <img className="vector-icon27" alt="" src="/vector25.svg" />
      <img className="vector-icon28" alt="" src="/vector21.svg" />
      <img className="vector-icon29" alt="" src="/vector26.svg" />
      <img className="vector-icon30" alt="" src="/vector27.svg" />
      <img className="vector-icon31" alt="" src="/vector28.svg" />
      <img className="map-icon" alt="" src="/map.svg" data-scroll-to="map" />
      <div className="dashboard" data-scroll-to="dashboardContainer">
        <div className="graph01">
          <div className="top">
            <div className="chart-text">Chart Text</div>
            <div className="legend">
              <img className="legend-child" alt="" src="/vector-12.svg" />
              <div className="chart-text">Ipsum</div>
            </div>
          </div>
          <div className="graph">
            <div className="left-side-y-axis">
              <div className="y-axis-items">
                <div className="axisitem">
                  <div className="chart-text">5000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">4000</div>
                  <img className="axisitem-child" alt="" src="/vector-81.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">3000</div>
                  <img className="axisitem-child" alt="" src="/vector-82.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">2000</div>
                  <img className="axisitem-child" alt="" src="/vector-83.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">1000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
              </div>
              <img className="y-axis-line" alt="" src="/y-axis-line.svg" />
            </div>
            <div className="right-side-graph-and-x-axis">
              <div className="line-graph">
                <img className="line-graph-child" alt="" src="/vector-11.svg" />
              </div>
              <div className="x-axis">
                <img className="x-axis-line" alt="" src="/x-axis-line.svg" />
                <div className="top">
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Mon</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-85.svg"
                    />
                    <div className="chart-text">Tue</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-86.svg"
                    />
                    <div className="chart-text">Wed</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Thu</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-87.svg"
                    />
                    <div className="chart-text">Fri</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-88.svg"
                    />
                    <div className="chart-text">Sat</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-89.svg"
                    />
                    <div className="chart-text">Sun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="graph02">
          <div className="top">
            <div className="chart-text">Chart Text</div>
            <div className="legend">
              <img className="legend-child" alt="" src="/vector-12.svg" />
              <div className="chart-text">Ipsum</div>
            </div>
          </div>
          <div className="graph">
            <div className="left-side-y-axis">
              <div className="y-axis-items">
                <div className="axisitem">
                  <div className="chart-text">5000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">4000</div>
                  <img className="axisitem-child" alt="" src="/vector-83.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">3000</div>
                  <img className="axisitem-child" alt="" src="/vector-82.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">2000</div>
                  <img className="axisitem-child" alt="" src="/vector-81.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">1000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
              </div>
              <img className="y-axis-line" alt="" src="/y-axis-line1.svg" />
            </div>
            <div className="right-side-graph-and-x-axis">
              <div className="line-graph">
                <img
                  className="line-graph-child"
                  alt=""
                  src="/vector-111.svg"
                />
              </div>
              <div className="x-axis">
                <img className="x-axis-line" alt="" src="/x-axis-line.svg" />
                <div className="top">
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Mon</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-810.svg"
                    />
                    <div className="chart-text">Tue</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-86.svg"
                    />
                    <div className="chart-text">Wed</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Thu</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-87.svg"
                    />
                    <div className="chart-text">Fri</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-88.svg"
                    />
                    <div className="chart-text">Sat</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-89.svg"
                    />
                    <div className="chart-text">Sun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="graph03">
          <div className="top">
            <div className="chart-text">Chart Text</div>
            <div className="legend">
              <img className="legend-child" alt="" src="/vector-12.svg" />
              <div className="chart-text">Ipsum</div>
            </div>
          </div>
          <div className="graph">
            <div className="left-side-y-axis">
              <div className="y-axis-items">
                <div className="axisitem">
                  <div className="chart-text">5000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">4000</div>
                  <img className="axisitem-child" alt="" src="/vector-83.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">3000</div>
                  <img className="axisitem-child" alt="" src="/vector-82.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">2000</div>
                  <img className="axisitem-child" alt="" src="/vector-81.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">1000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
              </div>
              <img className="y-axis-line" alt="" src="/y-axis-line1.svg" />
            </div>
            <div className="right-side-graph-and-x-axis">
              <div className="line-graph">
                <img
                  className="line-graph-child"
                  alt=""
                  src="/vector-111.svg"
                />
              </div>
              <div className="x-axis">
                <img className="x-axis-line" alt="" src="/x-axis-line.svg" />
                <div className="top">
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Mon</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-85.svg"
                    />
                    <div className="chart-text">Tue</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-86.svg"
                    />
                    <div className="chart-text">Wed</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Thu</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-87.svg"
                    />
                    <div className="chart-text">Fri</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-88.svg"
                    />
                    <div className="chart-text">Sat</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-89.svg"
                    />
                    <div className="chart-text">Sun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="graph04">
          <div className="top">
            <div className="chart-text">Chart Text</div>
            <div className="legend">
              <img className="legend-child" alt="" src="/vector-12.svg" />
              <div className="chart-text">Ipsum</div>
            </div>
          </div>
          <div className="graph">
            <div className="left-side-y-axis">
              <div className="y-axis-items">
                <div className="axisitem">
                  <div className="chart-text">5000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">4000</div>
                  <img className="axisitem-child" alt="" src="/vector-83.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">3000</div>
                  <img className="axisitem-child" alt="" src="/vector-82.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">2000</div>
                  <img className="axisitem-child" alt="" src="/vector-81.svg" />
                </div>
                <div className="axisitem">
                  <div className="chart-text">1000</div>
                  <img className="axisitem-child" alt="" src="/vector-8.svg" />
                </div>
              </div>
              <img className="y-axis-line" alt="" src="/y-axis-line1.svg" />
            </div>
            <div className="right-side-graph-and-x-axis">
              <div className="line-graph">
                <img
                  className="line-graph-child"
                  alt=""
                  src="/vector-111.svg"
                />
              </div>
              <div className="x-axis">
                <img className="x-axis-line" alt="" src="/x-axis-line.svg" />
                <div className="top">
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Mon</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-810.svg"
                    />
                    <div className="chart-text">Tue</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-86.svg"
                    />
                    <div className="chart-text">Wed</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-84.svg"
                    />
                    <div className="chart-text">Thu</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-87.svg"
                    />
                    <div className="chart-text">Fri</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-88.svg"
                    />
                    <div className="chart-text">Sat</div>
                  </div>
                  <div className="axisitem5">
                    <img
                      className="axisitem-child3"
                      alt=""
                      src="/vector-89.svg"
                    />
                    <div className="chart-text">Sun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="download-boucher">
          <div className="download-boucher-child" />
          <b className="button2">Download the Boucher</b>
        </div>
      </div>
      <div className="offercard">
        <div className="frame-parent">
          <div className="image-528-wrapper">
            <img className="image-528-icon" alt="" src="/image-528@2x.png" />
          </div>
          <div className="service-charge-free-for-a-year-wrapper">
            <b className="service-charge-free">
              {" "}
              service charge free for a Year
            </b>
          </div>
          <div className="online-service-request-and-ext-wrapper">
            <div className="online-service-request">
              Online service request and extension is available on one click
            </div>
          </div>
        </div>
        <div className="day-terms">
          <div className="image-528-container">
            <img className="image-528-icon" alt="" src="/image-5281@2x.png" />
          </div>
          <div className="generate-power-guaranty-wrapper">
            <b className="service-charge-free">{`Generate Power Guaranty  `}</b>
          </div>
          <div className="guaranty-power-generation-thro-wrapper">
            <div className="guaranty-power-generation">
              guaranty power generation through OPL tool
            </div>
          </div>
        </div>
        <div className="image-528-frame">
          <img className="image-528-icon" alt="" src="/image-5281@2x.png" />
        </div>
        <div className="save-money-wrapper">
          <b className="service-charge-free">Save Money</b>
        </div>
        <div className="in-long-term-you-will-save-mon-wrapper">
          <div className="in-long-term">In long term you will save money.</div>
        </div>
      </div>
      <div className="latlang">
        <div className="findloc">
          <div className="latinputbox">
            <div className="lat">Lat..</div>
          </div>
          <div className="langtextbox">
            <div className="lat">Lang..</div>
          </div>
          <div className="submit" onClick={onSubmitContainerClick}>
            <div className="button3">submit</div>
            <img
              className="fether-icons-arrow-right-circ"
              alt=""
              src="/fether-icons-arrowrightcircle.svg"
            />
          </div>
        </div>
      </div>
      <div className="heroframe">
        <div className="heroframe-inner">
          <div className="save-cost-earth-more-smartwa-wrapper">
            <b className="save-cost-container">
              <p className="save-cost-earth">
                <span className="save">Save</span>
                <span className="cost-earth">{` Cost & Earth`}</span>
              </p>
              <p className="more-smartway">more SMARTWAY</p>
            </b>
          </div>
        </div>
        <div className="heroframe-child" />
        <div className="frame-div">
          <div className="vector-wrapper">
            <img className="frame-child" alt="" src="/ellipse-787.svg" />
          </div>
        </div>
        <img
          className="windturbineimg-icon"
          alt=""
          src="/windturbineimg@2x.png"
        />
        <div className="meet-the-only">
          Meet the only way to save environment
        </div>
        <button className="getquotebutton" onClick={onGetquotebuttonClick}>
          <img className="vector-icon32" alt="" src="/vector29.svg" />
        </button>
        <div className="get-your-quote">Get your Quote For Turbine</div>
      </div>
    </div>
  );
};

export default Cewindmainpage;
