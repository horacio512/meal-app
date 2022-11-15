import { Grid } from "@mui/material";
import { useEffect, useState } from "react"
import "../assets/styles.css"

const ImageApi = ({ id }) => {

    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f844dc0531044aa4842de56cc7dadb74`)
            .then((response) => response.json())
            .then((data) => {
                setImage(data.image)
            })
            .catch((error) => {
                console.log("error" + error);
            })
    }, [id])


    return (
        <Grid container justifyContent="center">
            <Grid item xs={10} >
                <img src={image} alt="imagen" className="image"/>
            </Grid>
        </Grid>
    )
}

export default ImageApi;