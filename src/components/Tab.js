import React from 'react'
import './Tab.css'

export const Tab = ({
    title = '',
    onItemClicked,
    isActive = false,
}) => {

    return (
        <div className={isActive ? 'tabitem' : 'tabitem tabitem-inactive'} onClick={onItemClicked}>
            <p className="tabitem-title">{title}</p>
        </div>
    )
};