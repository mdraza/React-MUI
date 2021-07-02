import React from 'react'
import {Paper, Box, Typography, AppBar, Toolbar, Button} from '@material-ui/core'

const AppBar1 = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" style={{flexGrow: 1}}>Material UI</Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About US</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBar1
