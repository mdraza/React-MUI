import React, {useState} from 'react'
import {Box, Paper, Typography, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel} from '@material-ui/core'

const Radio1 = () => {
    const [gender, setGender] = useState("male")

    const handleChange = e => {
        setGender(e.target.value)
        console.log(e.target.value);
    }
    return (
        <Paper component={Box} width="30%" elevation={2} p={3} mt={4} mx="auto">
            <Box component="form">
                <FormControl>
                    <FormLabel>Choose Your Gender</FormLabel>
                    <RadioGroup value={gender} onChange={handleChange} row>
                        <FormControlLabel label="Male" control={<Radio color="primary"/>} value="male" />
                        <FormControlLabel label="Female" control={<Radio color="primary"/>} value="female" />
                        <FormControlLabel label="Other" control={<Radio color="primary"/>} value="other" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Paper>
    )
}

export default Radio1
