import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import PageTitle from '../pageTitle';
import ReviewOrderForm from './reviewOrderForm';

class ReviewFood extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log('fields')
    }

    render() {
        let subtotal = 0;
        this.props.orderedFood.map(orderedFood => {
            subtotal += orderedFood.amount * orderedFood.food.price;
        })
        return (
            <div className='review-food'>
                <PageTitle className='review-food__page-title' title='Food Order Review'/>
                <ReviewOrderForm className='review-food-order__form' onSubmit={this.onSubmit} subtotal={subtotal}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { orderedFood } = state.user;
    return { orderedFood }
}

ReviewFood = connect(mapStateToProps, actions)(ReviewFood);

export default ReviewFood;