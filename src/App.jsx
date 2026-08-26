import React, { useState } from 'react';
import Header from './components/Header';
import EditorialHero from './components/EditorialHero';
import ImpactNumbers from './components/ImpactNumbers';
import EditorialServices from './components/EditorialServices';
import DeliveryWorkflow from './components/DeliveryWorkflow';
import EditorialCaseStudy from './components/EditorialCaseStudy';
import EditorialTools from './components/EditorialTools';
import EditorialAbout from './components/EditorialAbout';
import EditorialContact from './components/EditorialContact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f1ea] font-sans selection:bg-[#c8a97e] selection:text-gray-950">
      {/* Editorial Header */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Body */}
      <main>
        <EditorialHero onOpenResume={() => setResumeOpen(true)} />
        <ImpactNumbers />
        <EditorialServices />
        <EditorialCaseStudy />
        <DeliveryWorkflow />
        <EditorialTools />
        <EditorialAbout onOpenResume={() => setResumeOpen(true)} />
        <EditorialContact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
