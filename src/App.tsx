import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { PendingDataSection } from './components/PendingDataSection';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('cotizacion');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first input after scrolling
      setTimeout(() => {
        const firstInput = document.getElementById('nombre');
        firstInput?.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241F1C]">
      {/* Semantic Header */}
      <Header onCtaClick={scrollToForm} />

      {/* Semantic Main */}
      <main className="flex-1">
        {/* Hero Section with the ONLY H1 */}
        <Hero onCtaClick={scrollToForm} />

        {/* Value Proposition & Problem / Need */}
        <ValueProposition />

        {/* Three Concrete Benefits from the brief */}
        <Benefits />

        {/* How It Works: 3 simple steps */}
        <HowItWorks onCtaClick={scrollToForm} />

        {/* Social Proof with [POR CONFIRMAR] placeholder */}
        <SocialProof />

        {/* Operational parameters in process of confirmation */}
        <PendingDataSection />

        {/* Quote Form Section */}
        <QuoteForm onOpenPrivacyNotice={() => setIsPrivacyOpen(true)} />
      </main>

      {/* Semantic Footer with Contact data [POR CONFIRMAR] and Privacy */}
      <Footer
        onOpenPrivacyNotice={() => setIsPrivacyOpen(true)}
        onCtaClick={scrollToForm}
      />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
