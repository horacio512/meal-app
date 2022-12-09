import { ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react";
import theme from "../assets/MuiTheme";
import CardData from "./CardData";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";


const ApiData = ({ calories, day }) => {

    const [food, getFood] = useState([]);

    const [spiner, setSpiner] = useState(true)

    //Fetch de la información sobre los alimentos recibiendo las calorias ingresadas y el dia seleccionado
    useEffect(() => {

        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=f844dc0531044aa4842de56cc7dadb74&timeFrame=day&targetCalories=${calories}`)
            .then((response) => response.json())
            .then((data) => {
                getFood({
                    dataFood: data.meals,
                    day: day

                })
                setSpiner(false)

            })

            .catch(() => {
                console.log("error");
            })

    }, [day, calories])

    return (
        <ThemeProvider theme={theme} >
            {spiner ? <Box pt="20vh" textAlign="center"><CircularProgress color="secondary" size="15vh" /> </Box> : <CardData food={food} />}

        </ThemeProvider>
    )
}

export default ApiData;