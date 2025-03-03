import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <header className="hero">
                <h1>Welcome to Tech University</h1>
                <p>Shaping Tomorrow's Leaders Today</p>
            </header>

            <main>
                <section className="features">
                    <div className="feature-card">
                        <h2>Excellence in Education</h2>
                        <p>World-class faculty and innovative teaching methodologies</p>
                    </div>
                    <div className="feature-card">
                        <h2>Research Focus</h2>
                        <p>Cutting-edge research facilities and opportunities</p>
                    </div>
                    <div className="feature-card">
                        <h2>Global Network</h2>
                        <p>International collaborations and exchange programs</p>
                    </div>
                </section>

                <section className="news">
                    <h2>Latest News</h2>
                    <div className="news-grid">
                        <div className="news-item">
                            <h3>Annual Tech Fest 2024</h3>
                            <p>Join us for the biggest technical festival of the year</p>
                        </div>
                        <div className="news-item">
                            <h3>Research Grant Awarded</h3>
                            <p>Our university received a prestigious research grant</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home