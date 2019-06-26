import {
    FETCH_MOST_VIEWED_PENDING,
    FETCH_MOST_VIEWED_FULLFILLED,
    FETCH_MOST_VIEWED_REJECTED,

    FETCH_MOST_SHARED_PENDING,
    FETCH_MOST_SHARED_FULLFILLED,
    FETCH_MOST_SHARED_REJECTED,

    FETCH_MOST_EMAILED_PENDING,
    FETCH_MOST_EMAILED_FULLFILLED,
    FETCH_MOST_EMAILED_REJECTED
} from "../actions/news";

const initialState = {
    fetching: false,
    news: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOST_VIEWED_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_MOST_VIEWED_FULLFILLED:
            return {
                ...state,
                news: action.payload,
                fetching: false
            };
        case FETCH_MOST_VIEWED_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        case FETCH_MOST_SHARED_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_MOST_SHARED_FULLFILLED:
            return {
                ...state,
                news: action.payload,
                fetching: false
            };
        case FETCH_MOST_SHARED_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        case FETCH_MOST_EMAILED_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_MOST_EMAILED_FULLFILLED:
            return {
                ...state,
                news: action.payload,
                fetching: false
            };
        case FETCH_MOST_EMAILED_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}