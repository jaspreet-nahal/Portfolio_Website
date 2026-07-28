import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from '../types';

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const projectsData: ProjectData[] = [
    // FEATURED PROJECTS (always shown - first 6)
    {
      id: 1,
      title: 'EverydayGPT',
      description: 'Built a confidence-gated routing system that skips full GPT generation for 85% of queries, achieving 6.3x average latency reduction. Pretrained a 205M-parameter GPT from scratch on 10B tokens (FineWeb-Edu); benchmarked against 8 baselines including LangChain RAG. Runs fully on consumer CPU under 2GB RAM. Published on arXiv:2606.11212.',
      image: 'https://github.com/jaspreet-nahal/my-images/raw/main/Screenshot%202025-08-27%20103737.png',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/RAG-GPT',
      featured: true,
    },
    {
      id: 2,
      title: 'CodeAtlas',
      description: 'AI-powered code intelligence platform with interactive dependency graph visualization over GitHub repositories and ZIP archives. Enables natural language Q&A, semantic concept extraction, and codebase mapping across 8 programming languages. Features domain-aware file classification and an adaptive personalization layer that tailors code explanations to user proficiency using retrieval-augmented context.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/ChatGPT%20Image%20May%2031%2C%202026%2C%2004_59_20%20PM.png',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/CodeAtlas',
      featured: true,
    },
    {
      id: 3,
      title: 'Aria Autonomous Desktop Agent',
      description: 'Local-first autonomous desktop agent with a React-based visualization frontend. Converts natural language into structured OS-level task execution across files, email, and browser with zero cloud dependency. Multi-agent debate layer via LangGraph where competing sub-agents verify action correctness before irreversible execution. Tiered safety model (auto-execute / confirm / reject). Persistent memory for organizational context and task history with FastAPI backend, Ollama local inference, and FAISS retrieval.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/Bright%20Logo.png',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/Aria',
      featured: true,
    },
    {
      id: 4,
      title: 'NyayaSetu',
      description: 'Automated legal-document analysis web application combining Next.js frontend with RAG utilities and MongoDB for persisted analysis history. Supports multiple LLM backends (Anthropic, Gemini), generates human-friendly summaries in Hindi and English with risk highlighting, and allows export/sharing of analysis results.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/Screenshot%202026-05-31%20163331.png',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/Nyaya_Setu',
      featured: true,
    },
    {
      id: 5,
      title: 'RAG Legal Query Resolver (Expedien)',
      description: 'Production RAG-based legal query resolver built during ML Internship at Expedien (Aug–Oct 2025). Engineered with LangChain, FAISS, and Hugging Face Transformers over 10,000+ legal documents. Sub-2-second end-to-end response time with Streamlit UI, 40% throughput improvement. Applied instruction fine-tuning and prompt engineering to reduce hallucinations across the production pipeline.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/Gemini_Generated_Image_w624zaw624zaw624.png',
      category: 'web',
      link: 'https://github.com/jaspreet-nahal/Expedien_RAG',
      featured: true,
    },
    {
      id: 6,
      title: 'Stock Trading System',
      description: 'Live automated trading system with SMA Crossover strategy implemented in Python and PostgreSQL. Achieved 30% latency reduction through optimized data ingestion from Excel to database, strategy implementation with short-term/long-term SMAs, and comprehensive unit testing. Freelance project (Nov–Dec 2024).',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/1734796608193.jpg',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/Stock-Trading-Strategy',
      featured: true,
    },
    // ADDITIONAL PROJECTS (shown when "Show More" is clicked)
    {
      id: 7,
      title: 'OTT Platform: PLAYZEN',
      description: 'Developed an online OTT Platform to stream movies, TV Shows, Web Series and more. Tracks user interest and content preference for better recommendations. No sign-in required — open to all.',
      image: 'https://github.com/jaspreet-nahal/my-images/raw/main/1740989683037.jpg',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/PLAYZEN',
      featured: false,
    },
    {
      id: 8,
      title: 'Chatbot',
      description: 'Chatbot built using React, Python, and other tools.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/Gemini_Generated_Image_k6joz1k6joz1k6jo.png',
      category: 'web',
      link: 'https://github.com/jaspreet-nahal/AI_US',
      featured: false,
    },
    {
      id: 9,
      title: 'Resume Skill Extractor',
      description: 'AI-powered skill extraction tool leveraging NLP pipelines (spaCy, regex, TF-IDF) for entity recognition from resumes. Built REST APIs with FastAPI, extracting resume skills with 85%+ accuracy and processing each file in under 2 seconds. Deployed backend model and UI on containerized dev environment using GitHub Actions.',
      image: 'https://github.com/jaspreet-nahal/my-images/raw/main/Screenshot%202025-09-01%20213217.png',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/ResumeSkillPro',
      featured: false,
    },
    {
      id: 10,
      title: 'AI Restaurant Manager',
      description: 'Restaurant appointment scheduling chatbot based on AI to facilitate quick and easy reservation booking. Automates reservation management, minimizes manual labor, and improves customer satisfaction through real-time availability and instant confirmation.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/Gemini_Generated_Image_gz25ylgz25ylgz25.png',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/AI-Restro-Manager',
      featured: false,
    },
    {
      id: 11,
      title: 'AI Document Reader',
      description: 'Intelligent document processing system using advanced AI algorithms to analyze and engage with one or multiple documents uploaded by users. Features smooth upload and document handling, ability to ask contextual questions and get accurate answers from the document(s), and enhanced NLP for better user experience.',
      image: 'https://github.com/jaspreet-nahal/my-images/raw/main/1734851602981.jpg',
      category: 'app',
      link: 'https://github.com/jaspreet-nahal/AI-Document-Reader',
      featured: false,
    },
    {
      id: 12,
      title: 'QR Code Generator',
      description: 'Sleek and responsive web application that allows users to generate and download QR codes for any URL in seconds.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/Gemini_Generated_Image_swvh90swvh90swvh.png',
      category: 'web',
      link: 'https://github.com/jaspreet-nahal/QR',
      featured: false,
    },
    {
      id: 13,
      title: 'Invoice Similarity Matching System',
      description: 'Framework using text extraction, feature extraction, structural analysis, and similarity calculation to find invoices with maximum similarity to reference data.',
      image: 'https://github.com/jaspreet-nahal/Portfolio_Website/raw/main/Images/1722439516480.jpg',
      category: 'web',
      link: '#',
      featured: false,
    }
  ];

  const featuredProjects = projectsData.filter(p => p.featured);
  const additionalProjects = projectsData.filter(p => !p.featured);
  const displayProjects = showMore ? projectsData : [...featuredProjects];
  const hasMore = additionalProjects.length > 0 && !showMore;

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-10 right-0 sm:top-20 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute bottom-10 left-0 sm:bottom-20 sm:left-10 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 hidden lg:block w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_45%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A selection of my work across AI/ML, RAG systems, agent architectures, and full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowMore(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            >
              <span>Show More Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {showMore && additionalProjects.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowMore(false)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-2xl text-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span>Show Less</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;