import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
    setErrorMessage(''); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim().toLowerCase();
    
    if (!validateEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://primary-production-6ccfb.up.railway.app/webhook-test/email-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        toast({
          title: "✅ Check your email for a magic link!",
          description: "We've sent you a secure link to get started.",
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setErrorMessage('❌ Something went wrong. Try again.');
      toast({
        title: "❌ Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleArrowClick = () => {
    if (!isLoading) {
      handleSubmit(new Event('submit') as any);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleArrowClick();
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
        <form onSubmit={handleSubmit} className="email-form" noValidate>
          <div className="email-field">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className="email-input"
              required
              disabled={isLoading}
              aria-invalid={errorMessage ? 'true' : 'false'}
              aria-describedby={errorMessage ? 'email-error' : undefined}
            />
            <span 
              className={`arrow-icon ${isLoading ? 'loading' : ''}`}
              role="button" 
              tabIndex={0} 
              aria-label={isLoading ? "Sending email..." : "Submit email"}
              onClick={handleArrowClick}
              onKeyDown={handleKeyDown}
            >
              {isLoading ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="animate-spin">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                  <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
          </div>
          
          {/* Error Message */}
          {errorMessage && (
            <div id="email-error" className="error-message mt-2 text-sm text-red-400 text-center">
              {errorMessage}
            </div>
          )}
          
          {/* Loading State */}
          {isLoading && (
            <div className="loading-message mt-2 text-sm text-aqua-ethereal text-center">
              Sending...
            </div>
          )}
        </form>

        {/* Success Message Card */}
        {isSubmitted && (
          <Card className="success-card mt-4 bg-green-500/10 border-green-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-green-400 font-semibold">
                ✅ Check your email for a magic link!
              </div>
              <div className="text-green-300/80 text-sm mt-1">
                We've sent you a secure link to get started.
              </div>
            </CardContent>
          </Card>
        )}

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