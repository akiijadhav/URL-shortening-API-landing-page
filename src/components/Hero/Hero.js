import React from 'react';
import illustratioWorking from '../../images/illustration-working.svg'

const Hero = () => {
    return (
        <div>
            <div>
                <h1>More than just shorter links</h1>
                <p>Build your band's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img src={illustratioWorking} alt="hero-illustration"></img>
            </div>
        </div>
    )
}

export default Hero;