import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, Upload, Link2, CheckCircle, ArrowRight, AlertCircle, Zap } from 'lucide-react';

const Phase1KnowledgeBase = () => {
  const navigate = useNavigate();
  const [strictness, setStrictness] = useState('medium');
  const [syllabusFile, setSyllabusFile] = useState<File | null>(null);
  const [questionFile, setQuestionFile] = useState<File | null>(null);
  const [referenceLinks, setReferenceLinks] = useState('');

  const handleFileUpload = (type: 'syllabus' | 'question') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'syllabus') setSyllabusFile(file);
      else setQuestionFile(file);
    }
  };

  const handleProceed = () => {
    if (syllabusFile && questionFile) {
      navigate('/workflow/phase2');
    }
  };

  const isFormValid = syllabusFile && questionFile;

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
              to="/"
              className="inline-flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex items-center text-cyan-400">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                1
              </div>
              <span className="ml-3 text-sm font-bold">Knowledge Base</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-1/3"></div>
            </div>
            <div className="flex items-center text-gray-500">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-400 rounded-full text-sm font-bold">
                2
              </div>
              <span className="ml-3 text-sm font-medium">Upload Answers</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full"></div>
            <div className="flex items-center text-gray-500">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-400 rounded-full text-sm font-bold">
                3
              </div>
              <span className="ml-3 text-sm font-medium">Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/30 mb-6">
              <Zap className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">AI Foundation Setup</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Phase 1: Knowledge Base
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create the intelligent foundation that enables our AI to understand your curriculum and evaluation standards
            </p>
          </div>

          <div className="space-y-8">
            {/* Syllabus Upload */}
            <div>
              <label className="block text-lg font-bold text-white mb-4">
                Upload Syllabus *
              </label>
              <div className="border-2 border-dashed border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 bg-gradient-to-br from-cyan-500/5 to-purple-600/5">
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileUpload('syllabus')}
                  className="hidden"
                  id="syllabus-upload"
                />
                <label htmlFor="syllabus-upload" className="cursor-pointer">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="mt-4">
                      <p className="text-lg text-white font-semibold mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-400">
                        PDF, DOCX up to 10MB • Intelligent content analysis
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              {syllabusFile && (
                <div className="mt-4 flex items-center p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">{syllabusFile.name}</div>
                    <div className="text-green-300 text-sm">Syllabus uploaded successfully</div>
                  </div>
                </div>
              )}
            </div>

            {/* Question Papers Upload */}
            <div>
              <label className="block text-lg font-bold text-white mb-4">
                Upload Sample Question Papers *
              </label>
              <div className="border-2 border-dashed border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-cyan-600/5">
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileUpload('question')}
                  className="hidden"
                  id="question-upload"
                />
                <label htmlFor="question-upload" className="cursor-pointer">
                  <div className="text-center">
                    <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="mt-4">
                      <p className="text-lg text-white font-semibold mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-400">
                        PDF, DOCX up to 10MB • Pattern recognition enabled
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              {questionFile && (
                <div className="mt-4 flex items-center p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">{questionFile.name}</div>
                    <div className="text-green-300 text-sm">Question papers uploaded successfully</div>
                  </div>
                </div>
              )}
            </div>

            {/* Reference Links */}
            <div>
              <label className="block text-lg font-bold text-white mb-4">
                Reference Website Links (Optional)
              </label>
              <div className="relative bg-white/5 rounded-2xl border border-white/10">
                <Link2 className="absolute left-4 top-4 h-6 w-6 text-cyan-400" />
                <textarea
                  value={referenceLinks}
                  onChange={(e) => setReferenceLinks(e.target.value)}
                  placeholder="Enter website URLs for enhanced AI context (one per line)
Example: https://example.com/reference-material"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-500/50 rounded-2xl resize-none text-lg"
                />
              </div>
            </div>

            {/* Strictness Selection */}
            <div>
              <label className="block text-lg font-bold text-white mb-6">
                AI Evaluation Strictness Level
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: 'easy', label: 'Easy', description: 'Lenient & encouraging', color: 'green' },
                  { value: 'medium', label: 'Medium', description: 'Balanced approach', color: 'blue' },
                  { value: 'hard', label: 'Hard', description: 'Strict evaluation', color: 'orange' },
                  { value: 'very-strict', label: 'Very Strict', description: 'Maximum rigor', color: 'red' }
                ].map((option) => (
                  <div key={option.value}>
                    <input
                      type="radio"
                      id={option.value}
                      name="strictness"
                      value={option.value}
                      checked={strictness === option.value}
                      onChange={(e) => setStrictness(e.target.value)}
                      className="hidden"
                    />
                    <label
                      htmlFor={option.value}
                      className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        strictness === option.value
                          ? `border-${option.color}-400 bg-${option.color}-500/10 shadow-lg transform scale-105`
                          : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-lg font-bold text-white mb-2">
                        {option.label}
                      </div>
                      <div className="text-sm text-gray-400">
                        {option.description}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <button
              onClick={handleProceed}
              disabled={!isFormValid}
              className={`group inline-flex items-center px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                isFormValid
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Proceed to Phase 2
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {!isFormValid && (
            <div className="mt-6 flex items-start p-6 bg-amber-500/10 border border-amber-400/30 rounded-2xl">
              <AlertCircle className="h-6 w-6 text-amber-400 mr-4 mt-1" />
              <div>
                <div className="text-amber-300 font-semibold mb-1">Required Files Missing</div>
                <div className="text-amber-200 text-sm">
                  Please upload both syllabus and question papers to enable AI processing and proceed to Phase 2.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phase1KnowledgeBase;