import React from 'react'
//import Icon from '@mui/material/Icon';

const SideBar = ({selected, Icon, title}) => {   
    return (
        <>
        <div className='sidebar'>
         <Icon className='sidebar-icon' />
            <h2 className='sidebar-title'>{title}</h2>
        </div>
        </>
    )
}

export default SideBar;