import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: "#100F0F",
        },
        secondary: {
            main: "#2B4865",
        },
        third: {
            main: "#E8F9FD"
        },
        fourth: {
            main: "#FF9F29"
        }
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