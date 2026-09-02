import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import avatar from './assets/images/avatar.webp';
import logo from './assets/images/dotgangalogo.webp';
import favicon from './assets/images/favicon.webp';
import clapper from './assets/images/img-film-clapper.webp';
import { FlipWord } from './FlipClock';
import mobileMock from './assets/images/mobile-mock.webp';
import bg1 from './assets/images/bg-1.webp';
import bg2 from './assets/images/bg-2.webp';
import bg3 from './assets/images/bg-3.webp';
import bg4 from './assets/images/bg-4.webp';
import dotSocial from './assets/images/dotsocial.webp';
import digitalPren from './assets/images/digitalpren.webp';

// Import Help Card Images
import websiteImg from './assets/images/card-website.webp';
import websiteActiveImg from './assets/images/card-website-active.webp';
import personalImg from './assets/images/card-personal.webp';
import personalActiveImg from './assets/images/card-personal-active.webp';
import brandingImg from './assets/images/card-branding.webp';
import brandingActiveImg from './assets/images/card-branding-active.webp';
import performanceImg from './assets/images/card-performance.webp';
import performanceActiveImg from './assets/images/card-performance-active.webp';
import socialImg from './assets/images/card-social.webp';
import socialActiveImg from './assets/images/card-social-active.webp';
import seoImg from './assets/images/card-seo.webp';
import seoActiveImg from './assets/images/card-seo-active.webp';

// Import Video Assets for Filmstrip
import video1 from './assets/video/video1.webm';
import video2 from './assets/video/video2.webm';
import video3 from './assets/video/video3.webm';
import video4 from './assets/video/video4.webm';
import video5 from './assets/video/video5.webm';
import video6 from './assets/video/video6.webm';
import video7 from './assets/video/video7.webm';
import video8 from './assets/video/video8.webm';
import video9 from './assets/video/video9.webm';

const videosList = [
  video1, video2, video3, video4, video5, video6, video7, video8, video9
];


// Import Client Logos
import logo6 from './assets/Dotganga Portfolio/6.svg';
import logo12 from './assets/Dotganga Portfolio/12.svg';
import logo19 from './assets/Dotganga Portfolio/19.svg';
import logo21 from './assets/Dotganga Portfolio/21.svg';
import logo35 from './assets/Dotganga Portfolio/35.svg';
import logoDMStudio from './assets/Dotganga Portfolio/DM Studio.svg';
import logoMask1 from './assets/Dotganga Portfolio/Mask group-1.svg';
import logoMask from './assets/Dotganga Portfolio/Mask group.svg';
import logoKake from './assets/Dotganga Portfolio/Kake Di Hatti.svg';
import logoMayank from './assets/Dotganga Portfolio/Mayank Fashion.svg';
import logoSMRE from './assets/Dotganga Portfolio/SMRE.svg';
import logoProRoute from './assets/Dotganga Portfolio/ProRoute Landscape Logo Background erased 1.svg';
import logoWithName from './assets/Dotganga Portfolio/logo-with-nametransprent-1-1 1.svg';
// Import 12 Social Formats Showcase Items from images
const socialGridImagesObj = import.meta.glob('./assets/images/grid-*.webp', { eager: true, import: 'default' });
const socialGridImages = Object.values(socialGridImagesObj);


// SVG logo shapes for the marquee items to keep things high fidelity and scalable
const LogoIconOne = () => (
  <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LogoIconTwo = () => (
  <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const LogoIconThree = () => (
  <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// Animated counter component using requestAnimationFrame to ensure all counters finish at the same time
const AnimatedCounter = ({ target, start, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;
    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuad) for smoother look
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, start, duration]);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return <span>{formatNumber(count)}</span>;
};

const wordPairs = [
  { word1: 'Clicks', word2: 'Customers' },
  { word1: 'Traffic', word2: 'Conversions' },
  { word1: 'Brands', word2: 'Communities' },
  { word1: 'Campaigns', word2: 'Growth' },
];

const helpOptions = [
  { name: 'Website', img: websiteImg, activeImg: websiteActiveImg },
  { name: 'Personal Branding', img: personalImg, activeImg: personalActiveImg },
  { name: 'Business Branding', img: brandingImg, activeImg: brandingActiveImg },
  { name: 'Performance Marketing', img: performanceImg, activeImg: performanceActiveImg },
  { name: 'Digital Marketing', img: socialImg, activeImg: socialActiveImg },
  { name: 'SEO', img: seoImg, activeImg: seoActiveImg }
];

function App() {
  const [index, setIndex] = React.useState(0);
  const [activeVideo, setActiveVideo] = React.useState(videosList[0]);

  const [currentStep, setCurrentStep] = React.useState(1);
  const scrollToForm = () => {
    const el = document.getElementById('book-call-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [formData, setFormData] = React.useState({
    businessName: '',
    contactPerson: '',
    role: '',
    designation: '',
    phoneNumber: '',
    isWhatsappSame: true,
    whatsappNumber: '',
    websiteOrSocial: '',
    email: '',
    helpWith: [],
    projectDetails: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoleSelect = (roleName) => {
    setFormData((prev) => ({
      ...prev,
      role: roleName,
      designation: roleName === 'Other' ? '' : roleName
    }));
  };

  const handleHelpToggle = (option) => {
    setFormData((prev) => {
      const current = prev.helpWith || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return {
        ...prev,
        helpWith: updated
      };
    });
  };

  const handleBudgetSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget === value ? '' : value
    }));
  };

  const handleTimelineSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      timeline: prev.timeline === value ? '' : value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "48456eb3-8e98-4189-8c0e-dace94934ae7");
      formDataToSend.append("subject", `New Inquiry: ${formData.businessName || 'Client'} - ${formData.contactPerson || 'Lead'}`);
      formDataToSend.append("from_name", "DotGanga Website Form");
      
      // Step 1 Fields: Business & Contact Info
      formDataToSend.append("Business Name", formData.businessName);
      formDataToSend.append("Contact Person", formData.contactPerson);
      formDataToSend.append("Phone Number", formData.phoneNumber);
      formDataToSend.append(
        "WhatsApp Number", 
        formData.isWhatsappSame 
          ? `${formData.phoneNumber} (Same as Phone)` 
          : (formData.whatsappNumber || formData.phoneNumber)
      );
      formDataToSend.append(
        "Role / Designation", 
        formData.role === 'Other' 
          ? (formData.designation || 'Other') 
          : (formData.role || 'Not Specified')
      );
      formDataToSend.append("Website or Social Link", formData.websiteOrSocial || 'N/A');

      // Step 2 Fields: Email & Project Scope
      formDataToSend.append("Email Address", formData.email);
      formDataToSend.append("Services Needed", (formData.helpWith || []).join(', '));
      formDataToSend.append("Project Brief / Details", formData.projectDetails || 'N/A');
      formDataToSend.append("Approximate Budget", formData.budget || 'Not specified');
      formDataToSend.append("Starting Timeline", formData.timeline || 'Not specified');

      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
        // Reset form fields
        setFormData({
          businessName: '',
          contactPerson: '',
          role: '',
          designation: '',
          phoneNumber: '',
          isWhatsappSame: true,
          whatsappNumber: '',
          websiteOrSocial: '',
          email: '',
          helpWith: [],
          projectDetails: '',
          budget: '',
          timeline: ''
        });
        setCurrentStep(1);
      } else {
        console.error("Web3Forms response:", data);
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  const [startCounters, setStartCounters] = React.useState(false);
  const metricsRef = React.useRef(null);

  React.useEffect(() => {
    if (!metricsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  const collageSectionRef = React.useRef(null);
  const col1Ref = React.useRef(null);
  const col2Ref = React.useRef(null);
  const col3Ref = React.useRef(null);
  const col4Ref = React.useRef(null);

  React.useEffect(() => {
    let scrollTimeout = null;

    const handleScroll = () => {
      if (!collageSectionRef.current) return;
      const rect = collageSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        const isMobile = window.innerWidth <= 768;
        const maxShift = isMobile ? 60 : 120; // Shift in pixels (smaller on mobile)
        const shiftOdd = (clampedProgress - 0.5) * maxShift;
        const shiftEven = -(clampedProgress - 0.5) * maxShift;

        if (isMobile) {
          // 2-column mobile curve (Columns 1 & 3 are left, Columns 2 & 4 are right)
          if (col1Ref.current) col1Ref.current.style.transform = `translateY(${shiftOdd}px) rotateY(10deg) translateZ(-30px)`;
          if (col2Ref.current) col2Ref.current.style.transform = `translateY(${shiftEven}px) rotateY(-10deg) translateZ(-30px)`;
          if (col3Ref.current) col3Ref.current.style.transform = `translateY(${shiftOdd}px) rotateY(10deg) translateZ(-30px)`;
          if (col4Ref.current) col4Ref.current.style.transform = `translateY(${shiftEven}px) rotateY(-10deg) translateZ(-30px)`;
        } else {
          // 4-column desktop curve
          if (col1Ref.current) col1Ref.current.style.transform = `translateY(${shiftOdd}px) rotateY(15deg) translateZ(-60px)`;
          if (col2Ref.current) col2Ref.current.style.transform = `translateY(${shiftEven}px) rotateY(5deg) translateZ(-10px)`;
          if (col3Ref.current) col3Ref.current.style.transform = `translateY(${shiftOdd}px) rotateY(-5deg) translateZ(-10px)`;
          if (col4Ref.current) col4Ref.current.style.transform = `translateY(${shiftEven}px) rotateY(-15deg) translateZ(-60px)`;
        }

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
          if (col1Ref.current) col1Ref.current.style.transform = 'none';
          if (col2Ref.current) col2Ref.current.style.transform = 'none';
          if (col3Ref.current) col3Ref.current.style.transform = 'none';
          if (col4Ref.current) col4Ref.current.style.transform = 'none';
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordPairs.length);
    }, 4500); // Cycle every 4.5 seconds for a more relaxed reading pace
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const updateActiveVideo = () => {
      const mockupEl = document.querySelector('.reel-phone-mockup');
      const videoEls = document.querySelectorAll('.filmstrip-track .film-frame');
      if (!mockupEl || videoEls.length === 0) return;

      const mockupRect = mockupEl.getBoundingClientRect();
      const centerPoint = mockupRect.left + mockupRect.width / 2;

      let minDistance = Infinity;
      let closestIdx = 0;

      videoEls.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const frameCenter = rect.left + rect.width / 2;
        const distance = Math.abs(frameCenter - centerPoint);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = index;
        }
      });

      const videoIndex = closestIdx % videosList.length;
      if (videosList[videoIndex]) {
        setActiveVideo(videosList[videoIndex]);
      }
    };

    const interval = setInterval(updateActiveVideo, 100);
    return () => clearInterval(interval);
  }, []);


  const handleHeroMouseMove = (e) => {
    const hero = e.currentTarget;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    hero.style.setProperty('--mouse-x', x);
    hero.style.setProperty('--mouse-y', y);
  };

  const handleHeroMouseLeave = (e) => {
    const hero = e.currentTarget;
    hero.style.setProperty('--mouse-x', '0');
    hero.style.setProperty('--mouse-y', '0');
  };

  const partnerLogos = [
    { name: 'Logo 6', icon: <img src={logo6} className="client-logo-svg invert-to-white" alt="Logo 6" /> },
    { name: 'Kake Di Hatti', icon: <img src={logoKake} className="client-logo-svg" alt="Kake Di Hatti" /> },
    { name: 'Logo 12', icon: <img src={logo12} className="client-logo-svg invert-to-white" alt="Logo 12" /> },
    { name: 'Mayank Fashion', icon: <img src={logoMayank} className="client-logo-svg" alt="Mayank Fashion" /> },
    { name: 'Logo 19', icon: <img src={logo19} className="client-logo-svg invert-to-white" alt="Logo 19" /> },
    { name: 'SMRE', icon: <img src={logoSMRE} className="client-logo-svg" alt="SMRE" /> },
    { name: 'Logo 21', icon: <img src={logo21} className="client-logo-svg invert-to-white" alt="Logo 21" /> },
    { name: 'ProRoute', icon: <img src={logoProRoute} className="client-logo-svg" alt="ProRoute" /> },
    { name: 'Logo 35', icon: <img src={logo35} className="client-logo-svg invert-to-white" alt="Logo 35" /> },
    { name: 'Logo With Name', icon: <img src={logoWithName} className="client-logo-svg" alt="Logo" /> },
    { name: 'DM Studio', icon: <img src={logoDMStudio} className="client-logo-svg invert-to-white" alt="DM Studio" /> },
    { name: 'Mask Group 1', icon: <img src={logoMask1} className="client-logo-svg" alt="Mask Group 1" /> },
    { name: 'Mask Group', icon: <img src={logoMask} className="client-logo-svg" alt="Mask Group" /> },
  ];

  // Double the list for infinite marquee animation
  const marqueeItems = [...partnerLogos, ...partnerLogos];

  return (
    <div
      className="app-container"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      {/* Navigation Header */}
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

      {/* Hero Section */}
      <main className="hero-section">
        {/* Background Decorative Corner/Edge Elements */}
        <div className="hero-bg-wrapper">
          <img src={bg3} alt="" className="bg-element bg-element-left-top" />
          <img src={bg4} alt="" className="bg-element bg-element-right-top" />
          <img src={bg2} alt="" className="bg-element bg-element-right-middle" />
          <img src={bg1} alt="" className="bg-element bg-element-left-bottom" />
        </div>

        <div className="hero-content-wrapper">
          {/* Floating Badges */}
          <div className="floating-badge-wrapper badge-strategy-pos">
            <span className="floating-badge badge-strategy">
              Strategy
            </span>
          </div>
          <div className="floating-badge-wrapper badge-success-pos">
            <span className="floating-badge badge-success">
              Proven Success
            </span>
          </div>

          {/* Small subtitle indicator */}
          <span className="hero-subtitle">#1 Your Marketing Agency</span>

          {/* Hero Headline */}
          <div className="hero-title-container">
            <h1 className="hero-title">
              <span className="hero-title-row">Every Day,</span>
              <span className="hero-title-row clicks-into-container">
                We Turn
                <span className="clapper-wrapper">
                  <img
                    src={clapper}
                    alt="Film clapper illustration"
                    className="clapper-sticker"
                  />
                </span>
                <FlipWord word={wordPairs[index].word1} className="clicks-into" />
              </span>
              <span className="hero-title-row into-line-container">
                <span className="into-wrapper">
                  <img
                    src={avatar}
                    alt="Retro avatar illustration"
                    className="sticker-avatar"
                  />
                  Into
                </span>
              </span>
              <span className="hero-title-row customers-container">
                <div className="floating-badge-wrapper badge-creative-pos left-dynamic-badge">
                  <span className="floating-badge badge-creative">
                    Creative
                  </span>
                </div>
                <FlipWord word={wordPairs[index].word2} className="customers" />
                <div className="floating-badge-wrapper badge-marketing-pos last-dynamic-badge">
                  <span className="floating-badge badge-marketing">
                    Marketing
                  </span>
                </div>
              </span>
            </h1>
          </div>

          {/* Description paragraph */}
          <p className="hero-desc">
            From strategy to execution — we handle everything from SEO to paid ads,
            social media, web design, and beyond.
          </p>

          {/* Book Call Button */}
          <button className="btn-cta" onClick={scrollToForm}>
            Book A Call
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </main>

      {/* Collaborating logo section */}
      <section className="collaborating-section">
        <h2 className="collaborating-title">100+ Brand 100+ Story</h2>
        
        <div className="logo-marquee-container">
          <div className="logo-marquee-track">
            {marqueeItems.map((partner, index) => (
              <div key={index} className="logo-item">
                {partner.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-header">
          <div className="services-title-col">
            <span className="services-subtitle">Our Service</span>
            <h2 className="services-heading">Everything Your<br />Brand Needs Online</h2>
          </div>
          <p className="services-desc">
            From SEO and paid ads to social media, branding, and web design — we offer everything you need to grow and succeed online.
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-card card-seo">
            <h3 className="service-card-title">SEO Marketing</h3>
            <p className="service-card-desc">
              We boost your search rankings and draw organic traffic through smart keyword research and quality content.
            </p>
          </div>
          
          <div className="service-card card-paid">
            <h3 className="service-card-title">Paid Advertising</h3>
            <p className="service-card-desc">
              Maximize ROI with targeted ads on Google, Meta, and more. We manage your budget for quick, measurable results.
            </p>
          </div>
          
          <div className="service-card card-social">
            <h3 className="service-card-title">Social Management</h3>
            <p className="service-card-desc">
              We cultivate your online community with engaging content and strategic management across all social platforms.
            </p>
          </div>
          
          <div className="service-card card-branding">
            <h3 className="service-card-title">Branding Strategy</h3>
            <p className="service-card-desc">
              We craft your unique brand identity, from logo to messaging, creating a story that resonates with your audience.
            </p>
          </div>
          
          <div className="service-card card-web">
            <h3 className="service-card-title">Web Development</h3>
            <p className="service-card-desc">
              Our team creates fast, responsive websites that look great and are optimized for conversions and growth.
            </p>
          </div>
          
          <div className="service-card card-email">
            <h3 className="service-card-title">Email & CRM Campaigns</h3>
            <p className="service-card-desc">
              Nurture leads and build lasting customer relationships with targeted email and CRM campaigns designed to convert.
            </p>
          </div>
        </div>
      </section>

      {/* About Agency Section */}
      <section className="about-section">
        <div className="about-paper-wrapper">
          {/* Curved Zigzag Moving Divider */}
          <div className="about-zigzag-divider"></div>

          <div className="about-container">
            {/* Left Column */}
            <div className="about-left">
              <div className="about-brand">
                <img src={logo} alt="DotGanga Logo" className="about-brand-logo" />
                <span className="about-brand-tm">™</span>
              </div>
              
              <div className="about-metrics-list" ref={metricsRef}>
                <div className="about-metric-item">
                  <div className="metric-number">
                    <AnimatedCounter target={100} start={startCounters} />+
                  </div>
                  <div className="metric-label">Happy Clients</div>
                </div>
                <div className="about-metric-item">
                  <div className="metric-number">
                    <AnimatedCounter target={100} start={startCounters} />+
                  </div>
                  <div className="metric-label">Websites Delivered</div>
                </div>
                <div className="about-metric-item">
                  <div className="metric-number">
                    <AnimatedCounter target={2000} start={startCounters} />+
                  </div>
                  <div className="metric-label">Shoots Done</div>
                </div>
                <div className="about-metric-item">
                  <div className="metric-number">
                    <AnimatedCounter target={10000} start={startCounters} />+
                  </div>
                  <div className="metric-label">Videos Edited</div>
                </div>
              </div>
            </div>



            {/* Right Column */}
            <div className="about-right">
              <div className="about-headline-container">
                {/* Floating Badges */}
                <div className="about-badge-wrapper about-badge-strategy-pos">
                  <span className="about-badge about-badge-strategy">Strategy</span>
                </div>
                <div className="about-badge-wrapper about-badge-success-pos">
                  <span className="about-badge about-badge-success">Proven Success</span>
                </div>
                <div className="about-badge-wrapper about-badge-marketing-pos">
                  <span className="about-badge about-badge-marketing">Marketing</span>
                </div>

                <h2 className="about-headline">
                  WE HELP BRANDS GROW, CONNECT,
                  <span className="about-avatar-wrapper">
                    <img src={avatar} alt="Retro avatar illustration" className="about-avatar-img" />
                  </span>
                  AND <span className="highlight-orange">LEAD THROUGH STRATEGY</span>, CREATIVITY, AND DIGITAL.
                </h2>
              </div>

              <div className="about-content-single">
                <p className="about-desc-single">
                  A Rajasthan-based creative agency pushing brands beyond boundaries through design, storytelling, and strategy. We are a multidisciplinary design studio rooted in the cultural heart of Rajasthan, creating expressive, strategy-driven work that helps brands stand out, connect deeply, and grow with purpose. Our passion is to craft visionary solutions for ambitious brands, pushing the limits of creativity and design.
                </p>
              </div>

              <button className="btn-about-more">
                More About Us
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reel Section */}
      <section className="reel-section">
        <div className="reel-container">
          <span className="reel-subtitle">Featured Work</span>
          <h2 className="reel-title">Check Our Latest Reels</h2>
          <div className="reel-mockup-container">
            <div className="reel-mockup-wrapper-outer">
              {/* Filmstrip Camera Roll Background */}
              <div className="filmstrip-container">
                <div className="filmstrip-track">
                  {[...videosList, ...videosList].map((vid, idx) => (
                    <div key={idx} className="film-frame">
                      <div className="film-sprocket-holes top"></div>
                      <div className="film-image-container">
                        <video 
                          src={vid} 
                          className="film-frame-video" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                        />
                      </div>
                      <div className="film-sprocket-holes bottom"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Mockup in Front */}
              <div className="reel-phone-mockup">
                <div className="phone-screen">
                  <img src={mobileMock} alt="Mobile Reel Mockup" className="reel-mockup-img" />
                  {activeVideo && (
                    <video
                      key={activeVideo}
                      src={activeVideo}
                      className="mockup-video"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collage Section */}
      <section className="collage-section" ref={collageSectionRef}>
        <div className="collage-container">
          <span className="collage-subtitle">Showcase Grid</span>
          <h2 className="collage-title">Expressive Social Formats</h2>
          <div className="collage-grid">
            <div className="collage-column" ref={col1Ref}>
              {socialGridImages.slice(0, 3).map((img, idx) => (
                <div key={idx} className="collage-item ratio-3-4">
                  <img src={img} alt={`Social Format ${idx + 1}`} className="collage-img" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="collage-column" ref={col2Ref}>
              {socialGridImages.slice(3, 6).map((img, idx) => (
                <div key={idx} className="collage-item ratio-3-4">
                  <img src={img} alt={`Social Format ${idx + 4}`} className="collage-img" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="collage-column" ref={col3Ref}>
              {socialGridImages.slice(6, 9).map((img, idx) => (
                <div key={idx} className="collage-item ratio-3-4">
                  <img src={img} alt={`Social Format ${idx + 7}`} className="collage-img" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="collage-column" ref={col4Ref}>
              {socialGridImages.slice(9, 12).map((img, idx) => (
                <div key={idx} className="collage-item ratio-3-4">
                  <img src={img} alt={`Social Format ${idx + 10}`} className="collage-img" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Footer Conversational Form Section */}
      <div id="contact" style={{ position: 'relative', top: '-20px' }}></div>
      <section className="footer-form-section" id="book-call-form">
        <div className="footer-form-container">
          <div className="footer-form-logo-wrapper">
            <img src={favicon} alt="Favicon" className="footer-form-logo" />
          </div>
          {submitSuccess ? (
            <div className="form-success-state">
              <div className="success-icon-wrapper">
                <svg viewBox="0 0 24 24" className="success-icon" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Thank you!</h3>
              <p>Your details have been submitted successfully. We will get in touch with you shortly.</p>
              <button className="btn-cta" onClick={() => setSubmitSuccess(false)}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="conversational-form" onSubmit={handleFormSubmit}>
              {/* Step Indicator */}
              <div className="form-step-indicator">
                <div className={`step-dot ${currentStep === 1 ? 'active' : ''}`} />
                <div className={`step-dot ${currentStep === 2 ? 'active' : ''}`} />
              </div>

              {currentStep === 1 ? (
                <div className="form-step step-one-fade">
                  <h2 className="form-step-title">Tell Us About Your Business</h2>
                  <p className="form-step-subtitle">STEP 1 OF 2 — ABOUT YOU</p>

                  <div className="input-group">
                    <label htmlFor="businessName">BUSINESS NAME *</label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Corporation"
                      required
                    />
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="contactPerson">YOUR NAME *</label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="phoneNumber">PHONE NUMBER *</label>
                      <div className="phone-whatsapp-container">
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                        <label className="whatsapp-checkbox-label">
                          <input
                            type="checkbox"
                            name="isWhatsappSame"
                            checked={formData.isWhatsappSame}
                            onChange={handleInputChange}
                          />
                          <span>This number is on WhatsApp</span>
                        </label>
                      </div>
                      {!formData.isWhatsappSame && (
                        <div className="whatsapp-conditional-input-wrapper fade-in">
                          <label htmlFor="whatsappNumber">WhatsApp Number *</label>
                          <input
                            type="tel"
                            id="whatsappNumber"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleInputChange}
                            placeholder="WhatsApp number"
                            required={!formData.isWhatsappSame}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="input-group">
                    <label>YOUR ROLE <span className="label-optional">(Optional)</span></label>
                    <div className="role-chips-row">
                      <div className="role-chips">
                        {['Founder', 'Marketing', 'Business / Operations', 'Other'].map((r) => (
                          <button
                            key={r}
                            type="button"
                            className={`role-chip ${formData.role === r ? 'active' : ''}`}
                            onClick={() => handleRoleSelect(r)}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                      {formData.role === 'Other' && (
                        <div className="custom-role-input-wrapper fade-in">
                          <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            placeholder="Type your role (e.g. CEO, Partner)"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="websiteOrSocial">WEBSITE / SOCIAL LINK <span className="label-optional">(Optional)</span></label>
                    <input
                      type="text"
                      id="websiteOrSocial"
                      name="websiteOrSocial"
                      value={formData.websiteOrSocial}
                      onChange={handleInputChange}
                      placeholder="yourwebsite.com or @yourbrand"
                    />
                  </div>

                  <div className="form-actions-bottom">
                    <span className="auto-next-hint">
                      {formData.businessName && formData.contactPerson && formData.phoneNumber.length >= 10 
                        ? "✓ Ready to proceed." 
                        : "Complete the required fields to continue."}
                    </span>
                    <button 
                      type="button" 
                      className="btn-form-next"
                      disabled={!(formData.businessName && formData.contactPerson && formData.phoneNumber.length >= 10)}
                      onClick={() => setCurrentStep(2)}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="form-step step-two-fade">
                  <h2 className="form-step-title">Additional Details</h2>
                  <p className="form-step-subtitle">STEP 2 OF 2 — PROJECT INFO</p>

                  <div className="input-group">
                    <label htmlFor="email">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>WHAT DO YOU NEED HELP WITH? *</label>
                    <div className="help-cards-grid">
                      {helpOptions.map((option) => {
                        const isSelected = (formData.helpWith || []).includes(option.name);
                        return (
                          <button
                            key={option.name}
                            type="button"
                            className={`help-card ${isSelected ? 'active' : ''}`}
                            onClick={() => handleHelpToggle(option.name)}
                          >
                            <span className="help-card-name">{option.name}</span>
                            <img
                              src={isSelected ? option.activeImg : option.img}
                              alt={option.name}
                              className="help-card-img"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="projectDetails">TELL US ABOUT YOUR PROJECT</label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      className="form-textarea"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly about your business, project, or challenge..."
                      rows={4}
                    />
                  </div>

                  <div className="input-group">
                    <label>APPROXIMATE BUDGET</label>
                    <div className="budget-bar">
                      {['Under ₹50K', '₹50K–₹1L', '₹1L–₹3L', '₹3L–₹5L', '₹5L+', 'Not Sure'].map((val) => {
                        const isSelected = formData.budget === val;
                        return (
                          <button
                            key={val}
                            type="button"
                            className={`budget-bar-option ${isSelected ? 'active' : ''}`}
                            onClick={() => handleBudgetSelect(val)}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="input-group">
                    <label>WHEN ARE YOU LOOKING TO START?</label>
                    <div className="timeline-chips-row">
                      {['ASAP', 'This Month', '1–3 Months', 'Exploring'].map((val) => {
                        const isSelected = formData.timeline === val;
                        return (
                          <button
                            key={val}
                            type="button"
                            className={`timeline-chip ${isSelected ? 'active' : ''}`}
                            onClick={() => handleTimelineSelect(val)}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-actions-bottom">
                    <button
                      type="button"
                      className="btn-form-back"
                      onClick={() => setCurrentStep(1)}
                    >
                      ← Go Back
                    </button>
                    <button
                      type="submit"
                      className="btn-form-submit"
                      disabled={isSubmitting || !formData.email || (formData.helpWith || []).length === 0}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Details ✓'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </section>

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

export default App;
