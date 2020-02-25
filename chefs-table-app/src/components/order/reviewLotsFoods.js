import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewAFood from './reviewAFood';

class ReviewLotsFood extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} review-lots-food`}>
                {
                    this.props.orderedFood.map(orderedFood => {
                        return <ReviewAFood
                        key={orderedFood._id}
                        {...orderedFood}
                        />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { orderedFood } = state.user;
    return { orderedFood };
}
// why no actions in connect?
ReviewLotsFood = connect(mapStateToProps)(ReviewLotsFood);


export default ReviewLotsFood;
