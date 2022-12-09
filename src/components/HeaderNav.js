import React from "react";
import { AppBar, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../assets/MuiTheme";
import { Link } from "react-router-dom";

const HeaderNav = () => {


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" >
                <Grid container backgroundColor="white" justifyContent="center" spacing={1}>
                    <Grid item  xs={10} sm={8} md={10} >
                        <Typography variant="h1" textAlign="center" fontFamily="Nerko One">Daily App</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} alignSelf="center">
                        <Typography variant="h5" textAlign="center" fontFamily="Nerko One">What You Need...But Yummier</Typography>
                    </Grid>
                    <Grid container display="flex" justifyContent="center" sx = {{backgroundColor: "transparent"}} >
                    <Grid item xs={4} textAlign="center">
                        <Link to="/meal-app" style={{textDecoration : 'none'}}><Button  color="secondary">Home Page</Button></Link>
                    </Grid>
                    <Grid item xs={4} textAlign="center">
                        <Link to="/favorites" style={{textDecoration : 'none'}}><Button  color="secondary">favorites ♥</Button></Link>
                    </Grid>

                </Grid>

                </Grid>

             
            </AppBar>
        </ThemeProvider>
    )
}

export default HeaderNav;