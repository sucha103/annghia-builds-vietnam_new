import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-light p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">ÂN NGHĨA</div>
                <div className="text-xs text-primary-foreground/80">XÂY DỰNG & THƯƠNG MẠI</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Công ty TNHH Xây dựng và Thương mại Ân Nghĩa - Đối tác tin cậy trong xây dựng và thương mại gỗ tại Hà Tĩnh từ năm 2010.
            </p>
            <div className="text-xs text-primary-foreground/60">
              MST: 3000266069
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  Số 3, ngõ 19, đường Lý Tự Trọng<br />
                  Phường Bắc Hà, TP Hà Tĩnh<br />
                  Tỉnh Hà Tĩnh
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">0913.568.150</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">Thứ 2 - Thứ 7: 7:00 - 17:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dịch vụ chính</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Xây dựng nhà các loại</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Công trình dân dụng</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Sản phẩm gỗ</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Hạ tầng kỹ thuật</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Lắp đặt điện</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Giới thiệu</Link></li>
              <li><Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Dự án tiêu biểu</Link></li>
              <li><Link to="/news" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Tin tức</Link></li>
              <li><Link to="/recruitment" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Tuyển dụng</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Công ty TNHH Xây dựng và Thương mại Ân Nghĩa. Bản quyền được bảo vệ.
          </p>
          <div className="text-sm text-primary-foreground/60">
            Hoạt động từ năm 2010 • Giám đốc: Nguyễn Lụa
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;