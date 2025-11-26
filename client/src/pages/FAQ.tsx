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
      question: "ما هي الفئة العمرية المناسبة للالتحاق بالأكاديمية؟",
      answer: "نستقبل الأطفال والمراهقين من عمر 8 إلى 17 سنة، مع برامج مخصصة لكل فئة عمرية."
    },
    {
      question: "هل يحتاج طفلي إلى خبرة سابقة في البرمجة؟",
      answer: "لا على الإطلاق! نبدأ من الصفر ونتدرج في المستوى حسب قدرات كل طالب."
    },
    {
      question: "كم عدد الطلاب في المجموعة الواحدة؟",
      answer: "نحافظ على مجموعات صغيرة (8-12 طالب) لضمان اهتمام فردي بكل طالب."
    },
    {
      question: "هل يوجد دورات أونلاين؟",
      answer: "حاليًا نقدم الدورات حضوريًا فقط لضمان أفضل تجربة تعليمية تفاعلية."
    },
    {
      question: "ما هي المعدات المطلوبة؟",
      answer: "نوفر جميع المعدات والأجهزة اللازمة في الأكاديمية، ولا يحتاج الطالب لإحضار أي شيء."
    },
    {
      question: "هل تمنحون شهادات معتمدة؟",
      answer: "نعم، يحصل كل طالب على شهادة إتمام بعد إنهاء الدورة بنجاح."
    },
    {
      question: "كيف يتم التسجيل؟",
      answer: "يمكنك التسجيل من خلال نموذج التواصل في الموقع أو التواصل معنا عبر الواتساب مباشرة."
    },
    {
      question: "هل يمكن تجربة حصة قبل التسجيل؟",
      answer: "نعم، نقدم حصة تجريبية مجانية للطلاب الجدد للتعرف على أسلوب التدريس والبيئة."
    },
    {
      question: "ما هي وسائل الدفع المتاحة؟",
      answer: "نقبل الدفع عبر InstaPay و Vodafone Cash بالإضافة إلى الدفع النقدي."
    },
    {
      question: "ماذا لو فات طفلي حصة؟",
      answer: "نوفر تسجيلات الحصص ومتابعة فردية لتعويض ما فاته الطالب."
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
