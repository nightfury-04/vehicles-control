import { Route } from 'react-router-dom'
import Header from './Header'

function ProtectedRoute({ title, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => (
                <Header>
                    <Component {...props} />
                </Header>
            )}
        />
    )
}

export default ProtectedRoute
