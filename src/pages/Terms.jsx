import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './PrivacyPolicy.css'; // Reuses the exact same clean architectural layout tokens
import './Terms.css';

// Brand Assets
import logo from '../assets/dotgangalogo.png';
import dotSocial from '../assets/DotSocial.png';
import digitalPren from '../assets/digialpren.PNG';

export default function Terms() {
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
            LEGAL AGREEMENT
          </div>

          <h1 className="privacy-title-main">
            Terms & <span className="text-red-accent">Conditions</span>
          </h1>

          <p className="privacy-last-updated">
            Last Updated: August 2026 &bull; Effective Immediately
          </p>

          <p className="privacy-lead-intro">
            Welcome to <strong>DotGanga</strong>. These Terms and Conditions govern your access to and use of our website, creative production, video editing, branding services, and performance marketing consulting engagements.
          </p>
        </section>

        {/* Content Card */}
        <section className="privacy-content-card">
          
          {/* Section 1 */}
          <article className="policy-section-block">
            <div className="section-number-pill">01</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Acceptance of Terms</h2>
              <p className="policy-paragraph">
                By accessing our website, submitting an inquiry, booking a discovery consultation, or engaging DotGanga for agency services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article className="policy-section-block">
            <div className="section-number-pill">02</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Scope of Agency Services</h2>
              <p className="policy-paragraph">
                DotGanga provides specialized creative storytelling, video production, 3D motion design, branding, and performance marketing solutions. All project deliverables, timelines, revision policies, and specific objectives are defined in individual client proposals or service agreements.
              </p>
            </div>
          </article>

          {/* Section 3 */}
          <article className="policy-section-block">
            <div className="section-number-pill">03</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Intellectual Property & Portfolio Rights</h2>
              <p className="policy-paragraph">
                Upon receipt of full payment for completed projects, clients retain ownership of the finalized, approved creative deliverables produced specifically for their brand.
              </p>
              <p className="policy-paragraph">
                DotGanga reserves the right to showcase non-confidential deliverables, showreels, case studies, and campaign results in our agency portfolio and marketing channels, unless otherwise agreed under a strict white-label non-disclosure agreement (NDA).
              </p>
            </div>
          </article>

          {/* Section 4 */}
          <article className="policy-section-block">
            <div className="section-number-pill">04</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Client Responsibilities & Cooperation</h2>
              <p className="policy-paragraph">
                Timely project delivery requires active client cooperation. Clients agree to:
              </p>
              <ul className="policy-list">
                <li>Provide accurate brand guidelines, raw assets, logos, and product information required for project execution.</li>
                <li>Provide prompt creative feedback and milestone approvals within mutually agreed turnaround windows.</li>
                <li>Ensure all materials and assets supplied to DotGanga do not infringe upon any third-party intellectual property rights.</li>
              </ul>
            </div>
          </article>

          {/* Section 5 */}
          <article className="policy-section-block">
            <div className="section-number-pill">05</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Payment Terms & Billing</h2>
              <p className="policy-paragraph">
                Payment schedules, deposit requirements, retainer cycles, and milestone invoicing are detailed within individual project proposals or invoices. Invoices must be settled in accordance with the stipulated payment terms to prevent production pauses or delay in final asset handovers.
              </p>
            </div>
          </article>

          {/* Section 6 */}
          <article className="policy-section-block">
            <div className="section-number-pill">06</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Limitation of Liability</h2>
              <p className="policy-paragraph">
                DotGanga applies top-tier industry craft and data-backed creative strategies to maximize brand visibility and conversions. However, digital platform algorithms, third-party advertising policy changes, and external market variables remain beyond direct agency control. DotGanga shall not be liable for indirect, incidental, or consequential damages arising from campaign operations.
              </p>
            </div>
          </article>

          {/* Section 7 */}
          <article className="policy-section-block">
            <div className="section-number-pill">07</div>
            <div className="section-body">
              <h2 className="policy-section-heading">Contact Us</h2>
              <p className="policy-paragraph">
                For legal inquiries, contractual questions, or clarifications regarding these Terms and Conditions, please contact us directly at:
              </p>
              <p className="policy-paragraph">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contactEmail}?subject=Terms%20Inquiry%20-%20DotGanga`} className="policy-email-link">
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
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link active-link">Terms & Conditions</Link>
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
