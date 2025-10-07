import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, Clock, BarChart3, Github, Linkedin, Mail, ArrowRight, Zap, Shield, Users, TrendingUp, Globe, Award, Target, Lightbulb } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
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
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/documentation" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium">
                Documentation
              </Link>
              <Link to="/workflow/phase1" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25">
                Experience Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/30 mb-8">
              <Zap className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Revolutionary AI Technology(Platform UnderDevelopment)></span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Chanakya AI
              </span>
            </h1>
            
            <p className="text-3xl md:text-4xl text-gray-300 mb-6 font-light">
              The Future of Answer Sheet Evaluation
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered platform that transforms subjective answer evaluation from 
              <span className="text-red-400 font-semibold"> weeks to hours</span>, eliminates human bias, and delivers 
              <span className="text-cyan-400 font-semibold"> consistent, fair grading</span> at unprecedented scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/workflow/phase1"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xl font-bold rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                Experience the Future
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-xl font-bold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Faster Evaluation</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Bias-Free Grading</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-300">Scalable Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="py-24 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Critical Problem We're Solving
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional answer sheet evaluation is broken. It's time for a revolutionary change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <Clock className="h-12 w-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Time-Consuming</h3>
              <p className="text-gray-300 leading-relaxed">
                Manual evaluation takes weeks, delaying crucial feedback and hampering student learning progress.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <Users className="h-12 w-12 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Subjective & Biased</h3>
              <p className="text-gray-300 leading-relaxed">
                Different examiners grade the same answer differently, creating unfair results and inconsistent standards.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <TrendingUp className="h-12 w-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Not Scalable</h3>
              <p className="text-gray-300 leading-relaxed">
                No reliable solution exists for automating descriptive answer evaluation at institutional scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30 mb-6">
              <Lightbulb className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-green-300 text-sm font-medium">Innovative Solution</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Revolutionary AI Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Chanakya AI leverages cutting-edge artificial intelligence to transform subjective answer evaluation, 
              making it faster, fairer, and more transparent than ever before.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Brain className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Driven Intelligence</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced natural language processing with contextual understanding ensures accurate evaluation 
                aligned with syllabus and marking schemes.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bias-Free Evaluation</h3>
              <p className="text-gray-300 leading-relaxed">
                Eliminates human subjectivity and bias, ensuring consistent, fair grading for every student 
                regardless of background or examiner preferences.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Process thousands of answer sheets in hours instead of weeks, with detailed feedback 
                and personalized insights for every student.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Benefits */}
      <div className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transforming Education at Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact extends beyond individual institutions to revolutionize the entire education ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education System Benefits */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                  <Award className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">For Education System</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Faster Evaluations</div>
                    <div className="text-gray-300 text-sm">Large batches checked in hours, not weeks</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Fair & Consistent Grading</div>
                    <div className="text-gray-300 text-sm">Removes human bias, ensures equal treatment</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Teacher Empowerment</div>
                    <div className="text-gray-300 text-sm">Focus on teaching, not manual checking</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Unlimited Scalability</div>
                    <div className="text-gray-300 text-sm">From schools to competitive exams</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Society Benefits */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-3 rounded-xl mr-4">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">For Society</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Increased Transparency</div>
                    <div className="text-gray-300 text-sm">Clear marking builds trust in education</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Equal Opportunities</div>
                    <div className="text-gray-300 text-sm">Reduces favoritism, helps all backgrounds</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Quality at Scale</div>
                    <div className="text-gray-300 text-sm">Accessible even in resource-limited areas</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Future-Ready Workforce</div>
                    <div className="text-gray-300 text-sm">Faster feedback loops accelerate learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Massive Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The global education technology market is experiencing unprecedented growth, 
              with AI-powered solutions leading the transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$350B</div>
              <div className="text-gray-300 text-sm">Global Education Market</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$25B</div>
              <div className="text-gray-300 text-sm">EdTech AI Market by 2030</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1.5B</div>
              <div className="text-gray-300 text-sm">Students Worldwide</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">45%</div>
              <div className="text-gray-300 text-sm">Annual Growth Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the revolution that's making education fairer, faster, and more accessible for millions of students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/workflow/phase1"
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-2xl font-bold rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105"
            >
              Experience the Demo
              <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:investors@chanakyaai.com"
              className="inline-flex items-center px-12 py-6 bg-white/10 backdrop-blur-sm text-white text-2xl font-bold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
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
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="https://github.com/chanakyaai"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com/company/chanakyaai"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="mailto:contact@chanakyaai.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2024 Chanakya AI. All rights reserved. 
              <span className="text-cyan-400 font-semibold"> Revolutionizing Education Through AI.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
