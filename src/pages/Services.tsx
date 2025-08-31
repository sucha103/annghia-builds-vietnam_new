import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Hammer, TreePine, Zap, Truck, Wrench, CheckCircle, Phone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Xây dựng nhà các loại",
      code: "4100",
      description: "Thiết kế và thi công các loại nhà ở, từ nhà dân dụng đến nhà công nghiệp, đảm bảo chất lượng và tiến độ.",
      features: [
        "Nhà ở dân dụng (biệt thự, nhà phố)",
        "Nhà công nghiệp, kho bãi",
        "Nhà văn phòng, thương mại",
        "Thiết kế kiến trúc chuyên nghiệp",
        "Giám sát thi công 24/7"
      ],
      pricing: "Từ 3.5 triệu/m²"
    },
    {
      icon: TreePine,
      title: "Sản phẩm gỗ chất lượng",
      code: "1622", 
      description: "Gia công và cung cấp đa dạng sản phẩm gỗ cho xây dựng, nội thất và xuất khẩu.",
      features: [
        "Gỗ xây dựng (cột, dầm, ván)",
        "Gỗ nội thất cao cấp",
        "Gỗ công nghiệp chuyên dụng",
        "Gia công theo yêu cầu",
        "Chứng nhận chất lượng FSC"
      ],
      pricing: "Liên hệ báo giá"
    },
    {
      icon: Hammer,
      title: "Công trình kỹ thuật dân dụng",
      code: "4290",
      description: "Thi công các công trình hạ tầng kỹ thuật: thủy lợi, viễn thông, giao thông.",
      features: [
        "Công trình thủy lợi, tưới tiêu",
        "Hệ thống viễn thông",
        "Đường giao thông nông thôn",
        "Cống, cầu nhỏ",
        "San lấp mặt bằng"
      ],
      pricing: "Theo quy mô dự án"
    },
    {
      icon: Zap,
      title: "Lắp đặt hệ thống điện",
      code: "4321",
      description: "Thiết kế và lắp đặt hệ thống điện an toàn, hiệu quả cho các công trình.",
      features: [
        "Hệ thống điện dân dụng",
        "Điện công nghiệp",
        "Hệ thống chiếu sáng",
        "Điện năng lượng mặt trời",
        "Bảo trì định kỳ"
      ],
      pricing: "Từ 150k/điểm"
    },
    {
      icon: Truck,
      title: "Vận tải hàng hóa",
      code: "4933",
      description: "Dịch vụ vận chuyển vật liệu xây dựng và hàng hóa với đội xe chuyên nghiệp.",
      features: [
        "Vận chuyển vật liệu xây dựng",
        "Xe tải các loại tải trọng",
        "Vận chuyển máy móc thiết bị",
        "Dịch vụ bốc xếp",
        "Bảo hiểm hàng hóa"
      ],
      pricing: "Từ 15k/km"
    },
    {
      icon: Wrench,
      title: "San lấp mặt bằng",
      code: "4312",
      description: "Dịch vụ san lấp, chuẩn bị mặt bằng cho các dự án xây dựng.",
      features: [
        "San lấp mặt bằng xây dựng",
        "Đào đắp, đầm nén",
        "Thi công nền móng",
        "Thoát nước mặt bằng",
        "Kiểm tra chất lượng nền"
      ],
      pricing: "Từ 35k/m²"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Tư vấn & Khảo sát",
      description: "Nhận yêu cầu, tư vấn giải pháp và khảo sát thực địa miễn phí"
    },
    {
      step: "02", 
      title: "Thiết kế & Báo giá",
      description: "Lập thiết kế sơ bộ và báo giá chi tiết, minh bạch"
    },
    {
      step: "03",
      title: "Ký hợp đồng",
      description: "Thỏa thuận điều khoản và ký kết hợp đồng thi công"
    },
    {
      step: "04",
      title: "Thi công & Giám sát", 
      description: "Triển khai thi công với đội ngũ chuyên nghiệp, giám sát chặt chẽ"
    },
    {
      step: "05",
      title: "Nghiệm thu & Bàn giao",
      description: "Nghiệm thu công trình và bàn giao kèm bảo hành"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Dịch vụ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dịch vụ chuyên nghiệp
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Chúng tôi cung cấp đa dạng dịch vụ xây dựng và thương mại gỗ, đáp ứng mọi nhu cầu của khách hàng với chất lượng tốt nhất
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-construction transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Mã ngành: {service.code}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-primary">{service.pricing}</div>
                    <Button size="sm" variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Liên hệ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Quy trình</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Quy trình làm việc chuyên nghiệp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi áp dụng quy trình làm việc chuẩn mực, đảm bảo chất lượng và tiến độ cho mọi dự án
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-construction">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-primary/30 mx-auto -ml-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Tại sao chọn Ân Nghĩa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ tốt nhất với những ưu điểm vượt trội
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Chất lượng đảm bảo</h3>
              <p className="text-sm text-muted-foreground">Sử dụng vật liệu cao cấp, quy trình thi công chuẩn</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Đúng tiến độ</h3>
              <p className="text-sm text-muted-foreground">Cam kết hoàn thành đúng thời gian đã thỏa thuận</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Hỗ trợ 24/7</h3>
              <p className="text-sm text-muted-foreground">Tư vấn và hỗ trợ khách hàng mọi lúc, mọi nơi</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Bảo hành dài hạn</h3>
              <p className="text-sm text-muted-foreground">Chế độ bảo hành và bảo trì chu đáo sau thi công</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cần tư vấn dịch vụ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                0913.568.150
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/projects">
                Xem dự án tiêu biểu
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;