import React from 'react'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react';

const MenuDisplay = (props) => {
    const { isUserLoggedIn } = props

    let hide;
    if (isUserLoggedIn) {
        hide = 'hide-menu'
    }

    return (
        <Menu fixed='top' inverted color='grey'>
        <Container>
            <Menu.Item as='a' href='/' header>
            <Image size='mini' src='/blossoms.png' style={{ marginRight: '1.5em' }} />
            Adult.exe
            </Menu.Item>
            <Menu.Item as='a' href='/login' color='pink' className={hide}>Login</Menu.Item>
            <Menu.Item as='a' href='/notifications' color='pink'>Notifications</Menu.Item>

        </Container>
        </Menu>
    )
}

export default MenuDisplay