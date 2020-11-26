import React, {Component} from 'react';
import axios from 'axios';

import './contact.css';
import {Link} from "react-router-dom";
import CircleLogo from './assets/square.svg'; import MailLogo from './assets/Mail.svg';
import FacebookLogo from './assets/Facebook.svg'; import TwitterLogo from './assets/Twitter.svg'; import InstaLogo from './assets/Instagram.svg';

class Contact extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: 'POST',
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if(response.data.status === 'success'){
                alert("Message Sent!");
                this.resetForm()
            } else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render () {
        return (

            <div className="contact-page-container" id="contact">
                <div className="contact-page-info-container">
                {/* Left Container */}
                    <div className="contact-page-inner-container">
                        <img
                            src={CircleLogo} alt=""
                            style={{ width: '15vw', margin: 'auto' }}
                        />

                        {/** Social Links */}
                        <div className="social-links-container">
                            <button>
                                <img src={FacebookLogo} alt="Link to Facebook Account"/>
                            </button>

                            <button>
                                <img src={TwitterLogo} alt="Link to Twitter Account"/>
                            </button>

                            <button>
                                <img src={InstaLogo} alt="Link to Instagram Account"/>
                            </button>
                        </div>

                        {/** Etsy Link */}
                        <div className="etsy-button-container">
                            <h6>Prints Available From Here...</h6>
                            <button>
                                <h4>ETSY STORE</h4>
                            </button>
                        </div>

                        {/** Email Link */}
                        <div className="email-container">
                            <img src={MailLogo} alt="SB Illustrates Email"/>
                            <Link className="email-link-container">
                                <h6>sarahbrennanillustrates@gmail.com</h6>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Container */}
                <div className="contact-page-info-container">
                    <div className="contact-page-form-container">
                        <div style={
                            {
                                display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'flex-end',
                                width: '100%', height: '100%', gap: '2vh', margin: 0
                            }
                        }>
                            <h1>CONTACT ME</h1>
                            <p>Get in touch for commissions and general enquiries</p>
                            <hr style={{display: "block", width: '90%', borderRadius: '10px', marginTop: '1rem', border: '1px solid #038C57'}}/>
                        </div>
                        {/** Form Container */}
                        <form className="contact-page-form" onSubmit="submit">
                            <div style={{display: 'flex', flexDirection: "column", gap: '0.5rem'}}>
                                <label>
                                    <h6>Name</h6>
                                </label>
                                <input type="text" placeholder="Your name..."/>
                            </div>
                            <div style={{display: 'flex', flexDirection: "column", gap: '0.5rem', marginTop: '1rem'}}>
                                <label>
                                    <h6>Email</h6>
                                </label>
                                <input type="text" placeholder="Your email..."/>
                            </div>
                            <div style={{display: 'flex', flexDirection: "column", gap: '0.5rem', marginTop: '1rem'}}>
                                <label>
                                    <h6>Type your message</h6>
                                </label>
                                <textarea placeholder="Type your message here..."/>
                            </div>
                            <button>
                                <h4>SEND</h4>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

    onNameChange(event){
        this.setState({name: event.target.value})
    }

    onEmailChange(event){
        this.setState({email: event.target.value})
    }

    onMessageChange(event){
        this.setState({message: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
}

export default Contact;
