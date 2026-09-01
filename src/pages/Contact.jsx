import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Contact.css';

// Brand Assets
import logo from '../assets/dotgangalogo.png';
import dotSocial from '../assets/DotSocial.png';
import digitalPren from '../assets/digialpren.PNG';
import whatsappIcon from '../assets/whatsapp-svgrepo-com.svg';

export default function Contact() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phoneNumber = '+91 97722 12226';
  const rawPhone = '919772212226';
  const email = 'rajaparihar@dotganga.com';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Navigation Header from Home */}
      <header className="navbar">
        <div className="logo-container">
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img src={logo} alt="DotGanga Logo" className="logo-img" />
          </Link>
        </div>
        <Link to="/contact" className="btn-contact" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          Contact us
        </Link>
      </header>

      {/* Main Content */}
      <main className="contact-main-container">
        
        {/* Header Hero */}
        <section className="contact-header-section">
          <div className="contact-tag-badge">
            <span className="contact-badge-dot"></span>
            GET IN TOUCH
          </div>

          <h1 className="contact-title-main">
            Let’s Build Something <br />
            <span className="text-red-accent">Iconic Together.</span>
          </h1>

          <p className="contact-lead-intro">
            Have a project in mind, need high-velocity creative production, or want to scale your brand with paid media? Reach out through our direct channels or visit our agency headquarters.
          </p>
        </section>

        {/* 2 Contact Cards Grid */}
        <section className="contact-cards-grid">
          
          {/* Card 1: Direct Contact Channels */}
          <div className="contact-elevated-card">
            <div className="contact-card-header">
              <span className="contact-card-tag">DIRECT REACH</span>
              <h2 className="contact-card-title">Contact Channels</h2>
              <p className="contact-card-desc">
                Connect directly with our team via phone, WhatsApp, or email for immediate assistance.
              </p>
            </div>

            <div className="contact-channels-list">
              
              {/* Call Channel */}
              <div className="channel-item-box">
                <div className="channel-icon-circle phone-tint">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="channel-info-wrap">
                  <span className="channel-label">Direct Phone Call</span>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="channel-value-link">
                    {phoneNumber}
                  </a>
                </div>
                <div className="channel-action-btns">
                  <button
                    type="button"
                    className={`btn-channel-copy ${copiedPhone ? 'is-copied' : ''}`}
                    onClick={handleCopyPhone}
                  >
                    {copiedPhone ? '✓ Copied' : 'Copy'}
                  </button>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="btn-channel-direct">
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="channel-item-box whatsapp-box-highlight">
                <div className="channel-icon-circle whatsapp-tint">
                  <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-svg-icon" />
                </div>
                <div className="channel-info-wrap">
                  <span className="channel-label">WhatsApp Quick Chat</span>
                  <a href={`https://wa.me/${rawPhone}?text=Hi%20DotGanga%2C%20I%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" className="channel-value-link">
                    {phoneNumber}
                  </a>
                </div>
                <div className="channel-action-btns">
                  <a
                    href={`https://wa.me/${rawPhone}?text=Hi%20DotGanga%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-channel-whatsapp"
                  >
                    Chat on WhatsApp
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Email Channel */}
              <div className="channel-item-box">
                <div className="channel-icon-circle mail-tint">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="channel-info-wrap">
                  <span className="channel-label">Official Email</span>
                  <a href={`mailto:${email}?subject=Project%20Inquiry%20-%20DotGanga`} className="channel-value-link">
                    {email}
                  </a>
                </div>
                <div className="channel-action-btns">
                  <button
                    type="button"
                    className={`btn-channel-copy ${copiedEmail ? 'is-copied' : ''}`}
                    onClick={handleCopyEmail}
                  >
                    {copiedEmail ? '✓ Copied' : 'Copy'}
                  </button>
                  <a href={`mailto:${email}?subject=Project%20Inquiry%20-%20DotGanga`} className="btn-channel-direct">
                    Send Mail
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Office Location & Interactive Map */}
          <div className="contact-elevated-card">
            <div className="contact-card-header">
              <span className="contact-card-tag">HEADQUARTERS</span>
              <h2 className="contact-card-title">Our Location</h2>
              <p className="contact-card-desc">
                DotGanga - Your Marketing Agency (Jodhpur, Rajasthan, India)
              </p>
            </div>

            <div className="map-embed-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4572.709090031422!2d73.0672117!3d26.3196208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418da1e4d28cf3%3A0xe63123b0ba654110!2sDotGanga%20-%20Your%20Marketing%20Agency%20(Jodhpur)!5e1!3m2!1sen!2sin!4v1788178018639!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="DotGanga Location Map"
              ></iframe>
            </div>

            <div className="map-footer-actions">
              <div className="location-pin-info">
                <span className="location-pulse-dot"></span>
                <span>Jodhpur, Rajasthan, India</span>
              </div>
              <a
                href="https://maps.google.com/?q=DotGanga+-+Your+Marketing+Agency+(Jodhpur)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-directions"
              >
                Get Directions
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* Brand Footer */}
      <footer className="brand-footer">
        <div className="footer-top">
          <div className="footer-brand-info">
            <img src={logo} alt="DotGanga Logo" className="footer-logo" />
            <p className="footer-tagline">
              Pushing brands beyond boundaries through design, storytelling, and strategy.
            </p>
          </div>

          <div className="footer-partners">
            <img src={dotSocial} alt="DotSocial" className="footer-partner-logo dotsocial-logo" />
            <a href="https://www.instagram.com/digitallpreneurs/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
              <img src={digitalPren} alt="DigitalPren" className="footer-partner-logo digitalpren-logo" />
            </a>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/dotganga/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://in.linkedin.com/company/dotganga" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-column">
              <span className="footer-column-title">Company</span>
              <Link to="/careers" className="footer-link">Careers</Link>
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms & Conditions</Link>
              <div className="footer-contact-row">
                <Link to="/contact" className="footer-link active-link">Contact Us</Link>
                <div className="footer-social-links mobile-social-links">
                  <a href="https://www.instagram.com/dotganga/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://in.linkedin.com/company/dotganga" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} DotGanga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
