import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteVehicle } from '../actions/vehicles.actions'
import { Breadcrumbs, Card, CardMedia, Container, Grid, Link, InputAdornment, TextField, Typography, IconButton } from '@mui/material'
import { Search as SearchIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { makeStyles } from 'tss-react/mui'
import { vehicleCard } from '../assets/styles'

const useStyles = makeStyles()(vehicleCard)

function Home() {
    const vehiclesdata = useSelector(state => state.vehiclesdata)
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        if (vehiclesdata.vehicles) {
            setVehicles(vehiclesdata.vehicles)
        }
    }, [vehiclesdata.vehicles])

    return vehiclesdata.loading ? null : (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label='breadcrumb' style={{ marginBottom: 0 }}>
                        <Link color='inherit' href='/'>
                            Vehicles
                        </Link>
                        <Link color='inherit' href='/add-vehicle'>
                            Add vehicle
                        </Link>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        margin='dense'
                        id='filter'
                        name='filter'
                        label='Búsqueda'
                        fullWidth
                        onChange={e => {
                            const arr = vehiclesdata.vehicles.filter(data =>
                                Object.values({ brand: data.brand, model: data.model, year: data.year })
                                    .join(' ')
                                    .toLowerCase()
                                    .includes(e.target.value.toLowerCase()),
                            )
                            setVehicles(arr)
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                {vehicles.map(data => (
                    <Grid item xs={12} md={3} key={data.id}>
                        <VehicleCard {...data} />
                        <Typography textAlign='center'>
                            {data.brand} {data.model} {data.year}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

function VehicleCard(props) {
    const dispatch = useDispatch()
    const { classes } = useStyles()

    const onClick = id => {
        new Promise(resolve => {
            resolve()
            dispatch(deleteVehicle(id))
        })
    }

    return (
        <Card variant='outlined' className={classes.card}>
            <CardMedia component='img' height='100%' image={props.frontPictureURL} alt='Paella dish' />
            <IconButton className={classes.deleteButton} onClick={() => onClick(props.id)}>
                <DeleteIcon />
            </IconButton>
        </Card>
    )
}

export default Home
