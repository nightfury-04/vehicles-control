import { useState } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Grid from '@mui/material/Grid'

const AddVehicle = () => {
    /*
    const handleSubmit = e => {
        e.preventDefault()
    }
    */

    const [visibility, setVisibility] = useState(false)

    return (
        <Container>
            <h1
                style={{
                    fontSize: '32px',
                    padding: '25px',
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                }}
            >
                Añadir un vehículo
            </h1>

            <Grid container alignItems='flex-start' spacing={1}>
                <Grid
                    item
                    xs={10}
                    sm={10}
                    md={7}
                    lg={6}
                    xl={6}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        style={{
                            margin: '0 auto',
                            height: '50%',
                            width: '55%',
                        }}
                        src='/imgs/no-photo.png'
                        alt='No Photo'
                    />
                </Grid>
                <Grid item xs={12} sm={10} md={5} lg={6} xl={6}>
                    <TextField id='brand' label='Marca' variant='outlined' fullWidth style={{ margin: '10px' }} />
                    <TextField id='model' label='Modelo' variant='outlined' fullWidth style={{ margin: '10px' }} />
                    <TextField
                        id='year'
                        label='Año'
                        variant='outlined'
                        fullWidth
                        style={{ margin: '10px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='start'>
                                    <IconButton onClick={() => {}} edge='end'>
                                        {visibility ? <VisibilityOff /> : <Visibility /> && setVisibility(true)}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
            <Box style={{ display: 'flex', justifyContent: 'right', margin: '20px' }}>
                <Button variant='contained' style={{ height: '40px', width: 'auto' }}>
                    Añadir vehículo
                </Button>
            </Box>
        </Container>
    )
}

export default AddVehicle
