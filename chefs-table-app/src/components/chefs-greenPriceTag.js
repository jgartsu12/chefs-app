import React, { Component } from 'react';

class ChefsGreenPriceTag extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} green-price-tag`}>
                ${title}
            </div>
        )
    }
}

export default ChefsGreenPriceTag;