import React from "react";
import { Box, Paper, Typography, TextField, Button, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RateReviewIcon from '@material-ui/icons/RateReview';

const myStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    width: "100vw",
    height: "100vh",
    padding: theme.spacing(5),
  },
}));

const Form1 = () => {
  const classes = myStyle();
  return (
    <Box className={classes.root}>
      <Paper width="40%" component={Box} mx="auto" p={3} elevation={4}>
        <Typography variant="h5" color="secondary">User Form</Typography>
        <Box component="form" mt={2} >
          <TextField
            placeholder="Enter First Name"
            variant="standard"
            fullWidth
            margin="normal"
            label="First Name"
            color="secondary"
            InputProps = {{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircleIcon color="secondary"/>
                    </InputAdornment>
                )
            }}
          />
          <TextField
            placeholder="Enter Last Name"
            variant="standard"
            fullWidth
            InputProps = {{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircleIcon color="secondary"/>
                    </InputAdornment>
                )
            }}
            margin="normal"
            label="Last Name"
            color="secondary"
          />
          <TextField
            placeholder="Enter Your Comments"
            variant="standard"
            fullWidth
            multiline
            margin="normal"
            label="Comments"
            rows="4"
            color="secondary"
            helperText="Minimum 100 character required!"
          />
          <Box mt={2}>
              <Button variant="contained" color="secondary">Submit</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Form1;
