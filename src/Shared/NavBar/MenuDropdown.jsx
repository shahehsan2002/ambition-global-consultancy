import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import avatarImg from '../../assets/images/placeholder.jpg'
import UseAuth from '../../hooks/UseAuth'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = UseAuth()
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Show User Name */}
        <div className='hidden md:block'>
          <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  py-3 px-4 text-sm font-semibold rounded-full  transition'>
            {user?.displayName}
          </button>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='50'
              width='50'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 text-red-950 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            <p className='  text-black hover:bg-gradient-to-r from-green-400 to-blue-500  py-3 px-4 text-sm font-semibold rounded-full  transition text-center'>
              {user?.displayName}
            </p>
            <Link 
              to='/dashboard'
              className='px-4 py-3 text-center text-red-950 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </Link>
            
              
            
            {
              user ? <>
                {/* <span>
          {user?.displayName}
        </span> */}
                <button onClick={handleLogOut} className='btn '>log out</button>
              </> : <>
                <li><Link to="/login">Join Us</Link> </li>
              </>
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
