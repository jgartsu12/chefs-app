import React from 'react';

function eBagButton({className, icon, onClick}) {
    return (
        <a onClick={onClick} className={`${className} e-bag-button`}>
            <i className={icon}/>
        </a>
    )
}

export default eBagButton;