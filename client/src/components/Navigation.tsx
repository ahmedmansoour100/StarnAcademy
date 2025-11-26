import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "الرئيسية" },
  { path: "/courses", label: "الدورات" },
  { path: "/projects", label: "المشاريع" },
  { path: "/trainers", label: "المدربين" },
  { path: "/testimonials", label: "التقييمات" },
  { path: "/faq", label: "الأسئلة الشائعة" },
  { path: "/about", label: "من نحن" },
  { path: "/contact", label: "تواصل معنا" },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home-logo">
              <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Diamond background */}
                <g transform="translate(50, 50)">
                  <polygon points="0,-40 40,0 0,40 -40,0" fill="#FCD34D" stroke="#FCD34D" strokeWidth="2"/>
                  {/* Black triangle pointing down */}
                  <polygon points="-15,-5 15,-5 0,15" fill="#1F2937"/>
                </g>
              </svg>
              <span className="text-lg font-bold text-primary hidden sm:inline">Starn Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "default" : "ghost"}
                  size="sm"
                  data-testid={`link-nav-${link.path.slice(1) || "home"}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/login">
              <Button variant="outline" size="sm" className="mr-2" data-testid="link-login">
                تسجيل الدخول
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="default" size="sm" data-testid="link-register">
                التسجيل
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Drawer open={mobileOpen} onOpenChange={setMobileOpen} direction="right">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-full w-[280px] right-0 left-auto">
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(50, 50)">
                          <polygon points="0,-40 40,0 0,40 -40,0" fill="#FCD34D" stroke="#FCD34D" strokeWidth="2"/>
                          <polygon points="-15,-5 15,-5 0,15" fill="#1F2937"/>
                        </g>
                      </svg>
                      <span className="text-xl font-bold text-primary">Starn Academy</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileOpen(false)}
                      data-testid="button-close-drawer"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    {navLinks.map((link) => (
                      <Link key={link.path} href={link.path}>
                        <Button
                          variant={location === link.path ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setMobileOpen(false)}
                          data-testid={`link-mobile-${link.path.slice(1) || "home"}`}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-4 border-t">
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setMobileOpen(false)}
                        data-testid="link-mobile-login"
                      >
                        تسجيل الدخول
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => setMobileOpen(false)}
                        data-testid="link-mobile-register"
                      >
                        التسجيل
                      </Button>
                    </Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
