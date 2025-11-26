import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "ما هو السن المناسب لبدء تعلم البرمجة؟",
      answer: "يمكن للأطفال البدء من عمر 8 سنوات. نقدم برامج مخصصة لكل فئة عمرية من 8 إلى 17 سنة، حيث نستخدم أدوات ومناهج مناسبة لكل مرحلة عمرية."
    },
    {
      question: "هل يحتاج طفلي لخلفية سابقة في البرمجة؟",
      answer: "لا على الإطلاق! جميع دوراتنا تبدأ من الأساسيات ولا تتطلب أي خبرة سابقة. نبني المهارات تدريجيًا حسب مستوى كل طالب."
    },
    {
      question: "كم مدة الدورة الواحدة؟",
      answer: "نقدم ثلاث باقات: دورة مدتها شهرين للمبتدئين، دورة 4 شهور للمستوى المتوسط، ودورة 6 شهور للمستوى المتقدم في تطوير التطبيقات والويب."
    },
    {
      question: "هل الدورات أونلاين أم حضورية؟",
      answer: "حاليًا جميع دوراتنا حضورية في مقر الأكاديمية لضمان أفضل تجربة تعليمية تفاعلية وإشراف مباشر من المدربين."
    },
    {
      question: "ما هي تكلفة الدورات؟",
      answer: "تختلف التكلفة حسب مدة الدورة والبرنامج المختار. يرجى التواصل معنا عبر الواتساب أو نموذج الحجز للحصول على تفاصيل الأسعار والعروض الحالية."
    },
    {
      question: "هل يحصل الطفل على شهادة بعد إتمام الدورة؟",
      answer: "نعم، يحصل كل طالب على شهادة إتمام معتمدة من Starn Academy بعد إنهاء الدورة بنجاح وتقديم مشروع التخرج."
    },
    {
      question: "ما هي لغات البرمجة التي سيتعلمها طفلي؟",
      answer: "حسب المستوى والدورة: Scratch للمبتدئين، Python و JavaScript للمستوى المتوسط، بالإضافة إلى HTML, CSS, وتطوير التطبيقات للمستوى المتقدم."
    },
    {
      question: "كيف يمكنني متابعة تقدم طفلي؟",
      answer: "توفر الأكاديمية تقارير دورية وتحديثات مستمرة عن تقدم الطالب. كما يمكنك التواصل المباشر مع المدرب عبر الواتساب أو الهاتف في أي وقت."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <section className="py-20 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6" data-testid="text-faq-title">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            إجابات على أكثر الأسئلة شيوعًا حول Starn Academy
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-faq-${index}`}>
                  <AccordionTrigger className="text-right text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">لديك سؤال آخر؟</h2>
          <p className="text-xl text-muted-foreground mb-6">
            لا تتردد في التواصل معنا عبر الواتساب أو نموذج الاتصال
          </p>
          <a
            href="https://wa.me/01142965661"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors" data-testid="button-contact-whatsapp">
              تواصل معنا الآن
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
