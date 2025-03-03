import React from 'react'

function Contact() {
    return (
        <section>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us.</p>
            <ul>
                <li>Address: 123 School Lane, Education City</li>
                <li>Phone: +123-456-7890</li>
                <li>Email: info@schoolname.com</li>
            </ul>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;