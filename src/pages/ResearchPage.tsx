import React from 'react';

import { motion } from 'framer-motion';

import { FileText, ArrowRight } from 'lucide-react';



// Placeholder data for research papers

const researchPapers = [

    { id: 1, title: "The Future of On-Premise AI in Enterprise", summary: "An in-depth analysis of data sovereignty and performance benefits.", date: "July 2025" },

    { id: 2, title: "Human-AI Collaboration: A New Paradigm", summary: "Exploring the symbiotic relationship between human and digital employees.", date: "June 2025" },

    { id: 3, title: "The 'Maestro & Orchestra' Concept in Practice", summary: "A case study on managing multiple AI agents from a single interface.", date: "May 2025" },

];



const ResearchPage = () => {

    return (

        <div className="container mx-auto px-4 py-12">

            <motion.div 

                initial={{ opacity: 0, y: -20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.5 }}

                className="text-center mb-16"

            >

                <h1 className="text-4xl md:text-5xl font-bold gradient-text">NAS AI Research & Insights</h1>

                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Exploring the frontiers of on-premise artificial intelligence and the future of work.</p>

            </motion.div>



            <div className="space-y-8 max-w-4xl mx-auto">

                {researchPapers.map((paper, index) => (

                    <motion.div

                        key={paper.id}

                        initial={{ opacity: 0, x: -50 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.5, delay: index * 0.15 }}

                        className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-colors group"

                    >

                        <div className="flex flex-col md:flex-row gap-6">

                            <div className="flex-shrink-0">

                                <FileText className="w-10 h-10 text-cyan-400" />

                            </div>

                            <div className="flex-grow">

                                <p className="text-sm text-slate-500 mb-1">{paper.date}</p>

                                <h2 className="text-xl font-bold mb-2 text-white">{paper.title}</h2>

                                <p className="text-slate-400 mb-4">{paper.summary}</p>

                                <a href="#" className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">

                                    Read More <ArrowRight size={16} />

                                </a>

                            </div>

                        </div>

                    </motion.div>

                ))}

            </div>

        </div>

    );

};



export default ResearchPage;