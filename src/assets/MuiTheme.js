import { createTheme } from "@mui/material";

const theme = createTheme({

    typography: {
        h1: {
            fontSize: "calc(3.3em + 3.3vw)"
        },
        h3: {
            fontSize: "calc(2em + 2vw)"
        },
        h4: {
            fontSize: "calc(0.8em + 0.8vw)"
        },
        h5: {
            fontSize: "calc(0.5em + 0.8vw)"
        },
        palette: {
            primary: "#179117"
        }
    }
}

)

export default theme;