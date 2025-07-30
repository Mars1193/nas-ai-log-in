import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, HeartPulse, BrainCircuit, ArrowLeft } from 'lucide-react';

const researchPapers = [
    // AI Development Category (10 items)
    { 
        id: 1, 
        category: 'ai_dev', 
        date: "Aug 2025", 
        staticUrl: "/research/general-ai/scientific-economic-proof.html", 
        en: { 
            title: "The Scientific and Economic Proof of the NAS AI Employee", 
            // --- الخطأ 1: تم إصلاح الملخص المفقود هنا ---
            summary: "A detailed proof of the scientific and economic viability of the NAS AI employee."
        }, 
        ar: { 
            title: "الدليل العلمي والاقتصادي لموظف NAS AI", 
            // --- الخطأ 2: تم إصلاح الخطأ الإملائي هنا بإضافة قيمة للملخص ---
            summary: "إثبات مفصل للجدوى العلمية والاقتصادية لموظف NAS AI الرقمي."
        }, 
        content: "<p>...</p>" 
    },
    { id: 2, category: 'ai_dev', date: "Jul 2025", staticUrl: "/research/general-ai/2.html", en: { title: "The 'Maestro & Orchestra' Concept in Practice", summary: "A case study on managing multiple AI agents." }, ar: { title: "تطبيق مفهوم 'المايسترو والأوركسترا' عمليًا", summary: "دراسة حالة حول إدارة وكلاء ذكاء اصطناعي." }, content: "<p>...</p>" },
    { id: 3, category: 'ai_dev', date: "Jun 2025", staticUrl: "/research/general-ai/3.html", en: { title: "Explainable AI (XAI) for Trustworthy Systems", summary: "Techniques for making black-box models interpretable." }, ar: { title: "الذكاء الاصطناعي القابل للتفسير (XAI)", summary: "تقنيات لجعل نماذج الصندوق الأسود أكثر قابلية للتفسير." }, content: "<p>...</p>" },
    { id: 4, category: 'ai_dev', date: "May 2025", staticUrl: "/research/general-ai/4.html", en: { title: "Federated Learning for Privacy Preservation", summary: "Training models on decentralized data." }, ar: { title: "التعلم الفيدرالي للحفاظ على الخصوصية", summary: "تدريب النماذج على بيانات لامركزية." }, content: "<p>...</p>" },
    { id: 5, category: 'ai_dev', date: "Apr 2025", staticUrl: "/research/general-ai/5.html", en: { title: "Optimizing LLMs for Edge Computing", summary: "Strategies for deploying large language models." }, ar: { title: "تحسين نماذج اللغة الكبيرة للحوسبة الطرفية", summary: "استراتيجيات لنشر نماذج اللغة الكبيرة." }, content: "<p>...</p>" },
    { id: 6, category: 'ai_dev', date: "Mar 2025", staticUrl: "/research/general-ai/6.html", en: { title: "Generative Adversarial Networks for Synthetic Data", summary: "Creating high-quality, artificial data." }, ar: { title: "الشبكات التوليدية التنافسية للبيانات الاصطناعية", summary: "إنشاء بيانات اصطناعية عالية الجودة." }, content: "<p>...</p>" },
    { id: 7, category: 'ai_dev', date: "Feb 2025", staticUrl: "/research/general-ai/7.html", en: { title: "Quantum Machine Learning: The Next Frontier", summary: "An overview of how quantum computing will impact AI." }, ar: { title: "تعلم الآلة الكمي: الحدود التالية", summary: "نظرة عامة على كيفية تأثير الحوسبة الكمية على الذكاء الاصطناعي." }, content: "<p>...</p>" },
    { id: 8, category: 'ai_dev', date: "Jan 2025", staticUrl: "/research/general-ai/8.html", en: { title: "Ethical Frameworks for AI Governance", summary: "Establishing principles for responsible AI." }, ar: { title: "الأطر الأخلاقية لحوكمة الذكاء الاصطناعي", summary: "تأسيس مبادئ للتطوير المسؤول للذكاء الاصطناعي." }, content: "<p>...</p>" },
    { id: 9, category: 'ai_dev', date: "Dec 2024", staticUrl: "/research/general-ai/9.html", en: { title: "Reinforcement Learning with Human Feedback", summary: "Improving agent performance by human intuition." }, ar: { title: "التعلم المعزز مع ردود الفعل البشرية", summary: "تحسين أداء الوكلاء من خلال دمج الحدس البشري." }, content: "<p>...</p>" },
    { id: 10, category: 'ai_dev', date: "Nov 2024", staticUrl: "/research/general-ai/10.html", en: { title: "AI in Cybersecurity: Proactive Threat Detection", summary: "Using machine learning to predict threats." }, ar: { title: "الذكاء الاصطناعي في الأمن السيبراني", summary: "استخدام تعلم الآلة للتنبؤ بالتهديدات السيبرانية." }, content: "<p>...</p>" },
    
    // Healthcare Category (10 items)
    { id: 11, category: 'healthcare', date: "Aug 2025", staticUrl: "/research/health-ai/11.html", en: { title: "AI in Diagnostic Imaging: A Revolution", summary: "How AI algorithms are improving accuracy." }, ar: { title: "الذكاء الاصطناعي في التصوير التشخيصي", summary: "كيف تعمل خوارزميات الذكاء الاصطناعي على تحسين الدقة." }, content: "<h2>Augmenting Radiologists, Not Replacing Them</h2><p>...</p>" },
    { id: 12, category: 'healthcare', date: "Jul 2025", staticUrl: "/research/health-ai/12.html", en: { title: "Predictive Analytics for Patient Outcomes", summary: "Using machine learning to forecast health." }, ar: { title: "التحليلات التنبؤية لنتائج المرضى", summary: "استخدام تعلم الآلة للتنبؤ بالمسارات الصحية للمرضى." }, content: "<p>...</p>" },
    { id: 13, category: 'healthcare', date: "Jun 2025", staticUrl: "/research/health-ai/13.html", en: { title: "Accelerating Drug Discovery with AI", summary: "Shortening the timeline for new medicines." }, ar: { title: "تسريع اكتشاف الأدوية بالذكاء الاصطناعي", summary: "كيف يقلل الذكاء الاصطناعي من الجدول الزمني للأدوية." }, content: "<p>...</p>" },
    { id: 14, category: 'healthcare', date: "May 2025", staticUrl: "/research/health-ai/14.html", en: { title: "Personalized Medicine via Genomic Analysis", summary: "Tailoring treatments to individual genetic profiles." }, ar: { title: "الطب الشخصي عبر التحليل الجينومي", summary: "تخصيص العلاجات للملفات الجينية الفردية." }, content: "<p>...</p>" },
    { id: 15, category: 'healthcare', date: "Apr 2025", staticUrl: "/research/health-ai/15.html", en: { title: "AI-Powered Robotic Surgery Assistants", summary: "Enhancing surgical precision and recovery." }, ar: { title: "مساعدو الجراحة الروبوتية المدعومون بالذكاء الاصطناعي", summary: "تعزيز الدقة الجراحية وتقليل أوقات الشفاء." }, content: "<p>...</p>" },
    { id: 16, category: 'healthcare', date: "Mar 2025", staticUrl: "/research/health-ai/16.html", en: { title: "AI for Managing Hospital Operations", summary: "Optimizing patient flow and resources." }, ar: { title: "الذكاء الاصطناعي لإدارة عمليات المستشفيات", summary: "تحسين تدفق المرضى وتخصيص الأسرة." }, content: "<p>...</p>" },
    { id: 17, category: 'healthcare', date: "Feb 2025", staticUrl: "/research/health-ai/17.html", en: { title: "Analyzing Wearable Device Data for Health", summary: "Early detection of health issues." }, ar: { title: "تحليل بيانات الأجهزة القابلة للارتداء للصحة", summary: "الكشف المبكر عن المشكلات الصحية بالمراقبة المستمرة." }, content: "<p>...</p>" },
    { id: 18, category: 'healthcare', date: "Jan 2025", staticUrl: "/research/health-ai/18.html", en: { title: "Virtual Health Assistants and Chatbots", summary: "Providing 24/7 patient support." }, ar: { title: "المساعدون الصحيون الافتراضيون وروبوتات الدردشة", summary: "توفير دعم للمرضى على مدار الساعة." }, content: "<p>...</p>" },
    { id: 19, category: 'healthcare', date: "Dec 2024", staticUrl: "/research/health-ai/19.html", en: { title: "Combating Pandemics with AI Epidemiology", summary: "Modeling disease spread and public health." }, ar: { title: "مكافحة الأوبئة بعلم الأوبئة المعتمد على AI", summary: "نمذجة انتشار الأمراض وتحسين استجابات الصحة العامة." }, content: "<p>...</p>" },
    { id: 20, category: 'healthcare', date: "Nov 2024", staticUrl: "/research/health-ai/20.html", en: { title: "Automating Clinical Documentation", summary: "Reducing administrative burden on professionals." }, ar: { title: "أتمتة التوثيق السريري", summary: "تقليل العبء الإداري على المتخصصين في الرعاية الصحية." }, content: "<p>...</p>" },
];


const translations = {
    en: { mainTitle: "NAS-AI Scientific Research", mainSubtitle: "Exploring the frontiers of AI and its impact on the future of work and health.", healthcareTitle: "AI Applications for Healthcare Advancement", aiDevTitle: "NAS-AI Research for AI Development", readMore: "View Details", backLink: "Back to Research List" },
    ar: { mainTitle: "أبحاث NAS-AI العلمية", mainSubtitle: "نستكشف آفاق الذكاء الاصطناعي وتأثيره على مستقبل العمل والصحة.", healthcareTitle: "استخدامات الذكاء الاصطناعي لتطوير الخدمات الصحية", aiDevTitle: "أبحاث NAS-AI لتطوير الذكاء الاصطناعي", readMore: "عرض التفاصيل", backLink: "العودة إلى قائمة الأبحاث" }
};

const ResearchPage = () => {
    const [language, setLanguage] = useState('ar');
    const [selectedPaperId, setSelectedPaperId] = useState(null);
    const currentTexts = translations[language]; // Moved here for access in both views

    const renderDetailView = () => {
        const paper = researchPapers.find(p => p.id === selectedPaperId);
        if (!paper) return null;
        const content = paper[language];
        return (
            <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container mx-auto px-4 py-12 max-w-4xl">
                <button onClick={() => setSelectedPaperId(null)} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mb-8" >
                    <ArrowLeft size={20} />
                    {currentTexts.backLink}
                </button>
                <article className="prose prose-invert prose-lg max-w-none prose-h2:text-cyan-400 prose-a:text-cyan-400">
                    <h1 className="text-4xl font-bold gradient-text mb-2">{content.title}</h1>
                    <p className="text-slate-400 text-base mb-8">{paper.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: content.content }} />
                </article>
            </motion.div>
        );
    };

    const renderMasterView = () => {
        const aiDevPapers = researchPapers.filter(p => p.category === 'ai_dev');
        const healthcarePapers = researchPapers.filter(p => p.category === 'healthcare');

        const ResearchCard = ({ paper, index, language }) => (
            <motion.a
                href={paper.staticUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block p-4 bg-[#0A0F2B] rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-colors group"
            >
                <div className="flex items-center gap-4">
                    <FileText className="w-6 h-6 text-slate-500 flex-shrink-0" />
                    <div className="flex-grow">
                        <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{paper[language].title}</h3>
                        <p className="text-sm text-slate-400">{paper[language].summary}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-all opacity-0 group-hover:opacity-100" />
                </div>
            </motion.a>
        );

        return (
            <div className="container mx-auto px-4 py-12" key="master">
                <div className="flex justify-center gap-4 mb-12">
                    <button onClick={() => setLanguage('en')} className={`px-4 py-2 rounded-md transition-colors ${language === 'en' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>English</button>
                    <button onClick={() => setLanguage('ar')} className={`px-4 py-2 rounded-md transition-colors ${language === 'ar' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>العربية</button>
                </div>
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text">{currentTexts.mainTitle}</h1>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{currentTexts.mainSubtitle}</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-4 mb-8"><HeartPulse /> {currentTexts.healthcareTitle}</h2>
                        <div className="space-y-4">{healthcarePapers.map((paper, index) => <ResearchCard key={paper.id} paper={paper} index={index} language={language} />)}</div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-4 mb-8"><BrainCircuit /> {currentTexts.aiDevTitle}</h2>
                        <div className="space-y-4">{aiDevPapers.map((paper, index) => <ResearchCard key={paper.id} paper={paper} index={index} language={language} />)}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {selectedPaperId ? renderDetailView() : renderMasterView()}
        </div>
    );
};

export default ResearchPage;