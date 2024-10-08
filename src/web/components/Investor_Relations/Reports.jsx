import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reportDataAPI, reportSearchApi } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";

const Reports = ({ reportDataAPI, reportData, reportSearchApi, reportSearchData }) => {
  const [yearSearch, setYearSearch] = useState("All");
  const [currentReportId, setCurrentReportId] = useState(1);

  useEffect(() => {
    reportDataAPI(1);
  }, []);
  console.log(reportData.data)

  const years = reportData && reportData.data && [...new Set(reportData.data.map((q) => q.report_year))];
  //console.log(reportData.data);

  const handlesearch = (event) => {
    if (event !== 'Select year all') {
      setYearSearch(event);
      reportSearchApi({ year: event, reportId: 1 });
    }
    else {
      setYearSearch('All');
      window.location.reload();
    }
  };
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
                   Financial Report
                  </li>
                </ol>
              </nav>

              <h4>Reports</h4>

              <div className="jumbotron bg-light-orange">
                <div className="row">
                  <div className="col-md-5">
                    <h2>
                      <span className="text-orange">Financial </span>
                      <br />
                      Reports
                    </h2>
                    <p>We have been making the right investments in creating the necessary framework, technology and processes to capitalise on a new world of learning. We seek to continue the transformation growth across the entire education value chain</p>
                  </div>

                  <div className="col-md-7">
                    <div className="img-wrapper">
                      <img src="../assets/imgs/img-jumbo1.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pills">
                <Link to={WebRoutes.REPORTS} className="active">
                  Financial Reports
                </Link>
                <Link to={WebRoutes.RESEARCH_REPORT}>Research Reports</Link>
                <Link to={WebRoutes.SUBSIDIARY_MTEDUCARE}> Subsidiaries of MT Educare</Link>
                <Link to={WebRoutes.ANNUAL_REPORT}> Annual Report</Link> 
                <Link to={WebRoutes.ANNUAL_RETURN}> Annual Return</Link> 
                {/* <Link to={WebRoutes.ANN_REPORT}> Ann Report</Link>  */}
              </div>

              <div className="row">
                <div className="col-md-8">
                  <h4 className="m-0">Quarterly Financial Report For Year {yearSearch}</h4>
                </div>

                <div className="col-md-4">
                  <div className="filter-dropdown">
                    <label >Year</label>
                    <select name="year" id="dropdown" value={yearSearch} onChange={(e) => handlesearch(e.target.value)}>
                      <option defaultValue selected>

                        Select year all
                      </option>
                      {years && years.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row stories reports">
            {reportSearchData && reportSearchData.data ? (
              <>
                {reportSearchData &&
                  reportSearchData.data &&
                  reportSearchData.data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="story report">
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

                        <h5>{item.quarter_name}-{yearSearch}</h5>

                        <p>{item.quarter_code}</p>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                {reportData &&
                  reportData.data &&
                  reportData.data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="story report">
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

                        <h5>{item.quarter_name}-{item.report_year}</h5>

                        <p>{item.quarter_code}</p>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { InvestorReducer } = state;
  const { reportData, reportSearchData } = InvestorReducer;
  return {
    reportData: InvestorReducer.reportData,
    reportSearchData: InvestorReducer.reportSearchData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reportDataAPI: (data) => dispatch(reportDataAPI(1)),
    reportSearchApi: (data) => dispatch(reportSearchApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
