import React from "react"
import { useState, useEffect } from "react";
import { Grid, Link, Typography } from "@mui/material";
import theme from "../assets/MuiTheme";
import { ThemeProvider } from "@emotion/react";


const Favorites = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("favorites")))

    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Grid containter textAlign="center">
                {
                    data.map((favQuantity) => {
                        const { id, source, title } = favQuantity
                        return <Grid xs={12} key={id} mt="4vh">
                            <Grid item xs={4}>
                                <Typography variant="h4">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Link href={source} variant="h2" underline="none" color="secondary" target="_blank">Go to recipe!</Link>
                            </Grid>
                        </Grid>
                    })
                }
            </Grid>
        </ThemeProvider >
    )
}

export default Favorites;