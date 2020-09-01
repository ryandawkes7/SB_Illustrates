import React, {Component} from 'react';
import './about.css';

class About extends Component {
    render () {
        return (
            <div className="about-page-design">
                <div className="about">
                    <div className="about-img">
                        <img src={require('../images/art/Self-Portrait.png')}/>
                    </div>
                    <div className="about-desc">
                        <h1>ABOUT ME</h1>
                        <p>My name is Sarah Brennan - I am a third year Illustration (BA Hons) student at UWE
                            and I am based in Bristol. My main areas of work include portraits, social issues,
                            and things that inspire me from day to day. I work with traditional and digital art
                            mediums - some examples of my work are available in my portfolio.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

