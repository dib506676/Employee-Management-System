import React from 'react'

function Header(props) {

    const logoutUser = ()=>{
        localStorage.setItem("loggedInUser",'')
        props.changeUser('')
    }
    return (
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-0'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-medium'>Hello <br /> <span className='text-xl sm:text-2xl lg:text-3xl font-semibold'>{props.data.first_name} 👋</span></h1>
            <button className='bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 lg:px-5 py-2 rounded-lg text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 w-full sm:w-auto' 
            onClick={logoutUser}>Log Out</button>
        </div>
    )
}

export default Header
