import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";


const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        height: 'fit-content',
        padding: '50px 30px',
    },
    button: {
        height: 'fit-content',
    },
});

const Login = () => {
    const [fisrtName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isActive, setActive] = useState(true);
    const classes = useStyles();


    return (

        <Stack direction="row" spacing={2} className={classes.root}>
            <div id="log-in-container">
                {/* <h1>LOGIN</h1> */}

                <Typography variant="h3" component="h3"
                >login</Typography>
                <br />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="first name" color="secondary" name="first-name" id="first-name" onChange={(e) => setFirstName(e.target.value)} />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="last name" color="secondary" name="last-name" id="last-name" onChange={(e) => setLastName(e.target.value)} />
                </Box>

                <Button type="submit" onClick={() => { setActive(!isActive) }} id="submit-btn">Submit</Button>

                <div className={isActive ? 'login-output' : null}>
                    <h3>your name is: {fisrtName}  {lastName}</h3>
                </div>

            </div>
        </Stack>

    );
}

export default Login;