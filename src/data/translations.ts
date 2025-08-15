export interface Translation {
  // ... (All existing keys)
  'nav.showroom': string;
  'showroom.description': string;
  'showroom.searchPlaceholder': string;
  'showroom.all': string;
  'showroom.finance': string;
  'showroom.sales': string;
  'showroom.support': string;
  'showroom.analytics': string;
  'showroom.showingResults': (f: number, t: number) => string;
  'showroom.noResults': string;
  'showroom.noResultsDescription': string;
  'employees.viewDetails': string;
  'employees.monthlyPrice': string;
  'bridge.title': string;
  'bridge.subtitle': string;
  'arch.title': string;
  'arch.subtitle': string;
  // ... (other keys from original file)
  breakingBanner: string;
  languageSwitch: string;
  home: string;
  showroom: string;
  services: string;
  roiCalculator: string;
  philosophy: string;
  contact: string;
  login: string;
  signup: string;
  mainHeadline: string;
  subHeadline: string;
  exploreShowroom: string;
  aiEmployeeTitle: string;
  aiEmployeeDesc: string;
  accountingTitle: string;
  accountingDesc: string;
  createAccounts: string;
  manageInvoices: string;
  financialAnalysis: string;
  realTimeDecisions: string;
  dataInsights: string;
  continuousLearning: string;
  featuresTitle: string;
  realTimeTitle: string;
  realTimeDesc: string;
  visionTitle: string;
  visionDesc: string;
  controlTitle: string;
  controlDesc: string;
  learningTitle: string;
  learningDesc: string;
  capabilitiesTitle: string;
  voiceInteraction: string;
  visualRecognition: string;
  computerControl: string;
  documentHandling: string;
  dataProcessing: string;
  performanceTitle: string;
  academicTraining: string;
  practicalExperience: string;
  realWorldData: string;
  adaptiveLearning: string;
  benefitsTitle: string;
  noBreaks: string;
  noVacations: string;
  noComplaints: string;
  noResignation: string;
  continuousWork: string;
  noSalary: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicePackages: string;
  choosePackage: string;
  additionalServices: string;
  implementationProcess: string;
  assessmentTitle: string;
  assessmentDesc: string;
  deploymentTitle: string;
  deploymentDesc: string;
  trainingTitle: string;
  trainingDesc: string;
  optimizationTitle: string;
  optimizationDesc: string;
  readyToRevolutionize: string;
  letsDiscuss: string;
  bookFreeConsultation: string;
  startSmart: string;
  startSmartDesc: string;
  smartOperations: string;
  smartOperationsDesc: string;
  autoMarketingKit: string;
  autoMarketingKitDesc: string;
  fullDigitalSetup: string;
  fullDigitalSetupDesc: string;
  websiteDesign: string;
  logoDesign: string;
  companyProfile: string;
  marketingPlan: string;
  socialSetup: string;
  workflowAnalysis: string;
  toolRecommendations: string;
  performanceComparison: string;
  lightAutomation: string;
  teamTraining: string;
  strategicContent: string;
  readyPosts: string;
  shortVideos: string;
  autoScheduling: string;
  analyticsReports: string;
  integratedWebsite: string;
  brandIdentity: string;
  comprehensiveMarketing: string;
  advancedAutomation: string;
  completeContent: string;
  comprehensiveTraining: string;
  aiDashboard: string;
  advancedChatbot: string;
  microApps: string;
  legacyInsights: string;
  aiVideos: string;
  aiConsulting: string;
  showroomTitle: string;
  viewSpecs: string;
  oneTimePurchase: string;
  calculateSavings: string;
  numberOfEmployees: string;
  averageAnnualSalary: string;
  threeYearHumanCost: string;
  oneTimeAICost: string;
  totalSavings: string;
  bookLiveDemo: string;
  philosophyTitle: string;
  ownVsRent: string;
  securitySovereignty: string;
  maestroOrchestra: string;
  signupFuture: string;
  loginFuture: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  bookDemonstration: string;
  callUs: string;
  whatsappUs: string;
  emailUs: string;
  accountantTitle: string;
  hrManagerTitle: string;
  customerServiceTitle: string;
  medicalAssistantTitle: string;
  executiveAssistantTitle: string;
  coordinatorTitle: string;
  legalAssistantTitle: string;
  purchasingSpecialistTitle: string;
  businessAssistantTitle: string;
  getStarted: string;
  learnMore: string;

  // About Us Page
  aboutUs: string;
  aboutUsContent: string;
}

export const translations: Record<'en' | 'ar', Translation> = {
  en: {
    // Showroom Page
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
    'employees.monthlyPrice': 'One-Time Purchase Price',
    'bridge.title': 'The Bridge to Automation',
    'bridge.subtitle': 'Our seamless 4-step process for integrating your new AI workforce.',
    'arch.title': 'System Architecture',
    'arch.subtitle': 'A robust, three-layered foundation for unparalleled performance and security.',
    // ... (all other existing english translations)
    breakingBanner: "",
    languageSwitch: "العربية",
    home: "Home",
    showroom: "Showroom",
    services: "Services",
    roiCalculator: "ROI Calculator",
    philosophy: "Philosophy",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
    mainHeadline: "World First real AI Employee for office jobs",
    subHeadline: "The Digital Workforce is Here.",
    exploreShowroom: "Explore The Showroom",
    aiEmployeeTitle: "AI Employee - Not Just a Computer",
    aiEmployeeDesc: "We don't sell ordinary computers or smart apps. We provide you with a fixed AI employee that can perform all office tasks with efficiency exceeding human employees.",
    accountingTitle: "AI Accounting Manager Tasks",
    accountingDesc: "Performs all tasks that a human accounting manager does and more:",
    createAccounts: "Create and manage accounts",
    manageInvoices: "Manage invoices and ledgers",
    financialAnalysis: "Financial analysis and reporting",
    realTimeDecisions: "Real-time decision making",
    dataInsights: "Extract insights from data",
    continuousLearning: "Continuous learning from interactions",
    featuresTitle: "Why Are We Different?",
    realTimeTitle: "Real-time Interaction",
    realTimeDesc: "Talks and listens to you via microphone and speakers",
    visionTitle: "Advanced Vision",
    visionDesc: "Sees and recognizes you through dedicated camera",
    controlTitle: "Complete Control",
    controlDesc: "Controls the computer completely without needing mouse or keyboard",
    learningTitle: "Continuous Learning",
    learningDesc: "Learns from every interaction and continuously improves performance",
    capabilitiesTitle: "AI Employee Capabilities",
    voiceInteraction: "Voice Interaction (Microphone & Speaker)",
    visualRecognition: "Visual Recognition (Camera)",
    computerControl: "Complete Computer Control",
    documentHandling: "Printing and Scanning",
    dataProcessing: "External Memory Data Processing",
    performanceTitle: "Performance & Training",
    academicTraining: "Trained on studies and research papers from global universities",
    practicalExperience: "Practical experience from real case studies",
    realWorldData: "Learning from real-world data and videos",
    adaptiveLearning: "Adapts and learns from every new interaction",
    benefitsTitle: "Benefits",
    noBreaks: "No Breaks",
    noVacations: "No Vacations",
    noComplaints: "No Complaints",
    noResignation: "No Resignation",
    continuousWork: "Continuous 24/7 Work",
    noSalary: "No Salary After Purchase",
    servicesTitle: "Our Services",
    servicesSubtitle: "Integrated solutions designed to transform your business into a future-proof, AI-powered enterprise.",
    servicePackages: "Digital Transformation Packages",
    choosePackage: "Choose a comprehensive package to kickstart your journey into intelligent automation.",
    additionalServices: "Specialized Services",
    implementationProcess: "Implementation Process",
    assessmentTitle: "Assessment: Understanding Your Needs",
    assessmentDesc: "We analyze your workflow to identify key areas for AI integration, ensuring a tailored solution.",
    deploymentTitle: "Deployment: Activating Your Digital Team",
    deploymentDesc: "We seamlessly integrate your new AI employees into your existing systems with zero downtime.",
    trainingTitle: "Training: Empowering Your Human Team",
    trainingDesc: "We provide comprehensive training to ensure your team can effectively manage and collaborate with their new digital colleagues.",
    optimizationTitle: "Optimization: Continuous Growth",
    optimizationDesc: "Our partnership continues with ongoing performance monitoring and optimization to evolve with your business.",
    readyToRevolutionize: "Ready to Revolutionize Your Business?",
    letsDiscuss: "Let's discuss how our AI solutions can be tailored to your unique challenges. Schedule a free, no-obligation consultation with our experts today.",
    bookFreeConsultation: "Book a Free Consultation",
    startSmart: "Start Smart",
    startSmartDesc: "The foundational package for a smart and impactful digital beginning.",
    smartOperations: "Smart Operations",
    smartOperationsDesc: "Analyze and evolve your internal processes with intelligent automation.",
    autoMarketingKit: "Auto‑Marketing Kit",
    autoMarketingKitDesc: "A complete, automated marketing suite to drive growth.",
    fullDigitalSetup: "Full Digital Setup",
    fullDigitalSetupDesc: "The ultimate all-in-one service for a complete digital transformation.",
    websiteDesign: "Modern & Responsive Website Design",
    logoDesign: "Professional Logo & Brand Identity",
    companyProfile: "Comprehensive Company Profile",
    marketingPlan: "Initial Marketing Blueprint",
    socialSetup: "Social Media Account Setup",
    workflowAnalysis: "Workflow Analysis & Bottleneck Identification",
    toolRecommendations: "Custom AI Tool Recommendations",
    performanceComparison: "Performance Benchmarking (Before/After)",
    lightAutomation: "Light Automation Tool Development",
    teamTraining: "Team Training on New Systems",
    strategicContent: "Monthly Strategic Content Plan",
    readyPosts: "500+ Ready-to-Publish Social Posts",
    shortVideos: "AI-Generated Short Video Content",
    autoScheduling: "Automated Scheduling & Publishing System",
    analyticsReports: "Engagement Analytics & Reporting",
    integratedWebsite: "Integrated E-commerce Website",
    brandIdentity: "Complete Brand Identity & Style Guide",
    comprehensiveMarketing: "Comprehensive Multi-Channel Marketing Plan",
    advancedAutomation: "Advanced Smart Automation Tools",
    completeContent: "Full Content Package & Team Training",
    comprehensiveTraining: "Comprehensive team training on the system",
    aiDashboard: "AI-Powered Analytics Dashboard",
    advancedChatbot: "Advanced Chatbot (Website & WhatsApp)",
    microApps: "Custom Micro-App Development",
    legacyInsights: "Legacy Data Insight Extraction (Excel)",
    aiVideos: "AI Avatar Video Production",
    aiConsulting: "Strategic AI Integration Consulting",
    showroomTitle: "The Showroom",
    viewSpecs: "View Specs",
    oneTimePurchase: "One-Time Purchase",
    calculateSavings: "Calculate Your Savings",
    numberOfEmployees: "Number of human employees in this role:",
    averageAnnualSalary: "Average annual salary per employee:",
    threeYearHumanCost: "3-Year Cost with Human Staff",
    oneTimeAICost: "One-Time Cost of NAS AI Unit",
    totalSavings: "Total Savings",
    bookLiveDemo: "Book a Live Demo",
    philosophyTitle: "The Ownership Philosophy",
    ownVsRent: "Own vs. Rent",
    securitySovereignty: "The Security of Sovereignty",
    maestroOrchestra: "Maestro & Orchestra",
    signupFuture: "Sign Up to The Future",
    loginFuture: "Sign In to The Future",
    emailAddress: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    bookDemonstration: "Book a Demonstration",
    callUs: "Call Us",
    whatsappUs: "WhatsApp",
    emailUs: "Email Us",
    accountantTitle: "AI Accountant Unit",
    hrManagerTitle: "AI HR Manager Unit",
    customerServiceTitle: "AI Customer Service Unit",
    medicalAssistantTitle: "AI Medical Assistant Unit",
    executiveAssistantTitle: "AI Executive Assistant Unit",
    coordinatorTitle: "AI Coordinator Unit",
    legalAssistantTitle: "AI Legal Assistant Unit",
    purchasingSpecialistTitle: "AI Purchasing Specialist Unit",
    businessAssistantTitle: "AI Business Assistant Unit",
    getStarted: "Get Started",
    learnMore: "Learn More",

    // About Us Page
    aboutUs: "About Us",
    aboutUsContent: `من نحن: انتهى عصر استخدام الذكاء، لقد بدأ عصر قيادته في عصر تُبنى فيه الإمبراطوريات على البيانات، لا تزال معظم الشركات تعيش في ظل وهم السيطرة. إنها تُجبر على استئجار ذكائها من سحابة بعيدة، وتخضع لنموذج يخلق تبعية أبدية، وتكاليف لا تنتهي، ويهدد أقدس أصولها: سيادتها على بياناتها وعملياتها الفكرية.

هذا ليس شراكة. إنه قيد رقمي.

لهذا السبب، وُجدت NAS AI. نحن لا نتبع القواعد، بل نصنعها. لقد تأسسنا على مبدأ ثوري: الذكاء ليس خدمة تُستهلك، بل هو قوة تُمتلك، وأوركسترا تُقاد.

مسارك نحو السيادة الرقمية نحن ندرك أن كل قائد وكل شركة لهما رحلة مختلفة. لذلك، لم نعد نقدم منتجًا واحدًا، بل بنينا مسارًا كاملاً يأخذك من التجربة الأولى وحتى تحقيق السيادة المطلقة.

المسار الأول: المختبر - اكتشف المايسترو في داخلك نحن نفتح لك أبواب المسرح. عبر منصتنا التفاعلية، ندعوك لتجربة دور القائد مجانًا. صمم أوركسترا الموظفين الرقميين الخاصة بك، وكلفها بالمهام، وشاهد محاكاة حية لقوة التنفيذ الموازي. هذه ليست لعبة، بل هي ساحة تدريبك لتتعلم فن قيادة الذكاء، وتكتشف القوة الكامنة في داخلك.

المسار الثاني: المسار السريع - استأجر فرق النخبة عندما تتجاوز حاجتك حدود التجربة وتتطلب نتائج فورية، نقدم لك حلاً حاسمًا. يمكنك الآن استئجار فرق متخصصة من أوركسترا NAS AI الرقمية عبر باقات خدماتنا. سواء كنت تحتاج إلى حملة تسويقية آلية أو تحليل بيانات ضخمة، فإن فرق النخبة لدينا جاهزة لتنفيذ مهامك بدقة وسرعة فائقة، مما يثبت لك قيمة الذكاء الموجه قبل الالتزام بالاستثمار الكامل.

المسار الثالث: الحل النهائي - امتلك الأوركسترا للأبد هذا ليس للجميع. هذا للقلة التي لا تقبل بأنصاف الحلول. للشركات والمؤسسات التي تدرك أن القوة الحقيقية لا تُستأجر ولا تُشارك، بل تُمتلك بالكامل.

نقدم لك الحل النهائي: عقل NAS AI المادي. حصن منيع من القوة الحاسوبية يسكنه جيشك الرقمي الكامل، ويعمل داخل جدرانك بسيادة مطلقة وبدون أي اتصال بالإنترنت. هنا، أنت لا تقود الأوركسترا فحسب، بل تمتلك المسرح والقاعة والجمهور. إنها الملكية الكاملة. الأمان المطلق. السلطة التي لا تقبل الجدال.

المسار الرابع: الفرصة الجديدة - كن أنت المحتوى رؤيتنا للسيادة الرقمية لا تتوقف عند حدود الشركات. نحن نؤمن بتمكين الأفراد أيضًا. خدمة "بع وجهك" هي امتداد لفلسفتنا، حيث نحوّل الهوية الشخصية إلى أصل رقمي سيادي. نحن نخلق اقتصادًا جديدًا يمكن فيه للأفراد الطموحين تحويل وجوههم إلى علامات تجارية، وتحقيق دخل مادي من هويتهم الرقمية بأمان وثقة، بينما نقوم نحن ببناء وإدارة المحتوى الذكي.

رؤيتنا: مستقبلك، بقيادتك أنت في NAS AI، نحن لا نبني أدوات، بل نمكّن القادة. سواء كنت مستكشفًا فضوليًا، أو قائدًا عمليًا يبحث عن نتائج سريعة، أو استراتيجيًا يطمح للسيادة الأبدية، فإن رحلتك نحو إتقان فن التنفيذ تبدأ هنا.

أنت المايسترو. وهذه هي أوركستراك. حان وقت العزف.`
  },
  ar: {
    // Showroom Page
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
    'employees.monthlyPrice': 'سعر الشراء لمرة واحدة',
    'bridge.title': 'الجسر إلى الأتمتة',
    'bridge.subtitle': 'عمليتنا السلسة المكونة من 4 خطوات لدمج قوى عاملة الذكاء الاصطناعي الجديدة.',
    'arch.title': 'هيكلية النظام',
    'arch.subtitle': 'أساس متين من ثلاث طبقات لأداء وأمان لا مثيل لهما.',
    // ... (all other existing arabic translations)
    breakingBanner: "",
    languageSwitch: "English",
    home: "الرئيسية",
    showroom: "صالة العرض",
    services: "خدماتنا",
    roiCalculator: "حاسبة العائد",
    philosophy: "الفلسفة",
    contact: "اتصل بنا",
    login: "تسجيل الدخول",
    signup: "التسجيل",
    mainHeadline: "أول موظف ذكاء اصطناعي حقيقي في العالم للمهام المكتبية",
    subHeadline: "هنا القوى العاملة الرقمية",
    exploreShowroom: "استكشف صالة العرض",
    aiEmployeeTitle: "الموظف الآلي - ليس مجرد كمبيوتر",
    aiEmployeeDesc: "نحن لا نبيع كمبيوتر عادي أو تطبيق ذكي. نحن نقدم لك موظفاً آلياً ثابتاً يستطيع أداء جميع المهام المكتبية بكفاءة تفوق الموظف البشري.",
    accountingTitle: "مهام مدير الحسابات الآلي",
    accountingDesc: "يقوم بجميع المهام التي يؤديها مدير الحسابات البشري وأكثر:",
    createAccounts: "إنشاء وإدارة الحسابات",
    manageInvoices: "إدارة الفواتير والدفاتر",
    financialAnalysis: "التحليل المالي والتقارير",
    realTimeDecisions: "اتخاذ القرارات في الوقت الفعلي",
    dataInsights: "استخراج الرؤى من البيانات",
    continuousLearning: "التعلم المستمر من التفاعلات",
    featuresTitle: "لماذا نحن مختلفون؟",
    realTimeTitle: "تفاعل في الوقت الفعلي",
    realTimeDesc: "يتحدث معك ويستمع إليك عبر الميكروفون والسماعة",
    visionTitle: "رؤية متقدمة",
    visionDesc: "يراك ويتعرف عليك عبر الكاميرا المخصصة",
    controlTitle: "تحكم كامل",
    controlDesc: "يتحكم بالكمبيوتر بالكامل دون الحاجة لفأرة أو لوحة مفاتيح",
    learningTitle: "تعلم مستمر",
    learningDesc: "يتعلم من كل تفاعل ويطور أداءه باستمرار",
    capabilitiesTitle: "قدرات الموظف الآلي",
    voiceInteraction: "التفاعل الصوتي (مايك وسماعة)",
    visualRecognition: "التعرف البصري (كاميرا)",
    computerControl: "التحكم الكامل بالكمبيوتر",
    documentHandling: "الطباعة والمسح الضوئي",
    dataProcessing: "معالجة البيانات من الذاكرة الخارجية",
    performanceTitle: "الأداء والتدريب",
    academicTraining: "مدرب على دراسات وأوراق بحثية من جامعات عالمية",
    practicalExperience: "خبرة عملية من دراسات حالة حقيقية",
    realWorldData: "تعلم من بيانات وفيديوهات العالم الحقيقي",
    adaptiveLearning: "يتكيف ويتعلم من كل تفاعل جديد",
    benefitsTitle: "المزايا",
    noBreaks: "لا استراحات",
    noVacations: "لا إجازات",
    noComplaints: "لا شكاوى",
    noResignation: "لا استقالة",
    continuousWork: "عمل مستمر 24/7",
    noSalary: "بدون راتب بعد الشراء",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول متكاملة مصممة لتحويل عملك إلى مؤسسة مستقبلية مدعومة بالذكاء الاصطناعي.",
    servicePackages: "باقات التحول الرقمي",
    choosePackage: "اختر باقة شاملة لبدء رحلتك نحو الأتمتة الذكية.",
    additionalServices: "خدمات متخصصة",
    implementationProcess: "عملية التنفيذ",
    assessmentTitle: "التقدير: فهم احتياجاتك",
    assessmentDesc: "نقوم بتحليل سير عملك لتحديد المجالات الرئيسية لدمج الذكاء الاصطناعي، مما يضمن حلاً مخصصًا.",
    deploymentTitle: "النشر: تفعيل فريقك الرقمي",
    deploymentDesc: "ندمج موظفيك الرقميين الجدد بسلاسة في أنظمتك الحالية دون أي توقف في العمل.",
    trainingTitle: "التدريب: تمكين فريقك البشري",
    trainingDesc: "نقدم تدريبًا شاملاً لضمان قدرة فريقك على إدارة زملائهم الرقميين الجدد والتعاون معهم بفعالية.",
    optimizationTitle: "التحسين: نمو مستمر",
    optimizationDesc: "تستمر شراكتنا من خلال المراقبة المستمرة للأداء والتحسين للتطور مع أعمالك.",
    readyToRevolutionize: "هل أنت مستعد لإحداث ثورة في عملك؟",
    letsDiscuss: "دعنا نناقش كيف يمكن تصميم حلول الذكاء الاصطناعي لدينا لتناسب تحدياتك الفريدة. احجز استشارة مجانية وغير ملزمة مع خبرائنا اليوم.",
    bookFreeConsultation: "احجز استشارة مجانية",
    startSmart: "البداية الذكية",
    startSmartDesc: "الباقة التأسيسية لبداية رقمية ذكية ومؤثرة.",
    smartOperations: "العمليات الذكية",
    smartOperationsDesc: "حلل وطور عملياتك الداخلية بأتمتة ذكية.",
    autoMarketingKit: "عدة التسويق الآلي",
    autoMarketingKitDesc: "حزمة تسويق آلية كاملة لدفع النمو.",
    fullDigitalSetup: "الإعداد الرقمي الكامل",
    fullDigitalSetupDesc: "الخدمة النهائية الشاملة لتحول رقمي كامل.",
    websiteDesign: "تصميم موقع عصري ومتجاوب",
    logoDesign: "شعار وهوية بصرية احترافية",
    companyProfile: "ملف تعريفي شامل للشركة",
    marketingPlan: "مخطط تسويقي أولي",
    socialSetup: "إعداد حسابات التواصل الاجتماعي",
    workflowAnalysis: "تحليل سير العمل وتحديد المعوقات",
    toolRecommendations: "توصيات مخصصة بأدوات الذكاء الاصطناعي",
    performanceComparison: "قياس الأداء (قبل/بعد)",
    lightAutomation: "تطوير أدوات أتمتة خفيفة",
    teamTraining: "تدريب الفريق على الأنظمة الجديدة",
    strategicContent: "خطة محتوى استراتيجية شهرية",
    readyPosts: "500+ منشور اجتماعي جاهز للنشر",
    shortVideos: "محتوى فيديو قصير مُنشأ بالذكاء الاصطناعي",
    autoScheduling: "نظام جدولة ونشر آلي",
    analyticsReports: "تحليلات وتقارير التفاعل",
    integratedWebsite: "موقع تجارة إلكترونية متكامل",
    brandIdentity: "هوية بصرية ودليل علامة تجارية كامل",
    comprehensiveMarketing: "خطة تسويق شاملة متعددة القنوات",
    advancedAutomation: "أدوات أتمتة ذكية متقدمة",
    completeContent: "حزمة محتوى كاملة وتدريب للفريق",
    comprehensiveTraining: "تدريب شامل للفريق على النظام",
    aiDashboard: "لوحة تحليلات مدعومة بالذكاء الاصطناعي",
    advancedChatbot: "شات بوت متقدم (للموقع والواتساب)",
    microApps: "تطوير تطبيقات مصغرة مخصصة",
    legacyInsights: "استخراج رؤى من بيانات إكسل القديمة",
    aiVideos: "إنتاج فيديوهات بأفاتار ذكاء اصطناعي",
    aiConsulting: "استشارات استراتيجية في الذكاء الاصطناعي",
    showroomTitle: "صالة العرض",
    viewSpecs: "استعراض المواصفات",
    oneTimePurchase: "شراء لمرة واحدة",
    calculateSavings: "احسب مدخراتك",
    numberOfEmployees: "عدد الموظفين البشريين في هذا الدور:",
    averageAnnualSalary: "متوسط الراتب السنوي للموظف:",
    threeYearHumanCost: "تكلفة 3 سنوات مع الموظفين البشريين",
    oneTimeAICost: "التكلفة لمرة واحدة لوحدة NAS AI",
    totalSavings: "إجمالي المدخرات",
    bookLiveDemo: "احجز عرضاً توضيحياً مباشراً",
    philosophyTitle: "فلسفة التملّك",
    ownVsRent: "امتلك مقابل استأجر",
    securitySovereignty: "أمان السيادة",
    maestroOrchestra: "المايسترو والأوركسترا",
    signupFuture: "سجّل للدخول إلى المستقبل",
    loginFuture: "تسجيل الدخول إلى المستقبل",
    emailAddress: "عنوان البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    fullName: "الاسم الكامل",
    bookDemonstration: "احجز عرضاً توضيحياً",
    callUs: "اتصل بنا",
    whatsappUs: "واتساب",
    emailUs: "راسلنا",
    accountantTitle: "وحدة المحاسب الذكي",
    hrManagerTitle: "وحدة مدير الموارد البشرية الذكي",
    customerServiceTitle: "وحدة خدمة العملاء الذكية",
    medicalAssistantTitle: "وحدة المساعد الطبي الذكي",
    executiveAssistantTitle: "وحدة المساعد التنفيذي الذكي",
    coordinatorTitle: "وحدة المنسق الذكي",
    legalAssistantTitle: "وحدة المساعد القانوني الذكي",
    purchasingSpecialistTitle: "وحدة أخصائي المشتريات الذكي",
    businessAssistantTitle: "وحدة المساعد التجاري الذكي",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",

    // About Us Page
    aboutUs: "من نحن",
    aboutUsContent: `من نحن: انتهى عصر استخدام الذكاء، لقد بدأ عصر قيادته في عصر تُبنى فيه الإمبراطوريات على البيانات، لا تزال معظم الشركات تعيش في ظل وهم السيطرة. إنها تُجبر على استئجار ذكائها من سحابة بعيدة، وتخضع لنموذج يخلق تبعية أبدية، وتكاليف لا تنتهي، ويهدد أقدس أصولها: سيادتها على بياناتها وعملياتها الفكرية.

هذا ليس شراكة. إنه قيد رقمي.

لهذا السبب، وُجدت NAS AI. نحن لا نتبع القواعد، بل نصنعها. لقد تأسسنا على مبدأ ثوري: الذكاء ليس خدمة تُستهلك، بل هو قوة تُمتلك، وأوركسترا تُقاد.

مسارك نحو السيادة الرقمية نحن ندرك أن كل قائد وكل شركة لهما رحلة مختلفة. لذلك، لم نعد نقدم منتجًا واحدًا، بل بنينا مسارًا كاملاً يأخذك من التجربة الأولى وحتى تحقيق السيادة المطلقة.

المسار الأول: المختبر - اكتشف المايسترو في داخلك نحن نفتح لك أبواب المسرح. عبر منصتنا التفاعلية، ندعوك لتجربة دور القائد مجانًا. صمم أوركسترا الموظفين الرقميين الخاصة بك، وكلفها بالمهام، وشاهد محاكاة حية لقوة التنفيذ الموازي. هذه ليست لعبة، بل هي ساحة تدريبك لتتعلم فن قيادة الذكاء، وتكتشف القوة الكامنة في داخلك.

المسار الثاني: المسار السريع - استأجر فرق النخبة عندما تتجاوز حاجتك حدود التجربة وتتطلب نتائج فورية، نقدم لك حلاً حاسمًا. يمكنك الآن استئجار فرق متخصصة من أوركسترا NAS AI الرقمية عبر باقات خدماتنا. سواء كنت تحتاج إلى حملة تسويقية آلية أو تحليل بيانات ضخمة، فإن فرق النخبة لدينا جاهزة لتنفيذ مهامك بدقة وسرعة فائقة، مما يثبت لك قيمة الذكاء الموجه قبل الالتزام بالاستثمار الكامل.

المسار الثالث: الحل النهائي - امتلك الأوركسترا للأبد هذا ليس للجميع. هذا للقلة التي لا تقبل بأنصاف الحلول. للشركات والمؤسسات التي تدرك أن القوة الحقيقية لا تُستأجر ولا تُشارك، بل تُمتلك بالكامل.

نقدم لك الحل النهائي: عقل NAS AI المادي. حصن منيع من القوة الحاسوبية يسكنه جيشك الرقمي الكامل، ويعمل داخل جدرانك بسيادة مطلقة وبدون أي اتصال بالإنترنت. هنا، أنت لا تقود الأوركسترا فحسب، بل تمتلك المسرح والقاعة والجمهور. إنها الملكية الكاملة. الأمان المطلق. السلطة التي لا تقبل الجدال.

المسار الرابع: الفرصة الجديدة - كن أنت المحتوى رؤيتنا للسيادة الرقمية لا تتوقف عند حدود الشركات. نحن نؤمن بتمكين الأفراد أيضًا. خدمة "بع وجهك" هي امتداد لفلسفتنا، حيث نحوّل الهوية الشخصية إلى أصل رقمي سيادي. نحن نخلق اقتصادًا جديدًا يمكن فيه للأفراد الطموحين تحويل وجوههم إلى علامات تجارية، وتحقيق دخل مادي من هويتهم الرقمية بأمان وثقة، بينما نقوم نحن ببناء وإدارة المحتوى الذكي.

رؤيتنا: مستقبلك، بقيادتك أنت في NAS AI، نحن لا نبني أدوات، بل نمكّن القادة. سواء كنت مستكشفًا فضوليًا، أو قائدًا عمليًا يبحث عن نتائج سريعة، أو استراتيجيًا يطمح للسيادة الأبدية، فإن رحلتك نحو إتقان فن التنفيذ تبدأ هنا.

أنت المايسترو. وهذه هي أوركستراك. حان وقت العزف.`
  }
};

export const t = (key: keyof Translation, language: 'en' | 'ar', options?: any): string => {
  const translation = translations[language][key] || key;
  if (typeof translation === 'function') {
    return translation(options?.filtered, options?.total);
  }
  return translation;
};
