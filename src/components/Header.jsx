import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import { grey } from '@mui/material/colors'

const image = {
    width: '15%',
    maxWidth: 360
  };

const Header = () => {
  return (
    <Container disableGutters maxWidth={false}>

      <Container>
        <img style={image} src="/imgs/logo-clupp.png" alt="Logo Clupp"></img>
      </Container>
        
        <Divider style={{color: grey[700]}}/>
    </Container>
  )
}

export default Header