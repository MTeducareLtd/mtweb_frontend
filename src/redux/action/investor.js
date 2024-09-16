import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { CORPORATE_LIST, INVESTOR_LIST, RELEASE_DATA, REPORT_DATA, MEDIA_LIST, INVESTOR_SEARCH_API, REPORT_SEARCH_API, ANNUAL_REPORT_DATA , RETURN_SEARCH_API, ANNUAL_RETURN_DATA } from "../constants";

export const CorporateDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(CORPORATE_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getCorporateDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const annualReportDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(ANNUAL_REPORT_DATA, + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getAnnualReportDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
         
    };
}

export const annualReturnDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(ANNUAL_RETURN_DATA, + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getAnnualReturnDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
         
    };
}

export const investorDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(INVESTOR_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getInvestorDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const releaseDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(RELEASE_DATA + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getReleaseDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const reportDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(REPORT_DATA + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getReportDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
         
    };
}



export const mediaListApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(MEDIA_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getMediaDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const investorSearchApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .post(INVESTOR_SEARCH_API, data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getInvestorSearchDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const reportSearchApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .post(REPORT_SEARCH_API, data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getReportSearchDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const returnSearchApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .post(RETURN_SEARCH_API, data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getReturnSearchDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getReportSearchDataRespond = data => {
    return {
        type: "REPORT_SERACH_Data_RESPONSE",
        data: data,
    };
};

export const getInvestorRequest = data => {
    return {
        type: "INVESTOR_Data_REQUESTED",
    };
};

export const getInvestorDataRespond = data => {
    return {
        type: "INVESTOR_DATA_RESPONSE",
        data: data,
    };
};

export const getMediaDataRespond = data => {
    return {
        type: "MEDIA_DATA_RESPONSE",
        data: data,
    };
};

export const getInvestorSearchDataRespond = data => {
    return {
        type: "INVESTOR_SEARCH_DATA_RESPONSE",
        data: data,
    };
};

export const getReturnSearchDataRespond = data => {
    return {
        type: "RETURN_SEARCH_DATA_RESPONSE",
        data: data,
    };
};
export const getCorporateDataRespond = data => {
    return {
        type: "CORPORATE_DATA_RESPONSE",
        data: data,
    };
};

export const getReleaseDataRespond = data => {
    return {
        type: "RELEASE_DATA_RESPONSE",
        data: data,
    };
};

export const getReportDataRespond = data => {
    return {
        type: "REPORT_DATA_RESPONSE",
        data: data,
    };
};

export const getAnnualReportDataRespond = data => {
    return {
        type: "ANNUAL_REPORT_DATA_RESPONSE",
        data: data,
    };
};

export const getAnnualReturnDataRespond = data => {
    return {
        type: "ANNUAL_RETURN_DATA_RESPONSE",
        data: data,
    };
};


export const handleError = error => {
    return {
        type: "INVESTOR_ERROR",
        error,
    };
};
