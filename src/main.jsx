import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Careers from './pages/Careers.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import Contact from './pages/Contact.jsx'

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const cleanHash = hash.replace('#', '').toLowerCase();
      const findTarget = () => {
        if (['contact', 'form', 'book-call', 'book-call-form', 'contact-form'].includes(cleanHash)) {
          return document.getElementById('book-call-form') || document.getElementById('contact');
        }
        return document.getElementById(cleanHash);
      };

      const handleScroll = () => {
        const el = findTarget();
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const firstInput = el.querySelector('input');
          if (firstInput) {
            setTimeout(() => firstInput.focus({ preventScroll: true }), 300);
          }
          return true;
        }
        return false;
      };

      // Execute immediately or retry shortly once components render
      if (!handleScroll()) {
        const t1 = setTimeout(handleScroll, 100);
        const t2 = setTimeout(handleScroll, 350);
        const t3 = setTimeout(handleScroll, 700);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
