import React, { useState, useRef } from 'react';
import './EnquiryForm.css';

let emailjsLib = null; // module-level cache to avoid re-import/init

const SERVICE_ID = 'service_6eh7p3x';
const TEMPLATE_ID = 'template_3wvtbfd';
const PUBLIC_KEY = 'fpnnEzAgngX9dluw8';

// Optional: Formspree fallback URL (set to '' to disable)
const FORMSPREE_URL = ''; // e.g. 'https://formspree.io/f/yourid'

const EnquiryForm = ({ artworkName = '', onClose }) => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const withTimeout = (promise, ms = 15000) =>
    Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
    ]);

  const fallbackToFormspree = async (formData) => {
    if (!FORMSPREE_URL) throw new Error('No Formspree fallback configured');
    console.log('Attempting Formspree fallback...');
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Formspree failed: ${res.status} ${txt}`);
    }
    return res;
  };

  const ensureEmailJS = async () => {
    if (emailjsLib) return emailjsLib;
    const mod = await import('@emailjs/browser'); // lazy-load SDK
    emailjsLib = mod.default || mod;
    emailjsLib.init(PUBLIC_KEY);
    return emailjsLib;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('Sending...');

    const formEl = formRef.current;

    try {
      const emailjs = await ensureEmailJS();

      // start send in background and update UI immediately (perceived faster)
      const sendPromise = emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY);

      // optimistic UI: don't await here, but update status when promise resolves/rejects
      sendPromise
        .then((res) => {
          // success
          setStatus('Message sent — thank you!');
          formEl.reset();
          if (typeof onClose === 'function') onClose();
        })
        .catch((err) => {
          console.error('EmailJS send error:', err);
          setStatus('Sending failed — please try again or contact support.');
        })
        .finally(() => {
          setSending(false);
        });

      // return immediately so UI is responsive
      return;
    } catch (err) {
      console.error('EmailJS init/send error:', err);
      setStatus('Sending failed — please try again or contact support.');
      setSending(false);
    }
  };

  return (
    <div className="enquiry-form-overlay">
      <div className="enquiry-form-container">
        <button className="enquiry-close-button" onClick={onClose} disabled={sending}>×</button>
        <h2>Enquire about {artworkName}</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* IMPORTANT: name attributes must match your EmailJS template fields */}
          <input type="hidden" name="artwork_name" value={artworkName} />
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input name="from_name" type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input name="phone" type="tel" id="number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="from_email" type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input name="address" type="text" id="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" rows="4" />
          </div>
          <div className="form-buttons">
            <button type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Enquiry'}</button>
          </div>
          {status && <div className="form-status">{status}</div>}
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;