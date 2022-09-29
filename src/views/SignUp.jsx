import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signUp } from '../actions/auth.actions'
import { Container, Box, TextField, Button, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function SignUp(props) {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        if (auth.info) {
            props.history.push('/')
        }
    })

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        new Promise(resolve => {
            resolve()
            dispatch(signUp(email, password))
        })
    }

    return (
        <Container maxWidth='sm'>
            <h1
                style={{
                    fontSize: '32px',
                    padding: '25px',
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                }}
            >
                Crear Cuenta
            </h1>

            <form onSubmit={handleSubmit}>
                <TextField id='email' name='email' label='Correo' variant='outlined' fullWidth style={{ margin: '15px' }} onChange={handleEmailChange} />

                <TextField
                    id='password'
                    name='password'
                    label='Contraseña'
                    variant='outlined'
                    type={visibility ? 'text' : 'password'}
                    fullWidth
                    style={{ margin: '15px' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='start'>
                                <IconButton onClick={() => setVisibility(!visibility)} edge='end'>
                                    {visibility ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onChange={handlePasswordChange}
                />

                <Box style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <Button type='submit' variant='contained' style={{ height: '40px', width: '150px' }}>
                        Crear Cuenta
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default SignUp
