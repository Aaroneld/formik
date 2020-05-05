import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Toolbar, AppBar} from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles( theme => { 
    
    theme.breakpoints.values.md = 10;
    theme.breakpoints.keys.push("test");
    theme.breakpoints.values.test = 900;
    console.log(theme);
    
    return ({
    "grid-top-bottom": {
        height: '10vh',
        border: '2px solid black'
    },
    "grid-middle":{
        height: '80vh',
        border: '2px solid black',
    },
    "grid-row": {
        background: 'slategrey',
        [theme.breakpoints.up('test')]: {
            background: 'red'
        },
    },
})});

function DashboardPage(props){

    const classes = useStyles();
    console.log(props.formState);
    console.log(classes);
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
                        <Typography variant='h1'>{props.formState.firstName}</Typography>
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

const mapStateToProps = state => {

    return {
        formState: state
    }
}

export default connect(mapStateToProps, {})(DashboardPage);