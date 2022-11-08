import { Button, Grid, Typography, ThemeProvider, TextField } from "@mui/material";
import { useState } from "react";
import theme from "../assets/MuiTheme";
import CardDetail from "./CardDetail";

const CardComponent = () => {

    const [calories, setCalories] = useState(2000);
    const [show, setShow] = useState(true);

    const handleCHange = (e) => {
        setCalories(e.target.value)
    }


    return (
        <ThemeProvider theme={theme}>

            {show ? <Grid container >
                <Grid item xs={12} textAlign="center" mt="2vh" >
                    <Typography variant="h4">Select your daily calories to get Started!</Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" pt="2vh">
                    <TextField onChange={handleCHange} label="Type your Daily Calories!" inputProps={{ type: 'number', inputMode: 'numeric', pattern: '[0-9]*' }} required />
                </Grid>
                <Grid item xs={12} textAlign="center" >
                    <Button color="secondary" onClick={() => { setShow(false) }} >GET STARTED!</Button>
                </Grid>


            </Grid> : <CardDetail calories={calories} />}

        </ThemeProvider>
    )
}

export default CardComponent;