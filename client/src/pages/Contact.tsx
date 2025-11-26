import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    schoolType: "",
    location: "",
    parentName: "",
    parentPhone: "",
    course: "",
    preferredSchedule: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          childAge: parseInt(formData.childAge)
        }),
      });

      if (response.ok) {
        toast({
          title: "تم إرسال طلبك بنجاح",
          description: "سنتواصل معك قريبًا لتأكيد الحجز",
        });
        setFormData({
          childName: "",
          childAge: "",
          schoolType: "",
          location: "",
          parentName: "",
          parentPhone: "",
          course: "",
          preferredSchedule: ""
        });
      } else {
        throw new Error("فشل في إرسال الطلب");
      }
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو التواصل عبر الواتساب",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6" data-testid="text-contact-title">
            احجز مكانك الآن
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            املأ النموذج أدناه وسنتواصل معك في أقرب وقت
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>نموذج الحجز</CardTitle>
                <CardDescription>
                  يرجى ملء جميع البيانات المطلوبة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childName">اسم الطفل</Label>
                      <Input
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        required
                        data-testid="input-child-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childAge">عمر الطفل</Label>
                      <Input
                        id="childAge"
                        type="number"
                        min="8"
                        max="17"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        required
                        data-testid="input-child-age"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolType">نوع المدرسة</Label>
                    <Input
                      id="schoolType"
                      placeholder="مثال: حكومي، خاص، دولي، أزهري"
                      value={formData.schoolType}
                      onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })}
                      required
                      data-testid="input-school-type"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">المنطقة / المحافظة</Label>
                    <Input
                      id="location"
                      placeholder="مثال: القاهرة، الجيزة، الإسكندرية"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                      data-testid="input-location"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">اسم ولي الأمر</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        required
                        data-testid="input-parent-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">رقم الهاتف</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        placeholder="01xxxxxxxxx"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                        required
                        data-testid="input-parent-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">الدورة المطلوبة</Label>
                    <select
                      id="course"
                      className="w-full px-3 py-2 border rounded-lg bg-background"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      required
                      data-testid="select-course"
                    >
                      <option value="">اختر الدورة</option>
                      <option value="مقدمة في البرمجة (شهرين)">مقدمة في البرمجة (شهرين)</option>
                      <option value="البرمجة والروبوتيكس (4 شهور)">البرمجة والروبوتيكس (4 شهور)</option>
                      <option value="تطوير التطبيقات والويب (6 شهور)">تطوير التطبيقات والويب (6 شهور)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schedule">الوقت المفضل</Label>
                    <Input
                      id="schedule"
                      placeholder="مثال: مساءً بعد المدرسة، عطلة نهاية الأسبوع"
                      value={formData.preferredSchedule}
                      onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                      data-testid="input-schedule"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                    data-testid="button-submit-booking"
                  >
                    {loading ? "جاري الإرسال..." : "إرسال الطلب"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                أو تواصل معنا مباشرة عبر الواتساب
              </p>
              <a
                href="https://wa.me/01142965661"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" data-testid="button-whatsapp-contact">
                  تواصل عبر الواتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
