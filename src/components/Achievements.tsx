import React from 'react';
import { Trophy, Award, BadgeCheck, Code, Brain, Sparkles } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  category: 'competition' | 'hackathon' | 'certification';
  details?: string[];
}

const Achievements: React.FC = () => {
  const competitions: Achievement[] = [
    {
      id: 1,
      title: '1st Place – Code Farming Codeathon',
      description: 'Ranked 1st among 700 participants in this competitive programming and AI/ML challenge.',
      year: '2026',
      category: 'competition',
      details: ['700 participants', 'Competitive programming + AI/ML'],
    },
    {
      id: 2,
      title: '3rd Place – HackIndia Spark-4 Voyager Blitz',
      description: 'Secured 3rd place in this major hackathon focused on innovative AI solutions.',
      year: 'Mar 2026',
      category: 'competition',
      details: ['Individual project', 'AI/ML focus'],
    },
  ];

  const hackathons: Achievement[] = [
    {
      id: 3,
      title: 'IBM AI Hackathon',
      description: 'Participated in IBM\'s AI-focused hackathon building production-ready ML solutions.',
      year: '2025',
      category: 'hackathon',
      details: ['Hackathon', 'AI/ML'],
    },
    {
      id: 4,
      title: 'Google Solutions Challenge',
      description: 'Competed in Google\'s annual solutions challenge addressing UN SDGs with technology.',
      year: '2025',
      category: 'hackathon',
      details: ['Hackathon', 'Social impact'],
    },
    {
      id: 5,
      title: 'GUVI Hackathon',
      description: 'Participated in GUVI\'s hackathon building full-stack applications.',
      year: '2025',
      category: 'hackathon',
      details: ['Hackathon', 'Full-stack'],
    },
  ];

  const certifications: Achievement[] = [
    {
      id: 6,
      title: 'Google – Prompt Design in Vertex AI',
      description: 'Certified in designing effective prompts for Google\'s Vertex AI platform.',
      year: '2025',
      category: 'certification',
      details: ['Google Cloud', 'Vertex AI', 'Prompt Engineering'],
    },
    {
      id: 7,
      title: 'Google – Responsible AI Practices',
      description: 'Certified in Google\'s responsible AI development principles and practices.',
      year: '2025',
      category: 'certification',
      details: ['Google Cloud', 'AI Ethics', 'Responsible AI'],
    },
    {
      id: 8,
      title: 'IBM – Accelerating Deep Learning with GPUs',
      description: 'Certified in GPU-accelerated deep learning techniques using IBM platforms.',
      year: '2025',
      category: 'certification',
      details: ['IBM', 'Deep Learning', 'GPU Acceleration'],
    },
    {
      id: 9,
      title: 'BCG X – GenAI Financial Chatbot Simulation',
      description: 'Completed BCG X simulation building a GenAI-powered financial chatbot.',
      year: '2025',
      category: 'certification',
      details: ['BCG X', 'GenAI', 'Financial Services', 'Chatbots'],
    },
  ];

  const renderCategory = (
    title: string,
    items: Achievement[],
    icon: React.ReactNode,
    iconBg: string,
    badgeColor: string
  ) => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((achievement) => (
          <article
            key={achievement.id}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center`}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {achievement.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 ${badgeColor} text-xs font-medium rounded`}>
                    {achievement.year}
                  </span>
                  {achievement.details && achievement.details.map((detail, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section id="achievements" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-10 right-0 sm:top-20 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute bottom-10 left-0 sm:bottom-20 sm:left-10 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 hidden lg:block w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_45%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Competition wins, hackathon participations, and industry certifications demonstrating applied AI/ML expertise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {renderCategory(
            'Competitions',
            competitions,
            <Trophy size={20} />,
            'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
            'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
          )}
          {renderCategory(
            'Hackathons',
            hackathons,
            <Code size={20} />,
            'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
            'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
          )}
          {renderCategory(
            'Certifications',
            certifications,
            <BadgeCheck size={20} />,
            'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
            'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;