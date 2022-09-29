import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute({ title, component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    return <Route {...rest} render={props => (auth.info ? <Component {...props} /> : <Redirect to='/login' />)} />
}

export default ProtectedRoute
