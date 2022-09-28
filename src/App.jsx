import { Provider } from 'react-redux'
import { store } from './reducers/store'
import { fetchUser } from './actions/auth.actions'
import AuthLoading from './components/AuthLoading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

// VIEWS
import Home from './views/Home'
import AddVehicle from './views/AddVehicle'
import Login from './views/Login'

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
                    </Switch>
                </Router>
            </AuthLoading>
        </Provider>
    )
}

export default App
