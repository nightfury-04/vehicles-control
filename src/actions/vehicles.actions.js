import { vehiclesRef } from '../config/firebase'
import {
    FETCH_ALL_VEHICLES,
    FETCH_ALL_VEHICLES_SUCCESS,
    FETCH_ALL_VEHICLES_FAILED,
    DELETE_VEHICLE,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAILED,
    ADD_VEHICLE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAILED,
} from './types'

const fetchVehicles = () => dispatch => {
    dispatch({
        type: FETCH_ALL_VEHICLES,
        payload: null,
    })

    vehiclesRef
        .get()
        .then(snapshot => {
            const vehicles = []
            snapshot.forEach(doc => {
                vehicles.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })
            dispatch({
                type: FETCH_ALL_VEHICLES_SUCCESS,
                payload: vehicles,
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_ALL_VEHICLES_FAILED,
                payload: error,
            })
        })
}

const deleteVehicle = id => dispatch => {
    dispatch({
        type: DELETE_VEHICLE,
        payload: id,
    })

    vehiclesRef
        .doc(id)
        .delete()
        .then(() => {
            vehiclesRef.get().then(snapshot => {
                const vehicles = []
                snapshot.forEach(doc => {
                    if (doc.id !== id)
                        vehicles.push({
                            id: doc.id,
                            ...doc.data(),
                        })
                })
                dispatch({
                    type: DELETE_VEHICLE_SUCCESS,
                    payload: vehicles,
                })
            })
        })
        .catch(error => {
            dispatch({
                type: DELETE_VEHICLE_FAILED,
                payload: error,
            })
        })
}

const addVehicle = vehicle => dispatch => {
    dispatch({
        type: ADD_VEHICLE,
        payload: null,
    })

    vehiclesRef
        .add({ ...vehicle, deleted: false, timestamp: new Date().getTime() })
        .then(() => {
            vehiclesRef.get().then(snapshot => {
                const vehicles = []
                snapshot.forEach(doc => {
                    vehicles.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                })
                dispatch({
                    type: ADD_VEHICLE_SUCCESS,
                    payload: vehicles,
                })
            })
        })
        .catch(error => {
            dispatch({
                type: ADD_VEHICLE_FAILED,
                payload: error,
            })
        })
}

export { fetchVehicles, deleteVehicle, addVehicle }
