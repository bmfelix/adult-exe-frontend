import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {firebaseAuth} from '../Firebase';
import SiteHeader from '../components/header';
import MenuDisplay from '../components/menu'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          loggedIn: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const {email, password} = this.state;

        firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                this.setState({loggedIn: true})
            })
            .catch(err => {
                this.setState({loggedIn: false})
                const { code, message } = err
                console.log(code, message)
            })
    }

    render() {
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
                        onChange={this.handleEmailChange} value={ this.state.email }
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        onChange={this.handlePasswordChange} value={ this.state.password }
                    />

                    <Button color='black' fluid size='large' onClick={this.onSubmit}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginForm
