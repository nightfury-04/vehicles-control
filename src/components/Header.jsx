import { Container, Divider } from '@mui/material'
import { grey } from '@mui/material/colors'

const image = {
    width: '15%',
    maxWidth: 360,
}

function Header() {
    return (
        <Container disableGutters maxWidth={false}>
            <Container disableGutters>
                <img style={image} src='/imgs/logo-clupp.png' alt='Logo Clupp'></img>
            </Container>

            <Divider style={{ color: grey[700] }} />
        </Container>
    )
}

export default Header
