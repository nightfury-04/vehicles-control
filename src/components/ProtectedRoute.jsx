import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'

function ProtectedRoute({ title, component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    return (
        <Route
            {...rest}
            render={props =>
                auth.info ? (
                    <Header>
                        <Component {...props} />
                    </Header>
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    )
}

export default ProtectedRoute
