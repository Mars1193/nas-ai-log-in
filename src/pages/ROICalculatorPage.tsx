import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, DollarSign, Users, Brain, Plus, Trash2, TrendingUp, Smile, Zap } from 'lucide-react';

// --- START: Inlined Dependencies ---

// 1. UI Components (Placeholders)
const Button = ({ children, size, variant, className, ...props }) => {
  const sizeClasses = size === 'icon' ? 'w-10 h-10 p-0' : 'px-4 py-2 text-sm';
  const variantClasses = {
    default: 'bg-cyan-500 text-slate-900',
    destructive: 'bg-red-500/80 text-white',
    outline: 'border border-white/30 text-white bg-transparent hover:bg-white/10',
  };
  return (
    <button className={`font-semibold rounded-lg shadow-lg transform transition-all duration-200 flex items-center justify-center ${sizeClasses} ${variantClasses[variant] || variantClasses.default} ${className}`} {...props}>
      {children}
    </button>
  );
};
const Card = ({ children, className, ...props }) => <div className={`p-6 rounded-2xl border bg-slate-800/50 backdrop-blur-sm ${className}`} {...props}>{children}</div>;
const Input = ({ className, ...props }) => <input className={`w-full px-4 py-3 rounded-lg border bg-slate-900/70 border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-cyan-400 focus:outline-none transition-colors ${className}`} {...props} />;
const Slider = ({ value, onChange, ...props }) => <input type="range" value={value} onChange={onChange} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" {...props} />;
const Progress = ({ value }) => (
    <div className="w-full bg-slate-700 rounded-full h-2.5">
        <motion.div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2.5 rounded-full" style={{ width: `${value}%` }} initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.5 }} />
    </div>
);


// 2. Translations & Data
const translations = {
  en: {
    title: "ROI Calculator",
    subtitle: "Quantify the financial and performance impact of integrating NAS AI into your workforce.",
    humanSectionTitle: "Your Current Human Workforce",
    addEmployee: "Add Human Employee",
    rolePlaceholder: "e.g., Accountant",
    annualSalary: "Annual Salary (AED)",
    aiSectionTitle: "Your Future AI Workforce",
    selectAI: "Select AI Employee",
    quantity: "Quantity",
    resultsTitle: "Your Projected Impact",
    threeYearCost: "3-Year Human Cost",
    oneTimeCost: "One-Time AI Cost",
    threeYearSavings: "3-Year Net Savings",
    roi: "Return on Investment",
    performanceTitle: "Performance Over Time",
    efficiencyGain: "Efficiency Gain",
    joyTitle: "Joy Measurement",
    stressReduction: "Stress Reduction",
    timeForInnovation: "Time for Innovation",
    accountantTitle: "AI Accountant",
    hrManagerTitle: "AI HR Manager",
  },
  ar: {
    title: "حاسبة العائد على الاستثمار",
    subtitle: "قم بقياس التأثير المالي والأدائي لدمج NAS AI في قوة العمل لديك.",
    humanSectionTitle: "قوة العمل البشرية الحالية",
    addEmployee: "إضافة موظف بشري",
    rolePlaceholder: "مثال: محاسب",
    annualSalary: "الراتب السنوي (درهم)",
    aiSectionTitle: "قوة عمل الذكاء الاصطناعي المستقبلية",
    selectAI: "اختر موظف الذكاء الاصطناعي",
    quantity: "الكمية",
    resultsTitle: "التأثير المتوقع الخاص بك",
    threeYearCost: "تكلفة 3 سنوات للموظفين",
    oneTimeCost: "تكلفة الذكاء الاصطناعي لمرة واحدة",
    threeYearSavings: "صافي التوفير لمدة 3 سنوات",
    roi: "العائد على الاستثمار",
    performanceTitle: "الأداء مع مرور الوقت",
    efficiencyGain: "زيادة الكفاءة",
    joyTitle: "قياس السعادة",
    stressReduction: "تقليل الإجهاد",
    timeForInnovation: "وقت للابتكار",
    accountantTitle: "المحاسب الذكي",
    hrManagerTitle: "مدير الموارد البشرية الذكي",
  }
};
const t = (key, language) => translations[language][key] || key;
const aiEmployeesData = [
    { id: 'accountant', titleKey: 'accountantTitle', price: 30000 },
    { id: 'hr-manager', titleKey: 'hrManagerTitle', price: 35000 },
];

// 3. Language Context Hook
const useLanguage = () => {
    const [language, setLanguage] = React.useState('en');
    return { language, setLanguage, isRTL: language === 'ar' };
};

// --- END: Inlined Dependencies ---

const ROICalculatorPage = () => {
    const { language } = useLanguage();
    const [humanWorkforce, setHumanWorkforce] = useState([{ id: 1, role: 'Accountant', salary: 120000 }]);
    const [aiWorkforce, setAiWorkforce] = useState([{ id: 'accountant', quantity: 1 }]);
    
    const calculation = useMemo(() => {
        const humanCost = humanWorkforce.reduce((acc, emp) => acc + (emp.salary || 0), 0) * 3;
        const aiCost = aiWorkforce.reduce((acc, ai) => {
            const aiData = aiEmployeesData.find(d => d.id === ai.id);
            return acc + (aiData ? aiData.price * ai.quantity : 0);
        }, 0);
        const savings = humanCost - aiCost;
        const roi = aiCost > 0 ? (savings / aiCost) * 100 : 0;
        return { humanCost, aiCost, savings, roi };
    }, [humanWorkforce, aiWorkforce]);
    
    const handleHumanChange = (id, field, value) => {
        setHumanWorkforce(current => current.map(emp => emp.id === id ? { ...emp, [field]: value } : emp));
    };

    const addHumanEmployee = () => {
        setHumanWorkforce(current => [...current, { id: Date.now(), role: '', salary: 80000 }]);
    };

    const removeHumanEmployee = (id) => {
        setHumanWorkforce(current => current.filter(emp => emp.id !== id));
    };

    const handleAIChange = (index, field, value) => {
        setAiWorkforce(current => {
            const newAiWorkforce = [...current];
            newAiWorkforce[index] = { ...newAiWorkforce[index], [field]: value };
            return newAiWorkforce;
        });
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{t('title', language)}</h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('subtitle', language)}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-8">
                        <Card className="border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center"><Users className="mr-3 text-cyan-400"/>{t('humanSectionTitle', language)}</h2>
                            <AnimatePresence>
                                {humanWorkforce.map((emp, index) => (
                                    <motion.div key={emp.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mb-4">
                                        <Input type="text" placeholder={t('rolePlaceholder', language)} value={emp.role} onChange={e => handleHumanChange(emp.id, 'role', e.target.value)} />
                                        <Input type="number" placeholder={t('annualSalary', language)} value={emp.salary} onChange={e => handleHumanChange(emp.id, 'salary', parseInt(e.target.value) || 0)} />
                                        <Button size="icon" variant="destructive" onClick={() => removeHumanEmployee(emp.id)}><Trash2 className="w-4 h-4" /></Button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <Button variant="outline" onClick={addHumanEmployee} className="w-full mt-4"><Plus className="mr-2 w-4 h-4"/>{t('addEmployee', language)}</Button>
                        </Card>
                        <Card className="border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center"><Brain className="mr-3 text-purple-400"/>{t('aiSectionTitle', language)}</h2>
                            {aiWorkforce.map((ai, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
                                    <select value={ai.id} onChange={e => handleAIChange(index, 'id', e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-slate-900/70 border-white/10 text-white focus:border-cyan-400 focus:ring-cyan-400 focus:outline-none transition-colors">
                                        {aiEmployeesData.map(empData => <option key={empData.id} value={empData.id}>{t(empData.titleKey, language)}</option>)}
                                    </select>
                                    <Input type="number" value={ai.quantity} onChange={e => handleAIChange(index, 'quantity', parseInt(e.target.value) || 1)} min="1" />
                                </div>
                            ))}
                        </Card>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-8">
                        <Card className="border-cyan-400/30">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center"><BarChart className="mr-3 text-cyan-400"/>{t('resultsTitle', language)}</h2>
                            <div className="space-y-6">
                                <div className="p-4 bg-slate-800/50 rounded-lg">
                                    <p className="text-sm text-white/70">{t('threeYearCost', language)}</p>
                                    <p className="text-2xl font-bold text-red-400">AED {calculation.humanCost.toLocaleString()}</p>
                                </div>
                                <div className="p-4 bg-slate-800/50 rounded-lg">
                                    <p className="text-sm text-white/70">{t('oneTimeCost', language)}</p>
                                    <p className="text-2xl font-bold text-green-400">AED {calculation.aiCost.toLocaleString()}</p>
                                </div>
                                <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                                    <p className="text-lg font-semibold text-white">{t('threeYearSavings', language)}</p>
                                    <p className="text-4xl font-bold text-cyan-400">AED {calculation.savings.toLocaleString()}</p>
                                    <p className="text-lg font-bold text-white mt-4">{t('roi', language)}: <span className="text-green-400">{calculation.roi.toFixed(1)}%</span></p>
                                </div>
                            </div>
                        </Card>
                        <Card className="border-purple-400/30">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center"><Zap className="mr-3 text-purple-400"/>{t('performanceTitle', language)}</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-white/70 mb-2">{t('efficiencyGain', language)}</p>
                                    <Progress value={Math.min(100, calculation.roi / 5)} />
                                </div>
                            </div>
                        </Card>
                        <Card className="border-purple-400/30">
                             <h2 className="text-2xl font-bold text-white mb-4 flex items-center"><Smile className="mr-3 text-purple-400"/>{t('joyTitle', language)}</h2>
                             <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-white/70 mb-2">{t('stressReduction', language)}</p>
                                    <Progress value={Math.min(100, calculation.roi / 4)} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70 mb-2">{t('timeForInnovation', language)}</p>
                                    <Progress value={Math.min(100, calculation.roi / 3)} />
                                </div>
                             </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculatorPage;

