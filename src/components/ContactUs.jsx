import React from 'react';
import './ContactUs.css';
import { useState } from 'react';

const ContactUs = () => {
    const access_key = "a6635620-7615-4668-8c1d-dddbce91e49d";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

    // Handles input changes for form fields
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        const data = { ...formData, access_key };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (result.success) {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
            } else {
                console.error("Form submission error:", result);
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="container">
            <div className="contact-wrapper">
                <div className="contact-info">
                    <p className="section-subtitle">CONTACT US</p>
                    <h2>Have a project? Get in touch!</h2>
                    <img src="../../public/images/phone.png" alt="Hand holding a smartphone" />
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        <div className="captcha-container">
                            <input type="checkbox" id="not-a-robot" required />
                            <label htmlFor="not-a-robot">I'm not a robot</label>
                            {/* In a real app, you would integrate Google reCAPTCHA here */}
                        </div>
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Get in Touch"}
                        </button>
                    </form>
                </div>
            </div>
            {submissionStatus === 'success' && (
                <div className="submission-message success">
                    Thank you! Your message has been sent successfully.
                </div>
            )}
            {submissionStatus === 'error' && (
                <div className="submission-message error">
                    Sorry, there was an error sending your message. Please try again.
                </div>
            )}
        </div>
    );
};

export default ContactUs;