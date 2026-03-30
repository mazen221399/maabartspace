export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f5f3] text-black">
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
              About MAAB
            </p>

            <h1 className="mb-8 text-4xl font-light leading-tight md:text-5xl">
              عن مآب
            </h1>

            <div className="space-y-6 text-lg leading-9 text-neutral-800">
              <p>
                مآب مساحة فنية تُعنى بعرض وتقديم الأعمال الفنية ضمن إطار احترافي
                يراعي جودة العمل وقيمته الفنية. تنطلق مآب من اهتمام بتقديم تجربة
                فنية متكاملة، تجمع بين دقة الاختيار، وحسن العرض، ووضوح الفكرة.
              </p>

              <p>
                تستقبل مآب أعمالاً تنتمي إلى مجالات فنية متعددة، تشمل الفنون
                التشكيلية، والخط العربي، والنحت، وغيرها من الممارسات البصرية، مع
                التركيز على إبراز الخصائص الفنية لكل عمل ضمن بيئة عرض مدروسة.
              </p>

              <p>
                وإلى جانب العرض الفني، تولي مآب اهتماماً بنقل المعرفة من خلال
                برامج وورش تدريبية تتناول الفنون بمختلف مجالاتها، إضافة إلى
                ممارسات حياتية مرتبطة بالإبداع، بما يتيح تجربة ممتدة تتجاوز
                المشاهدة إلى الفهم والممارسة.
              </p>

              <p>
                كما تسعى مآب إلى تقديم تجربة مشاهدة هادئة ومنظمة، تتيح للزائر
                التفاعل مع الأعمال وفهمها ضمن سياقها البصري والثقافي، بما يعكس
                حضور الفن كعنصر أصيل في المشهد العام.
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="border border-neutral-300 bg-white p-6 md:p-8">
              <h2 className="mb-5 text-xl font-medium">ملامح مآب</h2>

              <ul className="space-y-3 leading-8 text-neutral-700">
                <li>عرض فني ضمن إطار احترافي</li>
                <li>تنوع في الممارسات الفنية</li>
                <li>عناية بجودة العمل وطريقة تقديمه</li>
                <li>ورش تدريبية في الفنون والممارسات الحياتية</li>
                <li>تجربة مشاهدة هادئة ومنظمة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
