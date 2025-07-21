import React from 'react';

const steps = [
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
    <div className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">عمليتنا</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            مسار واضح نحو كفاءة معززة بالذكاء الاصطناعي
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            لدينا عملية شفافة ومكونة من أربع خطوات لضمان دمج القوى العاملة الرقمية الخاصة بك بسلاسة وفعالية.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.title} className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <span className="text-xl font-bold text-white">{step.number}</span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{step.title}</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;