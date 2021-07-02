import React, {useState, useEffect} from "react";
import Pagination from "@material-ui/lab/Pagination";
import axios from 'axios'
import {Box, Typography, Paper, Card, Grid, CardContent, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const myStyle = makeStyles(theme =>({
  root: {
    textAlign: 'center',
    color: theme.palette.grey[100],
    backgroundColor: theme.palette.warning.dark,
    borderRadius: '3px'
  },
  txtPgn: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const Pagination1 = () => {
  const classes = myStyle()
  const [page, setPage] = useState(1)
  const [post, setPost] = useState([])

  const loadPost = async () => {
    const res = await axios.get(`http://localhost:3003/posts?_page=${page}`)
    setPost(res.data)
  }

  useEffect(() => {
    loadPost()
  },[post])

  return (
    
    <Container component={Box} py={2}>
      <Grid container spacing="3" component={Box} pb={4}>
        {
          post.map(post => (
            <Grid item md={3}>
              <Paper elevation={4} component={Box} p={2} style={{height: '300px'}}>
              <Typography variant="h4" gutterBottom className={classes.root}>{post.id}</Typography>
                  <Typography variant="p"><b>Title:</b> {post.title}</Typography>
                  <Typography variant="body1"><b><b>Body Content:</b></b> {post.body}</Typography>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
      <div className={classes.txtPgn}>
      <Pagination
        size="large"
        count={10}
        color="secondary"
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        // defaultPage={2}
        onChange={(e,  value) => setPage(value)}
      />
      </div>
    </Container>
  );
};

export default Pagination1;
