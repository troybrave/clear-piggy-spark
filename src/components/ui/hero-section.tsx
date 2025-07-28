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
        <img src="/lovable-uploads/11a74ea6-2a59-4e9e-af54-bc6ff64f1aae.png" alt="Clear Piggy Logo" className="logo-img" />
      </div>

      {/* Glass Container - Pure CTA Focus */}
      <div className="glass-container-refined max-w-2xl w-full text-center">
        {/* Hero Title */}
        <h2 className="hero-title text-5xl md:text-7xl font-bold text-ice-crystal leading-tight">
          Control Your Money's Next Move
        </h2>

        {/* Tagline */}
        <div className="tagline-section">
          <p className="tagline-line">🚩 Stop settling for a rearview budget.</p>
          <p className="tagline-line">📍 Decide your money's next move.</p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="email-form">
          <div className="relative mb-5 flex justify-center">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className="email-input glass-input text-center text-lg border-0 focus:ring-2 focus:ring-aqua-ethereal/50"
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
      <div className="value-quote">
        <p className="value-question">"Where will your money take you in 1 year?"</p>
        <p className="value-challenge">Let AI auto-categorize your transactions and map your money so you can find out in 5 minutes.</p>
      </div>

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