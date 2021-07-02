import React, {useState} from 'react'
import {Box, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Collapse} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DevicesIcon from '@material-ui/icons/Devices';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const myStyle = makeStyles(theme => ({
    main: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[200]
    },
    sidebar:{
        width: '20%',
        height: '100%',
        backgroundColor: theme.palette.primary.contrastText,
        position: 'fixed',
        left: 0,
        top: 0,
        borderRadius: 0
    },
    nested: {
        paddingLeft: theme.spacing(8)
    }
}))

const List1 = () => {
    const classes = myStyle()
    const [nest, setNest] = useState(false)

    const rotate = nest ? "rotate(90deg)" : "rotate(0)"

    return (
        <Box className={classes.main}>
            <Paper elevation={4} className={classes.sidebar}>
                <List disablePadding>
                    <ListItem button>
                        <ListItemText primary={<Typography color="primary" variant="h5">Getting Started</Typography>} secondary="Start to learn WDD"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <DevicesIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Web Designing" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DesktopWindowsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Web Development" />
                    </ListItem>
                    <ListItem button onClick={() => setNest(!nest)}>
                        <ListItemIcon>
                            <ShoppingCartIcon/>
                        </ListItemIcon>
                        <ListItemText primary="E-Commerce"/>
                        <ListItemIcon>
                            <ArrowRightIcon style={{ transform: rotate, transition: "all 0.2s linear" }}/>
                        </ListItemIcon>
                    </ListItem>
                    <Collapse in={nest}>
                        <List>
                            <ListItem className={classes.nested} button>
                                <ListItemText>Nested Item 1</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nested} button>
                                <ListItemText>Nested Item 2</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nested} button>
                                <ListItemText>Nested Item 3</ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    
                </List>
            </Paper>
        </Box>
    )
}

export default List1
