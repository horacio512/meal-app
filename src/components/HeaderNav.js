import React from "react";
import { AppBar, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import logo from "../assets/logo.jpg";
import theme from "../assets/MuiTheme";

const HeaderNav = () => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Grid container backgroundColor="white" justifyContent="space-evenly">
                    <Grid item xs={3} sm={2} md={2} alignSelf="center">
                        <img src={logo} alt="logo" width="80%" />
                    </Grid>
                    <Grid xs={9} sm={8} item md={8} >
                        <Typography variant="h1" color="#0BCA0B" textAlign="center">Daily App</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} alignSelf="end">
                        <Typography variant="h5" color="#179117" textAlign="center">What you need...but yummier</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary">
                            Weelkly Planing
                        </Button>
                        <Button color="primary">
                            Weelkly Planing
                        </Button>
                    </Grid>
                </Grid>

            </AppBar>
        </ThemeProvider>
    )
}

export default HeaderNav;