import React from 'react'
import {Box, Container, Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const mystyle = makeStyles({
    txt1 : {
        color: 'teal',
        fontSize: '18px'
    }
})

const Class1 = () => {
    const txtClass = mystyle();
  return (
    <Box width={800} boxShadow={3} m={3} p={2} component="section" >
      <Typography variant="h4" align="center" color="primary" gutterBottom>Hi, This is React MUI</Typography>
      <Typography variant="body1" color="secondary" align="justify" display="inline">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Typography>
      <br/>
      <Typography variant="body2" className={txtClass.txt1}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Typography>
      <br/>
      <Typography variant="subtitle1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Typography>
      <Typography variant="subtitle2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Typography>
    </Box>
  )
}

export default Class1
