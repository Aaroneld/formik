import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, Toolbar, AppBar} from '@material-ui/core';

const useStyles = makeStyles({
    "grid-top-bottom": {
        height: '10vh',
        border: '2px solid black'
    },
    "grid-middle":{
        height: '80vh',
        border: '2px solid black'
    },
    "grid-row": {
        background: 'slategrey'
    }
});

function DashboardPage(props){

    const classes = useStyles();
    console.log(props.formState);
    return(
        <section>
            <Grid className={classes["grid-top-bottom"]} container>
                <AppBar position="static" elevation="0">
                        <Toolbar>
                            <Typography>Formik Demo</Typography>
                        </Toolbar>
                </AppBar>
            </Grid>
            <Grid className={classes["grid-middle"]} container>
                <Grid className={classes["grid-row"]} item xs={3} />
                <Grid item xs={6}> 
                    {props.formState && (
                    <Paper>
                        <Typography>{props.formState.firstName}</Typography>
                        <Typography>{props.formState.lastName}</Typography>
                        <Typography>{props.formState.username}</Typography>
                        <Typography>{props.formState.email}</Typography>
                        <Typography>{props.formState.password}</Typography>
                    </Paper>)}
                </Grid>
                <Grid item className={classes["grid-row"]} xs={3} />
            </Grid>
            <Grid className={classes["grid-top-bottom"]} container >
            <AppBar position="static" elevation="0">
                    <Toolbar>
                        <Typography>Formik Demo</Typography>
                    </Toolbar>
            </AppBar>
            </Grid>
        </section>
    )
}


export default DashboardPage;