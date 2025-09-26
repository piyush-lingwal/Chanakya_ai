import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, Upload, FileText, Eye, ArrowRight, AlertCircle, CheckCircle, X, Zap } from 'lucide-react';

const Phase2AnswerUpload = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previewFile, setPreviewFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handlePreview = (file: File) => {
    setPreviewFile(file);
  };

  const handleStartEvaluation = () => {
    if (uploadedFiles.length > 0) {
      navigate('/workflow/phase3');
    }
  };

  const isFormValid = uploadedFiles.length > 0;

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
              to="/workflow/phase1"
              className="inline-flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Phase 1
            </Link>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex items-center text-green-400">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-bold">Knowledge Base</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-green-500 rounded-full"></div>
            <div className="flex items-center text-purple-400">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                2
              </div>
              <span className="ml-3 text-sm font-bold">Upload Answers</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-2/3"></div>
            </div>
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 mb-6">
              <Zap className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Intelligent Processing</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Phase 2: Answer Sheet Upload
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Upload student answer sheets for lightning-fast AI-powered evaluation with intelligent format recognition
            </p>
          </div>

          <div className="space-y-8">
            {/* Upload Area */}
            <div>
              <label className="block text-lg font-bold text-white mb-4">
                Upload Answer Sheets *
              </label>
              <div className="border-2 border-dashed border-purple-400/30 rounded-2xl p-12 hover:border-purple-400/60 transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-cyan-600/5">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="answer-upload"
                />
                <label htmlFor="answer-upload" className="cursor-pointer">
                  <div className="text-center">
                    <div className="bg-purple-500/20 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Upload className="h-10 w-10 text-purple-400" />
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl text-white font-bold mb-3">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-lg text-gray-400">
                        PDF, JPG, PNG up to 10MB each • Batch upload supported
                      </p>
                      <p className="text-sm text-purple-300 mt-2 font-medium">
                        ⚡ Intelligent format recognition • 🔍 Quality optimization • 📊 Instant preview
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  📄 Uploaded Answer Sheets ({uploadedFiles.length})
                </h3>
                <div className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center">
                        <div className="bg-cyan-500/20 p-3 rounded-xl mr-4">
                          <FileText className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-white">{file.name}</p>
                          <p className="text-sm text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • Ready for processing
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePreview(file)}
                          className="p-3 text-cyan-400 hover:bg-cyan-500/20 rounded-xl transition-all duration-300"
                          title="Preview"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => removeFile(index)}
                          className="p-3 text-red-400 hover:bg-red-500/20 rounded-xl transition-all duration-300"
                          title="Remove"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* File Preview */}
            {previewFile && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">📋 File Preview</h3>
                  <button
                    onClick={() => setPreviewFile(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center">
                  <div className="bg-cyan-500/20 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-10 w-10 text-cyan-400" />
                  </div>
                  <p className="text-lg text-white font-semibold mb-2">
                    Preview: <span className="text-cyan-400">{previewFile.name}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    🔄 Advanced preview will be available after AI processing begins
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <Link
              to="/workflow/phase1"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Phase 1
            </Link>

            <button
              onClick={handleStartEvaluation}
              disabled={!isFormValid}
              className={`group inline-flex items-center px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 ${
                isFormValid
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-400 hover:to-cyan-500 shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              🚀 Start AI Evaluation
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {!isFormValid && (
            <div className="mt-6 flex items-start p-6 bg-amber-500/10 border border-amber-400/30 rounded-2xl">
              <AlertCircle className="h-6 w-6 text-amber-400 mr-4 mt-1" />
              <div>
                <div className="text-amber-300 font-semibold mb-1">Upload Required</div>
                <div className="text-amber-200 text-sm">
                  Please upload at least one answer sheet to begin the AI-powered evaluation process.
                </div>
              </div>
            </div>
          )}

          {isFormValid && (
            <div className="mt-6 flex items-start p-6 bg-green-500/10 border border-green-400/30 rounded-2xl">
              <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1" />
              <div>
                <div className="text-green-300 font-semibold mb-1">Ready for Processing</div>
                <div className="text-green-200 text-sm">
                  {uploadedFiles.length} answer sheet{uploadedFiles.length !== 1 ? 's' : ''} uploaded and ready for AI evaluation. 
                  Processing will begin immediately after clicking "Start AI Evaluation".
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phase2AnswerUpload;