import React from 'react'

function Header(props) {

    const logoutUser = ()=>{
        localStorage.setItem("loggedInUser",'')
        props.changeUser('')
    }
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.first_name} 👋</span></h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium' 
            onClick={logoutUser}>Log Out</button>
        </div>
    )
}

export default Header
