import React from 'react'
import {Container, Button, Paper, Box,Typography} from '@material-ui/core'


const Class4 = () => {
    return (
        <Container maxWidth="sm">
            <Paper mt={3} p={3} component={Box} elevation={5} square>
            {/* <Box > */}
                <Typography variant="h4" gutterBottom>Hi, This is React MUI</Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>Read More</Button>
            {/* </Box> */}
            </Paper>
        </Container>
    )
}


export default Class4
