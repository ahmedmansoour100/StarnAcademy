import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import WhatsApp_Image_2025_11_27_at_02_01_55_430675a8 from "@assets/WhatsApp Image 2025-11-27 at 02.01.55_430675a8.jpg";

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "أحمد محمد عطا",
      title: "مدرب البرمجة والروبوتيكس",
      bio: "مهندس برمجيات ومدرب معتمد في تعليم البرمجة للأطفال مع خبرة تزيد عن 7 سنوات في المجال التعليمي",
      specialties: [
        "Python و JavaScript",
        "Arduino والروبوتيكس",
        "تطوير الألعاب",
        "التفكير الحسابي"
      ],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "حسن بدر نويصي",
      title: "مدرب تطوير التطبيقات والويب",
      bio: "مطور Full Stack ومدرب متخصص في تعليم تقنيات الويب الحديثة وتطوير التطبيقات للأطفال والمراهقين",
      specialties: [
        "HTML, CSS, JavaScript",
        "React و Node.js",
        "تطوير تطبيقات الموبايل",
        "تصميم تجربة المستخدم"
      ],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6" data-testid="text-trainers-title">
            فريق المدربين
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            تعرف على المدربين المحترفين الذين سيرافقون طفلك في رحلته التعليمية
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={trainer.id} className="overflow-hidden" data-testid={`card-trainer-${index}`}>
                <div className="h-64 overflow-hidden">
                  <img
                    src={WhatsApp_Image_2025_11_27_at_02_01_55_430675a8}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{trainer.name}</CardTitle>
                  <CardDescription className="text-base text-primary font-semibold">
                    {trainer.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{trainer.bio}</p>
                  <div>
                    <h4 className="font-semibold mb-2">التخصصات:</h4>
                    <ul className="space-y-1">
                      {trainer.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">فريق متميز من المحترفين</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            جميع مدربينا حاصلون على شهادات معتمدة ولديهم خبرة واسعة في التعامل مع الأطفال والمراهقين
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
