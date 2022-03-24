import React from 'react'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react';

const MenuDisplay = () => {
    return (
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
            <Image size='mini' src='/dollar.png' style={{ marginRight: '1.5em' }} />
            Adult.exe
            </Menu.Item>
            <Menu.Item as='a' href='/'>Home</Menu.Item>
            <Menu.Item as='a' href='/login'>Login</Menu.Item>
            <Menu.Item as='a' href='/notifications'>Notifications</Menu.Item>

        </Container>
        </Menu>
    )
}

export default MenuDisplay