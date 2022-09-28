import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    USER_SIGN_IN,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILED,
    USER_SIGN_OUT,
    SIGN_UP_USER,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILED,
    CLEAR_AUTH_ERROR,
} from '../actions/types'

export const INITIAL_STATE = {
    info: null,
    loading: false,
    error: null,
}

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload.info,
            }
        case FETCH_USER_FAILED:
            return {
                ...state,
                info: null,
                loading: false,
                error: action.payload,
            }
        case USER_SIGN_IN:
            return {
                ...state,
                loading: true,
            }
        case USER_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload.info,
            }
        case USER_SIGN_IN_FAILED:
            return {
                ...state,
                info: null,
                loading: false,
                error: action.payload,
            }
        case USER_SIGN_OUT:
            return INITIAL_STATE
        case SIGN_UP_USER:
            return {
                ...state,
                loading: true,
            }
        case SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload.info,
            }
        case SIGN_UP_USER_FAILED:
            return {
                ...state,
                info: null,
                loading: false,
                error: action.payload,
            }
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

export default auth
