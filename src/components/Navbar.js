import React from 'react';
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <a href="/" className='T For Type'>T For Type</a>
        <ul>
            <li>
                <a href='./components/Pages/About'>About</a>
            </li>
            <li>
                <a href='./components/Pages/User-Guide'>User Guide</a>
            </li>
        </ul>
           
    </nav>
    </>
    
  )
}

export default Navbar