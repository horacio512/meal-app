import { createTheme } from "@mui/material";

const theme = createTheme({

    typography: {
        h1: {
            fontSize: "calc(3em + 3vw)"
        },
        h2: {
            fontSize: "calc(1.4em + 1.4vw)"
        },
        h3: {
            fontSize: "calc(2em + 2vw)"
        },
        h4: {
            fontSize: "calc(0.8em + 0.8vw)"
        },
        h5: {
            fontSize: "calc(0.6em + 0.8vw)"
        },
        p: {
            fontSize: "calc(1em + 1vw)"
        }
    },

    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#57C64E"
        },
        third: {
            main: "#1F5604"
        },
        fourth: {
            main: "#ad0707"
        }
    }
   
}

)

export default theme;