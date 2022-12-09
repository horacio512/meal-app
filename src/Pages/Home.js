import { Grid, ThemeProvider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import theme from "../assets/MuiTheme"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../assets/styles.css"

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
                <Grid container color="black">
                    <Grid item xs={12} pt={{xs: "25%",sm: "15%" , md: "10%"}} >
                        <Typography variant="h3" textAlign="center">
                            Welcome to Daily App!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" textAlign="center">
                            Here you can plan the meals for you whole week!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" textAlign="center">
                            Click Below To Coninue
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Link className="getStarted" to="/get-Started">Get Started</Link>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <ArrowUpwardIcon />
                    </Grid>

                </Grid>
   
        </ThemeProvider>
    )
}

export default Home