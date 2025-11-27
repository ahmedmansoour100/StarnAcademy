import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function Courses() {
  const courses = [
    {
      id: 1,
      duration: "شهرين",
      title: "مقدمة في البرمجة",
      description: "دورة تمهيدية للأطفال لتعلم أساسيات البرمجة باستخدام Scratch والألعاب التفاعلية",
      topics: [
        "أساسيات Scratch",
        "التفكير المنطقي",
        "إنشاء ألعاب بسيطة",
        "القصص التفاعلية"
      ],
      ageRange: "8-11 سنة",
      sessionsPerWeek: "حصتان",
      sessionDuration: "ساعة ونصف"
    },
    {
      id: 2,
      duration: "4 شهور",
      title: "البرمجة والروبوتيكس",
      description: "دورة متوسطة تجمع بين البرمجة النصية وتصميم الروبوتات باستخدام Arduino",
      topics: [
        "Python للمبتدئين",
        "Arduino والإلكترونيات",
        "بناء روبوتات بسيطة",
        "حساسات ومحركات",
        "مشروع التخرج"
      ],
      ageRange: "11-14 سنة",
      sessionsPerWeek: "حصتان",
      sessionDuration: "ساعتان"
    },
    {
      id: 3,
      duration: "6 شهور",
      title: "تطوير التطبيقات والويب",
      description: "دورة متقدمة لتعلم تطوير التطبيقات والمواقع باستخدام التقنيات الحديثة",
      topics: [
        "HTML, CSS, JavaScript",
        "تطوير تطبيقات الموبايل",
        "قواعد البيانات",
        "التصميم والتجربة المستخدم",
        "نشر المشاريع",
        "مشروع تخرج شامل"
      ],
      ageRange: "13-17 سنة",
      sessionsPerWeek: "ثلاث حصص",
      sessionDuration: "ساعتان"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6" data-testid="text-courses-title">
            دوراتنا التعليمية
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            برامج تعليمية متكاملة مصممة خصيصًا لتناسب مختلف الأعمار والمستويات
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="flex flex-col" data-testid={`card-course-${index}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm">{course.duration}</Badge>
                    <Badge variant="outline">{course.ageRange}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <h4 className="font-semibold mb-3">محتوى الدورة:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <p>عدد الحصص: {course.sessionsPerWeek} أسبوعيًا</p>
                    <p>مدة الحصة: {course.sessionDuration}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full" data-testid={`button-enroll-${index}`}>
                      احجز مكانك
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" data-testid="text-parent-testimonials">
            آراء أولياء الأمور في الدورات
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            اكتشف ما يقوله أولياء الأمور عن تجاربهم مع برامجنا التعليمية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  م
                </div>
                <div>
                  <h4 className="font-semibold text-lg">ولي أمر</h4>
                  <p className="text-sm text-muted-foreground">والد طالب</p>
                </div>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "كله تمام والله جديد وجاد بالتسيير وحضرتك مجدد ومتعاطف تعامل مميز"
              </p>
              <div className="flex items-center gap-1 text-secondary">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                  ع
                </div>
                <div>
                  <h4 className="font-semibold text-lg">ولي أمر</h4>
                  <p className="text-sm text-muted-foreground">والد طالب</p>
                </div>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "حضرتك شخص محترم جدا زيدتك وريينا عالم احنا بشكر فيك وأنا مقدره جدا"
              </p>
              <div className="flex items-center gap-1 text-secondary">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                  ح
                </div>
                <div>
                  <h4 className="font-semibold text-lg">ولي أمر</h4>
                  <p className="text-sm text-muted-foreground">والد طالب</p>
                </div>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "شكراً على تعب حضرتك معاه، لاحظت تطوراً كبيراً في مستواه وثقته"
              </p>
              <div className="flex items-center gap-1 text-secondary">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  س
                </div>
                <div>
                  <h4 className="font-semibold text-lg">والدة سليم</h4>
                  <p className="text-sm text-muted-foreground">والدة طالب</p>
                </div>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "طبعاً سعيده جداً أن سليم برغم سنه الصغير تعلم والحمد لله. بارك الله في حضرتك على الاهتمام والحب"
              </p>
              <div className="flex items-center gap-1 text-secondary">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">وسائل الدفع المتاحة</h2>
          <div className="flex gap-8 justify-center items-center flex-wrap mb-6">
            <div className="flex items-center gap-2 text-lg font-semibold" data-testid="payment-method-instapay">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="InstaPay">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
              <span>InstaPay</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold" data-testid="payment-method-vodafone">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Vodafone Cash">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <span>Vodafone Cash</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-card rounded-lg inline-block">
            <p className="text-sm text-muted-foreground mb-2">رقم الدفع:</p>
            <p className="text-2xl font-bold text-primary" dir="ltr" data-testid="text-payment-number">01029808287</p>
          </div>
          <p className="mt-6 text-muted-foreground">
            يمكنك الدفع بسهولة من خلال أي من الوسائل المتاحة
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
