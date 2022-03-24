import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


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
    },
});

const getRandomColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
}


let myInterval
const BGColors = () => {
    const classes = useStyles();
    const [color, setColor] = useState()

    const handleChangeColors = () => {
        myInterval = setInterval(() => {
            setColor(getRandomColor)
        }, 1000)
    }

    const handleStopColors = () => {
        console.log('clearing!');
        clearInterval(myInterval)
    }

    return (
        <div id="BGColorsPageContainer" style={{ backgroundColor: `${color}` }}>
            <Stack direction="row" spacing={2} className={classes.root}>
                <Button variant="contained" color="success" onClick={handleChangeColors} className={classes.button}>
                    Change colors
                </Button>
                <Button variant="outlined" color="error" onClick={handleStopColors} className={classes.button}>
                    Stop colors
                </Button>
                <hr />

                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant="h3" gutterBottom component="div">
                        Enter Your Color:
                    </Typography>
                    <TextField
                        onChange={(e) => setColor(e.target.value)}
                        id="outlined-basic" label="color" variant="outlined" />
                </Box>

            </Stack>

        </div>

    );
}

export default BGColors;
