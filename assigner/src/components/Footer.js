import React from 'react'
import '../styles/Footer.scss'
function Footer() {
  return (
    <div>
        <footer className="footer">
             <div className="container">
                <div className="links">
                     <h2>Quick Links</h2>
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
                        <h2>Features</h2>
                            <ul>
                                <li><a href="/">Plagiarism Checker</a></li>
                                <li><a href="/">Free Publications</a></li>
                                <li><a href="/">Provides Books</a></li>
                                <li><a href="/">Provides PDF</a></li>
                                <li><a href="/">Paraphraser</a></li>
                            </ul>
                </div>
                <div className="offering">
                        <h2> Our Offerings</h2>
                            <ul>
                                 <li><a href="/">Free IELTS Master Class</a></li>
                                 <li><a href="/">Talk to Counsellor</a></li>
                                 <li><a href="/">IELTS Exam Overview</a></li>
                                 <li><a href="/">Important IELTS Articles</a></li>

                            </ul>
                </div>
             </div>
        </footer>
    </div>
  )
}

export default Footer