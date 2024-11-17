import React from 'react'
import '../styles/Footer.scss'
function Footer() {
  return (
    <div>
        <footer className="footer">
             <div className="container">
                <div className="links">
                     <h1>Quick Links</h1>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/">How We Help?</a></li>
                            <li><a href="/">Community</a></li>
                        </ul>
                </div>
                <div className="features-footer">
                        <h1>Features</h1>
                            <ul>
                                <li><a href="/">Plagiarism Checker</a></li>
                                <li><a href="/">Free Publications</a></li>
                                <li><a href="/">Provides Books</a></li>
                                <li><a href="/">Provides PDF</a></li>
                                <li><a href="/">Paraphraser</a></li>
                            </ul>
                </div>
                <div className="offering">
                        <h1> Our Offerings</h1>
                            <ul>
                                 <li><a href="/">Free IELTS Master Class</a></li>
                                 <li><a href="/">Talk to Counsellor</a></li>
                                 <li><a href="/">IELTS Exam Overview</a></li>
                                 <li><a href="/">Important IELTS Articles</a></li>

                            </ul>
                </div>

                <div className='newsletter'>
                       <h1>Newsletter</h1>
                       <p>You can trust us. We only send promo offers</p>
                       <div className='buttons'>
                          <button className='email-btn'>Your email here</button>
                          <button className='subscribe-btn'>Subscribe</button>
                       </div>
                       <br />
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
                </div>
             </div>
        </footer>
    </div>
  )
}

export default Footer