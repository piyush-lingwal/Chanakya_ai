import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DocumentationPage from './components/DocumentationPage';
import Phase1KnowledgeBase from './components/Phase1KnowledgeBase';
import Phase2AnswerUpload from './components/Phase2AnswerUpload';
import Phase3ReviewConfirmation from './components/Phase3ReviewConfirmation';
import Phase4AIEvaluation from './components/Phase4AIEvaluation';
import Phase5Results from './components/Phase5Results';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/workflow/phase1" element={<Phase1KnowledgeBase />} />
          <Route path="/workflow/phase2" element={<Phase2AnswerUpload />} />
          <Route path="/workflow/phase3" element={<Phase3ReviewConfirmation />} />
          <Route path="/workflow/phase4" element={<Phase4AIEvaluation />} />
          <Route path="/workflow/phase5" element={<Phase5Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;