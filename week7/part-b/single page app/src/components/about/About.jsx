import React from 'react'
import './About.css'

function About() {
    return (
        <main className="about-page">
            <section className="about-hero">
                <h1>About Tech University</h1>
                <p>Building Future Leaders Since 1950</p>
            </section>
            <section className="about-content">
                <div className="about-section">
                    <h2>Our History</h2>
                    <p>Founded in 1950, Tech University has been at the forefront of technological education for over seven decades. Our journey began with a vision to create a center of excellence in technical education.</p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>To provide world-class education in technology and science, fostering innovation and research while building future leaders who contribute to society's advancement.</p>
                </div>

                <div className="about-section">
                    <h2>Our Vision</h2>
                    <p>To be a globally recognized institution known for excellence in education, research, and innovation, producing leaders who shape the future of technology and society.</p>
                </div>
            </section>

            <section className="stats">
                <div className="stat-card">
                    <h3>15,000+</h3>
                    <p>Students</p>
                </div>
                <div className="stat-card">
                    <h3>500+</h3>
                    <p>Faculty Members</p>
                </div>
                <div className="stat-card">
                    <h3>100+</h3>
                    <p>Research Labs</p>
                </div>
                <div className="stat-card">
                    <h3>50+</h3>
                    <p>Years of Excellence</p>
                </div>
            </section>
        </main>
    )
}

export default About