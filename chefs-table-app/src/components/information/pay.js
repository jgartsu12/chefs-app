import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../components/pageTitle';
import * as actions from '../store/actions';
import PayForm from './payForm';

class Pay extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }
    
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='pay'>
                <PageTitle className='pay__page-title' title='Pay Info' />
                <PayForm onSubmit={this.onSubmit} className='pay__form' />
            </div>
        )
    }
}

Pay = connect(null, actions)(Pay)
// why no mapStateToProps?
export default Pay;
