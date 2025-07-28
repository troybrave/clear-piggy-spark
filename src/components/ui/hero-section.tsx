import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log('Mapping money for:', email);
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-16">
      {/* Logo Beacon - Outside Glass */}
      <div className="logo-section">
        <h1 className="logo-text">Clear Piggy</h1>
        <img src="/lovable-uploads/11a74ea6-2a59-4e9e-af54-bc6ff64f1aae.png" alt="Clear Piggy Logo" className="logo-img" />
      </div>

      {/* Glass Container - Pure CTA Focus */}
      <div className="glass-container-refined max-w-2xl w-full text-center">
        {/* Hero Title */}
        <h2 className="hero-title text-5xl md:text-7xl font-bold text-ice-crystal leading-tight">
          Control<br />
          Your Money's<br />
          Next Move
        </h2>

        {/* Tagline */}
        <div className="tagline-section">
          <div className="tagline-block">
            <p className="tagline-line">🚩 Stop settling for a rearview budget.</p>
            <p className="tagline-line">📍 Decide your money's next move.</p>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="email-form">
          <div className="email-field">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className="email-input"
              required
            />
            <span 
              className="arrow-icon" 
              role="button" 
              tabIndex={0} 
              aria-label="Submit email"
              onClick={handleSubmit}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </form>

        {/* Trust Indicator */}
        <div className="trust-indicators flex items-center justify-center space-x-6 text-sm text-ice-crystal/60 mt-8">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-aqua-ethereal rounded-full mr-2 animate-pulse"></div>
            AI-powered
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-money-green rounded-full mr-2"></div>
            Bank-grade security
          </span>
        </div>
      </div>

      {/* Value Quote - Below Glass */}
      <div className="value-quote">
        <p className="value-question">"Where will your money take you in 1 year?"</p>
        <p className="value-challenge">In less than 5 minutes...<br />Let AI map your financial future so you don't have to!</p>
      </div>

      {/* Stats Bar - Trust Metrics */}
      <div className="stats-bar">
        <div className="stats-content">
          <span>5,000+ Transactions</span>
          <span>99.2% AI Precision</span>
          <span>Setup in 5 Minutes</span>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links mt-8 text-center">
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <span className="text-ice-crystal/40 mx-3">•</span>
        <a href="/terms" className="footer-link">Terms of Service</a>
      </div>
    </div>
  );
};

export default HeroSection;