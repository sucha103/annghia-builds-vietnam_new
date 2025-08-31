import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Users, Target, Award, CheckCircle, Calendar, MapPin, Phone } from "lucide-react";
import directorsImage from "/public/images/dai_dien.jpg";
import giamDocImage from "/public/images/giam_doc.jpg";
import phoGiamDocImage from "/public/images/pho_giam_doc.jpg";

const About = () => {
  const milestones = [
    { year: "2010", event: "Thành lập công ty với MST 3000266069" },
    { year: "2012", event: "Mở rộng dịch vụ sang lĩnh vực thương mại gỗ" },
    { year: "2015", event: "Đầu tư trang thiết bị hiện đại" },
    { year: "2018", event: "Hoàn thành 100+ dự án xây dựng" },
    { year: "2020", event: "Mở rộng hoạt động ra các tỉnh lân cận" },
    { year: "2024", event: "14 năm phát triển bền vững" }
  ];

  const values = [
    {
      icon: Target,
      title: "Tầm nhìn",
      description: "Trở thành công ty xây dựng và thương mại gỗ hàng đầu tại khu vực miền Trung, mang lại giá trị bền vững cho khách hàng và cộng đồng."
    },
    {
      icon: Award,
      title: "Sứ mệnh", 
      description: "Cung cấp dịch vụ xây dựng chất lượng cao với công nghệ tiên tiến, đội ngũ chuyên nghiệp và tinh thần trách nhiệm với khách hàng."
    },
    {
      icon: Users,
      title: "Giá trị cốt lõi",
      description: "Chất lượng - Uy tín - Sáng tạo - Phát triển bền vững. Đặt lợi ích khách hàng lên hàng đầu trong mọi hoạt động."
    }
  ];

  const leadership = [
    {
      name: "Nguyễn Lụa",
      position: "Giám đốc",
      description: "14+ năm kinh nghiệm trong lĩnh vực xây dựng và quản lý doanh nghiệp",
      image: giamDocImage
    },
    {
      name: "Nghĩa",
      position: "Phó Giám đốc",
      description: "Chuyên gia trong lĩnh vực kỹ thuật xây dựng và quản lý dự án",
      image: phoGiamDocImage
    },
    {
      name: "Loan",
      position: "Kế toán trưởng",
      description: "kiểm toán cho công ty và đảm bảo tuân thủ các quy định tài chính",
      image: "/public/images/ke_toan.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Giới thiệu</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Về Công ty Ân Nghĩa
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            14 năm kinh nghiệm xây dựng niềm tin, chúng tôi tự hào là đối tác tin cậy trong lĩnh vực xây dựng và thương mại gỗ tại Hà Tĩnh
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Công ty TNHH Xây dựng và Thương mại Ân Nghĩa
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Được thành lập vào ngày 22 tháng 6 năm 2010, Công ty TNHH Xây dựng và Thương mại Ân Nghĩa đã trở thành một trong những doanh nghiệp uy tín tại Hà Tĩnh trong lĩnh vực xây dựng và thương mại gỗ.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Building2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Thông tin pháp lý</h4>
                    <p className="text-muted-foreground">MST: 3000266069 - Hoạt động hợp pháp theo quy định</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Địa chỉ trụ sở</h4>
                    <p className="text-muted-foreground">Số 3, ngõ 19, đường Lý Tự Trọng, Phường Bắc Hà, TP Hà Tĩnh</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Liên hệ</h4>
                    <p className="text-muted-foreground">Hotline: 0913.568.150</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">14+</div>
                  <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Dự án</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Đối tác</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={directorsImage} 
                alt="Ban lãnh đạo Công ty Ân Nghĩa" 
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Tầm nhìn & Sứ mệnh
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi hướng tới mục tiêu trở thành doanh nghiệp dẫn đầu trong lĩnh vực xây dựng tại khu vực
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-construction transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Ban lãnh đạo</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Đội ngũ lãnh đạo kinh nghiệm
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Được dẫn dắt bởi những chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực xây dựng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-construction transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-primary">{leader.name}</h3>
                  <Badge variant="secondary" className="mb-4">{leader.position}</Badge>
                  <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Lịch sử phát triển</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Hành trình 14 năm phát triển
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Từ những ngày đầu thành lập đến nay, chúng tôi không ngừng phát triển và hoàn thiện
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {milestone.year}
                  </div>
                  <div className="pt-3">
                    <p className="text-muted-foreground leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hợp tác cùng chúng tôi
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Với 14 năm kinh nghiệm và đội ngũ chuyên nghiệp, chúng tôi sẵn sàng đồng hành cùng bạn trong mọi dự án
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/services">Xem dịch vụ</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Liên hệ ngay</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
