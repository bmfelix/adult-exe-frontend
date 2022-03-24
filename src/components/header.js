import React from 'react';
import { ReactComponent as Blossoms } from '../blossoms.svg';
import { ReactComponent as AdultExe } from '../adult.svg';
import { Header } from 'semantic-ui-react';

const SiteHeader = () => {
    return (
        <Header as='h2' color='black' textAlign='center'>
            <Blossoms />
            <AdultExe />
        </Header>
    )
}

export default SiteHeader