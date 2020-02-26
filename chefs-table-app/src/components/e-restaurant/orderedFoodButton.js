import React from 'react';

function OrderedFoodButton({className, icon, onClick}) {
    return (
        <a onClick={onClick} className={`${className} ordered-food-button`}>
            <i className={icon}/>
        </a>
    )
}

export default OrderedFoodButton;