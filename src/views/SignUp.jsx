import { useState } from 'react'

import { Container, Box, TextField, Button, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function SignUp() {
    const handleSubmit = e => {
        e.preventDefault()
    }
    const [visibility, setVisibility] = useState(false)

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
                <TextField id='email' label='Correo' variant='outlined' fullWidth style={{ margin: '15px' }} />

                <TextField
                    id='password'
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
                />

                <Box style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <Button variant='contained' style={{ height: '40px', width: '150px' }}>
                        Crear Cuenta
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default SignUp
