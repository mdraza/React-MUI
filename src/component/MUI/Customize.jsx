import React from 'react'
import {Box, Container, Paper, Typography, Button} from '@material-ui/core'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {makeStyles} from '@material-ui/core/styles'

const myStyle = makeStyles((theme) =>({
    txt: {
        color: theme.palette.primary.dark
    }
}))

const Customize = () => {
    const classes = myStyle()
    return (
        <Container maxWidth="sm">
            <Paper component={Box} mt={3} p={3} boxShadow={2} borderLeft={5} borderColor="primary.main" textAlign="center">
                <Typography variant="h4" gutterBottom className={classes.txt}>Get Started </Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" endIcon={<ArrowRightAltIcon/>} startIcon={<AccountBalanceOutlinedIcon/>}  color="primary" size="medium">Read More</Button> &nbsp;
                    <Button variant="contained" endIcon={<ArrowRightAltIcon/>} startIcon={<AccountBalanceOutlinedIcon/>}  color="secondary" size="medium">Know More</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Customize
