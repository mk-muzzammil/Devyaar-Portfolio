// import React, { Fragment } from 'react';
// import Header from '../components/header/Header';
// import Hero from '../components/hero/hero';
// import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
// import About from '../components/about/about';
// import PolicySection from '../components/PolicySection/PolicySection';
// import ServiceSection from '../components/ServiceSection/ServiceSection';
// import ProjectSection from '../components/ProjectSection/ProjectSection';
// import Testimonial from '../components/Testimonial/Testimonial';
// import TeamSection from '../components/TeamSection/TeamSection';
// import BlogSection from '../components/BlogSection/BlogSection';
// // import CtaSection from '../components/CtaSection/CtaSection';
// import Footer from '../components/footer/Footer';
// import Scrollbar from '../components/scrollbar/scrollbar';


// const HomePage = () => {

//     return (
//         <Fragment>
//             <div>
//                 <Header />
//                 <main className="page_content">
//                     <Hero />
//                     <FeaturesSection />
//                     <About />
//                     <PolicySection />
//                     <ServiceSection />
//                     <ProjectSection />
//                     <Testimonial />
//                     <TeamSection />
//                     <BlogSection />
//                     {/* 
//                     <CtaSection /> */}
//                 </main>
//                 <Footer />
//                 <Scrollbar />
//             </div>
//         </Fragment>
//     )
// };
// export default HomePage;

import React, { Fragment } from "react";
import Header2 from "../components/Header2/Header2";
import Hero2 from "../components/hero2/hero2";
import FeaturePartners from "../components/software-company-components/FeaturePartners";
import ServiceSection from "../components/software-company-components/ServiceSection/ServiceSection";
import About from "../components/software-company-components/about/about";
import ProcessTechnology from "../components/software-company-components/ProcessTechnology/ProcessTechnology";
import FaqSection from "../components/software-company-components/FaqSection/FaqSection";
import BlogSection from "../components/software-company-components/BlogSection/BlogSection";
import ContactSection from "../components/software-company-components/ContactSection";
import Scrollbar from "../components/scrollbar/scrollbar";
import Footer from "../components/software-company-components/Footer/Footer";

const HomePage2 = () => {
  return (
    <Fragment>
      <div>
        <Header2 />
        <main className="page_content">
          <Hero2 />
          <FeaturePartners />
          <ServiceSection />
          <About />
          <ProcessTechnology />
          <FaqSection />
          {/* <BlogSection /> */}
          <ContactSection />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage2;
