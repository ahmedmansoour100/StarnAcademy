import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AITutor } from "@/components/AITutor";
import { Footer } from "@/components/Footer";
import { PartnersSection } from "@/components/PartnersSection";
import { CertificateSection } from "@/components/CertificateSection";
import { ShapePattern, RoundedSquare, Circle, HalfCircle, Star } from "@/components/ShapeDecorator";

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
    { titleAr: "تفكير منطقي", titleEn: "Logical Thinking", description: "تطوير القدرة على التحليل والتفكير المنطقي السليم" },
    { titleAr: "مهارات حل المشكلات", titleEn: "Problem Solving", description: "تعلم كيفية تحليل المشاكل وايجاد حلول إبداعية" },
    { titleAr: "أساسيات البرمجة", titleEn: "Programming Basics", description: "إتقان أسس البرمجة باستخدام لغات مختلفة" },
    { titleAr: "إنشاء ألعاب", titleEn: "Game Development", description: "تطوير ألعاب تفاعلية باستخدام محركات حديثة" },
    { titleAr: "العمل على تطبيقات", titleEn: "App Development", description: "بناء تطبيقات موبايل وويب احترافية" },
    { titleAr: "بناء مشاريع كاملة", titleEn: "Complete Projects", description: "تنفيذ مشاريع متكاملة من البداية إلى النهاية" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      <AITutor />

      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#0052CC] via-[#1E40AF] to-[#0052CC] overflow-hidden">
        <ShapePattern />
        {/* Decorative shapes */}
        <div className="absolute top-12 left-12 w-20 h-20">
          <RoundedSquare color="#1ABC9C" className="w-full h-full rounded-xl" />
        </div>
        <div className="absolute top-1/4 right-16 w-12 h-12">
          <Circle color="#00D4FF" className="w-full h-full opacity-80" />
        </div>
        <div className="absolute bottom-24 right-32 w-32 h-16">
          <HalfCircle color="#FF6B6B" className="w-full h-full opacity-70" />
        </div>
        <div className="absolute bottom-12 left-1/4 w-24 h-24">
          <Star color="#9B59B6" className="w-full h-full opacity-80" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(50, 50)">
                <polygon points="0,-40 40,0 0,40 -40,0" fill="#FCD34D" stroke="#FCD34D" strokeWidth="2"/>
                <polygon points="-15,-5 15,-5 0,15" fill="#0052CC"/>
              </g>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-loose" data-testid="text-hero-title">
            نحن لا نعلم البرمجة فقط، بل نبني مبتكري الغد
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 ltr leading-loose" data-testid="text-hero-subtitle">
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
            {features.map((feature, index) => {
              const colors = ["#1ABC9C", "#3498DB", "#FF6B6B", "#9B59B6", "#FCD34D", "#00D4FF"];
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  data-testid={`card-feature-${index}`}
                  style={{ borderTop: `4px solid ${colors[index % colors.length]}` }}
                >
                  <CardHeader>
                    <CardTitle className="mb-2">{feature.titleAr}</CardTitle>
                    <p className="text-sm text-primary font-medium ltr">{feature.titleEn}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-testid="text-outcomes-title">
            ماذا سيتعلم طفلك؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, index) => {
              const shapeColors = ["#1ABC9C", "#3498DB", "#FF6B6B", "#9B59B6", "#FCD34D", "#00D4FF"];
              const bgGradients = [
                "from-teal-50 to-white",
                "from-blue-50 to-white",
                "from-red-50 to-white",
                "from-purple-50 to-white",
                "from-yellow-50 to-white",
                "from-cyan-50 to-white"
              ];
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${bgGradients[index]} border-0 shadow-lg hover:shadow-2xl transition-all duration-300`}
                  data-testid={`card-learning-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: shapeColors[index] }}
                      />
                      <CardTitle className="text-lg">{outcome.titleAr}</CardTitle>
                    </div>
                    <p className="text-sm text-primary font-medium ltr">{outcome.titleEn}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{outcome.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
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

      <PartnersSection />

      <CertificateSection />

      <Footer />
    </div>
  );
}
