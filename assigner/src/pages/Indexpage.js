import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Indexpage.scss';
import { useState } from "react";
import Footer from '../components/Footer';
export default function IndexPage() {
  const faqs = [
    {
      question: "What services are available on our website?",
      answer:
        "We offer assignment writing, essay editing, project assistance, research support, and plagiarism-free academic help."
    },
    {
      question: "How can we guarantee the caliber of the assignments?",
      answer:
        "We ensure quality through expert writers, plagiarism checks, and multiple quality reviews.",
    },
    {
      question: "What distinguishes our company from other assignment writing firms?",
      answer:
        "We offer personalized services, transparent pricing, timely delivery, and 24/7 support from qualified experts.",
    },
    {
      question: "Does utilizing our service have any limitations?",
      answer:
        "We promote ethical use of our work, and complex tasks may require additional time for completion.",
    },
    {
      question: "How can consumers access our website's news and updates?",
      answer:
        "Consumers can stay updated via newsletter subscriptions, social media, blog posts, and website notifications.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


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
           {/* <span className='womvec'>
            <img src='./vector.png' alt='enroll' className='vector' />
           <img src='./women.png' alt='enroll' className='women' />

           </span> */}


{/*           
              <span className='enroll-text'>
               <span className='ielts'>IELTS Preparation</span> <br/> <span className=' online'> Online Best Learning</span> <br/> <span className=' oppor'> opportunities in The World </span>
              </span>
               
    
            <span className='info'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Audax negotium, dicerem impudens, nisi hoc institut translatum ad philosophos nostros esset.</span>
            <button className='enroll-btn'>Enroll Now</button> */}
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


      <div className='services'>
            <p className='service-heading'>Our Services</p>
            <p className='service-tagline'>We offer some fantastic services</p>

            <div className='service-list'>
                  <div className='service'>
                          <img src='./assignment.png' alt='service' className='service-image' />
                          <p className='service-name'>Assignment Help</p>
                          <p className='service-desc'>

                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (178)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 3.png' alt='service' className='service-image' />
                          <p className='service-name'>Dissertation</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (150)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 7.png' alt='service' className='service-image' />
                          <p className='service-name'>Course Work</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (178)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 5.png' alt='service' className='service-image' />
                          <p className='service-name'>Thesis</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (129)
                         </p>
                  </div>
                
              </div>
              <div className='service-list'>
                  <div className='service'>
                          <img src='./image 6.png' alt='service' className='service-image' />
                          <p className='service-name'>Essay</p>
                          <p className='service-desc'>

                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (47)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 8.png' alt='service' className='service-image' />
                          <p className='service-name'>Research paper</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (59)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 9.png' alt='service' className='service-image' />
                          <p className='service-name'>Power Point Presentation</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (89)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 10.png' alt='service' className='service-image' />
                          <p className='service-name'>Programming</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (134)
                         </p>
                  </div>
                
              </div>
              <div className='service-list'>
                  <div className='service'>
                          <img src='./image 11.png' alt='service' className='service-image' />
                          <p className='service-name'>Paper Writing</p>
                          <p className='service-desc'>

                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (193)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 12.png' alt='service' className='service-image' />
                          <p className='service-name'>Case Study</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (125)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 13.png' alt='service' className='service-image' />
                          <p className='service-name'>Speech Writing</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (100)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 14.png' alt='service' className='service-image' />
                          <p className='service-name'>Term Paper Writing</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (135)
                         </p>
                  </div>
                
              </div>
              <div className='service-list'>
                  <div className='service'>
                          <img src='./image 15.png' alt='service' className='service-image' />
                          <p className='service-name'>Cover Letter Writing</p>
                          <p className='service-desc'>

                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (120)
                         </p>
                  </div>
                  <div className='service'>
                          <img src='./image 16.png' alt='service' className='service-image' />
                          <p className='service-name'>Resume Maker</p>
                          <p className='service-desc'>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            <img src='./star.png' alt='star'/>
                            (132)
                         </p>
                  </div>
                  
              </div>
      </div>
      <div className='advantages'>
            <p className='first'>Our Assistance's advantages</p>
            <p className='second'>The Assigner wants to build a strong foundation that will enable students to soar to achievement.</p>

            <div className='list'>
                  <div className='adv'>
                     
                          <p className='adv-name'>No Plagiarism</p>
                          <p className='adv-desc'>100% original answers that lessen the possibility of receiving a bad grade.</p>
                  </div>
                  <div className='adv'>
              
                          <p className='adv-name'>On-time Submission</p>
                          <p className='adv-desc'>We promise to turn in the job ahead of schedule, no matter how difficult it is.</p>
                  </div>
                  <div className='adv'>
                         
                          <p className='adv-name'>24/7 support</p>
                          <p className='adv-desc'>Help for homework is available 24/7; we are always here to assist students with their assignments.</p>
                  </div>
                  <div className='adv'>
                        
                          <p className='adv-name'>Rewrites that satisfy</p>
                          <p className='adv-desc'>Get your schoolwork redone as many times as you like till you are happy.</p>
                  </div>
            </div>
      </div>


      <div className="faq">
      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="arrow">{activeIndex === index ? "^": "⌄"}</span>
            </button>
            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     

  <Footer />
     


    </div>
  );
}
