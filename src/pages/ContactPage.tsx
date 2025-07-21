import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Building, Users, MessageSquare, Phone, Mail as MailIcon, HelpCircle } from 'lucide-react';

// --- START: Inlined Dependencies ---

// 1. UI Components (Placeholders)
const Button = ({ children, size, variant, className, ...props }) => {
  const sizeClasses = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base';
  return (
    <button className={`font-semibold rounded-lg shadow-lg transform transition-all duration-200 flex items-center justify-center ${sizeClasses} bg-gradient-to-r from-cyan-500 to-blue-600 text-white ${className}`} {...props}>
      {children}
    </button>
  );
};
const Card = ({ children, className, ...props }) => <div className={`rounded-2xl border bg-slate-800/50 backdrop-blur-sm ${className}`} {...props}>{children}</div>;
const Input = ({ className, ...props }) => <input className={`w-full px-4 py-3 rounded-lg border bg-slate-900/70 border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-cyan-400 focus:outline-none transition-colors ${className}`} {...props} />;
const Textarea = ({ className, ...props }) => <textarea className={`w-full px-4 py-3 rounded-lg border bg-slate-900/70 border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-cyan-400 focus:outline-none transition-colors ${className}`} {...props} />;

const Accordion = ({ children }) => <div className="space-y-2">{children}</div>;
const AccordionItem = ({ children, ...props }) => <div className="border-b border-white/10" {...props}>{children}</div>;

const AccordionTrigger = ({ children, onClick, isOpen }) => (
    <button onClick={onClick} className="w-full text-left flex justify-between items-center py-4 font-semibold text-white hover:text-cyan-400 transition-colors">
        <span>{children}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
    </button>
);

const AccordionContent = ({ children }) => <div className="pb-4 text-white/80 pr-6 pl-2">{children}</div>;


// 2. Translations & Data
const translations = {
  en: {
    title: "Request a Demonstration",
    subtitle: "Experience the full power of NAS AI with a personalized demo from our team. Discover how AI employees can transform your business operations towards a future of innovation.",
    formTitle: "Book Your Demo",
    fullName: "Full Name",
    email: "Work Email",
    companyName: "Company Name",
    companySize: "Company Size",
    howCanWeHelp: "How can we help you?",
    submitRequest: "Submit Request",
    directContact: "Direct Contact",
    callUs: "Call Us",
    salesTeam: "Talk to our sales team",
    whatsapp: "WhatsApp",
    technicalSupport: "Chat with technical support",
    emailUs: "Email Us",
    generalInquiries: "For general inquiries",
    mainOffice: "Main Office",
    uae: "United Arab Emirates",
    faq: "Frequently Asked Questions",
    q1: "What is the AI Employee?",
    a1: "It's a physical, on-premise device running advanced AI models, designed to perform specific job roles 24/7 without needing an internet connection, ensuring complete data sovereignty.",
    q2: "How long is the delivery time?",
    a2: "The standard delivery and setup time is 2-4 weeks after a detailed analysis of your needs and confirmation of the purchase order.",
    q3: "Do you offer training?",
    a3: "Yes, we provide comprehensive training packages to ensure your team can effectively manage and interact with your new AI employee.",
    q4: "What about warranty and support?",
    a4: "All our units come with a 3-year hardware warranty. We also offer annual support and update packages to keep your AI employee performing at its best.",
  },
  ar: {
    title: "اطلب عرضاً توضيحياً",
    subtitle: "استمتع بالعمل بشكل أكثر ذكاءً من خلال عرض توضيحي مقدم من فريق NAS AI. استكشف كيف يمكن لموظفي الذكاء الاصطناعي تحويل أعمالك نحو الطاقة الإبداعية في المستقبل.",
    formTitle: "اطلب عرضاً توضيحياً",
    fullName: "الاسم الكامل",
    email: "بريد العمل الإلكتروني",
    companyName: "اسم الشركة",
    companySize: "حجم الشركة",
    howCanWeHelp: "كيف يمكننا مساعدتك؟",
    submitRequest: "اطلب البحث التوضيحي الخاص بك",
    directContact: "تفضل الاتصال المباشر",
    callUs: "اتصل بنا",
    salesTeam: "تحدث مع فريق المبيعات",
    whatsapp: "واتساب",
    technicalSupport: "دعم العملاء قسم الفنية",
    emailUs: "راسلنا",
    generalInquiries: "للاستفسارات العامة مرحبا بها",
    mainOffice: "اتصال",
    uae: "المقر الرئيسي لدولة الإمارات العربية المتحدة",
    faq: "الأسئلة الشائعة",
    q1: "ماذا يحدث أثناء العرض التوضيحي؟",
    a1: "سيعرض لك موظف ذكاء اصطناعي قادر على القيام بمهام حقيقية. ونوضح كيف يمكنه، بفضل الاستثمار المقدم، بناءً على تكاليف قوة العمل الحالية.",
    q2: "كم من الوقت يستغرق التسليم؟",
    a2: "التسليم القياسي هو 2-4 أسابيع بعد تأكيد طلبك. نحن نتعامل مع جميع عمليات الإعداد والتكوين لضمان أن موظف الذكاء الاصطناعي يعمل من اليوم الأول.",
    q3: "هل تقدمون التدريب؟",
    a3: "نعم! كل عملية شراء تتضمن تدريبًا شاملاً ودعماً مستمراً لمساعدتك في تحقيق أقصى قيمة من قوة عمل الذكاء الاصطناعي.",
    q4: "ماذا عن الضمان والدعم؟",
    a4: "تأتي جميع الوحدات مع ضمان شامل لمدة 3 سنوات. ونقدم أيضاً حزم دعم اختيارية على مدار الساعة طوال أيام الأسبوع تضمن تحديثات البرامج العادية للحفاظ على موظفي الذكاء الاصطناعي في أفضل حال.",
  }
};
const t = (key, language) => translations[language][key] || key;

// 3. Language Context Hook
const useLanguage = () => {
    const [language, setLanguage] = React.useState('en');
    return { language, setLanguage, isRTL: language === 'ar' };
};

// --- END: Inlined Dependencies ---

const ContactPage = () => {
    const { language } = useLanguage();
    const [openFaq, setOpenFaq] = useState(null);

    const faqItems = [
        { qKey: "q1", aKey: "a1" },
        { qKey: "q2", aKey: "a2" },
        { qKey: "q3", aKey: "a3" },
        { qKey: "q4", aKey: "a4" },
    ];
    
    const contactMethods = [
        { icon: Phone, titleKey: 'callUs', detailKey: 'salesTeam', href: 'tel:+971505158010', contactInfo: '+971 50 515 8010' },
        { icon: MessageSquare, titleKey: 'whatsapp', detailKey: 'technicalSupport', href: 'https://wa.me/971567090064', contactInfo: '+971 56 709 0064' },
        { icon: MailIcon, titleKey: 'emailUs', detailKey: 'generalInquiries', href: 'mailto:sales@nasglobal-ai.com', contactInfo: 'sales@nasglobal-ai.com' }
    ];

    const handleFaqToggle = (key) => {
        setOpenFaq(openFaq === key ? null : key);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{t('title', language)}</h1>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">{t('subtitle', language)}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form Section */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Card className="border-white/10 p-8">
                            <h2 className="text-3xl font-bold text-white mb-6">{t('formTitle', language)}</h2>
                            <form className="space-y-6">
                                <InputField icon={User} name="fullName" placeholder={t('fullName', language)} />
                                <InputField icon={Mail} name="email" type="email" placeholder={t('email', language)} />
                                <InputField icon={Building} name="companyName" placeholder={t('companyName', language)} />
                                <InputField icon={Users} name="companySize" placeholder={t('companySize', language)} />
                                <TextareaField icon={MessageSquare} name="message" placeholder={t('howCanWeHelp', language)} />
                                <Button size="lg" className="w-full">{t('submitRequest', language)}</Button>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Contact Info & FAQ Section */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
                        <Card className="border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('directContact', language)}</h3>
                            <div className="space-y-4">
                                {contactMethods.map(method => (
                                    <ContactMethod 
                                        key={method.titleKey}
                                        icon={method.icon} 
                                        title={t(method.titleKey, language)} 
                                        detail={t(method.detailKey, language)}
                                        contactInfo={method.contactInfo}
                                        href={method.href}
                                    />
                                ))}
                            </div>
                        </Card>
                        <Card className="border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('faq', language)}</h3>
                            <Accordion>
                                {faqItems.map(item => (
                                    <AccordionItem key={item.qKey}>
                                        <AccordionTrigger onClick={() => handleFaqToggle(item.qKey)} isOpen={openFaq === item.qKey}>
                                            {t(item.qKey, language)}
                                        </AccordionTrigger>
                                        <AnimatePresence>
                                        {openFaq === item.qKey && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <AccordionContent>
                                                    <p>{t(item.aKey, language)}</p>
                                                </AccordionContent>
                                            </motion.div>
                                        )}
                                        </AnimatePresence>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Helper components for the form and contact methods
const InputField = ({ icon: Icon, name, type = "text", placeholder }) => (
    <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
        <Input type={type} name={name} placeholder={placeholder} className="pl-12" />
    </div>
);

const TextareaField = ({ icon: Icon, name, placeholder }) => (
    <div className="relative">
        <Icon className="absolute left-4 top-5 w-5 h-5 text-white/40 pointer-events-none" />
        <Textarea name={name} placeholder={placeholder} rows="4" className="pl-12" />
    </div>
);

const ContactMethod = ({ icon: Icon, title, detail, href, contactInfo }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-slate-900 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-sm text-white/70">{detail}</p>
            <p className="text-sm font-mono text-cyan-400 mt-1">{contactInfo}</p>
        </div>
    </a>
);


export default ContactPage;
