import colors from './colors'

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
