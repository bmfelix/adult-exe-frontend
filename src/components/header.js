import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const SiteHeader = () => {
    return (
        <Header as='h2' color='black' textAlign='center'>
            <Image fluid centered src='/blossoms.png' style={{ width: '25%', display:'block' }}/>
            <Image fluid centered src='/adult.png' style={{  width: '25%', display:'block' }}/>
        </Header>
    )
}

export default SiteHeader