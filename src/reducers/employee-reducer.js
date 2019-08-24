import {
    FETCH_EMPLOYEE_DETAILS,
    UPDATE_EMPLOYEE_DETAILS
} from "../action/constants";

const initialState = {
    employeeData: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_DETAILS:
            return { ...state, employeeData: action.payload };
        case UPDATE_EMPLOYEE_DETAILS:
            return { ...state, employeeData: action.payload };
        default:
            return state;
    }
}