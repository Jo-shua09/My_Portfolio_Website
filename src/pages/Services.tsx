import { Code2, Smartphone, Cloud, Palette, Database, Shield, Zap, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with React, Next.js, Node.js, and modern frameworks. Scalable architecture designed for performance and maintainability.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native iOS and Android apps, plus React Native and Flutter cross-platform solutions. Smooth, intuitive experiences that users love.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and GCP infrastructure setup, migration, and optimization. Serverless architectures and microservices expertise.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that balances aesthetics with functionality. Figma prototypes, design systems, and conversion-optimized interfaces.",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "PostgreSQL, MongoDB, Redis, and more. Efficient schema design, query optimization, and data migration strategies.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Penetration testing, security audits, and compliance with GDPR, HIPAA, and industry standards. Protecting your data and users.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed is critical. We optimize every layer—from frontend bundle sizes to backend query performance and CDN configuration.",
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD",
      description:
        "Automated deployment pipelines, infrastructure as code, and monitoring solutions. Docker, Kubernetes, and modern DevOps practices.",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "TypeScript",
    "Node.js",
    "Python",
    "PHP",
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "REST API",
    "Figma",
    "Adobe XD",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              My <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Comprehensive software development services designed to transform your business and deliver measurable results through quality
              craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto md:pb-0 pb-10 px-6">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper pt-10 pb-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.title}>
                <ServiceCard {...service} delay={index * 50} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-card/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Technology Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I leverage the latest technologies to build robust, scalable solutions
            </p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper pt-10 pb-10"
          >
            {techStack.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="flex-shrink-0 px-8 md:px-6 py-3 flex items-center justify-center bg-secondary border border-border rounded-full text-nowrap text-foreground font-medium whitespace-nowrap text-center">
                  {tech}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Development Process</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "I analyze your requirements, goals, and constraints to create a comprehensive project roadmap.",
              },
              {
                step: "02",
                title: "Design",
                description: "Wireframes, prototypes, and design systems are crafted with user experience as the top priority.",
              },
              {
                step: "03",
                title: "Development",
                description: "Agile sprints with regular check-ins ensure rapid progress and flexibility to adapt.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deployment, testing, and ongoing maintenance to keep your application running smoothly.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
