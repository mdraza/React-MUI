import React from 'react'
import {Container, Grid, Avatar, IconButton, Button, Card, Typography, CardContent, CardHeader, CardActionArea, CardActions, CardMedia} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import '../../styles/App.scss'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const myStyle = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(5)
    }
}))

const Card2 = () => {
    const txtClass = myStyle()
    return (
        <Container className={txtClass.root}>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card>
                        <CardHeader avatar={<Avatar>MR</Avatar>} action={<IconButton><AddShoppingCartIcon/></IconButton>}  title="Muhammad Raza" subheader="I am a Frontend Developer"/>
                        <CardActionArea>
                            <CardMedia component="img" image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg"/>
                            <CardContent>
                                <Typography variant="h5">Muhammad Raza</Typography>
                                <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button>Read More</Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardHeader avatar={<Avatar>UR</Avatar>} action={<IconButton><AddShoppingCartIcon/></IconButton>} title="Umama Raza" subheader="I am a Frontend Developer"/>
                        <CardActionArea>
                            <CardMedia component="img" image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg"/>
                            <CardContent>
                                <Typography variant="h5">Muhammad Raza</Typography>
                                <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button>Read More</Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardHeader avatar={<Avatar>UR</Avatar>} action={<IconButton><AddShoppingCartIcon/></IconButton>} title="Umama Raza" subheader="I am a Frontend Developer"/>
                        <CardActionArea>
                            <CardMedia component="img" image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg"/>
                            <CardContent>
                                <Typography variant="h5">Muhammad Raza</Typography>
                                <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button>Read More</Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Card2
