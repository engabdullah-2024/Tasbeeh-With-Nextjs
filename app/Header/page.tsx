//  create a modern header component for tasbeeh counter app having a logo and a title and navs
import React from 'react';

const Header = () =>{
    return(
        <div className='flex items-center justify-between p-4  text-white shadow-md rounded-lg w-full h-16 fixed top-0 left-0 z-10 '>
            <div className='flex items-center ' > 
                <img src="/" alt= "logo" className='w-10 h-10 mr-2 rounded-full shadow-md bg-white '/>
                <h1 className='text-2xl font-bold '> Tasbeeh Counter</h1>

            </div>
            < nav className='flex space-x-4 '>
            <a href='/ ' className='hover: text-blue-500 hover:bg-white px-4 py-2 rounded-lg transition duration-300 shadow-md '>Home</a>
            <a href='/ about' className='hover: text-blue-500 hover:bg-white px-4 py-2 rounded-lg transition duration-300 shadow-md '>About</a>
            <a href='/ contact' className='hover: text-blue-500 hover:bg-white px-4 py-2 rounded-lg transition duration-300 shadow-md '>Contact</a>


             
            </nav>

        </div>


    )


}

export default Header