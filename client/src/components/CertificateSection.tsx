export function CertificateSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-slate-900" data-testid="text-certificate-title">
            الشهادة المقدمة
          </h2>
          <p className="text-xl text-slate-700" data-testid="text-certificate-subtitle">
            الشهادة التي يحصل عليها الطفل بعد إنجاز الكورس بشكل جيد
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <img 
              src="/certificate.png" 
              alt="شهادة إتمام الدورة من أكاديمية ستارن" 
              className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              data-testid="img-certificate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
