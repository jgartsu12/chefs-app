import React, { Component } from 'react';

import SocialMedia from '../../components/social-media-links';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
               <div className='social-media-wrapper'>
                   <SocialMedia />
               </div>
            </div>
        )
    }
}

export default Footer;
