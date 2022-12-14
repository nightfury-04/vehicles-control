import { Provider } from 'react-redux'
import { store } from './reducers/store'
import { fetchUser } from './actions/auth.actions'
import AuthLoading from './components/AuthLoading'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Route from './components/UnProtectedRoute'

// VIEWS
import Home from './views/Home'
import AddVehicle from './views/AddVehicle'
import Login from './views/Login'
import SignUp from './views/SignUp'

function App() {
    store.dispatch(fetchUser())
    return (
        <Provider store={store}>
            <AuthLoading>
                <Router>
                    <Switch>
                        <ProtectedRoute exact component={Home} path='/' />
                        <ProtectedRoute exact component={AddVehicle} path='/add-vehicle' />
                        <Route component={Login} path='/login' />
                        <Route component={SignUp} path='/signup' />
                    </Switch>
                </Router>
            </AuthLoading>
        </Provider>
    )
}

export default App
