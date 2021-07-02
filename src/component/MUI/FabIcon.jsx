import React, {useState, useEffect} from 'react'
import {Fab, Container, Box, Button, Grid, Card, CardActions, CardContent, CardMedia, CardActionArea, Typography} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'

const myStyle = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.success.main
    },
    iconPos: {
        position: 'fixed',
        right: '5%',
        bottom: '5%',
        backgroundColor: theme.palette.secondary.main,
        zIndex: theme.zIndex.tooltip
        // color: theme.palette.primary.contrastText
    } 
}))

const FabIcon = () => {
    const classes = myStyle()

    const [user, setUser] = useState([])

    useEffect(() =>{
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUser(res.data)
    }

    return (
        <Box className={classes.root} pt={5}>
            <Container>
                <Fab className={classes.iconPos} variant="extended"><AddCircleOutlineIcon/>&nbsp; Add Users</Fab>

                <Grid container spacing={3}>
                    {
                        user.map(user => {
                            return(
                                <Grid item sm={4} key={user.id}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia component="img"  image="https://res.cloudinary.com/dyujtthsj/image/upload/v1623634133/samples/food/fish-vegetables.jpg" />
                                            <CardContent>
                                                <Typography variant="h5">{user.name}</Typography>
                                                <Typography variant="subtitle2">{user.email}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions><Button>Read More</Button></CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default FabIcon
