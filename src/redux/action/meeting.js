import axios from "axios";
import { getCommonApiHeader } from "../../Utils/utils";
import { MEETING_DATA } from "../constants";


export const meetingDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getMeetingRequest());
        axios
            .get(MEETING_DATA + '' + data, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                dispatch(getMeetingDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getMeetingRequest = data => {
    return {
        type: "MEETING_Data_REQUESTED",
    };
};

export const getMeetingDataRespond = data => {
    return {
        type: "MEETING_DATA_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "MEETING_ERROR",
        error,
    };
};
