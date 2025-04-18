import React from 'react'
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import avatarImg from '../assets/avatar.png';

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  //Need to implement the dropdown
  const currentUser = true;

  return (
    <header className='max-w-screen mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to = "/">
                    <HiMiniBars3CenterLeft className='size-6'/>
                </Link>

                <div className='relative sm:w-72 w-40 space-x-2'>
                    <IoMdSearch className='absolute inline-block left-3 inset-y-2'/>
                    <input type='text' placeholder='Search here' 
                    className='bg-[#EAEAEA] w-full rounded-md py-1 md:px-8 px-6 focus:outline-none'/>
                </div>
            </div>

            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div>
                    {
                        currentUser ? 
                        <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='relative'>
                            <img src={avatarImg} alt="User" className='rounded-full w-8 h-8'/>
                        </button>
                        </> :
                        <Link to ="/login"> <FaUser className='size-6'/> </Link>
                    }
                </div>
                <button className='sm:block hidden'>
                    <FaRegHeart className='size-6'/>
                </button>

                <Link to="/cart" className='bg-primary p-1 px-2 sm-px-6 rounded-sm items-center flex justify-center'>
                    <FaCartArrowDown className='size-6'/>
                    <span className='text-sm font-semibold sm:ml-1'>0</span>
                </Link>

            </div>
        </nav>
    </header>
  )
}

export default Navbar;
