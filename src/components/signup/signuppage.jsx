import React from 'react';
import { Grid, Paper, AppBar, Toolbar, Typography, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SignUp from './signup';

const useStyles = makeStyles({
    "grid-top-bottom": {
        height: '10vh',
        border: '2px solid black'
    },
    "grid-middle":{
        height: '80vh',
        border: '2px solid black'
    },
    'grid-row': {
        
    },
    'section-left': {
        background: 'slategrey',
        height: "100%"
    },
    paper: {
        maxHeight: '80vh'
    }
});

function SignUpPage(props){

    const classes = useStyles();
    return(
        <section>
          <Grid className={classes["grid-top-bottom"]} container>
            <AppBar position="static" elevation="0">
                    <Toolbar>
                        <Typography>Formik Demo</Typography>
                    </Toolbar>
            </AppBar>
          </Grid>
          <Grid className={classes["grid-middle"]}  container>
            <Grid item className={classes['grid-row']} xs={8}>
                <section className={classes['section-left']}/>
            </Grid>
            <Grid item className={classes['grid-row']} xs={4}>
                <Paper className={classes.paper}>
                    <SignUp/>
                </Paper>
            </Grid>
          </Grid>
          <Grid className={classes["grid-top-bottom"]}  container>
          <AppBar position="static" elevation="0">
                    <Toolbar>
                        <Typography></Typography>
                    </Toolbar>
            </AppBar>
          </Grid>
        </section>
    )
}


export default SignUpPage;