import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, Eye, ArrowRight, Newspaper, TrendingUp } from "lucide-react";

const News = () => {
  const featuredNews = {
    id: 1,
    title: "Ân Nghĩa hoàn thành dự án khu dân cư 50 tỷ đồng tại Hà Tĩnh",
    excerpt: "Công ty vừa bàn giao thành công khu dân cư hiện đại với đầy đủ tiện ích, góp phần cải thiện chất lượng cuộc sống người dân địa phương.",
    content: "Dự án khu dân cư tại phường Bắc Hà với tổng đầu tư 50 tỷ đồng đã được hoàn thành và bàn giao cho cư dân. Khu dân cư bao gồm 30 căn nhà phố hiện đại cùng hệ thống hạ tầng đồng bộ.",
    date: "2024-01-15",
    author: "Ban biên tập",
    category: "Dự án",
    views: 1250,
    featured: true
  };

  const news = [
    {
      id: 2,
      title: "Xu hướng xây dựng bền vững năm 2024",
      excerpt: "Ngành xây dựng đang hướng tới các giải pháp thân thiện với môi trường và tiết kiệm năng lượng.",
      date: "2024-01-10",
      author: "Nguyễn Lụa",
      category: "Xu hướng",
      views: 890
    },
    {
      id: 3,
      title: "Công ty Ân Nghĩa đầu tư máy móc hiện đại",
      excerpt: "Nhằm nâng cao chất lượng và năng suất, công ty đã đầu tư hệ thống máy móc và thiết bị hiện đại.",
      date: "2024-01-05",
      author: "Ban biên tập",
      category: "Công ty",
      views: 1120
    },
    {
      id: 4,
      title: "Các loại gỗ tốt nhất cho xây dựng",
      excerpt: "Hướng dẫn lựa chọn loại gỗ phù hợp cho từng mục đích xây dựng và nội thất.",
      date: "2023-12-28",
      author: "Chuyên gia gỗ",
      category: "Hướng dẫn",
      views: 756
    },
    {
      id: 5,
      title: "Thị trường bất động sản Hà Tĩnh 2024",
      excerpt: "Phân tích tình hình và dự báo xu hướng phát triển bất động sản tại Hà Tĩnh trong năm 2024.",
      date: "2023-12-25",
      author: "Chuyên gia BĐS",
      category: "Thị trường",
      views: 943
    },
    {
      id: 6,
      title: "An toàn lao động trong xây dựng",
      excerpt: "Những nguyên tắc quan trọng đảm bảo an toàn cho công nhân và chất lượng công trình.",
      date: "2023-12-20",
      author: "Kỹ sư An toàn",
      category: "An toàn",
      views: 654
    },
    {
      id: 7,
      title: "Tuyển dụng kỹ sư xây dựng 2024",
      excerpt: "Công ty Ân Nghĩa thông báo tuyển dụng nhiều vị trí kỹ sư và thợ xây chuyên nghiệp.",
      date: "2023-12-15",
      author: "Phòng nhân sự",
      category: "Tuyển dụng",
      views: 1340
    },
    {
      id: 8,
      title: "Công nghệ mới trong thi công bê tông",
      excerpt: "Ứng dụng công nghệ hiện đại giúp tăng cường độ và độ bền của kết cấu bê tông.",
      date: "2023-12-10",
      author: "Kỹ sư Công nghệ",
      category: "Công nghệ",
      views: 789
    }
  ];

  const categories = [
    { name: "Tất cả", count: 8 },
    { name: "Dự án", count: 2 },
    { name: "Công ty", count: 1 },
    { name: "Xu hướng", count: 2 },
    { name: "Hướng dẫn", count: 1 },
    { name: "Tuyển dụng", count: 1 },
    { name: "Công nghệ", count: 1 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Tin tức & Sự kiện</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tin tức & Cập nhật
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về hoạt động của công ty, xu hướng ngành và các dự án tiêu biểu
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">Tin nổi bật</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Tin tức nổi bật</h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-construction transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video lg:aspect-auto flex items-center justify-center">
                <Newspaper className="h-24 w-24 text-primary/60" />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="default">{featuredNews.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredNews.date).toLocaleDateString('vi-VN')}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="h-4 w-4 mr-1" />
                    {featuredNews.views.toLocaleString()}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary leading-tight">
                  {featuredNews.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {featuredNews.author}
                  </div>
                  <Button size="sm" variant="default">
                    Đọc thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-primary">Danh mục</h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 hover:bg-muted/50 rounded-md cursor-pointer transition-colors">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-primary">Tin đọc nhiều</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {news.slice(0, 3).sort((a, b) => b.views - a.views).map((article, index) => (
                      <div key={article.id} className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-primary line-clamp-2 hover:underline cursor-pointer">
                              {article.title}
                            </h4>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <Eye className="h-3 w-3 mr-1" />
                              {article.views.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        {index < 2 && <div className="border-b border-border"></div>}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary">Tất cả tin tức</h2>
                <p className="text-muted-foreground">Cập nhật liên tục các thông tin mới nhất</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {news.map((article) => (
                  <Card key={article.id} className="group hover:shadow-construction transition-all duration-300 overflow-hidden">
                    <div className="bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.date).toLocaleDateString('vi-VN')}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-primary-dark transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="h-3 w-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Eye className="h-3 w-3 mr-1" />
                            {article.views.toLocaleString()}
                          </div>
                          <Button size="sm" variant="ghost" className="text-xs p-0 h-auto">
                            Đọc thêm
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Xem thêm tin tức
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Đăng ký nhận tin
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Đăng ký để nhận những thông tin mới nhất về dự án, xu hướng xây dựng và cơ hội việc làm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button size="lg" variant="secondary">
              Đăng ký
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;