import React, {Component} from 'react';
import axios from 'axios';

import './contact.css';
import {Link} from "react-router-dom";
import CircleLogo from './assets/square.svg'; import MailLogo from './assets/Mail.svg';
import FacebookLogo from './assets/Facebook.svg'; import TwitterLogo from './assets/Twitter.svg'; import InstaLogo from './assets/Instagram.svg';
import {MdEmail} from "react-icons/all";

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

        if(window.innerWidth >= 1400 ) {
            return(

                <div className="contact-page-container" id="contact">
                    <div className="contact-page-info-container">

                    {/* Left Container */}
                        <div className="contact-page-inner-container">

                            {/* Logo */}
                            <img
                                src={CircleLogo} alt=""
                                style={{ width: '15vw', margin: 'auto' }}
                            />

                        {/* Social Links */}
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

                            {/* Etsy Link*/}
                            <div className="etsy-button-container">
                                <h6>Prints Available From Here...</h6>
                                <a href="https://www.etsy.com/uk/shop/SarahBIllustrates">
                                    <h4>ETSY STORE</h4>
                                </a>
                            </div>

                            {/* Email Link */}
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

                            {/* Title Section */}
                            <div className="cpf-title-container">
                                <h1>CONTACT ME</h1>
                                <p>Get in touch for commissions and general enquiries</p>
                            </div>

                            {/* Form Section */}
                            <form className="contact-page-form" onSubmit="submit">

                                {/* Name Input */}
                                <div className="cpf-name-input cpf-input">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your name..."/>
                                </div>

                                {/* Email Input */}
                                <div className="cpf-email-input cpf-input">
                                    <label>Email</label>
                                    <input type="text" placeholder="Your email..."/>
                                </div>

                                {/* Message Input */}
                                <div className="cpf-message-input cpf-input">
                                    <label>Type your message</label>
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
        } else if(window.innerWidth < 500) {
            return(
                <div className="contact-page-container">

                    {/* Title Section */}
                    <div className="cp-title-container">

                        {/* Title */}
                        <div className="cpt-title">
                            CONTACT ME
                        </div>

                        {/* Subtitle */}
                        <div className="cpt-subtitle">
                            Follow my pages to get updates on my work
                        </div>

                    </div>

                    {/* Social Links */}
                    <div className="cp-social-container">

                        {/* Instagram */}
                        <a>
                            <img src={InstaLogo} alt="Instagram" />
                        </a>

                        {/* Facebook */}
                        <a>
                            <img src={FacebookLogo} alt="Facebook" />
                        </a>

                        {/* Twitter */}
                        <a>
                            <img src={TwitterLogo} alt="Twitter" />
                        </a>

                    </div>

                    {/* Etsy & Email */}
                    <div className="cp-etsy-email-container">

                        {/* Etsy */}
                        <div className="cpee-container">

                            {/* Description */}
                            <div className="cpee-description">
                                Purchase my prints here
                            </div>

                            {/* Button */}
                            <a className="etsy-button">
                                Etsy
                            </a>

                        </div>

                        {/* Email */}
                        <div className="cpee-container">

                            {/* Description */}
                            <div className="cpee-description">
                                Email your requests here
                            </div>

                            {/* Button */}
                            <a className="email-button">
                                <MdEmail/>
                            </a>

                        </div>

                    </div>

                    {/* Message Description */}
                    <div className="cp-message-description-container">
                        Quickly send a message for commisions and general enquiries with the form below
                    </div>

                    {/* Message Form Section */}
                    <form className="cp-message-container">

                        {/* Name */}
                        <div className="cpm-info-container">

                            {/* Title */}
                            <div className="cpm-title">
                                Name
                            </div>

                            {/* Input */}
                            <input className="cpm-input" type="name" />

                        </div>

                        {/* Email */}
                        <div className="cpm-info-container">

                            {/* Title */}
                            <div className="cpm-title">
                                Email
                            </div>

                            {/* Input */}
                            <input className="cpm-input" type="email" />

                        </div>

                        {/* Message */}
                        <div className="cpm-info-container">

                            {/* Title */}
                            <div className="cpm-title">
                                Type your message
                            </div>

                            {/* Input */}
                            <textarea className="cpm-input" type="textarea" />

                        </div>

                        {/* Send Button */}
                        <button type="submit" className="cpm-button">
                            Send
                        </button>

                    </form>

                </div>
            );
        }

    }

    onNameChange(event){ this.setState({name: event.target.value}) }

    onEmailChange(event){ this.setState({email: event.target.value}) }

    onMessageChange(event){ this.setState({message: event.target.value}) }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
}

export default Contact;
