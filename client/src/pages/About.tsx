import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      title: "الإبداع",
      description: "نشجع الطلاب على التفكير خارج الصندوق وتطوير حلول مبتكرة"
    },
    {
      title: "التميز",
      description: "نسعى دائمًا لتقديم أفضل جودة تعليمية وأحدث المناهج"
    },
    {
      title: "الشغف",
      description: "نغرس حب التعلم والاكتشاف في نفوس طلابنا"
    },
    {
      title: "التعاون",
      description: "نؤمن بأهمية العمل الجماعي وتبادل المعرفة"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6" data-testid="text-about-title">
            من نحن
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            تعرف على رؤيتنا ورسالتنا في Starn Academy
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">رؤيتنا</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نسعى لأن نكون المنصة التعليمية الرائدة في الوطن العربي لتعليم البرمجة والروبوتيكس 
                للأطفال والمراهقين، ونهدف إلى بناء جيل من المبتكرين والمبدعين القادرين على صناعة المستقبل 
                التقني للمنطقة.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">رسالتنا</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                توفير بيئة تعليمية محفزة وآمنة تمكن الأطفال والمراهقين من اكتساب المهارات التقنية الأساسية 
                من خلال مناهج عملية حديثة ومدربين محترفين، مع التركيز على تنمية التفكير النقدي والإبداع 
                وحل المشكلات.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">قيمنا</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} data-testid={`card-value-${index}`}>
                    <CardHeader>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">قصتنا</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                بدأت Starn Academy من إيمان عميق بأهمية تعليم البرمجة والتكنولوجيا للأجيال الناشئة. 
                أسسنا الأكاديمية لسد الفجوة بين التعليم التقليدي والمهارات التي يحتاجها أطفالنا للنجاح 
                في عالم يتسارع فيه التطور التقني يومًا بعد يوم. نفخر بأننا ساعدنا مئات الطلاب على 
                اكتشاف شغفهم بالتكنولوجيا وتحويل أفكارهم إلى مشاريع حقيقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">إنجازاتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-lg text-muted-foreground">طالب متخرج</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-lg text-muted-foreground">مشروع منجز</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-lg text-muted-foreground">نسبة رضا أولياء الأمور</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
