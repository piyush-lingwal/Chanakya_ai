import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, ArrowRight, Zap, Database, Cpu, CheckCircle, BarChart3, FileText, Clock } from 'lucide-react';

const Phase4AIEvaluation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const evaluationSteps = [
    {
      title: "Knowledge Retrieval",
      description: "Fetching relevant syllabus and reference materials",
      icon: Database,
      color: "cyan",
      duration: 2000
    },
    {
      title: "OCR Processing",
      description: "Converting handwritten answers to digital text",
      icon: FileText,
      color: "purple",
      duration: 3000
    },
    {
      title: "Context Analysis",
      description: "Analyzing answers against knowledge base",
      icon: Brain,
      color: "blue",
      duration: 4000
    },
    {
      title: "RAG Generation",
      description: "Generating scores and detailed feedback",
      icon: Zap,
      color: "green",
      duration: 3000
    },
    {
      title: "Results Compilation",
      description: "Preparing comprehensive evaluation report",
      icon: BarChart3,
      color: "amber",
      duration: 2000
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 140); // Total time: ~14 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < evaluationSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepTimer);
        return prev;
      });
    }, 2800);

    return () => clearInterval(stepTimer);
  }, []);

  const handleViewResults = () => {
    navigate('/workflow/phase5');
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
            <div className="text-gray-400 text-sm">
              AI Processing in Progress...
            </div>
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
            <div className="flex items-center text-green-400">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-bold">Review & Confirm</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-green-500 rounded-full"></div>
            <div className="flex items-center text-blue-400">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="ml-3 text-sm font-bold">AI Evaluation</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full">
              <div 
                className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6">
              <Cpu className="h-4 w-4 text-blue-400 mr-2 animate-spin" />
              <span className="text-blue-300 text-sm font-medium">RAG Processing Active</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Phase 4: AI Evaluation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              🧠 Advanced RAG technology is analyzing your answer sheets with unprecedented accuracy and intelligence
            </p>
          </div>

          {/* Progress Circle */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-white/10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="text-blue-400 transition-all duration-300"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{progress}%</div>
                  <div className="text-sm text-gray-400">Processing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Step Display */}
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 mb-8">
            <div className="flex items-center mb-4">
              {React.createElement(evaluationSteps[currentStep]?.icon || Brain, {
                className: `h-8 w-8 text-${evaluationSteps[currentStep]?.color || 'blue'}-400 animate-pulse`
              })}
              <h2 className="text-2xl font-bold text-white ml-4">
                {evaluationSteps[currentStep]?.title || 'Processing...'}
              </h2>
            </div>
            <p className="text-lg text-gray-300">
              {evaluationSteps[currentStep]?.description || 'AI is working on your evaluation...'}
            </p>
          </div>

          {/* Processing Steps */}
          <div className="space-y-4 mb-8">
            {evaluationSteps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              const IconComponent = step.icon;
              
              return (
                <div
                  key={index}
                  className={`flex items-center p-6 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? `bg-${step.color}-500/10 border-${step.color}-400/30`
                      : isCompleted
                      ? 'bg-green-500/10 border-green-400/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className={`p-3 rounded-xl mr-6 ${
                    isActive
                      ? `bg-${step.color}-500/20`
                      : isCompleted
                      ? 'bg-green-500/20'
                      : 'bg-white/10'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    ) : (
                      <IconComponent className={`h-6 w-6 ${
                        isActive
                          ? `text-${step.color}-400 ${index === currentStep ? 'animate-pulse' : ''}`
                          : 'text-gray-400'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${
                      isActive || isCompleted ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      isActive || isCompleted ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="flex items-center text-blue-400">
                      <Clock className="h-5 w-5 mr-2 animate-spin" />
                      <span className="text-sm font-medium">Processing...</span>
                    </div>
                  )}
                  {isCompleted && (
                    <div className="flex items-center text-green-400">
                      <span className="text-sm font-medium">Complete</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion Message */}
          {isComplete && (
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 text-center">
              <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                🎉 AI Evaluation Complete!
              </h3>
              <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
                Revolutionary RAG technology has successfully analyzed all answer sheets. 
                Comprehensive results with detailed feedback are now ready for review.
              </p>
              <button
                onClick={handleViewResults}
                className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold text-xl rounded-2xl hover:from-green-400 hover:to-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:scale-105"
              >
                🚀 View Results & Analytics
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Processing Info */}
          {!isComplete && (
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/20 text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-400 mr-3 animate-pulse" />
                <span className="text-amber-300 font-semibold">AI Processing in Progress</span>
              </div>
              <p className="text-gray-300">
                Please wait while our advanced RAG system evaluates your answer sheets. 
                This process typically takes 10-15 seconds for optimal accuracy.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phase4AIEvaluation;