// --- Types & Interfaces ---
export interface Employee {
  id: string;
  name_en: string;
  name_ar: string;
  title_en: string;
  title_ar: string;
  category: 'finance' | 'support' | 'analytics' | 'sales';
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

// --- Data updated with all video file names ---
export const employees: Employee[] = [
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
    price_monthly: 26000,
    video_url: '/videos/NAS-AI-ACCOUNTANT.mp4',
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
    price_monthly: 28000,
    video_url: '/videos/NAS-AI-HR.mp4',
    specs: {
      processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
      memory: '64GB DDR5-6000 ECC',
      storage: '2TB NVMe Gen4 (System) + 4TB NVMe Gen4 (Data)',
      gpu: 'NVIDIA RTX 4070 (12GB GDDR6X)',
      cooling: 'Custom liquid cooling with redundancy',
      os: 'Ubuntu 22.04 LTS + NAS-AI HR Suite'
    }
  },
  {
    id: 'ai-customer-service-003',
    name_en: 'AI Customer Service',
    name_ar: 'خدمة العملاء الذكية',
    title_en: '24/7 Customer Experience Specialist',
    title_ar: 'أخصائي تجربة العملاء على مدار الساعة',
    category: 'support',
    description_en: 'Provides instant, 24/7 customer support with natural language understanding, resolving queries efficiently and enhancing customer satisfaction.',
    description_ar: 'يوفر دعم عملاء فوري على مدار الساعة مع فهم اللغة الطبيعية، وحل الاستفسارات بكفاءة وتعزيز رضا العملاء.',
    capabilities_en: ['Multi-language Support (12+ languages)', 'Advanced Sentiment Analysis', 'Automated Ticket Management', 'Real-time Issue Resolution'],
    capabilities_ar: ['دعم متعدد اللغات (أكثر من 12 لغة)', 'تحليل المشاعر المتقدم', 'إدارة التذاكر الآلية', 'حل المشاكل في الوقت الفعلي'],
    price_monthly: 22000,
    video_url: '/videos/AI Customer Support.mp4',
    specs: {
      processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
      memory: '64GB DDR5-6000 ECC',
      storage: '2TB NVMe Gen4 (System) + 4TB NVMe Gen4 (Data)',
      gpu: 'NVIDIA RTX 4080 (16GB GDDR6X)',
      cooling: 'Custom liquid cooling with redundancy',
      os: 'Ubuntu 22.04 LTS + NAS-AI Customer Suite'
    }
  },
  {
    id: 'ai-medical-assistant-004',
    name_en: 'AI Medical Assistant',
    name_ar: 'المساعد الطبي الذكي',
    title_en: 'Healthcare Intelligence Specialist',
    title_ar: 'أخصائي الذكاء الصحي',
    category: 'analytics',
    description_en: 'Assists medical professionals by managing patient records, aiding in diagnosis, and automating prescription writing with full HIPAA compliance.',
    description_ar: 'يساعد المهنيين الطبيين من خلال إدارة سجلات المرضى والمساعدة في التشخيص وأتمتة كتابة الوصفات مع الامتثال الكامل لـ HIPAA.',
    capabilities_en: ['Intelligent Patient Record Management', 'AI-Powered Diagnostic Support', 'Automated Prescription Generation', 'Full HIPAA Compliance & Security'],
    capabilities_ar: ['إدارة ذكية لسجلات المرضى', 'دعم التشخيص المدعوم بالذكاء الاصطناعي', 'توليد الوصفات الآلي', 'الامتثال الكامل والأمان لـ HIPAA'],
    price_monthly: 30000,
    video_url: '/videos/AI Medical Assistant.mp4',
    specs: {
      processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
      memory: '128GB DDR5-6000 ECC',
      storage: '4TB NVMe Gen4 (System) + 8TB NVMe Gen4 (Data)',
      gpu: 'NVIDIA RTX 4090 (24GB GDDR6X)',
      cooling: 'Enterprise liquid cooling with redundancy',
      os: 'Ubuntu 22.04 LTS + NAS-AI Medical Suite'
    }
  },
  {
    id: 'ai-executive-assistant-005',
    name_en: 'AI Executive Assistant',
    name_ar: 'المساعد التنفيذي الذكي',
    title_en: 'Executive Productivity Specialist',
    title_ar: 'أخصائي الإنتاجية التنفيذية',
    category: 'support',
    description_en: 'Manages complex schedules, automates document processing, and provides intelligent decision support for executives and leadership teams.',
    description_ar: 'يدير الجداول المعقدة ويؤتمت معالجة المستندات ويوفر دعم القرارات الذكية للمديرين التنفيذيين وفرق القيادة.',
    capabilities_en: ['Intelligent Calendar Management', 'Advanced Document Summarization', 'Workflow Automation', 'Strategic Decision Support'],
    capabilities_ar: ['إدارة التقويم الذكية', 'تلخيص المستندات المتقدم', 'أتمتة سير العمل', 'دعم القرارات الاستراتيجية'],
    price_monthly: 27000,
    video_url: '/videos/AI Executive Assistant.mp4',
    specs: {
      processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
      memory: '64GB DDR5-6000 ECC',
      storage: '2TB NVMe Gen4 (System) + 4TB NVMe Gen4 (Data)',
      gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB GDDR6X)',
      cooling: 'Custom liquid cooling with redundancy',
      os: 'Ubuntu 22.04 LTS + NAS-AI Executive Suite'
    }
  },
  {
    id: 'ai-legal-assistant-006',
    name_en: 'AI Legal Assistant',
    name_ar: 'المساعد القانوني الذكي',
    title_en: 'Legal Intelligence Specialist',
    title_ar: 'أخصائي الذكاء القانوني',
    category: 'analytics',
    description_en: 'Accelerates legal research, analyzes contracts, and assists with document review, empowering legal professionals with advanced AI capabilities.',
    description_ar: 'يسرع البحث القانوني ويحلل العقود ويساعد في مراجعة المستندات، ويمكّن المهنيين القانونيين بقدرات الذكاء الاصطناعي المتقدمة.',
    capabilities_en: ['Advanced Contract Analysis', 'Comprehensive Legal Research', 'Automated e-Discovery', 'Case Management & Tracking'],
    capabilities_ar: ['تحليل العقود المتقدم', 'البحث القانوني الشامل', 'الاكتشاف الإلكتروني الآلي', 'إدارة ومتابعة القضايا'],
    price_monthly: 29000,
    video_url: '/videos/NAS-AI-LAW ASSISTANT.mp4',
    specs: {
      processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
      memory: '128GB DDR5-6000 ECC',
      storage: '2TB NVMe Gen4 (System) + 8TB NVMe Gen4 (Data)',
      gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB GDDR6X)',
      cooling: 'Enterprise liquid cooling with redundancy',
      os: 'Ubuntu 22.04 LTS + NAS-AI Legal Suite'
    }
  },
  {
    id: 'ai-business-assistant-007',
    name_en: 'AI Business Assistant',
    name_ar: 'مساعد الأعمال الذكي',
    title_en: 'Business Operations Specialist',
    title_ar: 'أخصائي عمليات الأعمال',
    category: 'analytics',
    description_en: 'Provides data-driven insights, market analysis, and strategic planning support to optimize business operations and drive growth.',
    description_ar: 'يقدم رؤى قائمة على البيانات وتحليل السوق ودعم التخطيط الاستراتيجي لتحسين عمليات الأعمال ودفع النمو.',
    capabilities_en: ['Market Research & Analysis', 'Business Intelligence Reporting', 'Strategic Planning Support', 'Data Visualization'],
    capabilities_ar: ['أبحاث وتحليلات السوق', 'تقارير ذكاء الأعمال', 'دعم التخطيط الاستراتيجي', 'تصور البيانات'],
    price_monthly: 26500,
    video_url: '/videos/AI Business Assistant.mp4',
    specs: {
      processor: 'AMD Ryzen 9 7950X (16-core, 32-thread)',
      memory: '64GB DDR5-6000 ECC',
      storage: '2TB NVMe Gen4 (System) + 4TB NVMe Gen4 (Data)',
      gpu: 'NVIDIA RTX 4070 Ti SUPER (16GB GDDR6X)',
      cooling: 'Custom liquid cooling with redundancy',
      os: 'Ubuntu 22.04 LTS + NAS-AI Business Suite'
    }
  }
];
