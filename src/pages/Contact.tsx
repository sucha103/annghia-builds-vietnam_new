import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Navigation, Building2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building2,
      title: "Trụ sở chính",
      details: [
        "Số 3, ngõ 19, đường Lý Tự Trọng",
        "Phường Bắc Hà, TP Hà Tĩnh",
        "Tỉnh Hà Tĩnh, Việt Nam"
      ]
    },
    {
      icon: Phone,
      title: "Điện thoại",
      details: [
        "Hotline: 0913.568.150",
        "Fax: (0239) 123.456",
        "Hỗ trợ 24/7"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@annghia.com",
        "sales@annghia.com", 
        "hr@annghia.com"
      ]
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      details: [
        "Thứ 2 - Thứ 6: 7:00 - 17:00",
        "Thứ 7: 7:00 - 11:30",
        "Chủ nhật: Nghỉ"
      ]
    }
  ];

  const services = [
    "Tư vấn thiết kế xây dựng",
    "Báo giá dự án",
    "Thi công xây dựng",
    "Cung cấp vật liệu gỗ",
    "Bảo trì và sửa chữa",
    "Hỗ trợ kỹ thuật"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Liên hệ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí cho dự án của bạn
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Thông tin liên hệ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nhiều cách để bạn có thể kết nối với chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-construction transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="outline" className="mb-4">Gửi tin nhắn</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Liên hệ với chúng tôi
              </h3>
              <p className="text-muted-foreground mb-8">
                Điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                    Form liên hệ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Họ tên *</label>
                      <input 
                        type="text" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Nhập họ tên của bạn"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <input 
                      type="email" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Dịch vụ quan tâm</label>
                    <select className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Chọn dịch vụ</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Tiêu đề *</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tiêu đề tin nhắn"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Nội dung *</label>
                    <textarea 
                      rows={5}
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                    ></textarea>
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Chúng tôi cam kết bảo mật thông tin cá nhân của bạn và sẽ phản hồi trong vòng 24 giờ.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <Badge variant="outline" className="mb-4">Vị trí</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Tìm chúng tôi
              </h3>
              <p className="text-muted-foreground mb-8">
                Trụ sở chính của chúng tôi tại trung tâm thành phố Hà Tĩnh, thuận tiện cho việc gặp gỡ và trao đổi trực tiếp.
              </p>

              {/* Map Placeholder */}
              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Navigation className="h-16 w-16 text-primary/60 mx-auto mb-4" />
                      <p className="text-muted-foreground">Bản đồ Google Maps</p>
                      <p className="text-sm text-muted-foreground">Số 3, ngõ 19, đường Lý Tự Trọng, Bắc Hà, Hà Tĩnh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Liên hệ nhanh</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Phone className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <div className="font-semibold">Gọi ngay</div>
                      <div className="text-sm text-muted-foreground">0913.568.150</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Mail className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <div className="font-semibold">Gửi email</div>
                      <div className="text-sm text-muted-foreground">info@annghia.com</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-muted/50 rounded-lg">
                    <MapPin className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <div className="font-semibold">Ghé thăm trực tiếp</div>
                      <div className="text-sm text-muted-foreground">Thứ 2-6: 7:00-17:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  Công ty TNHH Xây dựng và Thương mại Ân Nghĩa
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Thông tin pháp lý</div>
                      <div>MST: 3000266069</div>
                      <div>Giám đốc: Nguyễn Lụa</div>
                      <div>Ngày thành lập: 22/06/2010</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Địa chỉ</div>
                      <div>Số 3, ngõ 19, đường Lý Tự Trọng</div>
                      <div>Phường Bắc Hà, TP Hà Tĩnh, Hà Tĩnh</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Lĩnh vực hoạt động</div>
                      <div>Xây dựng các loại nhà (4100)</div>
                      <div>Sản xuất sản phẩm gỗ (1622)</div>
                      <div>Xây dựng công trình kỹ thuật dân dụng (4290)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block bg-primary/10 p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">14+</div>
                  <div className="text-muted-foreground mb-4">Năm kinh nghiệm</div>
                  <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                  <div className="text-muted-foreground mb-4">Dự án hoàn thành</div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Khách hàng hài lòng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bắt đầu dự án với chúng tôi
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Với 14 năm kinh nghiệm và đội ngũ chuyên nghiệp, chúng tôi cam kết mang đến dịch vụ tốt nhất cho dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Gọi ngay: 0913.568.150
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Send className="mr-2 h-5 w-5" />
              Gửi yêu cầu tư vấn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;