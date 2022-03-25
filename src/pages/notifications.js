import React from 'react'
import { Grid } from 'semantic-ui-react'
import MenuDisplay from '../components/menu'

const NotificationsLayout = (props) => {
    const { isUserLoggedIn } = props

    return (
        <div>
            <MenuDisplay isUserLoggedIn={ isUserLoggedIn }/>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: '100vw' }}>
                    <h2>Notifications</h2>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default NotificationsLayout