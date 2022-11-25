import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, ThemeProvider, Typography } from "@mui/material"
import theme from "../assets/MuiTheme";
import StarRateIcon from '@mui/icons-material/StarRate';
import ImageApi from "./ImageApi";
import { useState } from "react";


const CardData = ({ food }) => {

    const [localFav, setLocalFav] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    const [favColor, setFavColor] = useState([]);

    const dayConfig = (i) => {
        const tested = Object.keys(food);
        return tested[i]
    }

    const favorites = (idData, sourceUrlData, titleData, index) => {
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

    const isInFav = (id) => {
        return localFav.some(e => e.id === id)
    }

    console.log(favColor)

    return (

        <ThemeProvider theme={theme}>
            < Grid container mt="2vh" >

                {
                    Object.values(food).map((meals, index) => {
                        return <Grid container key={index} spacing={2} justifyContent="center" mb="3vh">
                            <Grid item xs={12} textAlign="center" mb="2vh" pt="2vh">
                                <Typography variant="h2" sx={{ textTransform: 'capitalize' }} >{dayConfig(index)}</Typography>
                            </Grid>
                            {meals.map((meal, index) => {
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
                        </Grid>


                    })
                }

            </Grid >
        </ThemeProvider >
    )
}

export default CardData;