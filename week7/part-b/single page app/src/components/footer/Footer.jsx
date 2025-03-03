import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@techuniversity.edu</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Campus Life</a></li>
                        <li><a href="#">Admissions</a></li>
                        <li><a href="#">Research</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Tech University. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer