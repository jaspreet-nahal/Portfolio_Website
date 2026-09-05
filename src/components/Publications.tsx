import React from 'react';
import { ExternalLink, FileText, Award, Clock, Brain, AlertCircle, FlaskConical } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-10 right-0 sm:top-20 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute bottom-10 left-0 sm:bottom-20 sm:left-10 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 hidden lg:block w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_45%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Publications & Research</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Peer-reviewed preprints, conference publications, and ongoing research in AI/ML.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* EverydayGPT - Published */}
          <article className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500"></div>

            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                    <FileText className="w-4 h-4" />
                    <span>arXiv Preprint</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    EverydayGPT: Confidence-Gated Routing for Efficient and Safe Hybrid GPT–RAG Conversational QA
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium text-gray-900 dark:text-white">Jaspreet Singh Nahal</span>
                    <span className="text-gray-400">•</span>
                    <span>2026</span>
                    <span className="text-gray-400">•</span>
                    <a
                      href="https://arxiv.org/abs/2606.11212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-mono text-sm flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      arXiv:2606.11212
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://github.com/jaspreet-nahal/EverydayGPT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  A hybrid GPT–RAG system that routes <strong className="text-gray-900 dark:text-white">85% of queries to fast retrieval</strong>,
                  skipping full generation for a <strong className="text-gray-900 dark:text-white">6.3× latency reduction</strong>
                  while maintaining answer quality. Includes a <strong className="text-gray-900 dark:text-white">205M-parameter GPT pretrained from scratch </strong>
                  on subset of 10B tokens (FineWeb-Edu, Dolly and more!), benchmarked against 8 baselines including LangChain RAG.
                  Runs fully on consumer CPU under 2 GB RAM.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Model Size</p>
                    <p className="font-bold text-gray-900 dark:text-white">205M params</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Latency Reduction</p>
                    <p className="font-bold text-gray-900 dark:text-white">6.3× faster</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Routing Rate</p>
                    <p className="font-bold text-gray-900 dark:text-white">85% retrieval</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Hardware</p>
                    <p className="font-bold text-gray-900 dark:text-white">{'<'}2GB RAM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://arxiv.org/abs/2606.11212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  Read Paper on arXiv
                </a>
                <a
                  href="https://github.com/jaspreet-nahal/EverydayGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </article>

          {/* Agentic Appliance Control & Energy Monitoring - Upcoming Research */}
          <article className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-amber-200 dark:border-amber-800 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>

            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                    <AlertCircle className="w-4 h-4" />
                    <span>Upcoming Research (In Progress)</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    Agentic Appliance Control & Energy Monitoring
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium text-gray-900 dark:text-white">Jaspreet Singh Nahal</span>
                    <span className="text-gray-400">•</span>
                    <span>AKTU Group Project</span>
                    <span className="text-gray-400">•</span>
                    <span>2026</span>
                    <span className="text-gray-400">•</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium">
                      <FlaskConical className="w-3 h-3" />
                      In Progress
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-5 py-3 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 font-medium rounded-xl">
                    <AlertCircle className="w-5 h-5" />
                    Ongoing Work
                  </span>
                </div>
              </div>

              <div className="prose prose-amber dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  <strong className="text-gray-900 dark:text-white">Literature Review & Methodology:</strong> Identified four recurring gaps in home energy management research
                  (static rule-based control, cloud-only reasoning, simulation-only validation, single-purpose sensor nodes) and designed
                  an edge-cloud hybrid methodology with targeted research questions to address them.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mt-4">
                  <strong className="text-gray-900 dark:text-white">AI/ML Reasoning Layer (Owner):</strong> Building a multi-agent LangGraph system over live IoT telemetry
                  (ESP32/PZEM-004T) performing anomaly detection via Isolation Forest and load forecasting via Prophet.
                  Targeting 12–18% reduction in household energy cost with a full evaluation plan including precision/recall,
                  MAE/RMSE, and difference-in-differences analysis.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mt-4">
                  <strong className="text-gray-900 dark:text-white">Tech Stack:</strong> LangGraph, n8n, IoT (ESP32/PZEM-004T), Isolation Forest, Prophet, Python, Edge-Cloud Hybrid Architecture.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                    <p className="font-bold text-gray-900 dark:text-white">In Progress</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">AI/ML Layer</p>
                    <p className="font-bold text-gray-900 dark:text-white">LangGraph + Prophet</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Target Reduction</p>
                    <p className="font-bold text-gray-900 dark:text-white">12–18% Energy Cost</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">IoT Hardware</p>
                    <p className="font-bold text-gray-900 dark:text-white">ESP32 / PZEM-004T</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium rounded-xl border border-amber-300 dark:border-amber-700">
                  <AlertCircle className="w-5 h-5" />
                  Research In Progress
                </span>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl">
                  <FileText className="w-5 h-5" />
                  Manuscript In Preparation
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Publications;