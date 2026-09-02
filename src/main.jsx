import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Careers from './pages/Careers.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import Contact from './pages/Contact.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const cleanHash = hash.replace('#', '').toLowerCase();
      const findTarget = () => {
        if (['contact', 'form', 'book', 'book-call', 'book-call-form', 'contact-form'].includes(cleanHash)) {
          return document.getElementById('book-call-form') || document.getElementById('form') || document.getElementById('contact');
        }
        return document.getElementById(cleanHash);
      };

      const handleScroll = () => {
        const el = findTarget();
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const firstInput = el.querySelector('input');
          if (firstInput) {
            setTimeout(() => firstInput.focus({ preventScroll: true }), 350);
          }
          return true;
        }
        return false;
      };

      // Execute immediately and retry as components render and loading screen clears
      handleScroll();
      const t1 = setTimeout(handleScroll, 100);
      const t2 = setTimeout(handleScroll, 350);
      const t3 = setTimeout(handleScroll, 650);
      const t4 = setTimeout(handleScroll, 950);
      const t5 = setTimeout(handleScroll, 1300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingScreen />
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* Quick redirect links directly to the bottom conversational form on home */}
        <Route path="/form" element={<Navigate to="/#book-call-form" replace />} />
        <Route path="/book" element={<Navigate to="/#book-call-form" replace />} />
        <Route path="/book-call" element={<Navigate to="/#book-call-form" replace />} />
        <Route path="/get-started" element={<Navigate to="/#book-call-form" replace />} />
        <Route path="/schedule" element={<Navigate to="/#book-call-form" replace />} />

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
