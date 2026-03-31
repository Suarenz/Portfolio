import React from 'react';
import { motion } from 'motion/react';

// Render Icon provided by user
const RenderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 800 800">
    <g clipPath="url(#render_white__clip0_682_25)">
      <path
        fill="currentColor"
        d="M605.28 288.733c-.059-1.365-.178-2.7-.296-4.065-.03-.326-.03-.682-.09-1.009-.089-.83-.207-1.632-.326-2.462-.119-.861-.208-1.691-.327-2.522a30 30 0 0 0-.326-1.751c-.178-1.038-.356-2.106-.564-3.144-.178-.831-.386-1.632-.564-2.463-.178-.801-.356-1.572-.534-2.373-.208-.831-.475-1.632-.713-2.463a63 63 0 0 0-.653-2.284c-.267-.831-.564-1.662-.86-2.493l-.713-2.136c-.386-1.038-.801-2.047-1.187-3.056-.208-.504-.386-.979-.594-1.483a106 106 0 0 0-1.454-3.234c-.178-.386-.356-.801-.534-1.187-.475-1.009-1.01-1.988-1.514-2.967-.238-.445-.445-.89-.683-1.335-.593-1.098-1.246-2.195-1.87-3.263-.178-.297-.326-.594-.504-.89a78 78 0 0 0-2.137-3.323l-.446-.712a114 114 0 0 0-2.76-3.887 103 103 0 0 0-2.76-3.531c-.06-.089-.119-.178-.208-.267-18.344-22.222-46.037-36.344-77.054-36.374V194l-.089.059h.029c-8.607 0-16.978 1.098-24.962 3.145-4.779 1.217-9.439 2.819-13.921 4.688a118 118 0 0 0-4.423 1.988c-29.474 14.181-50.845 42.426-55.564 76.011h-.059c-2.078 14.39-6.501 28.008-12.793 40.528h.208c-21.906 43.435-66.903 73.252-118.906 73.252-23.211 0-44.998-5.933-63.994-16.347-2.226-1.217-4.927.386-4.927 2.907v13.44H206v199.583h199.7v-99.806h.207v-49.903c0-27.563 22.351-49.903 49.925-49.903h49.925c8.548 0 16.83-1.098 24.755-3.145a105 105 0 0 0 13.921-4.688 117 117 0 0 0 4.422-1.988c30.543-14.715 52.448-44.533 56.039-79.75.327-3.352.505-6.764.505-10.206 0-1.72-.03-3.441-.119-5.132"
      />
    </g>
    <defs>
      <clipPath id="render_white__clip0_682_25">
        <path fill="currentColor" d="M206 194h400v400H206z" />
      </clipPath>
    </defs>
  </svg>
);

// Vercel raw SVG provided by user
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
    <path fill="currentColor" d="m128 0 128 221.705H0z" />
  </svg>
);

const tools = [
  { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Google Colab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg' },
  { name: 'Visual Studio Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Render', CustomIcon: (props: any) => <RenderIcon {...props} /> },
  { name: 'Vercel', CustomIcon: (props: any) => <VercelIcon {...props} /> },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
];

export function ToolsAndTech() {
  return (
    <section id="tools" className="bg-bg py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Stack</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary mb-6">
              Tools & <span className="italic">technologies</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted">
              The instruments and frameworks I use to bring ideas to life.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
              className="flex items-center p-4 rounded-2xl bg-surface/30 border border-stroke transition-all duration-300 gap-4 overflow-hidden min-w-0 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                {tool.CustomIcon ? (
                  <tool.CustomIcon className="w-8 h-8 object-contain" />
                ) : (
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain shrink-0" />
                )}
              </div>
              <span className="text-sm md:text-base font-medium tracking-wide text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
