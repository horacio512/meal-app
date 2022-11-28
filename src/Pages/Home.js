import { Grid, ThemeProvider, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"
import theme from "../assets/MuiTheme"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../assets/styles.css"

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container pt="3vh">
                    <Grid item xs={12}>
                        <Typography variant="h3" mt="2vh" textAlign="center">
                            Welcome to Daily App!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" mt="2vh" textAlign="center">
                            Here you can plan the meals for you whole week!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" mt="2vh" textAlign="center">
                            Click Below To Coninue
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center" pt="4vh">
                        <Link className="getStarted" to="/get-Started">Get Started</Link>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <ArrowUpwardIcon />
                    </Grid>

                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default Home