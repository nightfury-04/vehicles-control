import { FETCH_ALL_VEHICLES, FETCH_ALL_VEHICLES_SUCCESS, FETCH_ALL_VEHICLES_FAILED, DELETE_VEHICLE_SUCCESS, ADD_VEHICLE_SUCCESS } from '../actions/types'

export const INITIAL_STATE = {
    vehicles: null,
    loading: false,
    error: null,
}

const vehicles = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_VEHICLES:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ALL_VEHICLES_SUCCESS:
            return {
                ...state,
                vehicles: action.payload,
                loading: false,
            }
        case FETCH_ALL_VEHICLES_FAILED:
            return {
                ...state,
                vehicles: null,
                loading: false,
                error: action.payload,
            }
        case DELETE_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicles: action.payload,
                loading: false,
            }
        case ADD_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicles: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default vehicles
