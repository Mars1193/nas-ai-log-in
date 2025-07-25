// Placeholder data for AI Employees - to be provided by the user
const aiEmployees = [
  {
    name: 'المحاسب الذكي',
    description: 'يقوم بأتمتة العمليات المالية، وإعداد التقارير، وضمان الامتثال الضريبي بدقة وكفاءة.'
  },
  {
    name: 'مدير الموارد البشرية الرقمي',
    description: 'يدير دورة حياة الموظف من التوظيف إلى الإعداد، ويجيب على استفسارات الموظفين، ويحافظ على تحديث السجلات.'
  },
  {
    name: 'أخصائي التسويق الرقمي',
    description: 'يحلل بيانات السوق، ويدير الحملات الإعلانية، ويقدم رؤى لتحسين استراتيجيات التسويق.'
  },
  // Add more employees once the data is available
];

const implementationSteps = [
  {
    number: '01',
    title: 'التقدير: فهم احتياجاتك',
    description: 'نبدأ بالعمل معك عن كثب لفهم أهداف عملك، تحدياتك، وسير عملك الحالي. في هذه المرحلة، نحدد بدقة كيف وأين يمكن لموظفينا الرقميين تحقيق أكبر تأثير إيجابي، ونضع خطة تنفيذ مخصصة لك.'
  },
  {
    number: '02',
    title: 'النشر: تفعيل فريقك الرقمي',
    description: 'بناءً على خطة التقدير، نقوم بتهيئة موظفيك الرقميين ودمجهم بسلاسة في أنظمتك الحالية. نحن نضمن عملية انتقال سلسة وغير معطلة، بحيث يبدأ فريقك الرقمي في العمل بكفاءة من اليوم الأول.'
  },
  {
    number: '03',
    title: 'التمرين: تمكين فريقك البشري',
    description: 'النجاح الحقيقي يكمن في التعاون. نزود فريقك بالتدريب اللازم لتمكينهم من إدارة وتوجيه ومراقبة الموظفين الرقميين بفعالية. نضمن أن يصبح فريقك قائدًا واثقًا لأوركسترا الذكاء الاصطناعي.'
  },
  {
    number: '04',
    title: 'التحسين: نمو وأداء مستمر',
    description: 'شراكتنا لا تنتهي عند النشر. نحن نراقب الأداء باستمرار ونجمع الملاحظات ونعمل معك لتحسين الاستراتيجيات وتطوير قدرات موظفيك الرقميين، مما يضمن أن يتطوروا مع نمو أعمالك.'
  }
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Section 1: Introduction */}
      <div className="text-center py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">خدمات القوى العاملة الرقمية</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
          نحن لا نقدم مجرد برامج، بل نقدم موظفين رقميين كأصول مادية تعمل في مقر شركتك. يتم دمجهم بالكامل في بيئة عملك، ويعملون جنبًا إلى جنب مع فريقك البشري لتعزيز الإنتاجية وتحقيق أهدافك.
        </p>
      </div>

      {/* Section 2: Core Services (AI Employees) - Placeholder */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">تعرف على فريقك الرقمي</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiEmployees.map((employee) => (
              <div key={employee.name} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{employee.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{employee.description}</p>
              </div>
            ))}
          </div>
           <p className="text-center mt-12 text-gray-500 dark:text-gray-400">سيتم إضافة المزيد من الموظفين الرقميين قريبًا. هذا القسم هو للعرض المبدئي.</p>
        </div>
      </div>

      {/* Section 3: Maestro Platform */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">منصة المايسترو: تحكم كامل، إدارة مبسطة</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
            كل قائد يحتاج إلى منصة قيادة. منصتنا هي منصة القيادة الخاصة بك. من خلالها، تحصل على رؤية شاملة لكل العمليات، وبإشارة بسيطة منك - أمر، أو نقرة - يمكنك توجيه الأوركسترا بأكملها لتحقيق أقصى إمكاناتهم.
          </p>
        </div>
      </div>

      {/* Section 4: Implementation Process */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">كيف نعمل</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
              عملية تنفيذ تضمن نجاحك
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {implementationSteps.map((step) => (
                <div key={step.title} className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 shadow-lg">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <span className="text-xl font-bold text-white">{step.number}</span>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{step.title}</h3>
                      <p className="mt-5 text-base text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;