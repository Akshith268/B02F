import React from 'react'
import '../styles/Navbar.scss'
import { useState } from 'react'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
         <div className='social'>
            <div className='social-icon'>
             <a href='https://www.linkedin.com/company/theassigner/' target='_blank' rel='noreferrer'>
              <img src='./Img.png' alt='linkedin' className='linkedin' />
             </a>
             <a href='https://www.facebook.com/profile.php'>
              <img src='./rename.png' alt='facebook' className='facebook' />
             </a>
             <a href='https://www.instagram.com/theassigner/'>
              <img src='./insta.png' alt='instagram' className='instagram' />
             </a>
             <a href='https://twitter.com/the_assigner'>
              <img src='./x.png' alt='twitter' className='twitter' />
            </a>
             <a href='https://whatsapp.com/channel/0029VaaJiRRKAwEshFl9r30c'>
              <img src='./whatsapp.png' alt='whatsapp' className='whatsapp' />
             </a>
             <a href='https://t.me/assigmentmaker'>
              <img src='./telegram.png' alt='telegram' className='telegram' />
             </a>
            </div>
         </div>




         <div className='second'>
            <div className='logo'>
              <img src='./logo.png' alt='logo' className='logo' />
            </div>

            <div className='menu'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Our Services</a></li>
                <li><a href='#'>ILETS & PTE</a></li>
                <li><a href='#'>Contact Us</a></li>
              </ul>
             </div>

             <div className='login'>
                <button>Login</button>
             </div>

             <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
         
        {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">ILETS & PTE</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      )}
         </div>

         
    </div>
  )
}
