import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 'fit-content',
        padding: '50px 30px',
    },
    button: {
        height: 'fit-content',
        justifyContent: 'center',
    }

});

const RandomNumber = () => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [rand, setRand] = useState(0)
    const classes = useStyles();


    const setRandom = () => {
        setRand(0)
        console.log(min);
        console.log(max);
        let random = (Math.floor(Math.random() * (max - min + 1)) + min)
        console.log(random);
        setRand(random)
    }

    return (
        <Stack direction="row" spacing={5} className={classes.root}>
            <h3>Enter min and max numbers:</h3>
            <TextField
                id="filled-number"
                label="Min-Number:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onChange={(e) => e.target.value && !isNaN(e.target.value) && setMin(Number(e.target.value))}
            />
            <TextField
                id="filled-number"
                label="Max-Number:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onChange={(e) => e.target.value && !isNaN(e.target.value) && setMax(Number(e.target.value))}
            />
            <Button variant="outlined" className={classes.button} onClick={setRandom}>Get Random!</Button>

            <Divider styke={{ color: 'black !important' }}>
                <h2 styke={{ color: 'black !important' }}>{rand}</h2>
            </Divider>
        </Stack>
    );
}

export default RandomNumber;