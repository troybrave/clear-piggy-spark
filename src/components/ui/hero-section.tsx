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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Logo Beacon - Outside Glass */}
      <div className="logo-section">
        <div className="logo-tile">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 18C32 22 28 26 24 26H12C8 26 4 22 4 18C4 14 8 10 12 10H24C28 10 32 14 32 18Z" fill="black"/>
            <path d="M24 12C26 12 28 14 28 16C28 18 26 20 24 20C22 20 20 18 20 16C20 14 22 12 24 12Z" fill="black"/>
            <circle cx="16" cy="18" r="2" fill="white"/>
            <rect x="18" y="8" width="8" height="4" rx="2" fill="black"/>
            <rect x="8" y="22" width="4" height="6" rx="2" fill="black"/>
            <rect x="24" y="22" width="4" height="6" rx="2" fill="black"/>
          </svg>
        </div>
        <h1 className="logo-text">Clear Piggy</h1>
      </div>

      {/* Glass Container - Pure CTA Focus */}
      <div className="glass-container-refined max-w-2xl w-full text-center">
        {/* Hero Title */}
        <h2 className="hero-title text-5xl md:text-7xl font-bold text-ice-crystal leading-tight">
          Control Your Money's Next Move
        </h2>

        {/* Tagline */}
        <div className="tagline-section">
          <p className="tagline-line">🌐 Stop settling for a rearview budget.</p>
          <p className="tagline-line">📍 Decide your money's next move.</p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="email-form">
          <div className="relative mb-5">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className="email-input glass-input w-full text-center text-lg border-0 focus:ring-2 focus:ring-aqua-ethereal/50"
              required
            />
          </div>

          {/* CTA Button - Rainbow Glow Signature Element */}
          <Button
            type="submit"
            className="rainbow-glow-btn text-lg px-12 py-6 w-full md:w-auto hover:transform hover:-translate-y-0.5 transition-transform"
            disabled={!isValidEmail}
          >
            Map My Money
          </Button>
        </form>

        {/* Trust Indicator */}
        <div className="trust-indicators flex items-center justify-center space-x-4 text-sm text-ice-crystal/60">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-aqua-ethereal rounded-full mr-2 animate-pulse"></div>
            AI-powered
          </span>
          <span className="text-ice-crystal/40">•</span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-money-green rounded-full mr-2"></div>
            Bank-grade security
          </span>
        </div>
      </div>

      {/* Value Quote - Below Glass */}
      <blockquote className="value-quote">
        "Where will your money take you in 1 year? Let AI auto-categorize your transactions 
        and map your money so you can find out in 5 minutes."
      </blockquote>

      {/* Stats Bar - Trust Metrics */}
      <div className="stats-bar">
        <div className="stats-content">
          <span>5,000+ Transactions</span>
          <span>99.2% AI Precision</span>
          <span>Setup in 5 Minutes</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;