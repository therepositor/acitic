import React from 'react'

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <nav className='homenavbar'>
                <span>
                    <h3>Contact Us</h3>     
                </span>     
            </nav>
            <div className="contact-form">
                <h3>Do you have any enquiries?</h3>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="20"></textarea>
                    </div>
                    <div className="form-group-submit">
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default ContactUs
