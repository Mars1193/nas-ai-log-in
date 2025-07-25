const PhilosophyPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="text-center py-16 md:py-24 bg-white dark:bg-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">أنت المايسترو</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">عملك هو سيمفونيتك، وموظفونا الرقميون هم الأوركسترا التي بين يديك.</p>
      </header>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">من الفوضى إلى التناغم</h2>
            <p className="text-lg leading-relaxed text-center">
              في عالم الأعمال الحديث، تتشابك المهام وتتداخل المسؤوليات، مما يخلق ضجيجًا يعيق التقدم. لكن ماذا لو كان بإمكانك تحويل هذه الفوضى إلى سيمفونية متناغمة من الإنتاجية؟ ماذا لو كنت أنت من يقود هذا التحول، ليس كمدير يراقب، بل كمايسترو يبدع؟
            </p>
          </section>

          <section className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">الأوركسترا الرقمية تحت إمرتك</h2>
            <p className="text-lg leading-relaxed mb-4">
              تخيل كل موظف رقمي كعازف محترف في أوركسترا عالمية. كل منهم يتقن آلته ببراعة فائقة:
            </p>
            <ul className="list-disc list-inside space-y-3 text-left text-lg">
              <li><strong>مندوب المبيعات (الكمان الأول):</strong> يقود لحن التفاعل مع العملاء، ويخلق فرصًا جديدة بدقة وإحساس.</li>
              <li><strong>محلل البيانات (التشيلو):</strong> يوفر الإيقاع العميق والثابت للقرارات، مستندًا إلى رؤى بيانات قوية.</li>
              <li><strong>وكيل خدمة العملاء (آلات النفخ الخشبية):</strong> يقدم استجابات دافئة ومتناغمة، مما يضمن رضا العملاء وولاءهم.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              معًا، يشكلون فرقة قوية قادرة على أداء أعقد المهام بسلاسة وإتقان. وأنت، المايسترو، من يطلق العنان لإمكانياتهم الكاملة.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-6">منصة القيادة: رؤية وتحكم</h2>
            <p className="text-lg leading-relaxed text-center">
              المايسترو لا يحتاج إلى معرفة كيفية العزف على كل آلة، بل يحتاج إلى الرؤية والمنصة الصحيحة لقيادة الأوركسترا. منصتنا هي منصة القيادة الخاصة بك. من خلالها، تحصل على رؤية شاملة لكل العمليات، وبإشارة بسيطة منك - أمر، أو نقرة - يمكنك توجيه الأوركسترا بأكملها لتحقيق رؤيتك.
            </p>
          </section>

          <section className="text-center py-16 bg-blue-600 text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-4">النتيجة: سيمفونية من الإنجاز</h2>
            <p className="text-xl max-w-3xl mx-auto">
              النتيجة ليست مجرد إنجاز للمهام، بل هي تحفة فنية من الكفاءة والنمو. هي سيمفونية عملك التي تصل إلى آفاق جديدة من الإبداع والنجاح.
            </p>
            <p className="mt-6 text-2xl font-semibold">منصتك تنتظرك. هل أنت مستعد لقيادة تحفتك الفنية؟</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PhilosophyPage;
