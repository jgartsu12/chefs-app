import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import PageTitle from '../pageTitle';
import EmailForm from './emailForm';

class Email extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='email'>
                <PageTitle className='email__page-title' title='E-mail' />
                <EmailForm onSubmit={this.onSubmit} className='email__form' />
            </div>
        )
    }
}

Email = connect(null, actions)(Email)

export default Email;
