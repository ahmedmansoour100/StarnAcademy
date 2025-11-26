import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  const features = [
    {
      titleAr: "منهج مناسب للعمر",
      titleEn: "Age-Appropriate Curriculum",
      description: "محتوى تعليمي مصمم خصيصًا ليناسب كل فئة عمرية"
    },
    {
      titleAr: "فصول صغيرة",
      titleEn: "Small Classes",
      description: "مجموعات صغيرة لضمان اهتمام فردي بكل طالب"
    },
    {
      titleAr: "تعلم قائم على المشاريع",
      titleEn: "Project-Based Learning",
      description: "نركز على المشاريع العملية التي تطبق المهارات المكتسبة"
    },
    {
      titleAr: "جدولة مرنة",
      titleEn: "Flexible Scheduling",
      description: "أوقات متعددة تناسب جدول العائلة"
    },
    {
      titleAr: "أدوات احترافية",
      titleEn: "Professional Tools",
      description: "نستخدم أحدث الأدوات والتقنيات في التعليم"
    },
    {
      titleAr: "تتبع التقدم",
      titleEn: "Progress Tracking",
      description: "تقارير دورية ومتابعة مستمرة لتطور كل طالب"
    }
  ];

  const learningOutcomes = [
    "البرمجة بلغات متعددة (Python, Scratch, JavaScript)",
    "تصميم وبناء الروبوتات",
    "تطوير التطبيقات والألعاب",
    "التفكير المنطقي وحل المشكلات",
    "العمل الجماعي والقيادة",
    "الإبداع والابتكار التقني"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
            نحن لا نعلم البرمجة فقط، بل نبني مبتكري الغد
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 ltr" data-testid="text-hero-subtitle">
            We Don't Just Teach Coding, We Build Tomorrow's Innovators
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/courses">
              <Button size="lg" variant="secondary" data-testid="button-hero-courses">
                استكشف دوراتنا
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white" data-testid="button-hero-contact">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-testid="text-why-choose-title">
            لماذا تختار أكاديمية ستارن؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <CardTitle className="mb-2">{feature.titleAr}</CardTitle>
                  <p className="text-sm text-primary font-medium ltr">{feature.titleEn}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-testid="text-outcomes-title">
            ماذا سيتعلم طفلك؟
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border"
                  data-testid={`item-outcome-${index}`}
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8" data-testid="text-cta-title">
            ابدأ رحلة طفلك التقنية اليوم
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى مئات الأطفال الذين يتعلمون البرمجة والروبوتيكس في Starn Academy
          </p>
          <Link href="/courses">
            <Button size="lg" data-testid="button-cta-enroll">
              سجل الآن
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
