import { combineReducers } from "redux";
import AboutReducer from "./AboutReducer";
import CategoryReducer from "./CategoryReducer";
import CommonReducer from "./CommonReducer";
import DemoVideoReducer from "./DemoVideoReducer";
import GalleryReducer from "./GalleryReducer";
import HomeReducer from "./HomeReducer";
import InvestorReducer from "./InvestorReducer";
import JobReducer from "./JobReducer";
import PolicyReducer from "./PolicyReducer";
import MeetingReducer from "./MeetingReducer";



const userReducers = {
    GalleryReducer,
    PolicyReducer,
    AboutReducer,
    InvestorReducer,
    JobReducer,
    CategoryReducer,
    CommonReducer,
    DemoVideoReducer,
    HomeReducer,
    MeetingReducer

}


const rootReducer = combineReducers({
    ...userReducers
});

export default rootReducer;