import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Careers.css';

// Brand Assets
import logo from '../assets/dotgangalogo.png';
import dotSocial from '../assets/DotSocial.png';
import digitalPren from '../assets/digialpren.PNG';

export default function Careers() {
  const [copied, setCopied] = useState(false);
  const email = 'rajaparihar@dotganga.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="careers-page-wrapper">
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
      <main className="careers-main-container">
        
        {/* Hero Section */}
        <section className="careers-hero-clean">
          <div className="careers-tag-badge">
            <span className="badge-live-dot"></span>
            CAREERS AT DOTGANGA
          </div>

          <h1 className="careers-title-clean">
            Join Our Creative & <br />
            <span className="text-red-accent">Growth Team</span>
          </h1>

          <p className="careers-team-intro">
            At <strong>DotGanga</strong>, our team is a tight-knit collective of creative directors, video editors, 3D motion designers, media buyers, and brand strategists. We partner with ambitious brands to produce unforgettable storytelling and high-velocity digital growth.
          </p>

          <div className="careers-status-pill">
            <span className="status-pulse-dot"></span>
            <span>Currently No Active Openings</span>
          </div>
        </section>

        {/* Portfolio Submission Box (Hero Card) */}
        <section className="careers-cta-section" id="submit-portfolio">
          <div className="careers-card-elevated">
            
            <div className="card-top-header">
              <span className="card-top-tag">DIRECT APPLICATION INBOX</span>
              <h2 className="card-main-heading">Share Your Portfolio & Work</h2>
              <p className="card-sub-description">
                We are always excited to connect with exceptional talent. If you have a strong reel, Google Drive showcase, Behance, or live portfolio, send it directly to our leadership:
              </p>
            </div>

            {/* Interactive Mail Box */}
            <div className="careers-email-banner">
              <div className="email-meta-left">
                <div className="mail-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="email-meta-text">
                  <span className="email-meta-label">Send Portfolio Directly To</span>
                  <a href={`mailto:${email}?subject=Portfolio%20Submission%20-%20DotGanga`} className="email-meta-address">
                    {email}
                  </a>
                </div>
              </div>

              <div className="email-meta-buttons">
                <button
                  type="button"
                  className={`btn-action-copy ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Portfolio%20Submission%20-%20Career%20at%20DotGanga`}
                  className="btn-action-send"
                >
                  Send Portfolio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick submission items */}
            <div className="submission-features-grid">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <span className="feature-bullet-icon">🎬</span>
                </div>
                <div className="feature-content-wrap">
                  <h3 className="feature-item-title">Video & Motion</h3>
                  <p className="feature-item-desc">Cinematography, Showreels, YouTube/Vimeo, Google Drive</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <span className="feature-bullet-icon">🎨</span>
                </div>
                <div className="feature-content-wrap">
                  <h3 className="feature-item-title">Design & 3D</h3>
                  <p className="feature-item-desc">Behance, Figma, Dribbble, Live Sites</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <span className="feature-bullet-icon">📄</span>
                </div>
                <div className="feature-content-wrap">
                  <h3 className="feature-item-title">Profile & Resume</h3>
                  <p className="feature-item-desc">Updated Resume PDF or LinkedIn URL</p>
                </div>
              </div>
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
                <Link to="/contact" className="footer-link">Contact Us</Link>
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
