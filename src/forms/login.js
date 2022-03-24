import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { ReactComponent as Blossoms } from '../blossoms.svg';
import { ReactComponent as AdultExe } from '../adult.svg';

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        <Blossoms />
        <AdultExe />
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='black' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default LoginForm
