import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: "#001e3c",
        },
        secondary: {
            main: "#619cc0",
        },
    },
});


const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme