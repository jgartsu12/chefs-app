import React, { Component } from 'react';

class Amount extends Component {
    render() {
        const { className, Amount } = this.props;
        return (
            <div className={`${className} amount`}>
                <div className='amount__count'>
                    {Amount}
                </div>
                <div className='amount__plus'>
                    <i className='fas fa-plus'></i>
                </div>
                <div className='amount__minus'>
                    <i className='fas fa-minus'></i>
                </div>
            </div>
        )
    }
}

export default Amount;