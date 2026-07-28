import React from 'react';
import { Building2, Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  logoUrl: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'internship' | 'freelance' | 'full-time';
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'Expedien',
      logoUrl: '/expedien-logo.png',
      location: 'Noida, India',
      period: 'Aug 2025 – Oct 2025',
      description: [
        'Engineered a RAG-based legal query resolver using LangChain, FAISS, and Hugging Face Transformers, enabling accurate document-grounded responses over a corpus of 10,000+ legal documents.',
        'Designed and optimized the document retrieval pipeline using vector embeddings and semantic search, achieving sub-2-second end-to-end response time with a Streamlit UI, improving query throughput by 40%.',
        'Applied instruction fine-tuning techniques and prompt engineering to improve response quality and reduce hallucinations across the production pipeline.',
      ],
      technologies: ['LangChain', 'FAISS', 'Hugging Face Transformers', 'Streamlit', 'Python', 'Vector Embeddings', 'Prompt Engineering'],
      type: 'internship',
    },
    {
      id: 2,
      role: 'Algorithmic Trading Developer (Freelance)',
      company: 'Freelance',
      logoUrl: '/freelance-logo.png',
      location: 'Remote',
      period: 'Nov 2024 – Dec 2024',
      description: [
        'Built a live automated trading system with SMA Crossover strategy in Python and PostgreSQL.',
        'Achieved 30% latency reduction through optimized data ingestion from Excel to database, strategy implementation with short-term/long-term SMAs, and comprehensive unit testing.',
        'Designed modular project structure with separate folders for data, database setup, strategy implementation, and testing for efficient management and execution.',
      ],
      technologies: ['Python', 'PostgreSQL', 'pandas', 'NumPy', 'Unit Testing', 'Financial Data'],
      type: 'freelance',
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-10 right-0 sm:top-20 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute bottom-10 left-0 sm:bottom-20 sm:left-10 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 hidden lg:block w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_45%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Professional experience building production ML systems, RAG pipelines, and automated trading infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <Building2 className="w-6 h-6 text-gray-400" style={{ display: 'none' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 truncate">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  exp.type === 'internship' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                  exp.type === 'freelance' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                }`}>
                  <CheckCircle size={10} />
                  {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-5 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed text-sm">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;