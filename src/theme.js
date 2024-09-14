import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    customShadows: {
        default: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    },
    customBorders: {
        rounded: '5px',
    },
    palette: {
        primary: {
            main: "#51BE58",
        },
        secondary: {
            main: '#D8D8DA'
        },
        alternative: {
            main: '#6FB956'
        }
    },
    typography: {
        h1: {
            fontSize: '1rem',
            fontWeight: 700,
            padding: "1em"
        },
        h2: {
            fontSize: '1.2rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1rem',
            fontWeight: 700,
            padding: '0.6rem'
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 800
        },
        h5: {
            fontSize: '0.8rem',
            fontWeight: 800,
        },
    },
});

export default theme;