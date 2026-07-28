import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-10 right-0 sm:top-20 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute bottom-10 left-0 sm:bottom-20 sm:left-10 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 hidden lg:block w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_45%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              AI/ML Engineer building production RAG systems, AI agents, and LLM applications
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I pretrained a 205M-parameter GPT Transformer from scratch in PyTorch on 10B tokens (arXiv:2606.11212).
              I built a production RAG system serving 10,000+ legal documents with sub-2-second response times at
              Expedien. Currently building Aria, a local-first autonomous agent architecture with a
              React-based visualization frontend using LangGraph and FastAPI.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My focus is on systems where ML meets production engineering: retrieval-augmented generation,
              agent architectures, local-first inference with Ollama, and making LLMs efficient enough to run on
              consumer hardware. I work across the stack with PyTorch, FastAPI, React, PostgreSQL, FAISS,
              and value clean architecture and measurable performance over hype.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Name</h4>
                <p className="text-gray-700 dark:text-gray-300">Jaspreet Singh Nahal</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">jaspreetnahal100@gmail.com</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">New Delhi, India</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300">Freelance & Full-time</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Hire Me
            </a>
          </div>

          <div className="order-1 lg:order-2 relative max-w-sm mx-auto lg:max-w-none">
            <div className="aspect-square rounded-2xl overflow-hidden relative z-10 shadow-xl">
              <img
                src="https://github.com/merciless-admiral-3083/project/raw/main/Images/WhatsApp%20Image%202023-11-18%20at%2021.04.59_dc3f1dc2.jpg"
                alt="Jaspreet portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 sm:-mt-8 sm:-mr-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-600 dark:bg-blue-500 rounded-full z-0"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 sm:-mb-8 sm:-ml-8 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-teal-500 dark:bg-teal-600 rounded-full z-0 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;