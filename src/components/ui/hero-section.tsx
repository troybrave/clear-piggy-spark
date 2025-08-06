import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
// Fixed: Removed isSubmitted reference and using submitState instead

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
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
      setSubmitState('error');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSubmitState('idle');

    console.log('Submitting email:', trimmedEmail); // Debug log

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

      console.log('Response status:', response.status); // Debug log

      if (response.ok) {
        setSubmitState('success');
        setEmail('');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Submit error:', error); // Debug log
      setErrorMessage('❌ Something went wrong. Try again.');
      setSubmitState('error');
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

  // Success Screen
  if (submitState === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-16">
        <div className="glass-container-refined max-w-2xl w-full text-center">
          <div className="success-animation mb-8">
            <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ice-crystal mb-6">
            ✅ Check Your Email!
          </h2>
          
          <p className="text-xl text-ice-crystal/80 mb-8">
            We've sent you a magic link to get started with Clear Piggy
          </p>
          
          <button 
            onClick={() => setSubmitState('idle')}
            className="px-6 py-3 bg-aqua-ethereal/20 text-aqua-ethereal border border-aqua-ethereal/30 rounded-full hover:bg-aqua-ethereal/30 transition-all duration-300"
          >
            Submit Another Email
          </button>
        </div>
      </div>
    );
  }

  // Error Screen
  if (submitState === 'error') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-16">
        <div className="glass-container-refined max-w-2xl w-full text-center">
          <div className="error-animation mb-8">
            <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ice-crystal mb-6">
            ❌ Something Went Wrong
          </h2>
          
          <p className="text-xl text-ice-crystal/80 mb-4">
            {errorMessage || "We couldn't process your request right now"}
          </p>
          
          <p className="text-ice-crystal/60 mb-8">
            Please check your connection and try again
          </p>
          
          <button 
            onClick={() => {
              setSubmitState('idle');
              setErrorMessage('');
            }}
            className="px-6 py-3 bg-red-400/20 text-red-400 border border-red-400/30 rounded-full hover:bg-red-400/30 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Default Form Screen
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-16">
      {/* 1. Clear Piggy Logo & Headline - DOUBLED SIZE */}
      <div className="logo-section logo-enhanced">
        <h1 className="logo-text text-shimmer">Clear Piggy</h1>
        <img src="/lovable-uploads/11a74ea6-2a59-4e9e-af54-bc6ff64f1aae.png" alt="Clear Piggy Logo" className="logo-img" />
      </div>

      {/* 2. Control Your Money's Next Move - NEW TOP POSITION */}
      <h2 className="hero-title-new hero-title-breathing text-center">
        <span className="control-line">Control Your</span>
        <span className="move-line">Money's Next Move</span>
      </h2>

      {/* 3. Email Collection Form with Enhanced Glass */}
      <div className="glass-container-premium max-w-2xl w-full text-center">
        {/* Where will your money take you - MOVED INSIDE GLASS */}
        <div className="value-quote-inside">
          <p className="value-question-inside">Where will your money take you?</p>
        </div>

        <form onSubmit={handleSubmit} className="email-form-enhanced" noValidate>
          <div className="email-field-premium">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={handleEmailChange}
              className={`email-input-premium ${isValidEmail ? 'email-valid' : ''}`}
              required
              disabled={isLoading}
              aria-invalid={errorMessage ? 'true' : 'false'}
              aria-describedby={errorMessage ? 'email-error' : undefined}
            />
            <span 
              className={`arrow-icon-premium ${isLoading ? 'loading' : ''}`}
              role="button" 
              tabIndex={0} 
              aria-label={isLoading ? "Sending email..." : "Submit email"}
              onClick={handleArrowClick}
              onKeyDown={handleKeyDown}
            >
              {isLoading ? (
                <div className="loading-spinner-premium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="animate-spin">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                    <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                </div>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {isValidEmail && !isLoading && (
                <div className="validation-checkmark">✓</div>
              )}
            </span>
          </div>
          
          {/* Error Message */}
          {errorMessage && submitState === 'idle' && (
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

        {/* Taglines MOVED INSIDE GLASS */}
        <div className="tagline-section-inside">
          <p className="tagline-line-inside">Clarity doesn't live in the rearview.</p>
          <p className="tagline-line-inside">Control your money. Choose your future.</p>
        </div>
      </div>

      {/* 4. Stats with Rainbow Glow - SEPARATED */}
      <div className="stats-rainbow-container">
        <div className="stats-content-rainbow">
          <span className="stat-item">5,000+ Transactions Categorized</span>
          <span className="stat-item">99.2% AI Precision</span>
          <span className="stat-item">Set up in &lt;3 minutes</span>
        </div>
      </div>

      {/* 5. Privacy Policy & Terms of Service - Very Bottom */}
      <div className="footer-links">
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <span className="text-ice-crystal/40 mx-3">•</span>
        <a href="/terms" className="footer-link">Terms of Service</a>
      </div>
    </div>
  );
};

export default HeroSection;