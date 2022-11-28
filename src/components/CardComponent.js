import { Button, Grid, Typography, ThemeProvider, TextField } from "@mui/material";
import { useState } from "react";
import theme from "../assets/MuiTheme";
import CardDetail from "./CardDetail";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CardComponent = () => {

    const [calories, setCalories] = useState(2000);
    const [day, setDay] = useState("Monday")
    const [show, setShow] = useState(true);

    const handleSubmit = (e) => {
        setCalories(e.target.value)

    }

    const handleChange = (e) => {
        setDay(e.target.value)
    }


    return (
        <ThemeProvider theme={theme}>

            {show ? <Grid container >
                <Grid item xs={12} mt="5vh" textAlign="center">
                    <Typography variant="h4" mb="5vh">Choose what day of the week you wanna schedule!</Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }} required>
                        <InputLabel>Day of The Week</InputLabel>
                        <Select
                            value={day}
                            label="Day of The Week"
                            onChange={handleChange}
                        >
                            <MenuItem value="Monday">Monday</MenuItem>
                            <MenuItem value="Tuesday">Tuesday</MenuItem>
                            <MenuItem value="Wednesday">Wednesday</MenuItem>
                            <MenuItem value="Thursday">Thursday</MenuItem>
                            <MenuItem value="Friday">Friday</MenuItem>
                            <MenuItem value="Saturday">Saturday</MenuItem>
                            <MenuItem value="Sunday">Sunday</MenuItem>
                        </Select>
                        <FormHelperText>Choose a day of the week!</FormHelperText>
                    </FormControl>

                </Grid>
                <Grid item xs={12} textAlign="center" mt="5vh" >
                    <Typography variant="h4">Select your daily calories to get Started!</Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" pt="2vh">
                    <TextField onChange={handleSubmit} label="Type your Daily Calories!" inputProps={{ type: 'number', inputMode: 'numeric', pattern: '[0-9]*' }} required />
                </Grid>
                <Grid item xs={12} textAlign="center" >
                    <Button color="secondary" onClick={() => { setShow(false) }} >GET STARTED!</Button>
                </Grid>


            </Grid> : <CardDetail calories={calories} day={day} />}

        </ThemeProvider>
    )
}

export default CardComponent;