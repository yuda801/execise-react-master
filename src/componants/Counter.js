import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        height: '30vh',
        padding: '50px 30px',
        display: "flex",
        alignItems: "center"
    }
});

const Counter = () => {
    const [count, setCount] = useState(0)
    const classes = useStyles();

    //Using a simmple object for styling
    // const style = {
    //     color: "red",
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //     // border: "5px brown inset",
    //     // backgroundImage: "linear-gradient(to right, #61bfc9, #61c97d)",
    //     minHeight: "300px !important",
    //     maxHeight: "10vw",
    //     padding: "0.5rem",
    //     margin: "10px 20px",

    // }

    return (
        <div id="counter" >
            <Stack direction="row" spacing={2} className={classes.root}>
                <Button type="button" onClick={() => setCount((prev) => prev - 1)}>decrement</Button>
                <Button type="button" onClick={() => setCount((prev) => prev + 1)}>increment</Button>
                <br />

                <Typography variant="h4" gutterBottom component="div">
                    {count}
                </Typography>

            </Stack>
        </div>
    );
}

export default Counter;