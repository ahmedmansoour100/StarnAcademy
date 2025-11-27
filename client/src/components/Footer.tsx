export function Footer() {
  const whatsappNumber = "01142965661";
  const whatsappLink = `https://wa.me/+201142965661`;
  
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
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Starn Academy</h3>
            <p className="text-slate-300">
              نحن لا نعلم البرمجة فقط، بل نبني مبتكري الغد
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-slate-300 hover:text-amber-400">الدورات</a></li>
              <li><a href="/projects" className="text-slate-300 hover:text-amber-400">المشاريع</a></li>
              <li><a href="/trainers" className="text-slate-300 hover:text-amber-400">المدربين</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-amber-400">من نحن</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400"
                  data-testid="link-footer-whatsapp"
                >
                  واتساب: {whatsappNumber}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-amber-400">نموذج التواصل</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8">
          <h3 className="text-lg font-bold text-center text-amber-400 mb-6">شركاؤنا</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => {
              const colors = ["bg-blue-600", "bg-green-600", "bg-red-600", "bg-purple-600", "bg-yellow-600", "bg-cyan-600"];
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
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Starn Academy. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
