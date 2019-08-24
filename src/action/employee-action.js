import {
    FETCH_EMPLOYEE_DETAILS,
    UPDATE_EMPLOYEE_DETAILS
} from "./constants";
import axios from 'axios';

export const getAllDetails = () => dispatch => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(resp => {
            console.log(resp.data);
            dispatch({
                type: FETCH_EMPLOYEE_DETAILS,
                payload: resp.data.slice(1,10)
            })
        })
};

export const updateEmployeeData = employees => dispatch => {
    dispatch({
        type: UPDATE_EMPLOYEE_DETAILS,
        payload: employees
    })
};