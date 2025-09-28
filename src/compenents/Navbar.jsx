import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className=' p-5 flex flex-row justify-between space-x-15 bg-blue-900 h-10 items-center'>

        <ul className='text-white flex flex-row space-x-10' >
            <li >
                <NavLink to = '/' className = {({isActive}) => isActive  ? "border-2 border-white" : ""} > Home</NavLink>
            </li>
            <li>
                <NavLink to = '/dashboard' className = {({isActive}) => isActive  ? "border-2 border-white" : ""}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to = '/about'className = {({isActive}) => isActive  ? "border-2 border-white" : ""}>
                    About
                </NavLink>
            </li>
        </ul>

        <ul className='text-white flex flex-row space-x-5' >
            <li>
                <NavLink to = '/login' className = {({isActive}) => isActive  ? "border-2 border-white" : ""}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to= '/signup'className = {({isActive}) => isActive  ? "border-2 border-white" : ""}>
                    SignUp
                </NavLink>
            </li>
        </ul>
        
        </div>
  )
}

export default Navbar