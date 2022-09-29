import colors from './colors'

const login = theme => ({
    buttonSignUp: {
        backgroundColor: '#00BBEE',
        [theme.breakpoints.down('xs')]: {
            height: '20px',
            width: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '40px',
            width: '150px',
        },
        '@media (min-width: 1280px)': {
            height: '40px',
            width: '150px',
        },
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'right',
            margin: '15px 0',
        },
    },
    title: {
        fontSize: '32px',
        padding: '25px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            padding: '20px',
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

export { vehicleCard }
export { login }
