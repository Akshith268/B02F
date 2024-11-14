import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Indexpage.scss';
export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <div className='hero'>
        <img src='./hero.png' alt='hero' />
      </div>
           <div className='objects'>
            <img src='./objects.png' alt='object' />
           </div>
      <div className='stats'>
           <p className='first-para'>700+ students saved, and counting</p> <br/>
           <p className='second-para'>50K new study notes added every day, from the world’s most active student communities</p>

           <div className='numbers'>
                 <div className='number'>
                    <h1>350+</h1>
                    <p><img src='./docimage.png' alt='image not found' />&nbsp;Study Resources</p>
                 </div>
                  <div className='number'>
                      <h1>115+</h1>
                      <p><img src='./uniimage.png' alt='image not found' />&nbsp;Institutions</p>
                  </div>
                  <div className='number'>
                      <h1>700+</h1>
                      <p><img src='./userimage.png' alt='image not found' />&nbsp;Users</p>
                  </div>
           </div>
      </div>
       <div className='cross'>
          <img src='./cross.png' alt='cross' />
       </div>
      <div className='enroll'>
           <img src='./worldmap.png' alt='enroll' className='worldmap' />
           <div className='womvec'>
            <img src='./vector.png' alt='enroll' className='vector' />
           <img src='./women.png' alt='enroll' className='women' />
           </div>

           <div className='enroll-text'>
              
               <span className='ielts'>IELTS Preparation</span> <br/> <span className='online'> Online Best Learning</span> <br/> <span className='oppor'> opportunities in The World </span>
               
            </div>
            <span className='info'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Audax negotium, dicerem impudens, nisi hoc institut translatum ad philosophos nostros esset.</p></span>
            <button className='enroll-btn'>Enroll Now</button>
      </div>

      <div className='features'>
            <p className='awesome'>Awesome features</p>
            <p className='tagline'>Get ready to unlock the next level of features</p>

            <div className='list'>
                  <div className='feature'>
                          <img src='./plague.png' alt='feature' className='featimage' />
                          <p className='feat-name'>Plagiarism Checker</p>
                          <p className='feat-desc'>We will provide access to assignments free of plagiarism</p>
                  </div>
                  <div className='feature'>
                          <img src='./publications.png' alt='feature' className='featimage' />
                          <p className='feat-name'>Free Publications</p>
                          <p className='feat-desc'>We will provide access to publication</p>
                  </div>
                  <div className='feature'>
                          <img src='./pdf.png' alt='feature' className='featimage' />
                          <p className='feat-name'>Provides Free Books and PDF</p>
                          <p className='feat-desc'>Free Books and PDF will be provided</p>
                  </div>
                  <div className='feature'>
                          <img src='./paraphraser.png' alt='feature' className='featimage' />
                          <p className='feat-name'>Paraphraser</p>
                          <p className='feat-desc'>A paraphraser will be provided</p>
                  </div>
            </div>
      </div>

    </div>
  );
}
