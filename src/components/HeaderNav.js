import React from "react";
import { AppBar, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import logo from "../assets/logo.jpg";
import theme from "../assets/MuiTheme";
import { Link } from "react-router-dom";

const HeaderNav = () => {


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" >
                <Grid container backgroundColor="black" justifyContent="space-evenly">
                    <Grid item xs={2} sm={2} md={2} alignSelf="center">
                        <img src={logo} alt="logo" width="100vw" />
                    </Grid>
                    <Grid xs={10} sm={8} item md={8} >
                        <Typography variant="h1" color="primary" textAlign="center" fontFamily="Nerko One">Daily App</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} alignSelf="center">
                        <Typography variant="h5" color="primary" textAlign="center">What You Need...But Yummier</Typography>
                    </Grid>


                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Grid item xs={4} textAlign="center">
                            <Link to="/meal-app" ><Button>Home Page</Button></Link>
                        </Grid>
                        <Grid item xs={4} textAlign="center"> 
                            <Link to="/favorites"><Button>favorites ♥</Button></Link>
                        </Grid>

                    </Grid>
                </Grid>

            </AppBar>
        </ThemeProvider>
    )
}

export default HeaderNav;