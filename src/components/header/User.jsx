import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag, BiHelpCircle, BiLogOut } from 'react-icons/bi';
import { CiSettings } from "react-icons/ci"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../../store/authSlice';


const User = () => {

  const user = true;
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.logout())
  }

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button className='img' onClick={() => {
              setProfileOpen(!profileOpen)
            }}>
              <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='user' />
            </button>

            {profileOpen && (
              <div className="openProfile  boxItems " onClick={close}>
                <div className="image">
                  <Link to='/account'>
                    <div className="img">
                      <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='user' />
                    </div>
                    <div className="text">
                      <h4>Eden Smith</h4>
                      <label htmlFor=''>Los Angeles, CA</label>
                    </div>
                  </Link>

                </div>
                <Link to='/login' >
                  <button className="box">
                    <CiSettings className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>

                <button className="box">
                  <BiShoppingBag className='icon' />
                  <h4>My Orders</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <BiHelpCircle className='icon' />
                  <h4>Help</h4>
                </button>
                <button className="box" onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>
            My Account
          </button>
        )}
      </div>
    </>
  )
}

export default User