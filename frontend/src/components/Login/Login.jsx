import React, { Fragment, useState } from 'react'
import './Login.css'
import {Button, Grid,Link,Paper, Typography} from '@mui/material'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'





function Login() {
    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#42a5f5',
            contrastText: '#fff',
          },
        },
      });

      const [email,setEmail]=useState("")
       const [password, setPassword] = useState("")

       const loginHandler=(e)=>{
e.preventDefault()
       }

    const paperStyle={padding:20,height:'70vh',width:450,margin:"20px auto"}

    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant='h2' sx={{fontFamily:"Roboto"}} mt={2} mb={4} ml={16}>Sign In</Typography>
            <Grid>
            <form onSubmit={loginHandler}>
            <TextField
          required
          id="outlined-required"
          label="Email"
          fullWidth
          mt={2} mb={4}
          
        />
         <TextField
          required
          id="outlined-required"
          label="Password"
          fullWidth
          type='password'
          sx={{marginTop:"5px"}}
          
        />
<ThemeProvider theme={theme}><Button color='neutral' variant="contained" fullWidth type='submit'
 sx={{marginTop:"20px"}}
>Sign In</Button></ThemeProvider>
            </form>
            </Grid>
            <ThemeProvider theme={theme}>
            <Typography mt={1}><Link underline="hover" color="#42a5f5">Forgot Password?</Link></Typography>
            <Typography ml={14} mt={10}>Don't have an account? <Link href='/register' color="#42a5f5" underline="hover">Sign Up</Link></Typography>
            </ThemeProvider> 
            </Paper>
           
        </Grid>
    )
}

export default Login
