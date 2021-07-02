import React from 'react'
import {Container, Box, Paper,Typography, Button, Grid} from '@material-ui/core'

const GridSys = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Paper component={Box} p={3} mt={3} boxShadow={4}>
                        <Typography variant="h4" gutterBottom>Web Designing</Typography>
                        <Typography variant="body1" gutterBottom>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <Button>Read More</Button>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper component={Box} p={3} mt={3} boxShadow={4}>
                        <Typography variant="h4" gutterBottom>Web Designing</Typography>
                        <Typography variant="body1" gutterBottom>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <Button>Read More</Button>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper component={Box} p={3} mt={3} boxShadow={4}>
                        <Typography variant="h4" gutterBottom>Web Designing</Typography>
                        <Typography variant="body1" gutterBottom>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <Button>Read More</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default GridSys
