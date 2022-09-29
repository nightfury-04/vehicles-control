import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SelectImage from '../components/SelectImage'
import { addVehicle } from '../actions/vehicles.actions'
import { Container, Box, TextField, Button, IconButton, InputAdornment, Grid } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const AddVehicle = () => {
    const dispatch = useDispatch()
    const [vehicleInfo, setVehicleInfo] = useState({})
    const history = useHistory()
    const [visibility, setVisibility] = useState(false)

    const [, setImage, SelectImageComponent] = SelectImage({
        onChange: url => {
            setVehicleInfo({ ...vehicleInfo, frontPictureURL: url })
        },
    })

    useEffect(() => {
        setImage('/imgs/no-photo.png')
    }, [])

    useEffect(() => {
        if (vehicleInfo.frontPictureURL) {
            setImage(vehicleInfo.frontPictureURL)
        }
    }, [vehicleInfo.frontPictureURL, setImage])

    const onSubmit = e => {
        console.log('holi')
        e.preventDefault()
        new Promise(resolve => {
            resolve()
            dispatch(addVehicle(vehicleInfo))
            history.push('/')
        })
    }

    const handleChange = e => {
        setVehicleInfo({
            ...vehicleInfo,
            [e.target.name]: e.target.value,
        })
    }

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

            <Grid container alignItems='flex-start' spacing={0}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SelectImageComponent />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id='brand' name='brand' label='Marca' variant='outlined' fullWidth style={{ margin: '10px' }} onChange={handleChange} />
                    <TextField id='model' name='model' label='Modelo' variant='outlined' fullWidth style={{ margin: '10px' }} onChange={handleChange} />
                    <TextField
                        id='year'
                        name='year'
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
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Box style={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
                <Button variant='contained' style={{ height: '40px', width: 'auto' }} type='submit' form='add-vehicle'>
                    Añadir vehículo
                </Button>
            </Box>
            <form id='add-vehicle' onSubmit={onSubmit}></form>
        </Container>
    )
}

export default AddVehicle
