import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './PrivacyPolicy.css';

// Brand Assets
import logo from '../assets/images/dotgangalogo.webp';
import dotSocial from '../assets/images/dotsocial.webp';
import digitalPren from '../assets/images/digitalpren.webp';

export default function PrivacyPolicy() {
  const contactEmail = 'rajaparihar@dotganga.com';

  return (
    <div className="privacy-page-wrapper">
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
      <main className="privacy-main-container">
        
        {/* Header Hero */}
        <section className="privacy-header-section">
          <div className="privacy-tag-badge">
            <span className="privacy-badge-dot"></span>
            LEGAL & TRANSPARENCY
          </div>

          <h1 className="privacy-title-main">
            Privacy <span className="text-red-accent">Policy</span>
          </h1>

          <p className="privacy-last-updated">
            Last Updated: August 2026 &bull; Effective Immediately
          </p>

          <p className="privacy-lead-intro">
            At <strong>DotGanga</strong>, we take your trust and privacy seriously. This Privacy Policy outlines how we collect, handle, utilize, and protect your personal information when you interact with our website, use our services, or communicate with our team.
          </p>
        </section>

        {/* Policy Content Body */}
        <section className="privacy-content-card">
          
          {/* Section 1 */}
          <article className="policy-section-block">
            <div className="section-number-pill">01</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Information We Collect</h2>
              <p className="policy-paragraph">
                We only collect information that is necessary to deliver exceptional marketing, design, and strategic consulting services. This includes:
              </p>
              <ul className="policy-list">
                <li>
                  <strong>Personal & Contact Data:</strong> Name, professional email address, phone/WhatsApp number, company/brand name, job role, and project specifications provided through our contact and audit forms.
                </li>
                <li>
                  <strong>Career & Portfolio Submissions:</strong> Resumes, portfolio links (Google Drive, Behance, YouTube, Figma), and professional bios submitted by creative applicants.
                </li>
                <li>
                  <strong>Technical & Usage Data:</strong> Anonymized IP addresses, browser types, device information, and browsing analytics collected via standard session cookies to optimize site speed and user experience.
                </li>
              </ul>
            </div>
          </article>

          {/* Section 2 */}
          <article className="policy-section-block">
            <div className="section-number-pill">02</div>
            <div className="section-body">
              <h2 className="policy-section-heading">How We Use Your Information</h2>
              <p className="policy-paragraph">
                Your data is exclusively utilized to conduct professional agency operations, including:
              </p>
              <ul className="policy-list">
                <li>Evaluating your brand’s marketing challenges and preparing tailored discovery proposals.</li>
                <li>Scheduling strategy calls, project onboarding, and client communications.</li>
                <li>Reviewing creative portfolios for freelance or full-time production opportunities.</li>
                <li>Enhancing our website performance, navigation flows, and security protocols.</li>
              </ul>
            </div>
          </article>

          {/* Section 3 */}
          <article className="policy-section-block">
            <div className="section-number-pill">03</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Zero Data Selling & Strict Confidentiality</h2>
              <p className="policy-paragraph">
                <strong>We do not sell, rent, monetize, or trade your personal or business data to third-party advertisers or brokers. Period.</strong>
              </p>
              <p className="policy-paragraph">
                Information shared with us is treated with strict confidentiality. Any non-public brand assets, business metrics, or campaign data shared during consultations are protected under mutual non-disclosure standards.
              </p>
            </div>
          </article>

          {/* Section 4 */}
          <article className="policy-section-block">
            <div className="section-number-pill">04</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Third-Party Infrastructure & Tools</h2>
              <p className="policy-paragraph">
                We partner only with industry-standard, secure infrastructure providers to facilitate our digital operations (e.g., form processing APIs, web hosting infrastructure, and analytics engines). These providers process data strictly on our behalf under compliant data protection frameworks.
              </p>
            </div>
          </article>

          {/* Section 5 */}
          <article className="policy-section-block">
            <div className="section-number-pill">05</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Cookies & Performance Analytics</h2>
              <p className="policy-paragraph">
                Our website utilizes standard session cookies to remember preferences and track aggregate performance metrics. You can control or disable cookies at any time through your individual browser settings without losing access to primary site content.
              </p>
            </div>
          </article>

          {/* Section 6 */}
          <article className="policy-section-block">
            <div className="section-number-pill">06</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Your Data Rights & Control</h2>
              <p className="policy-paragraph">
                You retain full ownership over your information. At any time, you have the right to:
              </p>
              <ul className="policy-list">
                <li>Request a copy of the personal information we maintain regarding your inquiry.</li>
                <li>Request immediate correction or updating of any inaccurate contact details.</li>
                <li>Request complete deletion/erasure of your contact records from our active database.</li>
              </ul>
            </div>
          </article>

          {/* Section 7 - Contact */}
          <article className="policy-section-block">
            <div className="section-number-pill">07</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Contact Us</h2>
              <p className="policy-paragraph">
                If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal data is handled, please contact us at:
              </p>
              <p className="policy-paragraph">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contactEmail}?subject=Privacy%20Inquiry%20-%20DotGanga`} className="policy-email-link">
                  {contactEmail}
                </a>
              </p>
            </div>
          </article>

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
              <Link to="/privacy-policy" className="footer-link active-link">Privacy Policy</Link>
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
