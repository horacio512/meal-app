import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, ThemeProvider, Typography } from "@mui/material"
import theme from "../assets/MuiTheme";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const CardData = ({ food }) => {


    const dayConfig = (i) => {
        const tested = Object.keys(food);
        return tested[i]
    }

    return (

        <ThemeProvider theme={theme}>
            < Grid container mt="2vh" >

                {
                    Object.values(food).map((meals, index) => {

                        return <Grid container key={index} spacing={2} justifyContent="center" mb="3vh">
                            <Grid item xs={12} textAlign="center" mb="2vh" pt="2vh">
                                <Typography variant="h2" sx={{ textTransform: 'capitalize' }} >{dayConfig(index)}</Typography>
                            </Grid>
                            {meals.map((meal) => {
                                const { title, id, readyInMinutes, sourceUrl } = meal
                                return <Grid xs={12} sm={6} md={3} lg={3} xl={3} item key={id}>
                                    <Card sx={{ height: '100%' }} >
                                        <CardHeader action={<IconButton>
                                            <DeleteOutlineIcon />
                                        </IconButton>}
                                            title={title}
                                            subheader={`Preparation Time: ${readyInMinutes} minutes`}
                                        />

                                        <CardMedia>
                                            imagen
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
        </ThemeProvider>
    )
}

export default CardData;