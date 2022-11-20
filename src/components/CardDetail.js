import { ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react";
import theme from "../assets/MuiTheme";
import CardData from "./CardData";

const CardDetail = ({ calories }) => {

    const [food, getFood] = useState([]);

    const ApiFetch = () => {

        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=f844dc0531044aa4842de56cc7dadb74&timeFrame=week&targetCalories=${calories}`)
            .then((response) => response.json())
            .then((data) => {
                getFood({

                    monday: data.week.monday.meals
                    // tuesday: data.week.tuesday.meals,
                    //wednesday: data.week.wednesday.meals,
                    //thursday: data.week.thursday.meals,
                    //friday: data.week.friday.meals,
                    //saturday: data.week.saturday.meals,
                    //sunday: data.week.sunday.meals
                })
            })

            .catch(() => {
                console.log("error");
            })
    }

    useEffect(() => {
        ApiFetch();

    }, [])

    return (
        <ThemeProvider theme={theme} >
            <CardData food={food} />
        </ThemeProvider>
    )
}

export default CardDetail;