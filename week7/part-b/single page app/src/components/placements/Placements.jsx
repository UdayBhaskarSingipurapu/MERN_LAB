import React from 'react'
import './Placements.css'

function Placements() {
    return (
        <main className="placements-page">
            <section className="placements-hero">
                <h1>Campus Placements</h1>
                <p>Building Careers, Transforming Lives</p>
            </section>

            <section className="placement-stats">
                <div className="stat-card">
                    <h3>95%</h3>
                    <p>Placement Rate</p>
                </div>
                <div className="stat-card">
                    <h3>500+</h3>
                    <p>Companies Visited</p>
                </div>
                <div className="stat-card">
                    <h3>₹18 LPA</h3>
                    <p>Average Package</p>
                </div>
                <div className="stat-card">
                    <h3>₹42 LPA</h3>
                    <p>Highest Package</p>
                </div>
            </section>

            <section className="top-recruiters">
                <h2>Our Top Recruiters</h2>
                <div className="recruiters-grid">
                    <div className="recruiter-card">Google</div>
                    <div className="recruiter-card">Microsoft</div>
                    <div className="recruiter-card">Amazon</div>
                    <div className="recruiter-card">Apple</div>
                    <div className="recruiter-card">Meta</div>
                    <div className="recruiter-card">IBM</div>
                </div>
            </section>

            <section className="placement-process">
                <h2>Placement Process</h2>
                <div className="process-steps">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Registration</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Pre-Placement Talk</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Written Test</p>
                    </div>
                    <div className="step">
                        <h3>Step 4</h3>
                        <p>Technical Interview</p>
                    </div>
                    <div className="step">
                        <h3>Step 5</h3>
                        <p>HR Interview</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Placements