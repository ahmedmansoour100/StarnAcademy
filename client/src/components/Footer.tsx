export function Footer() {
  const whatsappNumber = "+2001142965661";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  const partners = [
    "A+",
    "Google Developer Groups",
    "Codex",
    "Byte Force",
    "Business Partners",
    "Tracky",
    "Starn Startups"
  ];

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Starn Academy</h3>
            <p className="text-muted-foreground">
              نحن لا نعلم البرمجة فقط، بل نبني مبتكري الغد
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-muted-foreground hover:text-primary">الدورات</a></li>
              <li><a href="/projects" className="text-muted-foreground hover:text-primary">المشاريع</a></li>
              <li><a href="/trainers" className="text-muted-foreground hover:text-primary">المدربين</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary">من نحن</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  data-testid="link-footer-whatsapp"
                >
                  واتساب: {whatsappNumber}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary">نموذج التواصل</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <h3 className="text-lg font-bold text-center mb-6">شركاؤنا</h3>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            {partners.map((partner, index) => {
              const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500", "bg-yellow-500", "bg-cyan-500"];
              return (
                <div 
                  key={index} 
                  className={`px-4 py-2 rounded-full font-medium text-white text-sm ${colors[index % colors.length]} hover:shadow-lg transition-all duration-300 hover:scale-110`}
                  data-testid={`text-partner-${index}`}
                >
                  {partner}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Starn Academy. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
