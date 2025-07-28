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
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="glass-container p-8 md:p-12 max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold brand-text">
            Clear Piggy
          </h1>
        </div>

        {/* Hero Title */}
        <h2 className="text-5xl md:text-7xl font-bold text-ice-crystal mb-6 leading-tight">
          Control Your Money's Next Move
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-ice-crystal/80 font-medium mb-8 leading-relaxed">
          Stop settling for a financial rearview. Decide where your money is taking you.
        </p>

        {/* Value Proposition */}
        <p className="text-base md:text-lg text-ice-crystal/90 mb-12 max-w-lg mx-auto leading-relaxed">
          Where will your money take you in 1 year? Let AI auto-categorize your transactions 
          and map your money so you can find out in 5 minutes.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className="glass-input w-full text-center text-lg border-0 focus:ring-2 focus:ring-aqua-ethereal/50"
              required
            />
          </div>

          {/* CTA Button - Rainbow Glow Signature Element */}
          <Button
            type="submit"
            className="rainbow-glow-btn text-lg px-12 py-6 w-full md:w-auto"
            disabled={!isValidEmail}
          >
            Map My Money
          </Button>
        </form>

        {/* Trust Indicator */}
        <div className="flex items-center justify-center space-x-4 text-sm text-ice-crystal/60">
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
    </div>
  );
};

export default HeroSection;