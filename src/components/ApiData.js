import { ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react";
import theme from "../assets/MuiTheme";
import CardData from "./CardData";

const ApiData = ({ calories, day }) => {

    const [food, getFood] = useState([]);


//Fetch de la información sobre los alimentos recibiendo las calorias ingresadas y el dia seleccionado
    useEffect(() => {

        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=f844dc0531044aa4842de56cc7dadb74&timeFrame=day&targetCalories=${calories}`)
            .then((response) => response.json())
            .then((data) => {
                getFood({
                    dataFood: data.meals,
                    day: day

                })
            })

            .catch(() => {
                console.log("error");
            })

    }, [day,calories])

    return (
        <ThemeProvider theme={theme} >
            <CardData food={food} />
        </ThemeProvider>
    )
}

export default ApiData;