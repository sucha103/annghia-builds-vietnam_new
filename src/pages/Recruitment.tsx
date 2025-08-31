import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, DollarSign, Clock, Mail, Phone, Send, CheckCircle, Building2 } from "lucide-react";

const Recruitment = () => {
  const jobs = [
    {
      id: 1,
      title: "Kỹ sư Xây dựng",
      department: "Kỹ thuật",
      type: "Toàn thời gian",
      location: "Hà Tĩnh",
      salary: "15-25 triệu",
      experience: "2+ năm",
      deadline: "2024-03-15",
      requirements: [
        "Tốt nghiệp Đại học chuyên ngành Xây dựng Dân dụng",
        "Có kinh nghiệm thiết kế và quản lý dự án",
        "Thành thạo AutoCAD, Revit, MS Project", 
        "Kỹ năng giao tiếp và làm việc nhóm tốt",
        "Có thể đi công tác các tỉnh lân cận"
      ],
      benefits: [
        "Lương cơ bản + thưởng dự án",
        "Bảo hiểm đầy đủ theo quy định",
        "Thưởng lễ tết, sinh nhật",
        "Đào tạo và phát triển nghề nghiệp",
        "Môi trường làm việc chuyên nghiệp"
      ]
    },
    {
      id: 2,
      title: "Thợ xây chính",
      department: "Thi công",
      type: "Toàn thời gian",
      location: "Hà Tĩnh",
      salary: "8-15 triệu",
      experience: "3+ năm",
      deadline: "2024-03-20",
      requirements: [
        "Có kinh nghiệm thi công các hạng mục xây dựng",
        "Đọc hiểu được bản vẽ kỹ thuật",
        "Kỹ năng thi công tốt, tỉ mỉ chính xác",
        "Có tinh thần trách nhiệm cao",
        "Sức khỏe tốt, không ngại khó khăn"
      ],
      benefits: [
        "Lương theo năng lực + thưởng",
        "Hỗ trợ ăn trưa và phương tiện",
        "Bảo hiểm tai nạn nghề nghiệp",
        "Thưởng cuối năm",
        "Cơ hội thăng tiến làm tổ trưởng"
      ]
    },
    {
      id: 3,
      title: "Chuyên viên Kinh doanh",
      department: "Kinh doanh",
      type: "Toàn thời gian", 
      location: "Hà Tĩnh",
      salary: "10-20 triệu",
      experience: "1+ năm",
      deadline: "2024-03-25",
      requirements: [
        "Tốt nghiệp Cao đẳng/Đại học",
        "Kinh nghiệm bán hàng, tìm kiếm khách hàng",
        "Kỹ năng giao tiếp và thuyết phục tốt",
        "Có phương tiện đi lại",
        "Năng động, chăm chỉ"
      ],
      benefits: [
        "Lương cơ bản + hoa hồng hấp dẫn",
        "Thưởng đạt chỉ tiêu",
        "Hỗ trợ xăng xe, điện thoại",
        "Đào tạo kỹ năng bán hàng",
        "Cơ hội thăng tiến nhanh"
      ]
    },
    {
      id: 4,
      title: "Kế toán tổng hợp",
      department: "Tài chính",
      type: "Toàn thời gian",
      location: "Hà Tĩnh", 
      salary: "8-12 triệu",
      experience: "2+ năm",
      deadline: "2024-04-01",
      requirements: [
        "Tốt nghiệp chuyên ngành Kế toán",
        "Có chứng chỉ hành nghề kế toán",
        "Kinh nghiệm kế toán xây dựng ưu tiên",
        "Thành thạo phần mềm kế toán",
        "Tỉ mỉ, chính xác, trung thực"
      ],
      benefits: [
        "Lương ổn định theo thoả thuận",
        "Môi trường làm việc văn phòng",
        "Bảo hiểm xã hội đầy đủ",
        "Nghỉ phép, lễ tết theo quy định",
        "Cơ hội học hỏi và phát triển"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Lương thưởng hấp dẫn",
      description: "Mức lương cạnh tranh + thưởng hiệu quả công việc"
    },
    {
      icon: Users,
      title: "Môi trường năng động",
      description: "Đội ngũ trẻ, chuyên nghiệp, tinh thần đoàn kết cao"
    },
    {
      icon: CheckCircle,
      title: "Bảo hiểm đầy đủ",
      description: "BHXH, BHYT, BHTN + bảo hiểm tai nạn nghề nghiệp"
    },
    {
      icon: Building2,
      title: "Cơ hội phát triển",
      description: "Đào tạo nâng cao, cơ hội thăng tiến rõ ràng"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Tuyển dụng</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cơ hội nghề nghiệp
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Gia nhập đội ngũ Ân Nghĩa để cùng xây dựng và phát triển những dự án ý nghĩa, đóng góp vào sự phát triển của cộng đồng
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Tại sao chọn Ân Nghĩa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi tạo ra môi trường làm việc tích cực, nơi mỗi cá nhân được phát huy tối đa năng lực
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-construction transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Vị trí tuyển dụng</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Các vị trí đang tuyển dụng
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm kiếm vị trí phù hợp với kinh nghiệm và mong muốn phát triển của bạn
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-construction transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">{job.department}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {job.experience}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      Hạn: {new Date(job.deadline).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Yêu cầu:</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Quyền lợi:</h4>
                      <ul className="space-y-2">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Ứng tuyển ngay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Quy trình</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Quy trình tuyển dụng
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quy trình tuyển dụng minh bạch, công bằng và chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Nộp hồ sơ", desc: "Gửi CV và thư xin việc qua email hoặc nộp trực tiếp" },
              { step: "2", title: "Sàng lọc hồ sơ", desc: "Phòng nhân sự sẽ xem xét và liên hệ trong 3-5 ngày" },
              { step: "3", title: "Phỏng vấn", desc: "Phỏng vấn trực tiếp với trưởng bộ phận và giám đốc" },
              { step: "4", title: "Trúng tuyển", desc: "Thông báo kết quả và làm thủ tục nhận việc" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Liên hệ tuyển dụng
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Bạn có câu hỏi về các vị trí tuyển dụng? Hãy liên hệ với phòng nhân sự của chúng tôi để được tư vấn chi tiết.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Hotline tuyển dụng</div>
                    <div className="text-primary-foreground/80">0913.568.150</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email tuyển dụng</div>
                    <div className="text-primary-foreground/80">hr@annghia.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Địa chỉ nộp hồ sơ</div>
                    <div className="text-primary-foreground/80">
                      Số 3, ngõ 19, đường Lý Tự Trọng<br />
                      Phường Bắc Hà, TP Hà Tĩnh
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-background/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Gửi CV ứng tuyển</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Họ tên *</label>
                  <input type="text" className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <input type="email" className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Số điện thoại *</label>
                  <input type="tel" className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Vị trí ứng tuyển *</label>
                  <select className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Chọn vị trí</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Ghi chú</label>
                  <textarea rows={3} className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Gửi hồ sơ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;