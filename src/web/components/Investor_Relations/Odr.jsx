import React from "react";

import { Link } from "react-router-dom";
function Odr() {
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
                    Investor Presentations
                  </li>
                </ol>
              </nav>

              <h4>ODR Portal</h4>

              <div className="jumbotron bg-light-orange">
                <div className="row text-orange">
                    <ul>
                        <li >
                           <a href="https://smartodr.in/login" > Click here for link to access ODR Portal</a>
                        </li>
                        <li >
                           <a href="https://www.bharatpetroleum.in/bharat-petroleum-for/Investors/SEBI%20Circular%20dated%20July%2031,%202023%20on%20Online%20Resolution%20of%20disputes%20in%20Securities%20Market%20(ODR).pdf" target="blank"  > Click here for SEBI Circular dated July 31, 2023 on Online Resolution of disputes in Securities Market (ODR)</a>
                        </li>
                        <li >
                           <a href="https://www.bharatpetroleum.in/bharat-petroleum-for/Investors/SEBI%20Circular%20dated%20August%2004,%202023%20on%20Corrigendum%20cum%20Amendment%20to%20SEBI%20Circular%20dated%20July%2031,%202023.pdf" target="blank" >Click here for SEBI Circular dated August 04, 2023 on Corrigendum cum Amendment to SEBI Circular dated July 31, 2023</a>
                        </li>
                        <li >
                           <a href="https://www.bharatpetroleum.in/bharat-petroleum-for/Investors/SEBI%20Circular%20dated%20September%2020,%202023%20on%20Redressal%20of%20investor%20grievances%20through%20the%20SEBI%20Complaint%20Redressal%20(SCORES)%20Platform%20and%20linking%20it%20to%20Online%20Dispute%20Resolution%20platform.pdf" target="blank" >Click here for SEBI Circular dated September 20, 2023 on Redressal of investor grievances through the SEBI Complaint Redressal (SCORES) Platform and linking it to Online Dispute Resolution platform</a>
                        </li>
                        
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Odr
