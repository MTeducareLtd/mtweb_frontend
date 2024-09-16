import React, { Suspense} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebRoutes } from "./routes";
import ScrollToTop from "./web/components/ScrollToTop";
import Dashboard from "./web/components/Dashboard";
import CompetativeExam from "./web/components/Courses/CompetativeExams";
import College from "./web/components/Courses/Colleges";
import School from "./web/components/Courses/School";
import Center from "./web/components/AboutUs/OurCenters";
import About from "./web/components/AboutUs/About";
import BoardOfDirectors from "./web/components/AboutUs/BoardOfDirectors";
import KeyManagement from "./web/components/AboutUs/KeyManagement";
import BoardCommittee from "./web/components/AboutUs/BoardCommittee";
import AwardsRecognition from "./web/components/AboutUs/AwardsRecognition";
import CorporateGovernance from "./web/components/Investor_Relations/Corporate-governance";
import InvestorPresentations from "./web/components/Investor_Relations/Investor-presentations";
import PressRelease from "./web/components/Investor_Relations/Press-releases";
import PostalBallot from "./web/components/Investor_Relations/Postal-ballot";
import StatuoryCommunication from "./web/components/Investor_Relations/Statuory-communications";
import ShareholdingPattern from "./web/components/Investor_Relations/Shareholding-pattern";
import Reports from "./web/components/Investor_Relations/Reports";
import Csr from "./web/components/OtherPages/Csr";
import Media from "./web/components/OtherPages/Media";
import VideoGallary from "./web/components/Gallary/Video-gallary";
import PhotoGallary from "./web/components/Gallary/Photo-gallary";
import GallaryGrid from "./web/components/Gallary/Gallary-grid";
import TermService from "./web/components/Term_Policies/Term-of-services";
import PrivacyPolicy from "./web/components/Term_Policies/Privacy-Policy";
import Disclaimer from "./web/components/Term_Policies/Disclaimer";
import Career from "./web/components/OtherPages/Career";
import ResearchReport from "./web/components/Investor_Relations/ResearchReport";
import SubsidiaryMt from "./web/components/Investor_Relations/Subsidiary-mt";
import CareerDetails from "./web/components/OtherPages/CareerDetails";
import Enquiry from "./web/components/modal/Enquiry";
import AwardDetails from "./web/components/AboutUs/AwardDetails";
import AnnualReport from "./web/components/Investor_Relations/AnnualReport";
import Meeting from "./web/components/Investor_Relations/Meeting";
import BaseDashboard from "./web/components";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AnnualReturn from "./web/components/Investor_Relations/AnnualReturn";
import MemberMeeting from "./web/components/Investor_Relations/MemberMeeting";
import CIRP from "./web/components/Investor_Relations/CIRP";
import Odr from "./web/components/Investor_Relations/Odr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <BaseDashboard />
              </Suspense>
            }
          >
            <Route path={WebRoutes.DASHBOARD} element={<Dashboard />} />

            <Route path={WebRoutes.COMPETATIVE_EXAM} element={<CompetativeExam />} />

            <Route path={WebRoutes.COLLEGE} element={<College />} />

            <Route path={WebRoutes.SCHOOL} element={<School />} />

            <Route path={WebRoutes.CENTERS} element={<Center />} />

            <Route path={WebRoutes.ABOUT_US} element={<About />} />

            <Route path={WebRoutes.BOARD_DIRECTORS} element={<BoardOfDirectors />} />

            <Route path={WebRoutes.KEY_MANAGEMENT} element={<KeyManagement />} />

            <Route path={WebRoutes.BOARD_COMMITTEE} element={<BoardCommittee />} />

            <Route path={WebRoutes.AWARD_RECOGNITION} element={<AwardsRecognition />} />

            <Route path={WebRoutes.AWARD_DETAIL} element={<AwardDetails />} />

            <Route path={WebRoutes.CORPORATE_GOVERNANCE} element={<CorporateGovernance />} />

            <Route path={WebRoutes.INVESTOR_PRESENTATIONS} element={<InvestorPresentations />} />

            <Route path={WebRoutes.PRESS_RELEASE} element={<PressRelease />} />

            <Route path={WebRoutes.POSTAL_BALLOT} element={<PostalBallot />} />

            <Route path={WebRoutes.STATUTORY_COMMUNICATION} element={<StatuoryCommunication />} />
           
           <Route path={WebRoutes.CIRP} element={<CIRP />}  />

            <Route path={WebRoutes.SHAREHOLDING_PATTERN} element={<ShareholdingPattern />} />

            <Route path={WebRoutes.REPORTS} element={<Reports />} />

            <Route path={WebRoutes.ANNUAL_REPORT} element={<AnnualReport />} />

            <Route path={WebRoutes.ANNUAL_RETURN} element={<AnnualReturn />} />

            <Route path={WebRoutes.RESEARCH_REPORT} element={<ResearchReport />} />

            <Route path={WebRoutes.BOARD_MEETING} element={<Meeting />} />

            <Route path={WebRoutes.MEMBER_MEETING} element={<MemberMeeting />} />
             
            <Route path ={WebRoutes.SUBSIDIARY_MTEDUCARE} element={<SubsidiaryMt />} />

            <Route path={WebRoutes.PHOTO_GALLARY} element={<PhotoGallary />} />

            <Route path={WebRoutes.VIDEO_GALLARY} element={<VideoGallary />} />

            <Route path={`${WebRoutes.GALLARY_GRID}:id`} element={<GallaryGrid />} />

            <Route path={WebRoutes.CSR} element={<Csr />} />

            <Route path={WebRoutes.MEDIA} element={<Media />} />

            <Route path={WebRoutes.TERMS_SERVICE} element={<TermService />} />

            <Route path={WebRoutes.PRIVACY_POLICY} element={<PrivacyPolicy />} />

            <Route path={WebRoutes.DISCLAIMER} element={<Disclaimer />} />

            <Route path={WebRoutes.CAREER} element={<Career />} />

            <Route path={WebRoutes.ODR} element={<Odr/>} />

            <Route path={`${WebRoutes.CAREER_DETAILS}:id`} element={<CareerDetails />} />
          </Route>
        </Routes>
      </ScrollToTop></BrowserRouter>
     
    </div>
  );
}

export default App;
