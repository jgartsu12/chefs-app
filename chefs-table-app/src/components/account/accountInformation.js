import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import AcctInfoForm from './acctInfoForm';

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='acct-info'>
                <PageTitle className='acct-info' title='Account Information' />
                <AcctInfoForm onSubmit={this.onSubmit} className='acct-info__form' />
            </div>
        )
    }
}

export default AccountInformation;
