import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchUserOrders();
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`${className} orders`}>
                {
                    this.props.orders.map(order => {
                        return (
                            <a onClick={() => this.props.setOrderDetail(order._id)} key={order._id} className='orders__order order'>
                                <img className='order__img' src='http://via.placeholder.com/80x80'/>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { orders } = state.user;
    return { orders };
}

Orders = connect(mapStateToProps, actions)(Orders);

export default Orders;