const initState = {
    meetingData: [],
    error: null
};
const MeetingReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
       
        case "MEETING_DATA_RESPONSE":
            return {
                ...state,
                meetingData: data,
            };
          
        case "MEETINGF_ERROR":
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
};
export default MeetingReducer;

