import { auth, FIREBASE_AUTH_PERSIST } from '../config/firebase'

import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    USER_SIGN_IN,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILED,
    USER_SIGN_OUT,
    CLEAR_AUTH_ERROR,
    SIGN_UP_USER,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILED,
} from './types'

const fetchUser = () => dispatch => {
    dispatch({
        type: FETCH_USER,
        payload: null,
    })

    auth.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: { info: user },
            })
        } else {
            dispatch({
                type: FETCH_USER_FAILED,
                payload: null,
            })
        }
    })
}

const signIn = (username, password) => dispatch => {
    dispatch({
        type: USER_SIGN_IN,
        payload: null,
    })

    auth.setPersistence(FIREBASE_AUTH_PERSIST)
        .then(() => {
            auth.signInWithEmailAndPassword(username, password)
                .then(user => {
                    dispatch({
                        type: USER_SIGN_IN_SUCCESS,
                        payload: user.info,
                    })
                })
                .catch(error => {
                    dispatch({
                        type: USER_SIGN_IN_FAILED,
                        payload: error,
                    })
                })
        })
        .catch(error => {
            dispatch({
                type: USER_SIGN_IN_FAILED,
                payload: error,
            })
        })
}

const signOut = () => dispatch => {
    auth.signOut().then(() => {
        dispatch({
            type: USER_SIGN_OUT,
            payload: null,
        })
    })
}

const signUp = async (email, password) => dispatch => {
    dispatch({
        type: SIGN_UP_USER,
        payload: null,
    })

    auth.createUserWithEmailAndPassword(email, password)
        .then(token => {
            dispatch({
                type: SIGN_UP_USER_SUCCESS,
                payload: token,
            })
        })
        .catch(error => {
            dispatch({
                type: SIGN_UP_USER_FAILED,
                payload: error,
            })
        })
}

const clearLoginError = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_ERROR,
        payload: null,
    })
}

export { fetchUser, signIn, signOut, signUp, clearLoginError }
