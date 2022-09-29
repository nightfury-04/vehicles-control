import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../actions/auth.actions'
import { fetchVehicles } from '../actions/vehicles.actions'

function AuthLoading({ children }) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        if (auth.info) {
            dispatch(fetchUser())
            dispatch(fetchVehicles())
        }
    }, [auth.info, dispatch])

    return auth.loading ? null : children
}

export default AuthLoading
