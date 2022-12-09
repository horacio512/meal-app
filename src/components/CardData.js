import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, ThemeProvider, Typography } from "@mui/material"
import theme from "../assets/MuiTheme";
import StarRateIcon from '@mui/icons-material/StarRate';
import ImageApi from "./ImageApi";
import { useState } from "react";


const CardData = ({ food }) => {

    const day = food.dataFood

    //guarda en el state desde local storage favorites de no existir crea un array vacio
    const [localFav, setLocalFav] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    //state para manejar el cuadro de favorites
    const [favColor, setFavColor] = useState([]);


    //función que guarda en localstorage la información de la comida preferida
    const favorites = (idData, sourceUrlData, titleData) => {
        if (isInFav(idData) === false) {
            const newData = localFav
            let data = { id: idData, title: titleData, source: sourceUrlData }
            newData.push(data)
            setLocalFav(newData)
            localStorage.setItem("favorites", JSON.stringify(localFav))


            setFavColor(actual => [...actual, idData])

        }
        else
            return false
    }

//funcion que ayuda para que chequear que no haya duplicados
    const isInFav = (id) => {
        return localFav.some(e => e.id === id)
    }

    return (

        <ThemeProvider theme={theme}>
            < Grid container mt="2vh" justifyContent="center" spacing={4}>
                <Grid item xs={12} textAlign="center" mb="5vh">
                <Typography variant="h3" fontFamily="Nerko One" color="secondary">{food.day}</Typography>
                </Grid>
                {day?.map((meal, index) => {
                    const { title, id, readyInMinutes, sourceUrl } = meal

                    return <Grid xs={12} sm={6} md={3} lg={3} xl={3} item key={id} >
                        <Card sx={{ height: '100%' }} >
                            <CardHeader action={<IconButton onClick={() => { favorites(id, sourceUrl, title, index) }} style={favColor.some(e => e === id) === true ? { color: "red" } : {}} >
                                <StarRateIcon />

                            </IconButton>}
                                title={title}
                                subheader={`Preparation Time: ${readyInMinutes} minutes`}
                            />

                            <CardMedia>
                                <ImageApi id={id} />
                            </CardMedia>
                            <CardContent>
                                <Link href={sourceUrl} variant="h4" underline="none" color="secondary" target="_blank">Go to recipe!</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                })}

            </Grid >
        </ThemeProvider >
    )
}

export default CardData;