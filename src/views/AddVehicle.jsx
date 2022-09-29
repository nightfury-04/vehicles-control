import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SelectImage from '../components/SelectImage'
import { addVehicle } from '../actions/vehicles.actions'
import { Container, Box, TextField, Button, Grid, Breadcrumbs, Link } from '@mui/material'

const AddVehicle = () => {
    const dispatch = useDispatch()
    const [vehicleInfo, setVehicleInfo] = useState({})
    const history = useHistory()

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
            <Breadcrumbs aria-label='breadcrumb' style={{ marginTop: '24px' }}>
                <Link color='inherit' href='/'>
                    Home
                </Link>
            </Breadcrumbs>
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
            <form onSubmit={onSubmit}>
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
                        <TextField
                            id='brand'
                            name='brand'
                            label='Marca'
                            variant='outlined'
                            type='text'
                            fullWidth
                            style={{ margin: '10px' }}
                            required
                            onChange={handleChange}
                        />
                        <TextField
                            id='model'
                            name='model'
                            label='Modelo'
                            variant='outlined'
                            type='text'
                            fullWidth
                            style={{ margin: '10px' }}
                            required
                            onChange={handleChange}
                        />
                        <TextField
                            id='year'
                            name='year'
                            label='Año'
                            variant='outlined'
                            type='number'
                            fullWidth
                            style={{ margin: '10px' }}
                            required
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Box style={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
                    <Button variant='contained' style={{ height: '40px', width: 'auto' }} type='submit'>
                        Añadir vehículo
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default AddVehicle
