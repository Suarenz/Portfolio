import React from 'react';
import { motion } from 'motion/react';

const badges = [
  {
    title: "IT Specialist - Cloud Computing",
    image: "/assets/it-specialist-cloud-computing.png",
    url: "https://www.credly.com/badges/e6bb9e8b-160b-4e02-af67-a3758b72e2e1"
  },
  {
    title: "Data Science",
    image: "/assets/DATA SCIENCE.png",
    url: "https://www.credly.com/badges/f477df85-f2f9-49ac-98c0-44661256c2c6"
  },
  {
    title: "Data Science Essentials",
    image: "/assets/DATA SCIENCE ESSENTIALS.png",
    url: "https://www.credly.com/badges/ae0ce923-ef06-489b-bdd2-26a060e18b1a"
  },
  {
    title: "Data Analytics",
    image: "/assets/DATA ANALYTICS.png",
    url: "https://www.credly.com/badges/ae0ce923-ef06-489b-bdd2-26a060e18b1a"
  }
];

export function Badges() {
  return (
    <section id="badges" className="bg-bg py-8 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Badges</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary mb-6">
            Earned <span className="italic">badges</span>
          </h2>
        </motion.div>

        {/* Badges Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col items-center group"
            >
              <a 
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 block will-change-transform"
              >
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-full h-full object-contain drop-shadow-md"
                  loading="lazy"
                />
              </a>
              <p className="mt-4 text-sm md:text-base font-medium text-text-secondary text-center max-w-[160px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                {badge.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
