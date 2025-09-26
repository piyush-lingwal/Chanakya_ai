import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, Upload, FileText, BarChart3, CheckCircle, Zap, Target, Users, TrendingUp } from 'lucide-react';

const DocumentationPage = () => {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/30 mb-6">
              <FileText className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Complete Guide</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the revolutionary 6-phase workflow that's transforming education evaluation worldwide
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500/20 p-4 rounded-2xl mr-6">
                    <Upload className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Phase 1: Knowledge Base Setup
                    </h2>
                    <p className="text-cyan-300 font-medium">Foundation for Intelligent Evaluation</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Provide the AI system with the context it needs to evaluate answers accurately using 
                  syllabus, question papers, and reference materials.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Syllabus & Question Papers</div>
                      <div className="text-gray-400 text-sm">PDF/DOCX format supported</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Reference Materials</div>
                      <div className="text-gray-400 text-sm">URLs and documents for context</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Vector Database Storage</div>
                      <div className="text-gray-400 text-sm">Knowledge base for RAG retrieval</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Precision Strictness Control</div>
                      <div className="text-gray-400 text-sm">4 levels: Easy to Very Strict</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/20 p-4 rounded-2xl mr-6">
                    <FileText className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Phase 2: Answer Sheet Upload
                    </h2>
                    <p className="text-purple-300 font-medium">Digital Collection & OCR Processing</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Collect student answers in digital format with advanced OCR for handwritten text 
                  and intelligent preprocessing for AI evaluation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Advanced OCR Processing</div>
                      <div className="text-gray-400 text-sm">Handwritten text to digital conversion</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Text Preprocessing</div>
                      <div className="text-gray-400 text-sm">Clean & tokenize for AI processing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Batch Processing</div>
                      <div className="text-gray-400 text-sm">Multiple formats: PDF, images, DOCX</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Quality Preview</div>
                      <div className="text-gray-400 text-sm">Review before processing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-500/20 p-4 rounded-2xl mr-6">
                    <CheckCircle className="h-8 w-8 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Phase 3: Review & Confirmation
                    </h2>
                    <p className="text-amber-300 font-medium">Final Verification Before AI Processing</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Ensure all required inputs are correct before AI evaluation begins with 
                  comprehensive summary and confirmation options.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Complete Summary Table</div>
                      <div className="text-gray-400 text-sm">All inputs and configurations</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Edit & Modify Options</div>
                      <div className="text-gray-400 text-sm">Go back to adjust any phase</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Validation Checks</div>
                      <div className="text-gray-400 text-sm">Ensure data completeness</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Proceed to AI Evaluation</div>
                      <div className="text-gray-400 text-sm">Launch RAG-based processing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/20 p-4 rounded-2xl mr-6">
                    <Brain className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Phase 4: AI Evaluation (RAG Implementation)
                    </h2>
                    <p className="text-blue-300 font-medium">Advanced Retrieval-Augmented Generation</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Revolutionary AI evaluation using RAG technology that retrieves relevant knowledge 
                  and generates accurate scores with detailed feedback.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Knowledge Retrieval</div>
                      <div className="text-gray-400 text-sm">Fetch relevant syllabus context</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">LLM Generation</div>
                      <div className="text-gray-400 text-sm">Compare answers with context</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Strictness Integration</div>
                      <div className="text-gray-400 text-sm">Apply examiner preferences</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Detailed Feedback</div>
                      <div className="text-gray-400 text-sm">Highlight correct & missing points</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-2xl mr-6">
                    <BarChart3 className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Phase 5: Results Compilation & Reporting
                    </h2>
                    <p className="text-green-300 font-medium">Comprehensive Analytics & Reports</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Present results clearly with interactive dashboards, detailed reports, and 
                  actionable insights for both examiners and students.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Interactive Dashboards</div>
                      <div className="text-gray-400 text-sm">Visual analytics and charts</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Multiple Export Formats</div>
                      <div className="text-gray-400 text-sm">CSV analytics & PDF reports</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Class Performance Overview</div>
                      <div className="text-gray-400 text-sm">Identify learning gaps</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Concept Analysis</div>
                      <div className="text-gray-400 text-sm">Frequently missed topics</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 6 */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500/20 p-4 rounded-2xl mr-6">
                    <TrendingUp className="h-8 w-8 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Phase 6: Continuous Learning & Feedback Loop
                    </h2>
                    <p className="text-indigo-300 font-medium">Future-Ready AI Improvement</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Advanced machine learning system that continuously improves accuracy through 
                  examiner feedback and model fine-tuning.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Examiner Review System</div>
                      <div className="text-gray-400 text-sm">Adjust AI scoring if needed</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Model Fine-tuning</div>
                      <div className="text-gray-400 text-sm">Learn from corrections</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Accuracy Improvement</div>
                      <div className="text-gray-400 text-sm">Better results over time</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Adaptive Learning</div>
                      <div className="text-gray-400 text-sm">Context-aware improvements</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting Started */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 mt-12 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/30 mb-6">
                  <Target className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-300 text-sm font-medium">Start Your Journey</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Experience Revolutionary RAG-Powered Evaluation
                </h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Join the next generation of educators using advanced AI with continuous learning 
                  capabilities to transform educational assessment.
                </p>
                <Link
                  to="/workflow/phase1"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
                >
                  Begin Phase 1: Knowledge Base Setup
                  <ArrowLeft className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;