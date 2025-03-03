import React from 'react'
import './Events.css'

function Events() {
    return (
        <main className="events-page">
            <section className="events-hero">
                <h1>Campus Events</h1>
                <p>Celebrating Learning and Innovation</p>
            </section>

            <section className="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="events-grid">
                    <div className="event-card">
                        <div className="event-date">
                            <span className="day">15</span>
                            <span className="month">Mar</span>
                        </div>
                        <div className="event-details">
                            <h3>Tech Fest 2024</h3>
                            <p>Annual technical festival featuring competitions, workshops, and exhibitions</p>
                            <button className="register-btn">Register Now</button>
                        </div>
                    </div>
                    <div className="event-card">
                        <div className="event-date">
                            <span className="day">20</span>
                            <span className="month">Mar</span>
                        </div>
                        <div className="event-details">
                            <h3>Research Symposium</h3>
                            <p>International research conference with keynote speakers</p>
                            <button className="register-btn">Register Now</button>
                        </div>
                    </div>
                    <div className="event-card">
                        <div className="event-date">
                            <span className="day">25</span>
                            <span className="month">Mar</span>
                        </div>
                        <div className="event-details">
                            <h3>Cultural Night</h3>
                            <p>Annual cultural celebration featuring performances and art exhibitions</p>
                            <button className="register-btn">Register Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="past-events">
                <h2>Past Events Gallery</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">Tech Fest 2023</div>
                    <div className="gallery-item">Sports Meet 2023</div>
                    <div className="gallery-item">Alumni Meet 2023</div>
                    <div className="gallery-item">Hackathon 2023</div>
                </div>
            </section>
        </main>
    )
}

export default Events