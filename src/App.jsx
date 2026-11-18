import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import TrafficCalculator from './components/TrafficCalculator';
import AudienceSelector from './components/AudienceSelector';
import AdFormats from './components/AdFormats';
import TargetingEngine from './components/TargetingEngine';
import AntiFraudSecurity from './components/AntiFraudSecurity';
import GlobalReach from './components/GlobalReach';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalRole, setAuthModalRole] = useState('register');

  const handleOpenAuth = (role = 'register') => {
    setAuthModalRole(role);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased selection:bg-[#18A1BB] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenAuth={handleOpenAuth} />

        {/* Live Network Stats Bar */}
        <StatsTicker />

        {/* Interactive Traffic & Revenue Estimator (Traffic Opportunity Explorer) */}
        <TrafficCalculator onOpenAuth={handleOpenAuth} />

        {/* For Advertisers & For Publishers (Dual Personas) */}
        <AudienceSelector onOpenAuth={handleOpenAuth} />

        {/* Ad Formats with Live Mockup Previews */}
        <AdFormats onOpenAuth={handleOpenAuth} />

        {/* Granular DSP Targeting Capabilities */}
        <TargetingEngine />

        {/* Anti-Fraud Shield & Proprietary Anti-AdBlock Technology */}
        <AntiFraudSecurity onOpenAuth={handleOpenAuth} />

        {/* Worldwide Geos & Traffic Heatmap */}
        <GlobalReach onOpenAuth={handleOpenAuth} />

        {/* Tracking Ecosystem & Flexible Payouts */}
        <Integrations />

        {/* Client Testimonials & Social Proof */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* About Us & Interactive Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Auth / Onboarding Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        initialRole={authModalRole}
      />
    </div>
  );
}
