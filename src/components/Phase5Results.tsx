import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, Download, RotateCcw, BarChart3, FileText, Star, Home, ArrowRight, Trophy, TrendingUp, Users, Target, Eye, Award } from 'lucide-react';

const Phase5Results = () => {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  // Enhanced dummy data for demonstration
  const results = [
    {
      id: '1',
      studentName: 'John Doe',
      totalMarks: 85,
      maxMarks: 100,
      percentage: 85,
      grade: 'A',
      answers: [
        { 
          question: 'Explain the concept of Data Structures', 
          marks: 18, 
          maxMarks: 20, 
          feedback: 'Excellent understanding of core concepts with clear examples. Minor improvement needed in explaining time complexity.',
          strengths: ['Clear definitions', 'Good examples', 'Proper structure'],
          improvements: ['Add time complexity analysis', 'Include more real-world applications']
        },
        { 
          question: 'Describe sorting algorithms and their applications', 
          marks: 15, 
          maxMarks: 20, 
          feedback: 'Good analytical approach but missing key points about space complexity and stability.',
          strengths: ['Covered multiple algorithms', 'Good comparison'],
          improvements: ['Discuss space complexity', 'Explain algorithm stability']
        },
        { 
          question: 'Implement and explain Binary Search Tree operations', 
          marks: 22, 
          maxMarks: 25, 
          feedback: 'Very comprehensive answer with relevant code examples and proper algorithmic analysis.',
          strengths: ['Complete implementation', 'Clear explanations', 'Good complexity analysis'],
          improvements: ['Add edge case handling', 'Discuss balancing techniques']
        },
        { 
          question: 'Graph algorithms and their real-world applications', 
          marks: 30, 
          maxMarks: 35, 
          feedback: 'Strong grasp of the topic with excellent real-world examples. Could benefit from more detailed complexity analysis.',
          strengths: ['Excellent examples', 'Clear algorithm explanations', 'Good practical applications'],
          improvements: ['More detailed complexity analysis', 'Discuss optimization techniques']
        }
      ]
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      totalMarks: 92,
      maxMarks: 100,
      percentage: 92,
      grade: 'A+',
      answers: [
        { 
          question: 'Explain the concept of Data Structures', 
          marks: 19, 
          maxMarks: 20, 
          feedback: 'Outstanding answer with excellent depth, clarity, and innovative examples.',
          strengths: ['Exceptional depth', 'Creative examples', 'Perfect structure'],
          improvements: ['Already excellent', 'Minor: could add historical context']
        },
        { 
          question: 'Describe sorting algorithms and their applications', 
          marks: 18, 
          maxMarks: 20, 
          feedback: 'Perfect understanding with comprehensive coverage of all aspects.',
          strengths: ['Complete coverage', 'Excellent analysis', 'Perfect examples'],
          improvements: ['Outstanding work', 'No significant improvements needed']
        },
        { 
          question: 'Implement and explain Binary Search Tree operations', 
          marks: 23, 
          maxMarks: 25, 
          feedback: 'Exceptional work with innovative approach and comprehensive understanding.',
          strengths: ['Innovative solutions', 'Perfect implementation', 'Excellent analysis'],
          improvements: ['Already exceptional', 'Could explore advanced variants']
        },
        { 
          question: 'Graph algorithms and their real-world applications', 
          marks: 32, 
          maxMarks: 35, 
          feedback: 'Excellent analysis with comprehensive coverage and outstanding practical insights.',
          strengths: ['Comprehensive coverage', 'Outstanding insights', 'Perfect examples'],
          improvements: ['Excellent work', 'Minor: could add more optimization details']
        }
      ]
    },
    {
      id: '3',
      studentName: 'Mike Johnson',
      totalMarks: 78,
      maxMarks: 100,
      percentage: 78,
      grade: 'B+',
      answers: [
        { 
          question: 'Explain the concept of Data Structures', 
          marks: 16, 
          maxMarks: 20, 
          feedback: 'Good understanding but needs more detailed explanations and examples.',
          strengths: ['Basic concepts clear', 'Good effort', 'Proper terminology'],
          improvements: ['Add more examples', 'Explain practical applications', 'Improve depth']
        },
        { 
          question: 'Describe sorting algorithms and their applications', 
          marks: 14, 
          maxMarks: 20, 
          feedback: 'Basic concepts covered but lacking in critical analysis and depth.',
          strengths: ['Covered main algorithms', 'Basic understanding'],
          improvements: ['Add complexity analysis', 'Provide more examples', 'Improve critical thinking']
        },
        { 
          question: 'Implement and explain Binary Search Tree operations', 
          marks: 20, 
          maxMarks: 25, 
          feedback: 'Solid answer with room for improvement in implementation details.',
          strengths: ['Good basic implementation', 'Clear structure', 'Proper logic'],
          improvements: ['Add error handling', 'Improve code efficiency', 'Add more operations']
        },
        { 
          question: 'Graph algorithms and their real-world applications', 
          marks: 28, 
          maxMarks: 35, 
          feedback: 'Good attempt with proper structure but could be more comprehensive.',
          strengths: ['Good structure', 'Basic algorithms covered', 'Some good examples'],
          improvements: ['Add more algorithms', 'Improve examples', 'Better complexity analysis']
        }
      ]
    }
  ];

  const handleDownloadReport = (format: 'pdf' | 'csv') => {
    alert(`${format.toUpperCase()} evaluation report downloaded successfully!`);
  };

  const handleAdjustStrictness = () => {
    navigate('/workflow/phase1');
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const averageScore = results.reduce((sum, result) => sum + result.percentage, 0) / results.length;
  const topPerformer = results.reduce((prev, current) => (prev.percentage > current.percentage) ? prev : current);
  const conceptsAnalysis = [
    { concept: 'Data Structures Basics', mastery: 85, students: 3 },
    { concept: 'Sorting Algorithms', mastery: 78, students: 3 },
    { concept: 'Tree Operations', mastery: 88, students: 3 },
    { concept: 'Graph Algorithms', mastery: 82, students: 3 }
  ];

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
              to="/workflow/phase4"
              className="inline-flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Phase 4
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
            <div className="flex items-center text-green-400">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-bold">Review & Confirm</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-green-500 rounded-full"></div>
            <div className="flex items-center text-green-400">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-bold">AI Evaluation</span>
            </div>
            <div className="flex-1 mx-4 h-2 bg-green-500 rounded-full"></div>
            <div className="flex items-center text-cyan-400">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                ✓
              </div>
              <span className="ml-3 text-sm font-medium text-white">Results & Reports</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30 mb-6">
            <Trophy className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">Evaluation Complete</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Phase 5: Results & Analytics
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            🎉 RAG-powered evaluation completed! Comprehensive results, detailed feedback, and advanced analytics ready for review.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-2xl mr-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-300 mb-1">Total Students</p>
                <p className="text-3xl font-bold text-white">{results.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <div className="flex items-center">
              <div className="bg-green-500/20 p-3 rounded-2xl mr-4">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-green-300 mb-1">Average Score</p>
                <p className="text-3xl font-bold text-white">{averageScore.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center">
              <div className="bg-purple-500/20 p-3 rounded-2xl mr-4">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-purple-300 mb-1">Top Performer</p>
                <p className="text-lg font-bold text-white">{topPerformer.studentName}</p>
                <p className="text-sm text-purple-300">{topPerformer.percentage}%</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
            <div className="flex items-center">
              <div className="bg-cyan-500/20 p-3 rounded-2xl mr-4">
                <Target className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-cyan-300 mb-1">AI Status</p>
                <p className="text-2xl font-bold text-green-400">✓ Complete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Concept Mastery Analysis */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden mb-8">
          <div className="px-8 py-6 border-b border-white/10">
            <h2 className="text-3xl font-bold text-white">📊 Concept Mastery Analysis</h2>
            <p className="text-gray-300 mt-2">AI-identified learning patterns and knowledge gaps</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {conceptsAnalysis.map((concept, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 p-6 rounded-2xl border border-indigo-400/20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{concept.concept}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full text-sm">
                      {concept.mastery}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 mb-3">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${concept.mastery}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-300 text-sm">{concept.students} students evaluated</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden mb-8">
          <div className="px-8 py-6 border-b border-white/10">
            <h2 className="text-3xl font-bold text-white">📋 Detailed Evaluation Results</h2>
            <p className="text-gray-300 mt-2">Comprehensive AI-generated scores and feedback</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                    Marks Obtained
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                    Total Marks
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-8 py-4 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {results.map((result) => (
                  <tr key={result.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="text-lg font-bold text-white">{result.studentName}</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="text-lg font-semibold text-cyan-400">{result.totalMarks}</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="text-lg font-semibold text-gray-300">{result.maxMarks}</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="text-lg font-bold text-white">{result.percentage}%</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className={`inline-flex px-4 py-2 text-sm font-bold rounded-full ${getGradeColor(result.percentage)}`}>
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <button
                        onClick={() => setSelectedStudent(selectedStudent === result.id ? null : result.id)}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 font-semibold rounded-xl hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300"
                      >
                        {selectedStudent === result.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Feedback */}
        {selectedStudent && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              🔍 Detailed AI Feedback: <span className="text-cyan-400">{results.find(r => r.id === selectedStudent)?.studentName}</span>
            </h3>
            <div className="space-y-6">
              {results.find(r => r.id === selectedStudent)?.answers.map((answer, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-2xl border border-purple-400/20">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">{answer.question}</h4>
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg">
                      {answer.marks}/{answer.maxMarks}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">{answer.feedback}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-500/10 p-4 rounded-xl border border-green-400/20">
                      <h5 className="text-green-400 font-bold mb-2">✅ Strengths</h5>
                      <ul className="space-y-1">
                        {answer.strengths.map((strength, idx) => (
                          <li key={idx} className="text-green-200 text-sm">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-400/20">
                      <h5 className="text-amber-400 font-bold mb-2">🎯 Areas for Improvement</h5>
                      <ul className="space-y-1">
                        {answer.improvements.map((improvement, idx) => (
                          <li key={idx} className="text-amber-200 text-sm">• {improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handleDownloadReport('pdf')}
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-green-400 hover:to-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:scale-105"
            >
              <Download className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              📄 Download PDF Report
            </button>
            
            <button
              onClick={() => handleDownloadReport('csv')}
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <BarChart3 className="h-6 w-6 mr-3" />
              📊 Export CSV Analytics
            </button>
            
            <button
              onClick={handleAdjustStrictness}
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-2xl hover:from-amber-400 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <RotateCcw className="h-6 w-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              🔧 Adjust & Re-evaluate
            </button>

            <Link
              to="/"
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <Home className="h-6 w-6 mr-3" />
              🏠 New Evaluation
            </Link>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500/20 p-4 rounded-full">
                <Trophy className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              🎉 RAG-Powered Evaluation Successfully Completed!
            </h3>
            <p className="text-xl text-green-200 max-w-4xl mx-auto">
              Revolutionary AI technology has analyzed all answer sheets with unprecedented accuracy. 
              Advanced analytics, detailed feedback, and comprehensive reports are now available for download and review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase5Results;