import { useState } from "react";
import Typography from '@mui/material/Typography';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        height: 'fit-content',
        padding: '50px 30px',
    }
});
const Search = () => {
    const classes = useStyles();
    let arrayOfFruies = ['apple\n', 'pineapple\n', 'orange\n', 'strawbery\n', 'banana\n']
    const [searchedFruits, setSearchedFruits] = useState(arrayOfFruies)

    const handleSearch = (e) => {
        let input = e.target.value;
        if (e.target.value === "") {
            setSearchedFruits(arrayOfFruies);
            return;
        }

        console.log(input);
        const filteredValues = arrayOfFruies.filter(
            (item) => item.toLowerCase().indexOf(input.toLowerCase()) !== -1
        );
        setSearchedFruits(filteredValues);
    }

    return (
        <Stack direction="row" spacing={2} className={classes.root}>

            <div id="search" >
                {/* <hr /> */}
                <label htmlFor="fruit-input"> Enter a fruit from bottom list</label>
                <br />
                <br />

                <Box component="form" noValidate autoComplete="off"
                    type="text" name="fruit-input" id="fruit-input" onChange={handleSearch}
                >
                    <FormControl sx={{ width: '25ch' }}>
                        <OutlinedInput placeholder="Please enter fruit" />
                    </FormControl>
                </Box>
                <br />

                {
                    searchedFruits.map(fruit => {
                        return (

                            <Typography variant="h6" gutterBottom component="h6" key={`Fruits-[${fruit}]`}>
                                {fruit}
                            </Typography>
                        )
                    })
                }
                {/* <hr /> */}
            </div>
        </Stack>
    )

}
export default Search;