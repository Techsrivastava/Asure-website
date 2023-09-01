import React from "react";

import Hero from "../assets/hero.png";
import Aboutus from "../assets/About us.png";
import AccordionItem from "../components/AccordionItem";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="w-full bg-white py-24">
          <div className="md:max-w-[1240px] m-auto grid  md:grid-cols-2  max-w-[600px]">
            <div className="flex flex-col m-auto justiyfy-start gap-4 ">
              <h1 className="py-2 md:text-2xl text-3xl text-[#9A092B] font-semibold">
                Empowering Dreams via Navigating Careers, Shaping Future Your
              </h1>
              <p className="py-2 text-4xl text-black font-md">Partner in 360° Growth</p>
            </div>
            <img className="md:order-last order-first" src={Hero} alt="" />
          </div>
        </div>
      </section>

      <section className=" ">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:mr-8">
            <img
              src={Aboutus} // Replace with your image URL
              alt="About Us"
            //   className="rounded-lg shadow-md mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis fermentum nisi, sit amet euismod odio rutrum eu.
              Vestibulum consectetur scelerisque lectus, et egestas metus
              facilisis eget. Phasellus varius libero vel justo ultricies,
              eu lacinia elit laoreet.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Under Construction</h2>
        <p className="text-gray-600">
          We are currently working on this section. Please check back later!
        </p>
      </div>
    </section>

    <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h1 className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </h1>
              <div className="FrequentlyAskQuestions w-full h-full text-center">
      <h1 className="text-4xl lg:text-6xl font-semibold text-black">Frequently Ask</h1>
      <h1 className="text-4xl lg:text-6xl font-semibold text-red-600">Questions</h1>
    </div>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is a recruitment agency?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How do recruitment agencies work?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="Why should I use a recruitment agency to fill positions at my company?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What types of recruitment solutions does Multi Recruit offer?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="What are the sectors or industries MultiRecruit provides recruitment solutions for?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
           
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    </>
  );
};

export default HomePage;
