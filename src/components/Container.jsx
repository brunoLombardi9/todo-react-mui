import { Box } from '@mui/material'
import React from 'react'

const Container = ({ children }) => {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.main"
            }}
        >
            {children}
        </Box>
    )
}

export default Container