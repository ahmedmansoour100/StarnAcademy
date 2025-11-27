/**
 * Partners Section Component with Modern Design
 */

interface Partner {
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export function PartnersSection() {
  const partners: Partner[] = [
    {
      name: "Google Developer Groups",
      description: "برنامج تطوير برامج Google",
      color: "from-blue-500 via-red-500 to-yellow-500",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="35" r="15" fill="#4285F4"/>
          <path d="M 60 35 Q 60 20 75 20 Q 80 20 83 25 L 65 40" fill="#EA4335"/>
          <circle cx="70" cy="55" r="15" fill="#34A853"/>
          <path d="M 30 60 L 45 50 Q 50 48 55 50 L 40 65" fill="#FBBC04"/>
        </svg>
      ),
    },
    {
      name: "Codex",
      description: "شركة تقدم دعم فني للشركات",
      color: "from-slate-700 to-slate-900",
      icon: (
        <img src="/codex-logo.png" alt="Codex" className="w-12 h-12 object-contain" />
      ),
    },
    {
      name: "Tracky",
      description: "نشاط تعليمي طلابي يهدف لوصل الطلاب بسوق العمل",
      color: "from-pink-500 to-rose-500",
      icon: (
        <img src="/tracky-logo.png" alt="Tracky" className="w-12 h-12 object-contain" />
      ),
    },
    {
      name: "Byte Force",
      description: "شركة تقدم دعم وحلول للشركات",
      color: "from-indigo-600 to-blue-600",
      icon: (
        <img src="/byteforce-logo.png" alt="Byte Force" className="w-12 h-12 object-contain" />
      ),
    },
    {
      name: "Business Partners",
      description: "شركاء الأعمال الاستراتيجيين",
      color: "from-amber-500 to-orange-500",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="25" height="35" fill="currentColor" rx="3"/>
          <rect x="55" y="30" width="25" height="35" fill="currentColor" rx="3"/>
          <circle cx="32" cy="25" r="6" fill="currentColor"/>
          <circle cx="67" cy="25" r="6" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: "Starn Startups",
      description: "برنامج دعم الشركات الناشئة",
      color: "from-teal-500 to-cyan-500",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 25 L 75 65 L 25 65 Z" fill="currentColor"/>
          <circle cx="50" cy="50" r="8" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-partners-title">
            شركاؤنا الموثوقون
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نعمل مع أفضل الشركات والمنظمات لتقديم أفضل تجربة تعليمية لطلابنا
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              data-testid={`partner-card-${index}`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-slate-900 p-8 h-full flex flex-col items-center justify-center text-center">
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${partner.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}
                >
                  {partner.icon}
                </div>

                {/* Partner Name */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  {partner.description}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className={`w-12 h-1 rounded-full mt-4 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            هل تود أن تصبح شريكاً معنا؟
          </p>
          <a
            href="https://wa.me/+2001142965661"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            data-testid="link-partnership-contact"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}
