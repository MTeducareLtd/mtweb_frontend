import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { annualReturnDataAPI, returnSearchApi } from "../../../redux/action/investor";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import { WebRoutes } from "../../../routes";

const AnnualReturn = ({ annualReturnDataAPI, returnData, returnSearchApi, returnSearchData }) => {
  const [yearSearch, setYearSearch] = useState("All");

  useEffect(() => {
    annualReturnDataAPI();
  }, []);
 console.log(returnSearchData.data)

  const years = returnData && returnData.data && [...new Set(returnData.data.map((q) => q.report_year))];
  //console.log(reportData.data);

  const handlesearch = (event) => {
    if (event !== 'Select year all') {
      setYearSearch(event);
      returnSearchApi({ year: event });
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
                   Annual Return
                  </li>
                </ol>
              </nav>

              <h4>Returns</h4>
              <div className="jumbotron bg-light-orange">
                <div className="row">
                  <div className="col-md-5">
                    <h2>
                      <span className="text-orange">Financial </span>
                      <br />
                     Returns
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
                <Link to={WebRoutes.REPORTS} >
                  Financial Reports
                </Link>
                <Link to={WebRoutes.RESEARCH_REPORT}>Research Reports</Link>
                <Link to={WebRoutes.SUBSIDIARY_MTEDUCARE}> Subsidiaries of MT Educare</Link>
                <Link to={WebRoutes.ANNUAL_REPORT}> Annual Report</Link> 
                <Link to={WebRoutes.ANNUAL_RETURN} className="active"> Annual Return</Link>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <h4 className="m-0">Annual Return - MGT-7</h4>
                </div>

           
              </div>
            </div>
          </div>

          <div className="row stories reports">
           
                {returnData &&
                  returnData.data &&
                  returnData.data.map((item, index) => (
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
                            
                        <h5>{item.report_year}</h5>
                        <p>{item.file_desc}</p>
                        <p>{item.release_date}</p>
                      
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
  const { InvestorReducer } = state;
  const { returnData, returnSearchData } = InvestorReducer;
  return {
    returnData: InvestorReducer.returnData,
    returnSearchData: InvestorReducer.returnSearchData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    annualReturnDataAPI: (data) => dispatch(annualReturnDataAPI()),
    returnSearchApi: (data) => dispatch(returnSearchApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnualReturn);
