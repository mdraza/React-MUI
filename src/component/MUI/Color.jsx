import React from 'react'
import {Container, makeStyles, Button, Paper, Box,Typography} from '@material-ui/core'
import deepPurple from '@material-ui/core/colors/deepPurple'
import green from '@material-ui/core/colors/green'
import pink from '@material-ui/core/colors/pink'

const myStyle = makeStyles({
    txt: {
        backgroundColor: pink[100]
    }
})

const Color = () => {
    const classes = myStyle()
    return (
        <Container maxWidth="sm">
            <Paper className={classes.txt} mt={3} p={3} component={Box} elevation={5} square>
            {/* <Box > */}
                <Typography variant="h4" gutterBottom style={{color: deepPurple[900]}}>Hi, This is React MUI</Typography>
                <Typography variant="body1" style={{color: pink[700]}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>Read More</Button>
            {/* </Box> */}
            </Paper>
        </Container>
    )
}


export default Color
