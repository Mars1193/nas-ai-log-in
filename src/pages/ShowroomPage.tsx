import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Grid, List, ArrowRight, Zap, CheckCircle, Cpu, Shield, X, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- START: UI Components ---
const Button = ({ children, size, variant, className, ...props }: { children: React.ReactNode, size?: string, variant?: string, className?: string, [key: string]: any }) => {
  const sizeClasses = size === 'icon' ? 'w-10 h-10 p-0' : 'px-4 py-2 text-sm';
  const variantClasses: {[key: string]: string} = {
    default: 'bg-cyan-500 text-slate-900',
    outline: 'border border-white/30 text-white bg-transparent hover:bg-white/10',
    ghost: 'text-white bg-transparent hover:bg-white/10',
  };
  return (
    <button className={`font-semibold rounded-lg shadow-lg transform transition-all duration-200 flex items-center justify-center ${sizeClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.default} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className, ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <div className={`p-6 rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 ${className}`} {...props}>
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
    <div className={`bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900 to-slate-900 border border-white/10 rounded-2xl shadow-2xl w-full ${className}`}>
        {children}
    </div>
);

const DialogHeader = ({ children }: { children: React.ReactNode }) => <div className="p-6 border-b border-white/10 relative">{children}</div>;
const DialogTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold text-white">{children}</h2>;
const DialogClose = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="absolute top-4 right-4 text-white/70 hover:text-white">
        <X className="w-6 h-6" />
    </button>
);

// --- START: Types & Interfaces ---
interface Employee {
  id: string;
  name_en: string;
  name_ar: string;
  title_en: string;
  title_ar: string;
  category: string;
  description_en: string;
  description_ar: string;
  capabilities_en: string[];
  capabilities_ar: string[];
  price_monthly: number;
  video_url?: string;
  image_url?: string;
  specs: {
    processor: string;
    memory: string;
    storage: string;
    gpu: string;
    cooling: string;
    os: string;
  };
}

interface ApiResponse {
  success: boolean;
  data: Employee[];
  total: number;
  message?: string;
}

// --- START: API Service ---
const employeesApi = {
  async fetchEmployees(): Promise<ApiResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Mock API response with updated video URLs
    const mockEmployees: Employee[] = [
      {
        id: 'ai-accountant-001',
        name_en: 'AI Accountant',
        name_ar: 'المحاسب الذكي',
        title_en: 'Financial Intelligence Specialist',
        title_ar: 'أخصائي الذكاء المالي',
        category: 'finance',
        description_en: 'An intelligent financial expert that automates bookkeeping, manages payroll, and provides real-time financial analysis, ensuring accuracy and compliance.',
        description_ar: 'خبير مالي ذكي يقوم بأتمتة مسك الدفاتر وإدارة كشوف المرتبات وتوفير التحليل المالي في الوقت الفعلي، مما يضمن الدقة والامتثال.',
        capabilities_en: ['Financial Analysis & Reporting', 'Automated Invoice Processing', 'Payroll Management', 'Tax Compliance Monitoring'],
        capabilities_ar: ['التحليل والتقارير المالية', 'معالجة الفواتير الآلية', 'إدارة كشوف المرتبات', 'مراقبة الامتثال الضريبي'],
        price_monthly: 15000,
        video_url: '/videos/NAS-AI-ACCOUNTANT.mp4', // <-- UPDATED VIDEO
        specs: {
          processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
          memory: '64GB DDR5-6000 ECC',
          storage: '2TB NVMe Gen4 (System) + 4TB NVMe Gen4 (Data)',
          gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB GDDR6X)',
          cooling: 'Custom liquid cooling with redundancy',
          os: 'Ubuntu 22.04 LTS + NAS-AI Financial Suite'
        }
      },
      {
        id: 'ai-hr-manager-002',
        name_en: 'AI HR Manager',
        name_ar: 'مدير الموارد البشرية الذكي',
        title_en: 'Human Resources Automation Expert',
        title_ar: 'خبير أتمتة الموارد البشرية',
        category: 'support',
        description_en: 'Streamlines human resources by automating recruitment, managing employee data, and facilitating seamless onboarding and offboarding processes.',
        description_ar: 'يبسط الموارد البشرية من خلال أتمتة التوظيف وإدارة بيانات الموظفين وتسهيل عمليات الإدماج والخروج السلسة.',
        capabilities_en: ['AI-Powered Recruitment Analysis', 'Automated Leave Management', 'Performance Tracking & Analytics', 'Policy Compliance Enforcement'],
        capabilities_ar: ['تحليل التوظيف المدعوم بالذكاء الاصطناعي', 'إدارة الإجازات الآلية', 'تتبع الأداء والتحليلات', 'إنفاذ الامتثال للسياسات'],
        price_monthly: 18000,
        video_url: '/videos/NAS-AI-HR.mp4', // <-- UPDATED VIDEO
        specs: {
          processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
          memory: '64GB DDR5-6000 ECC',
          storage: '2TB NVMe Gen4 (System) + 4TB NVMe Gen4 (Data)',
          gpu: 'NVIDIA RTX 4070 (12GB GDDR6X)',
          cooling: 'Custom liquid cooling with redundancy',
          os: 'Ubuntu 22.04 LTS + NAS-AI HR Suite'
        }
      },
      // ... (other employees remain the same)
    ];

    return {
      success: true,
      data: mockEmployees,
      total: mockEmployees.length
    };
  }
};

// --- START: Custom Hooks ---
const useLanguage = () => {
    const [language, setLanguage] = useState('en');
    return { language, setLanguage, isRTL: language === 'ar' };
};

const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await employeesApi.fetchEmployees();
                
                if (response.success) {
                    setEmployees(response.data);
                } else {
                    setError(response.message || 'Failed to fetch employees');
                }
            } catch (err) {
                setError('Network error occurred while fetching employees');
                console.error('Error fetching employees:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { employees, loading, error };
};

// --- START: Translations ---
const translations = {
  en: {
    'nav.showroom': 'The Future Workforce: AI Employees',
    'showroom.description': 'Discover our specialized AI models, ready to integrate and revolutionize your business operations.',
    'showroom.searchPlaceholder': 'Search by role or function...',
    'showroom.all': 'All Categories',
    'showroom.finance': 'Finance',
    'showroom.sales': 'Sales', 
    'showroom.support': 'Support',
    'showroom.analytics': 'Analytics',
    'showroom.showingResults': (f: number, t: number) => `Displaying ${f} of ${t} AI Employees`,
    'showroom.noResults': 'No Employees Found',
    'showroom.noResultsDescription': 'Your search criteria did not match any of our AI specialists. Please try a different term.',
    'employees.viewDetails': 'View Details & Specs',
    'employees.monthlyPrice': 'Monthly Subscription',
    'bridge.title': 'The Bridge to Automation',
    'bridge.subtitle': 'Our seamless 4-step process for integrating your new AI workforce.',
    'arch.title': 'System Architecture',
    'arch.subtitle': 'A robust, three-layered foundation for unparalleled performance and security.',
  },
  ar: {
    'nav.showroom': 'القوى العاملة المستقبلية: موظفو الذكاء الاصطناعي',
    'showroom.description': 'اكتشف نماذج الذكاء الاصطناعي المتخصصة لدينا، الجاهزة للاندماج وإحداث ثورة في عمليات عملك.',
    'showroom.searchPlaceholder': 'ابحث بالمنصب أو الوظيفة...',
    'showroom.all': 'جميع الفئات',
    'showroom.finance': 'المالية',
    'showroom.sales': 'المبيعات',
    'showroom.support': 'الدعم',
    'showroom.analytics': 'التحليلات',
    'showroom.showingResults': (f: number, t: number) => `عرض ${f} من ${t} موظف ذكي`,
    'showroom.noResults': 'لم يتم العثور على موظفين',
    'showroom.noResultsDescription': 'لم تتطابق معايير البحث مع أي من متخصصي الذكاء الاصطناعي لدينا. يرجى تجربة مصطلح مختلف.',
    'employees.viewDetails': 'عرض التفاصيل والمواصفات',
    'employees.monthlyPrice': 'الاشتراك الشهري',
    'bridge.title': 'الجسر إلى الأتمتة',
    'bridge.subtitle': 'عمليتنا السلسة المكونة من 4 خطوات لدمج قوى عاملة الذكاء الاصطناعي الجديدة.',
    'arch.title': 'هيكلية النظام',
    'arch.subtitle': 'أساس متين من ثلاث طبقات لأداء وأمان لا مثيل لهما.',
  }
};

const t = (key: string, language: string, options?: { filtered?: number, total?: number }) => {
  const translation = translations[language as keyof typeof translations][key as keyof typeof translations.en] || key;
  if (typeof translation === 'function') return translation(options?.filtered, options?.total);
  return translation;
};

// --- START: Modal Component ---
const EmployeeModal = ({ employee, language, onClose }: { employee: Employee | null, language: string, onClose: () => void }) => {
    const navigate = useNavigate();
    if (!employee) return null;
    
    const name = language === 'ar' ? employee.name_ar : employee.name_en;
    const title = language === 'ar' ? employee.title_ar : employee.title_en;
    const description = language === 'ar' ? employee.description_ar : employee.description_en;
    const capabilities = language === 'ar' ? employee.capabilities_ar : employee.capabilities_en;

    return (
        <Dialog open={!!employee} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl max-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <p className="text-cyan-400 font-medium">{title}</p>
                    <DialogClose onClick={onClose} />
                </DialogHeader>
                <div className="flex-grow overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="relative aspect-video bg-slate-800/50 rounded-lg overflow-hidden border border-white/10">
                            {employee.video_url ? (
                                <>
                                    <video
                                        className="w-full h-full object-cover"
                                        poster={`https://placehold.co/600x338/0B0B15/00F0FF?text=${encodeURIComponent(employee.name_en)}`}
                                        controls
                                        preload="metadata"
                                    >
                                        <source src={employee.video_url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                                        <p className="text-white/70">Demo video coming soon</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Key Capabilities</h3>
                            <div className="space-y-3">
                                {capabilities.map((capability: string, i: number) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/80">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-4">
                            <p className="text-sm text-white/70 mb-1">{t('employees.monthlyPrice', language)}</p>
                            <p className="text-2xl font-bold text-cyan-400">${employee.price_monthly.toLocaleString()}</p>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Full Description</h3>
                            <p className="text-white/80 leading-relaxed">{description}</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {Object.entries(employee.specs).map(([key, value]: [string, any]) => (
                                    <div key={key} className="bg-slate-800/50 p-4 rounded-lg border border-white/10">
                                        <p className="font-semibold text-cyan-400 capitalize mb-1">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </p>
                                        <p className="text-white/80 text-sm">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-white/10">
                    <Button 
                        onClick={() => navigate('/contact')}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
                    >
                        Request Demo & Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

// --- START: Main Component ---
const ShowroomPage = () => {
  const { language } = useLanguage();
  const { employees, loading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const categories = useMemo(() => [
    { value: 'all', label: t('showroom.all', language) },
    { value: 'finance', label: t('showroom.finance', language) },
    { value: 'sales', label: t('showroom.sales', language) },
    { value: 'support', label: t('showroom.support', language) },
    { value: 'analytics', label: t('showroom.analytics', language) },
  ], [language]);

  const filteredEmployees = useMemo(() => employees.filter(employee => {
      const name = language === 'ar' ? employee.name_ar : employee.name_en;
      const title = language === 'ar' ? employee.title_ar : employee.title_en;
      const searchMatch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategory === 'all' || employee.category === selectedCategory;
      return searchMatch && categoryMatch;
  }), [employees, searchTerm, selectedCategory, language]);

  if (error) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
            <Card className="border-red-500/50 text-center max-w-md">
                <Zap className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h2 className="text-xl font-bold text-white mb-2">Connection Error</h2>
                <p className="text-white/70 mb-4">{error}</p>
                <Button onClick={() => window.location.reload()} variant="outline">
                    Retry Connection
                </Button>
            </Card>
        </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t('nav.showroom', language)}
          </h1>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            {t('showroom.description', language)}
          </p>
        </motion.div>

        {/* The Bridge Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="mb-20"
        >
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              {t('bridge.title', language)}
            </h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
              {t('bridge.subtitle', language)}
            </p>
            <div className="relative max-w-6xl mx-auto">
                <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent hidden lg:block" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {[
                      { step: 'Assessment', icon: Search },
                      { step: 'Deployment', icon: Cpu },
                      { step: 'Training', icon: Brain },
                      { step: 'Optimization', icon: Zap }
                    ].map(({ step, icon: Icon }, i: number) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="text-center"
                        >
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-cyan-500 backdrop-blur-sm relative">
                                <Icon className="w-8 h-8 text-cyan-400" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {language === 'ar' ? `[AR] ${step}` : step}
                            </h3>
                            <p className="text-white/60 text-sm">
                                {language === 'ar' ? 'وصف العملية' : 'Process description'}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>

        {/* Filters and Controls */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 items-center mb-12 p-4 bg-slate-800/50 rounded-xl border border-white/10"
        >
            <div className="relative w-full md:flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <Input 
                    placeholder={t('showroom.searchPlaceholder', language)}
                    className="pl-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
                {categories.map(cat => (
                    <button 
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${selectedCategory === cat.value ? 'bg-cyan-500 text-slate-900' : 'bg-slate-800 hover:bg-slate-700'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
            <div className="flex gap-2">
                <Button size="icon" variant={viewMode === 'grid' ? 'default' : 'ghost'} onClick={() => setViewMode('grid')}><Grid /></Button>
                <Button size="icon" variant={viewMode === 'list' ? 'default' : 'ghost'} onClick={() => setViewMode('list')}><List /></Button>
            </div>
        </motion.div>

        {/* Results Info */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8 text-white/70"
        >
            {t('showroom.showingResults', language, { filtered: filteredEmployees.length, total: employees.length })}
        </motion.p>

        {/* Employees Grid/List */}
        <AnimatePresence>
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-slate-800/50 p-6 rounded-2xl animate-pulse">
                            <div className="h-8 w-3/4 bg-slate-700 rounded mb-4"></div>
                            <div className="h-4 w-1/2 bg-slate-700 rounded mb-6"></div>
                            <div className="h-20 bg-slate-700 rounded"></div>
                        </div>
                    ))}
                </div>
            ) : (
                filteredEmployees.length > 0 ? (
                    <motion.div
                        key={viewMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
                    >
                        {filteredEmployees.map(employee => (
                            <motion.div
                                key={employee.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedEmployee(employee)}
                            >
                                <Card className="cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300 h-full flex flex-col">
                                    <h3 className="text-xl font-bold text-white">{language === 'ar' ? employee.name_ar : employee.name_en}</h3>
                                    <p className="text-cyan-400 text-sm font-medium mb-4">{language === 'ar' ? employee.title_ar : employee.title_en}</p>
                                    <p className="text-white/70 flex-grow mb-6">{language === 'ar' ? employee.description_ar : employee.description_en}</p>
                                    <Button variant="outline" className="mt-auto">
                                        {t('employees.viewDetails', language)}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                    >
                        <Brain className="w-16 h-16 mx-auto mb-6 text-cyan-400/50" />
                        <h3 className="text-2xl font-bold text-white">{t('showroom.noResults', language)}</h3>
                        <p className="text-white/70 mt-2">{t('showroom.noResultsDescription', language)}</p>
                    </motion.div>
                )
            )}
        </AnimatePresence>
      </div>
      <EmployeeModal employee={selectedEmployee} language={language} onClose={() => setSelectedEmployee(null)} />
    </div>
  );
};

export default ShowroomPage;
