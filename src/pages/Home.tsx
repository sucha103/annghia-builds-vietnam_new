import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Hammer, TreePine, Zap, Phone, ArrowRight, CheckCircle, Users, Calendar, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import daiDienImage from "/public/images/dai_dien.jpg";
import equipmentImage from "@/assets/equipment-showcase.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Xây dựng nhà các loại",
      description: "Thiết kế và thi công nhà ở, nhà công nghiệp, công trình dân dụng chất lượng cao.",
      code: "4100"
    },
    {
      icon: TreePine,
      title: "Sản phẩm gỗ",
      description: "Gia công và cung cấp các sản phẩm gỗ chất lượng cho xây dựng và nội thất.",
      code: "1622"
    },
    {
      icon: Hammer,
      title: "Công trình kỹ thuật dân dụng",
      description: "Xây dựng hạ tầng kỹ thuật, công trình thủy lợi, viễn thông và giao thông.",
      code: "4290"
    },
    {
      icon: Zap,
      title: "Lắp đặt hệ thống điện",
      description: "Thiết kế và lắp đặt hệ thống điện an toàn cho các công trình xây dựng.",
      code: "4321"
    }
  ];

  const stats = [
    { number: "25+", label: "Năm kinh nghiệm", icon: Calendar },
    { number: "200+", label: "Dự án hoàn thành", icon: Trophy },
    { number: "50+", label: "Đối tác tin cậy", icon: Users },
    { number: "100%", label: "Cam kết chất lượng", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Hoạt động từ năm 2001
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            CÔNG TY TNHH XÂY DỰNG<br />
            VÀ THƯƠNG MẠI<br />
            <span className="text-secondary">ÂN NGHĨA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: "#32CD32" }}>
            Đối tác tin cậy trong xây dựng và sửa chữa nhà ở tại Hà Tĩnh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Liên hệ ngay
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">
                Xem dịch vụ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Giới thiệu</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                25 năm kinh nghiệm xây dựng niềm tin
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Công ty TNHH Xây dựng và Thương mại Ân Nghĩa được thành lập từ năm 2001, dưới sự lãnh đạo của Giám đốc Nguyễn Lụa. Chúng tôi tự hào là đối tác tin cậy trong lĩnh vực xây dựng và thương mại gỗ tại Hà Tĩnh.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>MST: 3000266069 - Hoạt động hợp pháp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Giám đốc: Nguyễn Lụa - Kinh nghiệm 25+ năm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Đội ngũ chuyên nghiệp, trang thiết bị hiện đại</span>
                </div>
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Tìm hiểu thêm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={daiDienImage}
                alt="Ban lãnh đạo Công ty Ân Nghĩa"
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-elevated">
                <div className="text-2xl font-bold">2001</div>
                <div className="text-sm">Năm thành lập</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Dịch vụ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Dịch vụ chuyên nghiệp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cung cấp đa dạng dịch vụ xây dựng và thương mại gỗ, đáp ứng mọi nhu cầu của khách hàng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-construction transition-all duration-300 border-border hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    Mã ngành: {service.code}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="default">
              <Link to="/services">
                Xem tất cả dịch vụ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={equipmentImage} 
                alt="Trang thiết bị xây dựng hiện đại" 
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-elevated">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Hiện đại</div>
              </div>
            </div>
            <div>
              <Badge variant="outline" className="mb-4">Trang thiết bị</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Trang thiết bị hiện đại, công nghệ tiên tiến
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chúng tôi đầu tư vào hệ thống máy móc, thiết bị hiện đại nhằm đảm bảo chất lượng công trình và tiến độ thi công tối ưu cho mọi dự án.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Máy móc chuyên dụng</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
                </div>
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/projects">
                  Xem dự án tiêu biểu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và báo giá tốt nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                0913.568.150
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Gửi yêu cầu tư vấn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
