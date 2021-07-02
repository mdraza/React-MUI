import React from 'react'
import Icon from '@material-ui/core/Icon'
import {Container, Box, Typography} from '@material-ui/core'

const Icons = () => {
    return (
        <Container maxWidth="md">
            <Box boxShadow={4} p={3}>
            <Icon>visibility</Icon>
            <Icon>lock</Icon>
            <Icon style={{fontSize: 100}} className="far fa-address-book"></Icon>
            </Box>
        </Container>
    )
}

export default Icons
