import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Calendar, MapPin, Users, Filter, Eye } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", count: 12 },
    { id: "residential", name: "Nhà ở", count: 5 },
    { id: "commercial", name: "Thương mại", count: 3 },
    { id: "infrastructure", name: "Hạ tầng", count: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: "Biệt thự song lập Hà Tĩnh",
      category: "residential",
      location: "TP Hà Tĩnh",
      area: "250m²",
      duration: "6 tháng",
      year: "2024",
      status: "Hoàn thành",
      description: "Thiết kế và thi công biệt thự song lập hiện đại với không gian sống thoải mái.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Nhà máy sản xuất gỗ",
      category: "commercial", 
      location: "KCN Vũng Áng",
      area: "2000m²",
      duration: "8 tháng",
      year: "2023",
      status: "Hoàn thành",
      description: "Xây dựng nhà máy sản xuất và gia công gỗ với hệ thống máy móc hiện đại.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Hệ thống tưới tiêu Kỳ Anh",
      category: "infrastructure",
      location: "Huyện Kỳ Anh",
      area: "15 ha",
      duration: "4 tháng", 
      year: "2023",
      status: "Hoàn thành",
      description: "Thi công hệ thống tưới tiêu hiện đại phục vụ sản xuất nông nghiệp.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Nhà phố thương mại Bắc Hà",
      category: "commercial",
      location: "Phường Bắc Hà",
      area: "150m²",
      duration: "4 tháng",
      year: "2024",
      status: "Đang thi công",
      description: "Nhà phố 3 tầng kết hợp kinh doanh và ở, thiết kế tối ưu công năng.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Khu dân cư Thạch Linh",
      category: "residential",
      location: "Huyện Thạch Hà",
      area: "5000m²",
      duration: "12 tháng",
      year: "2022",
      status: "Hoàn thành",
      description: "Phát triển khu dân cư với 20 căn nhà ở liên kề và hạ tầng đồng bộ.",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Cầu bê tông cốt thép",
      category: "infrastructure",
      location: "Huyện Đức Thọ",
      area: "50m dài",
      duration: "3 tháng",
      year: "2023", 
      status: "Hoàn thành",
      description: "Thi công cầu bê tông cốt thép phục vụ giao thông nông thôn.",
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Dự án</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dự án tiêu biểu
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Khám phá những dự án đã hoàn thành và đang triển khai của chúng tôi - minh chứng cho chất lượng và uy tín
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000m²</div>
              <div className="text-sm text-muted-foreground">Diện tích thi công</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">14</div>
              <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Lọc theo danh mục:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  size="sm"
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-construction transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video flex items-center justify-center">
                    <Building2 className="h-16 w-16 text-primary/60" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={project.status === "Hoàn thành" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="text-xs bg-background/90">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-2 text-primary" />
                      Diện tích: {project.area}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      Thời gian: {project.duration}
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Eye className="mr-2 h-4 w-4" />
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Không có dự án nào</h3>
              <p className="text-muted-foreground">Không tìm thấy dự án nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Quy trình</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Quy trình thực hiện dự án
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi áp dụng quy trình làm việc chuyên nghiệp, đảm bảo chất lượng cho mọi dự án
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Khảo sát & Tư vấn", desc: "Khảo sát thực địa và tư vấn giải pháp tối ưu" },
              { title: "Thiết kế & Báo giá", desc: "Lập thiết kế chi tiết và báo giá minh bạch" },
              { title: "Thi công", desc: "Triển khai thi công với đội ngũ chuyên nghiệp" },
              { title: "Nghiệm thu", desc: "Nghiệm thu và bàn giao công trình đúng chất lượng" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bắt đầu dự án của bạn
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn biến ý tưởng thành hiện thực với chất lượng tốt nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Liên hệ tư vấn</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">Xem dịch vụ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;