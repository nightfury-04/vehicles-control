import colors from './colors'

const header = theme => ({
    image: {
        width: '258px',
        [theme.breakpoints.down('md')]: {
            width: '177px',
            margin: '0 auto',
        },
    },
    header: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
})

const vehicleCard = theme => ({
    card: {
        position: 'relative',
        height: '225px',
        borderRadius: '10px',
        margin: '0 auto',
    },
    deleteButton: {
        position: 'absolute',
        color: colors.white,
        backgroundColor: colors.danger,
        right: '12px',
        top: '17px',

        '&:hover': {
            backgroundColor: colors.danger,
        },
    },
})

export { vehicleCard, header }
