import React, { useState, useEffect }  from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { firebaseAuth } from '../Firebase';
import SiteHeader from '../components/header';
import MenuDisplay from '../components/menu';
import { useNavigate } from "react-router-dom"; 

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginChange = (value) => {
        setLoggedIn(value);
    }

    useEffect(() => {
        const {onLoginSuccess} = props;

        if (loggedIn) {
            const now = new Date()
            const item = {
                value: loggedIn,
                expiry: now.getTime() + 1800000
            }
            localStorage.setItem('loggedIn', JSON.stringify(item))
            onLoginSuccess(loggedIn)
            history('/')
        }
    });

    const onSubmit = (event) => {
        event.preventDefault();

        firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                handleLoginChange(true)
            })
            .catch(err => {
                const { code, message } = err
                console.log(code, message)
            })
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: '100vw' }}>
            <MenuDisplay />
            <SiteHeader />
            <Form size='large'>
                <Segment stacked>
                <Form.Input 
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                    name='email'
                    onChange={ handleEmailChange } value={ email }
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    onChange={ handlePasswordChange } value={ password }
                />

                <Button color='grey' fluid size='large' onClick={ onSubmit }>
                    Login
                </Button>
                </Segment>
            </Form>
            </Grid.Column>
        </Grid>
    )
}

export default LoginForm
