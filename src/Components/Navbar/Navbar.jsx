import React from 'react'
import iconoPer from '../../assets/iconoPer.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <section>
        <div className="flex items-center justify-center navbar bg-base-100">
            <div className="flex items-center mr-6">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <a className="btn btn-ghost text-lg">Benefits</a>
                <a className="btn btn-ghost text-lg">Solution</a>
                <a className="btn btn-ghost text-lg">FAQ</a>
            </div>
            <div className="flex items-center ml-6">
                <img src={iconoPer} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Navbar;