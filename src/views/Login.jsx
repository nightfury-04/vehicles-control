import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <Container maxWidth='sm'>
        <h1 
            style={{
                fontSize: '32px',
                padding: '25px', 
                textAlign: 'center', 
                fontFamily: 'Inter, sans-serif' 
            }}
        >
            Iniciar Sesión
        </h1>

        <form onSubmit={handleSubmit}>
            
            <TextField 
                id="email" 
                label="Correo" 
                variant="outlined"
                fullWidth
                style={{margin: '15px'}} 
            />

            <TextField 
                id="password" 
                label="Contraseña" 
                variant="outlined"
                fullWidth
                style={{margin: '15px'}}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={() => {}} edge="end">
                          {false ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
            />

            <Box 
                style={{display: 'flex',
                justifyContent: 'center',
                margin: '20px'
                }}
            >
                    
                    <Button 
                        variant="contained" 
                        style={{height: '40px', width: '150px'}}
                    >
                        Iniciar Sesión
                    </Button>
            </Box>
            
        </form>
    </Container>
  )
}

export default Login