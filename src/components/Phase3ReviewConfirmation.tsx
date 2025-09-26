import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, CheckCircle, ArrowRight, AlertCircle, FileText, Link2, Settings, Zap, Eye } from 'lucide-react';

const Phase3ReviewConfirmation = () => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Dummy data representing what was uploaded in previous phases
  const reviewData = {
    syllabus: { name: 'Computer Science Syllabus 2024.pdf', size: '2.4 MB' },
    questionPaper: { name: 'Sample Questions - Data Structures.pdf', size: '1.8 MB' },
    referenceLinks: [
      'https://www.geeksforgeeks.org/data-structures/',
      'https://www.tutorialspoint.com/data_structures_algorithms/'
    ],
    strictness: 'Medium',
    answerSheets: [
      { name: 'Student_001_Answer.pdf', size: '3.2 MB' },
      { name: 'Student_002_Answer.pdf', size: '2.9 MB' },
      { name: 'Student_003_Answer.pdf', size: '3.5 MB' }
    ]
  };

  const handleProceedToEvaluation = () => {
    if (isConfirmed) {
      navigate('/workflow/phase4');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Brain className="h-10 w-10 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Chanakya AI
                </span>
                <div className="text-xs text-cyan-300 font-medium">Future of Education</div>
              </div>
            </Link>
            <Link
              to="/workflow/phase2"
              className="inline-flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Phase 2
            </Link>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex items-center text-green-400">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-bold">Knowledge Base</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-green-500 rounded-full"></div>
            <div className="flex items-center text-green-400">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-bold">Upload Answers</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-green-500 rounded-full"></div>
            <div className="flex items-center text-amber-400">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-sm font-bold shadow-lg">
                3
              </div>
              <span className="ml-3 text-sm font-bold">Review & Confirm</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full w-3/4"></div>
            </div>
            <div className="flex items-center text-gray-500">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-400 rounded-full text-sm font-bold">
                4
              </div>
              <span className="ml-3 text-sm font-medium">AI Evaluation</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full"></div>
            <div className="flex items-center text-gray-500">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-400 rounded-full text-sm font-bold">
                5
              </div>
              <span className="ml-3 text-sm font-medium">Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-400/30 mb-6">
              <Eye className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-300 text-sm font-medium">Final Verification</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Phase 3: Review & Confirmation
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Verify all inputs before launching AI-powered RAG evaluation. Review your knowledge base, answer sheets, and configuration settings.
            </p>
          </div>

          <div className="space-y-8">
            {/* Knowledge Base Review */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="bg-cyan-500/20 p-3 rounded-xl mr-4">
                  <FileText className="h-6 w-6 text-cyan-400" />
                </div>
                📚 Knowledge Base Configuration
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-cyan-300 mb-3">Syllabus Document</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{reviewData.syllabus.name}</p>
                      <p className="text-gray-400 text-sm">{reviewData.syllabus.size}</p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-cyan-300 mb-3">Question Papers</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{reviewData.questionPaper.name}</p>
                      <p className="text-gray-400 text-sm">{reviewData.questionPaper.size}</p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">Reference Materials</h3>
                <div className="space-y-2">
                  {reviewData.referenceLinks.map((link, index) => (
                    <div key={index} className="flex items-center">
                      <Link2 className="h-4 w-4 text-cyan-400 mr-3" />
                      <span className="text-gray-300 text-sm">{link}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Evaluation Settings */}
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="bg-purple-500/20 p-3 rounded-xl mr-4">
                  <Settings className="h-6 w-6 text-purple-400" />
                </div>
                ⚙️ AI Evaluation Configuration
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-purple-300 mb-2">Marking Strictness Level</h3>
                    <p className="text-gray-400">Controls AI evaluation rigor and scoring criteria</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full text-lg">
                      {reviewData.strictness}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Sheets Review */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="bg-green-500/20 p-3 rounded-xl mr-4">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                📄 Student Answer Sheets ({reviewData.answerSheets.length})
              </h2>
              <div className="space-y-3">
                {reviewData.answerSheets.map((sheet, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center">
                      <div className="bg-green-500/20 p-3 rounded-xl mr-4">
                        <FileText className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{sheet.name}</p>
                        <p className="text-gray-400 text-sm">{sheet.size} • Ready for OCR processing</p>
                      </div>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmation"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="mt-1 h-5 w-5 text-amber-500 bg-transparent border-2 border-amber-400 rounded focus:ring-amber-500 focus:ring-2"
                />
                <label htmlFor="confirmation" className="ml-4 text-lg text-white">
                  <span className="font-bold">I confirm that all uploaded materials and settings are correct.</span>
                  <p className="text-gray-300 text-sm mt-2">
                    By checking this box, I authorize the AI system to begin RAG-powered evaluation using the provided knowledge base and configuration settings. The evaluation process will analyze each answer sheet against the uploaded syllabus and reference materials.
                  </p>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <Link
              to="/workflow/phase2"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Phase 2
            </Link>

            <button
              onClick={handleProceedToEvaluation}
              disabled={!isConfirmed}
              className={`group inline-flex items-center px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 ${
                isConfirmed
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              🚀 Launch AI Evaluation
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {!isConfirmed && (
            <div className="mt-6 flex items-start p-6 bg-amber-500/10 border border-amber-400/30 rounded-2xl">
              <AlertCircle className="h-6 w-6 text-amber-400 mr-4 mt-1" />
              <div>
                <div className="text-amber-300 font-semibold mb-1">Confirmation Required</div>
                <div className="text-amber-200 text-sm">
                  Please review all settings and check the confirmation box to proceed with AI evaluation.
                </div>
              </div>
            </div>
          )}

          {isConfirmed && (
            <div className="mt-6 flex items-start p-6 bg-green-500/10 border border-green-400/30 rounded-2xl">
              <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1" />
              <div>
                <div className="text-green-300 font-semibold mb-1">Ready for AI Processing</div>
                <div className="text-green-200 text-sm">
                  All configurations verified. Click "Launch AI Evaluation" to begin RAG-powered answer sheet processing.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phase3ReviewConfirmation;