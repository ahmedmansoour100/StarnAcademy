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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">وسائل الدفع المتاحة</h2>
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <div className="text-lg font-semibold">InstaPay</div>
            <div className="text-lg font-semibold">Vodafone Cash</div>
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
