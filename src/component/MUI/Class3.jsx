import React from 'react'
import {Container, Box,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const myStyle = makeStyles((theme) => ({
    txt: {
        color: theme.palette.primary.contrastText,
        fontSize: '16px',
        backgroundColor: theme.palette.primary.dark,
        padding: '10px',
        boxShadow: theme.shadows[20],
        borderRadius: theme.shape.borderRadius
    }
    
}))

const Class3 = () => {
    const classes = myStyle();
    return (
        <Container disableGutters={true}>
            <Box boxShadow={3} mt={3} p={3}>
                <Typography variant="h3" gutterBottom>Hi, This is React MUI</Typography>
                <Typography variant="body1" className={classes.txt}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
            </Box>
        </Container>
    )
}


export default Class3
