import React from "react"
import { useState, useEffect } from "react";
import { Button, Container, Grid, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import theme from "../assets/MuiTheme";
import { ThemeProvider } from "@emotion/react";
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Empty from "../assets/empty.jpg"
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';


const Favorites = () => {

    const [data, setData] = useState([]);

    //obtiene del localStorage los favoritos guardados
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("favorites")))
    }, [])

    //funcion que borra un elemento
    const deleteItem = (id) => {
        const newFav = data.filter(p => p.id !== id)
        if (newFav.length === 0) {
            setData(null)
        } else
            setData(newFav)
        localStorage.setItem("favorites", JSON.stringify(newFav))

    }

    //funcion para borrar todos los elementos
    const deleteAll = () => {
        localStorage.clear("favorites")
        setData(null)
    }

    return (
        <ThemeProvider theme={theme} >
            <Container>
                <Grid container justifyContent="center">
                    {
                        data != null ? (<Grid container justifyContent="center" textAlign="center">
                            <Grid item xs={6}>
                                <Typography variant="h2" fontFamily="Nerko One">Recipe</Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <Typography variant="h2" fontFamily="Nerko One" >Link</Typography>
                                <ArrowDownwardSharpIcon color="error" />
                            </Grid>
                        </Grid>) : (<></>)
                    }

                    {
                        data === null ?
                            //si la lista esta vacia muestra una imagen representativa
                            <img src={Empty} alt="empty list" width="100%" />

                            :

                            <List sx={{
                                width: '70%',
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: '55vh',
                                '& ul': { padding: 0 },
                            }}>
                                {data.map((favQuantity) => {
                                    const { id, title, source } = favQuantity
                                    return (
                                        < ListItem key={id}  >
                                            <ListItemText primary={title} primaryTypographyProps={{ fontSize: 'calc(0.66em + 0.7vw)' }} />
                                            <Link href={source} variant="h5" underline="none" target="_blank" color="third.main"><OpenInNewRoundedIcon fontSize="large" /></Link>
                                            <Button onClick={() => deleteItem(id)} color="fourth"><DeleteRoundedIcon fontSize="medium" sx={{ borderRadius: '50%' }} p="1.8vh" /></Button>

                                        </ListItem>)
                                })}
                            </List>
                    }

                    {data != null ? (<Grid item xs={12} justifyContent="center" display="flex"  >
                        <Grid item xs={4} sm={2} backgroundColor="#ad0707" sx={{ borderRadius: '10%' }} display="flex" mt="3vh" justifyContent="center">
                            <Button color="primary" onClick={() => deleteAll()}>Delete All <DeleteRoundedIcon fontSize="large" /></Button>
                        </Grid>

                    </Grid>) : (<></>)}
                </Grid>
            </Container>
        </ThemeProvider >
    )
}

export default Favorites;