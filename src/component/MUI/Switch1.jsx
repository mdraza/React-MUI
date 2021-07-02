import React, {useState} from 'react'
import {Paper, Box, Switch, FormControl, FormControlLabel, Typography} from '@material-ui/core'

const Switch1 = () => {
    const [remember, setRemember] = useState(false)

    const checkHandle = e =>{
        setRemember(e.target.checked)
    }

    return (
        <Paper component={Box} width="30%"  mt={4} p={2} mx="auto" elevation={3}>
            <Box component="form">
                <FormControl>
                    <FormControlLabel label="Allow to play video" checked={remember} control={<Switch onChange={checkHandle} />}/>
                </FormControl>
            </Box>
            <Typography>CheckBox: {remember ? 'True' : 'False'}</Typography>
        </Paper>
    )
}

export default Switch1
