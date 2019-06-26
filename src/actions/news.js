import axios from 'axios';
//import {API_BASE} from '../config/env';

export const FETCH_MOST_VIEWED_PENDING = "FETCH_MOST_VIEWED_PENDING";
export const FETCH_MOST_VIEWED_FULLFILLED = "FETCH_MOST_VIEWED_FULLFILLED";
export const FETCH_MOST_VIEWED_REJECTED = "FETCH_MOST_VIEWED_REJECTED";

export const FETCH_MOST_SHARED_PENDING = "FETCH_MOST_SHARED_PENDING";
export const FETCH_MOST_SHARED_FULLFILLED = "FETCH_MOST_SHARED_FULLFILLED";
export const FETCH_MOST_SHARED_REJECTED = "FETCH_MOST_SHARED_REJECTED";

export const FETCH_MOST_EMAILED_PENDING = "FETCH_MOST_EMAILED_PENDING";
export const FETCH_MOST_EMAILED_FULLFILLED = "FETCH_MOST_EMAILED_FULLFILLED";
export const FETCH_MOST_EMAILED_REJECTED = "FETCH_MOST_EMAILED_REJECTED";


export function fetchMostViewed() {
    return dispatch => {
        //axios.get(`${API_BASE}/`)

        dispatch({
            type: "FETCH_MOST_VIEWED",
            payload: axios.get(`http://api.nytimes.com/svc/mostpopular/v2/mostviewed/Travel/7.json?api-key=sinzLBNIHsHKPIjDrgjR44WE35fFoWPB`)
                .then(result => result.data)
                .then(data => dispatch({
                    type: FETCH_MOST_VIEWED_FULLFILLED,
                    payload: data.results
                }))
                .catch(error => dispatch({
                    type: FETCH_MOST_VIEWED_REJECTED,
                    payload: error
                }))
        })
    }
}

export function fetchMostShared() {
    return dispatch => {
        //axios.get(`${API_BASE}/`)

        dispatch({
            type: "FETCH_MOST_SHARED",
            payload: axios.get(`http://api.nytimes.com/svc/mostpopular/v2/mostshared/Travel/7.json?api-key=sinzLBNIHsHKPIjDrgjR44WE35fFoWPB`)
                .then(result => result.data)
                .then(data => dispatch({
                    type: FETCH_MOST_SHARED_FULLFILLED,
                    payload: data.results
                }))
                .catch(error => dispatch({
                    type: FETCH_MOST_SHARED_REJECTED,
                    payload: error
                }))
        })
    }
}

export function fetchMostEmailed() {
    return dispatch => {
        //axios.get(`${API_BASE}/`)

        dispatch({
            type: "FETCH_MOST_EMAILED",
            payload: axios.get(`http://api.nytimes.com/svc/mostpopular/v2/mostshared/Travel/7.json?api-key=sinzLBNIHsHKPIjDrgjR44WE35fFoWPB`)
                .then(result => result.data)
                .then(data => dispatch({
                    type: FETCH_MOST_EMAILED_FULLFILLED,
                    payload: data.results
                }))
                .catch(error => dispatch({
                    type: FETCH_MOST_EMAILED_REJECTED,
                    payload: error
                }))
        })
    }
}