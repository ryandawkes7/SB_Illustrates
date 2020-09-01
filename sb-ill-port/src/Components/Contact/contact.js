import React, {Component} from 'react';
import axios from 'axios';

import './contact.css';
import {Link} from "react-router-dom";

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
            <div className="contact-page-design">
                {/*Portfolio Section*/}
                <div className="contact">
                    {/* Left Panel */}
                    <div className="contact-info">
                        <div className="contact-container">
                            <img className="logo-circle" src={require('../images/logo/logo-square.png')}/>
                            <div className="social-links">
                                <img className="social-img" src={require('../images/logo/instagram.png')}/>
                                <img className="social-img" src={require('../images/logo/facebook.png')}/>
                                <img className="social-img" src={require('../images/logo/twitter.png')}/>
                            </div>
                            <div className="etsy-info">
                                <p>Prints available from here...</p>
                                <Link to="/">
                                    <button className="etsy-btn">ETSY STORE</button>
                                </Link>
                            </div>
                            <div className="email-link">
                                <img src={require('../images/logo/Mail.png')} />
                                <h6>sarahbrennanillustrates@gmail.com</h6>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="contact-desc">
                        <h1>CONTACT ME</h1>
                        <p>Get in touch for commissions and general enquiries.</p>
                        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.onNameChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={this.state.email}
                                    onChange={this.onEmailChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Type your message</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    id="message"
                                    value={this.state.message}
                                    onChange={this.onMessageChange.bind(this)}
                                />
                            </div>
                            <button type="submit" className="contact-submit">Send</button>
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