/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Certifications } from './components/Certifications';
import { Badges } from './components/Badges';
import { ToolsAndTech } from './components/ToolsAndTech';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary selection:bg-accent selection:text-bg">
      <CustomCursor />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-0"
      >
        <Hero />
        <SelectedWorks />
        <Certifications />
        <Badges />
        <ToolsAndTech />
        <Footer />
      </motion.main>
    </div>
  );
}
