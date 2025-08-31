import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Dự án", href: "/projects" },
    { name: "Tin tức", href: "/news" },
    { name: "Tuyển dụng", href: "/recruitment" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-subtle">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-construction group-hover:shadow-elevated transition-all duration-300">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary">ÂN NGHĨA</div>
              <div className="text-xs text-muted-foreground">XÂY DỰNG & THƯƠNG MẠI</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-primary">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">0913.568.150</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${
                    isActive(item.href) ? "text-primary bg-muted" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 flex items-center space-x-2 text-sm text-primary border-t border-border mt-2 pt-4">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">0913.568.150</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;