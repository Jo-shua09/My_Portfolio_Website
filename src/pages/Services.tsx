import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Autoplay, Navigation as SwiperNavigation } from "swiper/modules";
import { services, techStack } from "@/assets/data/Services";

const Services = () => {
  const [servicesSwiper, setServicesSwiper] = useState(null);

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
          <div className="relative">
            <div className="absolute sm:hidden top-0 right-0 z-10 flex gap-5 md:gap-10 mb-12">
              <button
                onClick={() => servicesSwiper?.slidePrev()}
                className="bg-muted-foreground text-white font-bold p-2 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => servicesSwiper?.slideNext()}
                className="bg-muted-foreground text-white font-bold p-2 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <Swiper
              onSwiper={setServicesSwiper}
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
                  <ServiceCard {...service} delay={index * 50} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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

          <div className="relative">
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
                  <div className="p-3 bg-card rounded-xl border-border hover:border-primary transition-all duration-300 hover-lift text-center">
                    <div className="flex flex-col items-center gap-2">
                      {tech.name}
                      <img src={tech.img} alt="stack image" className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
