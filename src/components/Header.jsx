import { Container, Divider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { makeStyles } from 'tss-react/mui'
import { header } from '../assets/styles'

const useStyles = makeStyles()(header)

function Header({ children }) {
    const { classes } = useStyles()

    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Container disableGutters className={classes.header}>
                    <img className={classes.image} src='/imgs/logo-clupp.png' alt='Logo Clupp'></img>
                </Container>

                <Divider style={{ color: grey[700] }} />
            </Container>
            {children}
        </>
    )
}

export default Header
