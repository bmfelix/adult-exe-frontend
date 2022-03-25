import React from 'react'
import { Grid } from 'semantic-ui-react'
import MenuDisplay from '../components/menu'
import SiteHeader from '../components/header'

const HomepageLayout = (props) => {
    const { isUserLoggedIn } = props

    return (
        <div>
            <MenuDisplay isUserLoggedIn={ isUserLoggedIn }/>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: '100vw' }}>
                    <SiteHeader />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default HomepageLayout