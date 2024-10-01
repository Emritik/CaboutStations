import AboutUs from "./AboutUsPage";
import TestimonialPage from "./TestimonialPage";
import BookingHistoryPage from "./History";
import WhyChooseUs from "./WhyChooseUs.jsx";
import AOS from 'aos';
import { useEffect, useRef } from "react";
import Banner from "./Banner";

function Home() {
  const sectionsRef = useRef([]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
        } else {
          entry.target.classList.remove('scroll-animation');
        }
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach(section => {
      if(section){
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if(section){
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div>
      <div ref={el => sectionsRef.current[0] = el} data-aos="fade-up" data-aos-delay="200">
        <Banner id="banner" />
      </div>
      <div ref={el => sectionsRef.current[1] = el} data-aos="fade-up" data-aos-delay="400">
        <AboutUs id="aboutus"/>
      </div>
      <div ref={el => sectionsRef.current[2] = el} data-aos="fade-up" data-aos-delay="600">
        <WhyChooseUs id="whychooseus" />
      </div>
      <div ref={el => sectionsRef.current[3] = el} data-aos="fade-up" data-aos-delay="800">
        <BookingHistoryPage id="history" />
      </div>
      <div ref={el => sectionsRef.current[4] = el} data-aos="fade-up" data-aos-delay="1000">
        <TestimonialPage id="reviews" />
      </div>
    </div>
  );
}
export default Home;
