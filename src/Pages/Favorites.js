import React from "react"
import { useState, useEffect } from "react";
import { Button, Container, Grid, Link, Typography } from "@mui/material";
import theme from "../assets/MuiTheme";
import { ThemeProvider } from "@emotion/react";
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Empty from "../assets/empty.jpg"


const Favorites = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("favorites")))

    }, [])

    const deleteItem = (id) => {
        const newFav = data.filter(p => p.id !== id)
        if (newFav.length === 0) {
            setData(null)
        } else
            setData(newFav)
        localStorage.setItem("favorites", JSON.stringify(newFav))

    }

    const deleteAll = () => {
        localStorage.clear("favorites")
        setData(null)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                {
                    data != null ? (<Grid container justifyContent="center" textAlign="center" mt="3vh">
                        <Grid item xs={6}>
                            <Typography variant="h2" fontFamily="Nerko One">Recipe</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h2" fontFamily="Nerko One">Link</Typography>
                            <ArrowDownwardSharpIcon color="error" />
                        </Grid>
                    </Grid>) : (<></>)
                }

                {
                    data === null ?
                        <img src={Empty} alt="empty list" width="100%" />

                        :

                        data.map((favQuantity) => {
                            const { id, source, title } = favQuantity
                            return <Grid container key={id} mt="4vh" textAlign="center" p="1vw" display="flex" sx={{ border: 1, borderRadius: "6%" }} alignItems="center">
                                <Grid item xs={6} md={7}>
                                    <Typography variant="h5">
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Link href={source} variant="h5" underline="none" color="secondary" target="_blank">Go to recipe!</Link>
                                </Grid>
                                <Grid item xs={2} md={1} justifySelf="start">
                                    <Button color="third" onClick={() => deleteItem(id)}><DeleteRoundedIcon /></Button>
                                </Grid>

                            </Grid>

                        })
                }

                {data != null ? (<Grid item xs={12} display="flex" justifyContent="end" mt="3vh">
                    <Button color="third" onClick={() => deleteAll()}>Delete All <DeleteRoundedIcon /></Button>
                </Grid>) : (<></>)}

            </Container>
        </ThemeProvider >
    )
}

export default Favorites;