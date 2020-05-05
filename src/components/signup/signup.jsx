import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { Typography, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFormData } from '../../actions';

const useStyles = makeStyles({

    section: {
        height: '80vh',
        maxHeight: '80vh',
        overflowY: 'scroll'
    },
    form: {
        display: 'flex',
        flexFlow: 'column',
        height: '73vh',
        overflowY: 'scroll',
        '& *': {
            margin: '2%'
        },
        '& button': {
            margin: '10% 0'
        }
    },
    field: {
        height: '7vh'
    },
    header: {
        margin: '4% 0',
        height: '7vh',
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        fontSize: '50%'
    }
});

const passwordErrorText = `password must contain at least 
1 of each uppercase/lowercase character, number, symbol`
 
const validationSchema = yup.object().shape({

    firstName: 
        yup
        .string()
        .required()
        .max(15)
        .min(1),
    lastName: 
        yup
        .string()
        .required()
        .max(30)
        .min(1),
    username: 
        yup
        .string()
        .required()
        .max(25)
        .min(6),
    password: 
        yup
        .string("must be a string")
        .required()
        .max(100)
        .min(8)
        .matches(/[0-9]/, passwordErrorText)
        .matches(/[A-Z]/, passwordErrorText)
        .matches(/[a-z]/, passwordErrorText)
        .matches(/[-+_!@#$%^&*.,?]/, passwordErrorText),
    password2: 
        yup
        .string()
        .oneOf([yup.ref('password'), null], "passwords must match"),
    email: 
        yup
        .string()
        .required()
        .email()
});

function SignUp(props){

    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (data, helpers) => {
        helpers.setSubmitting(true);

        props.addFormData({
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            email: data.email,
        });

        console.dir(helpers);

        helpers.setSubmitting(false);
        history.push('/dashboard');
    }

    return(
        <section>
            <Typography className={classes.header}>Sign Up</Typography>
            <Formik initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({isSubmitting, isValid}) =>(
                <Form className={classes.form}>
                    <Field
                        className={classes.field} 
                        placeholder="first name"
                        name="firstName"
                        type="input"
                        as={TextField} />
                     <ErrorMessage 
                     name="firstName" 
                     render={ msg => 
                     <div className={classes.error}>{msg}</div>} />
                    <Field
                        className={classes.field}  
                        placeholder="last name"
                        name="lastName"
                        type="input"
                        as={TextField} />
                    <ErrorMessage 
                     name="lastName" 
                     render={ msg => 
                     <div className={classes.error}>{msg}</div>} /> 
                    <Field 
                        className={classes.field} 
                        placeholder="username"
                        name="username"
                        type="input"
                        as={TextField} />
                    <ErrorMessage 
                     name="username" 
                     render={ msg => 
                     <div className={classes.error}>{msg}</div>} /> 
                    <Field 
                        className={classes.field} 
                        placeholder="password"
                        name="password"
                        type="password"
                        as={TextField} />
                    <ErrorMessage 
                     name="password" 
                     render={ msg => 
                     <div className={classes.error}>{msg}</div>} />
                    <Field 
                        className={classes.field} 
                        placeholder="retype password"
                        name="password2"
                        type="password"
                        as={TextField} />
                    <ErrorMessage 
                     name="password2" 
                     render={ msg => 
                     <div className={classes.error}>{msg}</div>} />  
                    <Field 
                        className={classes.field} 
                        placeholder="E-Mail"
                        name="email"
                        type="email"
                        as={TextField} />
                    <ErrorMessage 
                     name="email" 
                     render={ msg => 
                     <div className={classes.error}>{msg}</div>} />
                    <Button
                        className={classes.field} 
                        type="submit" 
                        disabled={ !isValid || isSubmitting || false}
                        >Submit</Button>
                </Form>
            )}

            </Formik>
        </section>
    );
};

export default connect(null, { addFormData })(SignUp);