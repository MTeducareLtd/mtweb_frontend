import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { meetingDataAPI } from "../../../redux/action/meeting";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";

const Meeting = ({ meetingDataAPI, meetingData }) => {
  useEffect(() => {
    meetingDataAPI(1);
  }, []);
  console.log(meetingData.data);
  return (
    <>
      <section className="cards terms" id="privacy-policy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                   Board Meeting
                  </li>
                </ol>
              </nav>

              <h4>Board Meeting</h4>

              <div className="pills">
                <Link to={WebRoutes.BOARD_MEETING} className="active">
                  Board Meeting
                </Link>
                <Link to={WebRoutes.MEMBER_MEETING}>Member Meeting</Link>
              </div>
            </div>
          </div>

          <div className="row stories">
            {meetingData &&
              meetingData.data &&
              meetingData.data.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="story">
                    <div className="download">
                      <div className="file-type">
                        <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                      </div>

                      <div className="file-link">
                        <a href={IMAGE_BASE_URL + "/" + item.file_name} download={IMAGE_BASE_URL + "/" + item.file_name} target="_blank">
                          <img src="../assets/imgs/icon-download.svg" alt="icon" />
                        </a>
                      </div>
                    </div>

                    <h5>{item.file_title}</h5>

                    <p>{item.invest_quater}</p>

                    <a href="#" className="date">
                      {item.date}
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { MeetingReducer } = state;
  const { meetingData } = MeetingReducer;
  return {
    meetingData: MeetingReducer.meetingData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    meetingDataAPI: (data) => dispatch(meetingDataAPI(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meeting);
