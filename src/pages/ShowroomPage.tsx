import { useState, useMemo, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Grid, List, ArrowRight, Zap, CheckCircle, Cpu, Shield, X } from 'lucide-react';

// --- START: Inlined Dependencies ---

// 1. UI Components: Placeholders for ShadCN components
const Button = ({ children, size, variant, className, ...props }: { children: React.ReactNode, size?: string, variant?: string, className?: string, [key: string]: any }) => {
  const sizeClasses = size === 'icon' ? 'w-10 h-10 p-0' : 'px-4 py-2 text-sm';
  const variantClasses = {
    default: 'bg-cyan-500 text-slate-900',
    outline: 'border border-white/30 text-white bg-transparent hover:bg-white/10',
    ghost: 'text-white bg-transparent hover:bg-white/10',
  };
  return (
    <button className={`font-semibold rounded-lg shadow-lg transform transition-all duration-200 flex items-center justify-center ${sizeClasses} ${variantClasses[variant] || variantClasses.default} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className, ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <div className={`p-6 rounded-2xl border bg-slate-800/50 backdrop-blur-sm ${className}`} {...props}>
    {children}
  </div>
);

const Input = ({ className, ...props }: { className?: string, [key: string]: any }) => (
  <input className={`w-full px-4 py-3 rounded-lg border bg-slate-900/70 border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-cyan-400 focus:outline-none transition-colors ${className}`} {...props} />
);

const Dialog = ({ open, onOpenChange, children }: { open: boolean, onOpenChange: (open: boolean) => void, children: React.ReactNode }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => onOpenChange(false)}>
            <div className="fixed inset-0" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-50"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </div>
    );
};

const DialogContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-slate-900 border border-white/10 rounded-2xl shadow-2xl w-full ${className}`}>
        {children}
    </div>
);

const DialogHeader = ({ children }: { children: React.ReactNode }) => <div className="p-6 border-b border-white/10">{children}</div>;
const DialogTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold text-white">{children}</h2>;
const DialogClose = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="absolute top-4 right-4 text-white/70 hover:text-white">
        <X className="w-6 h-6" />
    </button>
);


// 2. Data: Expanded products data with 9 employees and full specs
const products = [
    {
        id: 'accountant', titleKey: 'accountantTitle', category: 'finance',
        description: 'An intelligent financial expert that automates bookkeeping, manages payroll, and provides real-time financial analysis, ensuring accuracy and compliance.',
        capabilities: ['Financial Analysis', 'Invoice Management', 'Payroll Processing', 'Compliance Monitoring'],
        price: 15000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'hr-manager', titleKey: 'hrManagerTitle', category: 'support',
        description: 'Streamlines human resources by automating recruitment, managing employee data, and facilitating seamless onboarding and offboarding processes.',
        capabilities: ['Recruitment Analysis', 'Leave Management', 'Performance Tracking', 'Policy Enforcement'],
        price: 18000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4070 (12GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'customer-service', titleKey: 'customerServiceTitle', category: 'support',
        description: 'Provides instant, 24/7 customer support with natural language understanding, resolving queries efficiently and enhancing customer satisfaction.',
        capabilities: ['Multi-language Support', 'Sentiment Analysis', 'Automated Ticketing', 'Instant Resolution'],
        price: 12000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4080 (16GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'medical-assistant', titleKey: 'medicalAssistantTitle', category: 'analytics',
        description: 'Assists medical professionals by managing patient records, aiding in diagnosis, and automating prescription writing.',
        capabilities: ['Patient Record Management', 'Diagnostic Support', 'Prescription Automation', 'HIPAA Compliance'],
        price: 25000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4090 (24GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'executive-assistant', titleKey: 'executiveAssistantTitle', category: 'support',
        description: 'Manages complex schedules, automates document processing, and provides decision support for executives.',
        capabilities: ['Intelligent Scheduling', 'Document Summarization', 'Workflow Automation', 'Decision Support'],
        price: 16000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'coordinator', titleKey: 'coordinatorTitle', category: 'support',
        description: 'Optimizes workflows, schedules resources, and manages complex projects with predictive analytics.',
        capabilities: ['Project Management', 'Resource Allocation', 'Predictive Scheduling', 'Team Coordination'],
        price: 14000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4070 (12GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'legal-assistant', titleKey: 'legalAssistantTitle', category: 'analytics',
        description: 'Accelerates legal research, analyzes contracts, and assists with document review, empowering legal professionals with advanced AI capabilities.',
        capabilities: ['Contract Analysis', 'Legal Research', 'e-Discovery', 'Case Management'],
        price: 22000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'purchasing-specialist', titleKey: 'purchasingSpecialistTitle', category: 'finance',
        description: 'Analyzes supplier data, automates negotiation protocols, and predicts market trends for procurement.',
        capabilities: ['Vendor Analysis', 'Automated Negotiation', 'Market Trend Prediction', 'Cost Optimization'],
        price: 13000,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4070 (12GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    },
    {
        id: 'business-assistant', titleKey: 'businessAssistantTitle', category: 'sales',
        description: 'Integrates CRM management, sales psychology analysis, and lead qualification to boost commercial success.',
        capabilities: ['CRM Automation', 'Sales Psychology Analysis', 'Lead Qualification', 'Sales Forecasting'],
        price: 15500,
        specs: {
            processor: 'AMD Ryzen 9 7950X', memory: '64GB DDR5-6000', storage: '2TB NVMe (System) + 4TB NVMe (Data)',
            gpu: 'NVIDIA RTX 4080 (16GB)', cooling: 'High-performance liquid cooling', os: 'Ubuntu 22.04 LTS + NAS-AI Suite'
        }
    }
];

// 3. Translations
const translations = {
  en: {
    'nav.showroom': 'The Future Workforce: AI Employees',
    'showroom.description': 'Discover our specialized AI models, ready to integrate and revolutionize your business operations.',
    'showroom.searchPlaceholder': 'Search by role or function...',
    'showroom.all': 'All', 'showroom.finance': 'Finance', 'showroom.sales': 'Sales', 'showroom.support': 'Support', 'showroom.analytics': 'Analytics',
    'showroom.showingResults': (f: number, t: number) => `Displaying ${f} of ${t} AI Employees`,
    'showroom.noResults': 'No Employees Found',
    'showroom.noResultsDescription': 'Your search criteria did not match any of our AI specialists. Please try a different term.',
    'employees.viewDetails': 'View Details & Specs',
    'bridge.title': 'The Bridge to Automation',
    'bridge.subtitle': 'Our seamless 4-step process for integrating your new AI workforce.',
    'arch.title': 'System Architecture',
    'arch.subtitle': 'A robust, three-layered foundation for unparalleled performance and security.',
    accountantTitle: "AI Accountant", hrManagerTitle: "AI HR Manager", customerServiceTitle: "AI Customer Service", medicalAssistantTitle: "AI Medical Assistant", executiveAssistantTitle: "AI Executive Assistant", coordinatorTitle: "AI Coordinator", legalAssistantTitle: "AI Legal Assistant", purchasingSpecialistTitle: "AI Purchasing Specialist", businessAssistantTitle: "AI Business Assistant",
  },
  ar: {
    'nav.showroom': 'القوى العاملة المستقبلية: موظفو الذكاء الاصطناعي',
    'showroom.description': 'اكتشف نماذج الذكاء الاصطناعي المتخصصة لدينا، الجاهزة للاندماج وإحداث ثورة في عمليات عملك.',
    'showroom.searchPlaceholder': 'ابحث بالمنصب أو الوظيفة...',
    'showroom.all': 'الكل', 'showroom.finance': 'المالية', 'showroom.sales': 'المبيعات', 'showroom.support': 'الدعم', 'showroom.analytics': 'التحليلات',
    'showroom.showingResults': (f: number, t: number) => `عرض ${f} من ${t} موظف ذكي`,
    'showroom.noResults': 'لم يتم العثور على موظفين',
    'showroom.noResultsDescription': 'لم تتطابق معايير البحث مع أي من متخصصي الذكاء الاصطناعي لدينا. يرجى تجربة مصطلح مختلف.',
    'employees.viewDetails': 'عرض التفاصيل والمواصفات',
    'bridge.title': 'الجسر إلى الأتمتة',
    'bridge.subtitle': 'عمليتنا السلسة المكونة من 4 خطوات لدمج قوى عاملة الذكاء الاصطناعي الجديدة.',
    'arch.title': 'هيكلية النظام',
    'arch.subtitle': 'أساس متين من ثلاث طبقات لأداء وأمان لا مثيل لهما.',
    accountantTitle: "المحاسب الذكي", hrManagerTitle: "مدير الموارد البشرية الذكي", customerServiceTitle: "خدمة العملاء الذكية", medicalAssistantTitle: "المساعد الطبي الذكي", executiveAssistantTitle: "المساعد التنفيذي الذكي", coordinatorTitle: "المنسق الذكي", legalAssistantTitle: "المساعد القانوني الذكي", purchasingSpecialistTitle: "أخصائي المشتريات الذكي", businessAssistantTitle: "المساعد التجاري الذكي",
  }
};
const t = (key: string, language: string, options?: { filtered?: number, total?: number }) => {
  const translation = translations[language as keyof typeof translations][key as keyof typeof translations.en] || key;
  if (typeof translation === 'function') return translation(options?.filtered, options?.total);
  return translation;
};

// 4. Language & Data Hooks
const useLanguage = () => {
    const [language, setLanguage] = useState('en');
    return { language, setLanguage, isRTL: language === 'ar' };
};
const useAIEmployees = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);
    const localizedProducts = products.map(p => ({
        ...p,
        name_en: t(p.titleKey, 'en'), name_ar: t(p.titleKey, 'ar'),
        title_en: t(p.titleKey, 'en'), title_ar: t(p.titleKey, 'ar'),
        description_en: p.description, description_ar: `[AR] ${p.description}`,
        capabilities_en: p.capabilities, capabilities_ar: p.capabilities.map(c => `[AR] ${c}`),
        price_monthly: p.price,
    }));
    return { employees: localizedProducts, loading, error: null };
};
// --- END: Inlined Dependencies ---

// --- NEW COMPONENTS ---
const ProductModal = ({ product, language, onClose }: { product: any, language: string, onClose: () => void }) => {
    if (!product) return null;
    const name = language === 'ar' ? product.name_ar : product.name_en;
    const description = language === 'ar' ? product.description_ar : product.description_en;

    return (
        <Dialog open={!!product} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogClose onClick={onClose} />
                </DialogHeader>
                <div className="flex-grow overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src={`https://placehold.co/600x400/0B0B15/00F0FF?text=${encodeURIComponent(product.name_en)}`} alt={name} className="rounded-lg mb-4 w-full object-cover" />
                        <h3 className="text-xl font-bold text-white mb-2">Key Capabilities</h3>
                        <ul className="space-y-2">
                            {(language === 'ar' ? product.capabilities_ar : product.capabilities_en).map((cap: string, i: number) => (
                                <li key={i} className="flex items-center text-white/80">
                                    <CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />
                                    {cap}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Full Description</h3>
                        <p className="text-white/80 mb-6">{description}</p>
                        <h3 className="text-xl font-bold text-white mb-2">Technical Specifications</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                                <div key={key} className="bg-slate-800/50 p-3 rounded-lg">
                                    <p className="font-bold text-cyan-400 capitalize">{key.replace('_', ' ')}</p>
                                    <p className="text-white/80">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

// --- MAIN COMPONENT ---
export const ShowroomPage = () => {
  const { language } = useLanguage();
  const { employees, loading, error } = useAIEmployees();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = useMemo(() => [
    { value: 'all', label: t('showroom.all', language) },
    { value: 'finance', label: t('showroom.finance', language) },
    { value: 'sales', label: t('showroom.sales', language) },
    { value: 'support', label: t('showroom.support', language) },
    { value: 'analytics', label: t('showroom.analytics', language) },
  ], [language]);

  const filteredEmployees = useMemo(() => employees.filter(employee => {
      const name = language === 'ar' ? employee.name_ar : employee.name_en;
      const searchMatch = name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategory === 'all' || employee.category === selectedCategory;
      return searchMatch && categoryMatch;
  }), [employees, searchTerm, selectedCategory, language]);

  if (error) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="border-red-500/50 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h2 className="text-xl font-bold text-white">An Error Occurred</h2>
                <p className="text-white/70">{error.message || 'Failed to load AI employees.'}</p>
            </Card>
        </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('nav.showroom', language)}
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">{t('showroom.description', language)}</p>
        </motion.div>

        {/* The Bridge Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">{t('bridge.title', language)}</h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">{t('bridge.subtitle', language)}</p>
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {['Assessment', 'Deployment', 'Training', 'Optimization'].map((step: string, i: number) => (
                        <div key={i} className="text-center">
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-cyan-500 text-cyan-400 text-2xl font-bold backdrop-blur-sm">{i + 1}</div>
                            <h3 className="text-xl font-bold text-white">{language === 'ar' ? `[AR] ${step}`: step}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>

        {/* System Architecture Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">{t('arch.title', language)}</h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">{t('arch.subtitle', language)}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="border-white/10 text-center"><Cpu className="w-10 h-10 mx-auto mb-4 text-cyan-400" /><h3 className="text-xl font-bold text-white">Hardware Layer</h3></Card>
                <Card className="border-white/10 text-center"><Brain className="w-10 h-10 mx-auto mb-4 text-cyan-400" /><h3 className="text-xl font-bold text-white">AI Core</h3></Card>
                <Card className="border-white/10 text-center"><Shield className="w-10 h-10 mx-auto mb-4 text-cyan-400" /><h3 className="text-xl font-bold text-white">Security Layer</h3></Card>
            </div>
        </motion.section>

        {/* Filters and Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mb-8 sticky top-4 z-40">
          <Card className="p-4 border-white/10 bg-slate-900/80 backdrop-blur-lg">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full lg:max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <Input type="text" placeholder={t('showroom.searchPlaceholder', language)} value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} className="pl-12 w-full bg-slate-800/60 border-white/10 rounded-lg h-12"/>
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map(category => (
                  <Button key={category.value} onClick={() => setSelectedCategory(category.value)} variant={selectedCategory === category.value ? 'default' : 'outline'} className={selectedCategory === category.value ? 'bg-cyan-500 text-black' : 'border-white/20 text-white'}>{category.label}</Button>
                ))}
              </div>
              <div className="flex bg-slate-800/60 border border-white/10 rounded-lg p-1">
                <Button onClick={() => setViewMode('grid')} variant="ghost" size="icon" className={viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/70'}><Grid className="h-5 w-5" /></Button>
                <Button onClick={() => setViewMode('list')} variant="ghost" size="icon" className={viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/70'}><List className="h-5 w-5" /></Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Results Count */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="mb-6 text-white/70">
          {t('showroom.showingResults', language, { filtered: filteredEmployees.length, total: employees.length })}
        </motion.p>

        {/* Content Area */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{Array.from({ length: 6 }).map((_, i) => <Card key={i} className="animate-pulse h-96 bg-slate-800/50 border-white/10" />)}</div>
        ) : (
          <AnimatePresence>
            {filteredEmployees.length > 0 ? (
              <motion.div layout className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredEmployees.map((employee, index) => (
                  <motion.div key={employee.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                    <Card className="h-full hover:border-cyan-400/50 transition-colors group flex flex-col border-white/10">
                      <div className="flex-grow">
                          <div className="text-center mb-6">
                              {/* Replaced img with video */}
                              <video
                                  src={`https://placehold.co/400x250.mp4?text=${encodeURIComponent(employee.name_en.replace(/ /g, '+'))}`}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-full h-full object-cover rounded-lg mb-4"
                              >
                                  Your browser does not support the video tag.
                              </video>
                          </div>
                          <h3 className="font-bold text-2xl text-white">{language === 'ar' ? employee.name_ar : employee.name_en}</h3>
                          <p className="text-purple-400 font-medium">{language === 'ar' ? employee.title_ar : employee.title_en}</p>
                      </div>
                      <div className="mt-auto pt-6 border-t border-white/10">
                          <Button onClick={() => setSelectedProduct(employee)} className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold">
                              {t('employees.viewDetails', language)}
                              <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
                <Card className="max-w-md mx-auto border-white/10"><Search className="h-12 w-12 text-white/50 mx-auto mb-4" /><h3 className="text-lg font-medium text-white mb-2">{t('showroom.noResults', language)}</h3><p className="text-white/70 text-sm">{t('showroom.noResultsDescription', language)}</p></Card>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      <ProductModal product={selectedProduct} language={language} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default ShowroomPage;