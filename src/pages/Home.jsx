import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import CompanyLogo from "../assets/d.jpg"
import img1 from "../assets/girl.jpg";
import { FaPlayCircle } from "react-icons/fa";
import SimplePlans from "../Components/SimplePlans";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";
import FAQSection from "../Components/FAQSection";
import StatsSection from "../Components/StatsSection";
import Footer from "../Components/Footer";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { FiDownload } from "react-icons/fi"; 
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdBusiness,
  MdGroup,
  MdScience,
} from "react-icons/md";
import { tr } from "framer-motion/client";
const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isvisible ,setIsVisible] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const data = [
    {
      name: "Suman Kumar",
      role: "Chief Executive officer",
      location: "Kolkata, India",
      email: "sumankumar@gmail.com",
      Phone: "656565****",
      company: "Devz",
      industry: "Software & Internet",
      size: "1k-10k",
      funding: "1k-10k",
      contactNo: "+910022001188",
    },
    {
      name: "Suman Kumar",
      role: "Chief Executive officer",
      location: "Kolkata, India",
      email: "sumankumar@gmail.com",
      Phone: "656565****",
      company: "Devz",
      industry: "Software & Internet",
      size: "1k-10k",
      funding: "1k-10k",
      contactNo: "+910022001188",
    },
    {
      name: "Suman Kumar",
      role: "Chief Executive officer",
      location: "Kolkata, India",
      email: "sumankumar@gmail.com",
      Phone: "656565****",
      company: "Devz",
      industry: "Software & Internet",
      size: "1k-10k",
      funding: "1k-10k",
      contactNo: "+910022001188",
    },
    {
      name: "Suman Kumar",
      role: "Chief Executive officer",
      location: "Kolkata, India",
      email: "sumankumar@gmail.com",
      Phone: "656565****",
      company: "Devz",
      industry: "Software & Internet",
      size: "1k-10k",
      funding: "1k-10k",
      contactNo: "+910022001188",
    },
    {
      name: "Suman Kumar",
      role: "Chief Executive officer",
      location: "Kolkata, India",
      email: "sumankumar@gmail.com",
      Phone: "656565****",
      company: "Devz",
      industry: "Software & Internet",
      size: "1k-10k",
      funding: "1k-10k",
      contactNo: "+910022001188",
    },
  ];
 const handleTable = () => {
  setIsVisible((prev) => !prev);
};

  return (
    <div className="relative">
    
      {/* {Text Heading} */}
      {/* <div class="relative w-full  bg-[#0f0c29] h-screen bg-[#0f0c29] overflow-hidden">
  
  <div class="absolute top--1/4 left-1/3 w-96 h-80 bg-white rounded-full blur-3xl opacity-20"></div>

  
  <div class="relative z-10 p-10">
    <h1 class="text-3xl font-bold">Foreground Content</h1>
  </div>
</div> */}

      <div className="w-full   py-[2%] px-[8%] ">
        <div className="max-w-[100%] mx-auto">
          <h1 className=" font-spaceGrotesk  text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] text-white font-light leading-tight tracking-tight text-left">
            Find & Verify Professional Emails
          </h1>
          <p className="font-spaceGrotesk sm:text-[3.75rem]   tracking-tight text-left text-white ">
            Instantly
          </p>
        </div>
      </div>

      {/* Middle Section (Styled Box) */}
      {/* Middle Section (Styled Box) */}
      {/* Middle Section (Styled Box) */}
      <div className={`" ${isvisible
      ?'bg-[#1b1f30] flex flex-row gap-5 rounded-2xl md:p-[2%] shadow-xl border border-[#2e3248] w-[85%] mx-auto mt-[1%]'
      : 'bg-[#1b1f30] rounded-[1.1rem] p-[4%] sm:p-[4%] md:p-[2%] shadow-xl border border-[#2e3248] max-w-[85%] w-full mx-auto mt-[1%]'}`}>
        {/* Label (stays outside) */}
        

        {/* Textarea with gray placeholder */}
        <div className={` ${isvisible?'w-[28%] mt-[2.3%] flex flex-col  p-[1.5%]  rounded-[1.1rem]  shadow- bg-[#1C212E] border border-[#5d616E]':'w-full'}`}> {isvisible &&(<p className="text-gray-300 text-center text-lg">Search Records</p>)}
  <div className={`${isvisible
    ?"bg-white h-[42%] w-[100%] rounded-xl mt-[6%] mb-[88%]  "
    :"bg-white w-full h-[30%] rounded-md"
  }`}>
          <textarea
            className={`${isvisible?"w-full resize-none  text-black pl-[5%] pt-[2%] focus:outline-none shadow-inner placeholder-gray-500"
              :"w-full resize-none  text-black pl-[1%] pt-[1%]  focus:outline-none shadow-inner placeholder-gray-500"}`}
            placeholder={`Type or Paste Domain Address:`}
          ></textarea>
          <div className={`${isvisible?"flex flex-col gap-2 pl-[6%]":"flex flex-col gap-2 pl-[1.5%] pb-[1.5%]"}` }>
            <p className="text-black">company.com</p>
            <p className="text-black">google.com</p>
            <p className="text-black">github.com</p>
          </div>
        </div>
        {/* Search Button */}
        <button onClick={handleTable} className="w-full mt-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-[#6e61e6] to-[#ef497a] hover:from-[#5a4edc] hover:to-[#e73368] transition duration-300">
          Search Records
          <RiSearchEyeLine color="white" size={23} />
        </button>
        </div>
      
        {/* <textarea
    className="w-full h-40 p-4 rounded-md bg-white text-black resize-none focus:outline-none shadow-inner placeholder-gray-500"
    placeholder={`Type or Paste Domain Address:`}
  ></textarea> */}

        

  {isvisible && (<div className="max-w-[78%] bg-white rounded-xl mt-[2.5%] w-full">
  <div className="flex flex-col md:flex-row justify-between md:justify-evenly md:gap-12 gap-4 mt-[3%] px-[2%]">
    {/* Checkbox + Select */}
    <div className="flex items-start gap-2  ">
       <input type="checkbox" className="mt-[7%] h-[22%] w-4" />
      <p className="text-black mb-2 mt-2">Select</p>
       <button className="inline-flex items-center gap-2 mb px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl shadow hover:scale-95 hover:shadow-lg transition-all duration-300">
      <FiDownload className="w-4 h-4" />
      <span>Download</span>
    </button>
    </div>

    {/* Total contacts */}
    <div className="flex  flex-row gap-2">
    <div className="flex flex-row  gap-2">
    <div>
      <p className="text-black font-inter font-semibold text-sm md:text-base text-center mt-[3%] ml-[15%]  ">
        6M+ contacts from 3M+ companies
      </p>
    </div>

    {/* Rows per page */}
    <div className="flex flex-col md:flex-row items-center gap-1 mt-[1%]">
      <p className="text-gray-400 text-sm">Rows Per Page</p>
      <select className="text-black border-2 border-gray-500 text-sm">
        <option className="text-black">10</option>
        <option className="text-black">20</option>
        <option className="text-black">30</option>
      </select>
    </div>
    </div>

    {/* Pages */}
   <div className="flex flex-row gap-2">
     <div className="text-black text-sm text-center md:text-left mt-[10%]">
      Pages 1 of 130,180
    </div>

    {/* Arrows */}
    <div className="flex gap-1 justify-center mt-[8%]">
      <BiLeftArrowCircle color="black" size={28} />
      <BiRightArrowCircle color="black" size={28} />
    </div>
  </div>
  </div>
   </div>

  {/* Table Section */}

<div className="overflow-x-auto p-[2%]">
    <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
      <thead className="bg-gray-100 text-xs md:text-sm">
        <tr>
          <th className="px-[3%] py-[1%] text-left font-medium text-gray-700">Name</th>
          <th className="px-[3%] py-[1%] text-left font-medium text-gray-700">Contact</th>
          <th className="px-[5%] py-[1%]  text-left font-medium text-gray-700">Company</th>
          <th className="px-[4%] py-[1%]  text-left font-medium text-gray-700">Company Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index} className="border-t text-sm">
            <td className="px-[1%] py-[1%]">
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-[3%]" />
                <div>
                  <div className="font-medium text-gray-800">{person.name}</div>
                  <div className="text-gray-500">{person.role}</div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <MdLocationOn className="w-[10%] h-[10%] mr-[2%]" />
                    {person.location}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-[1%] py-[1%]">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MdEmail className="w-[10%] h-[10%]" />
                  <span className="pr-[1%]">{person.email}</span>
                  <button className="text-sm px-[5%] py-[2%] rounded-full text-black font-semibold border border-gray-400 bg-white hover:bg-gray-200 shadow">
                    View
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MdPhone className="w-[10%] h-[10%]" />
                  <span className="pr-23">{person.Phone}</span>
                  <button className="text-sm px-4 py-1 rounded-full text-black font-semibold border border-gray-400 bg-white hover:bg-gray-200 shadow">
                    Find
                  </button>
                </div>
              </div>
            </td>
            <td className="px-[5%] py-[2%]">
              <div className="flex items-center space-x-3">
                <img
                  src={CompanyLogo}
                  alt=""
                  className="h-[3.25rem] w-[3.25rem] rounded-full shadow-lg object-contain"
                />
                <div>
                  <div className="font-medium text-gray-800">{person.company}</div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <MdLocationOn className="w-[1.3rem] h-[1.3rem] mr-[2%]" />
                    {person.location}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-700">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <MdBusiness className="w-[1rem] h-[1rem]" />
                  <span>{person.industry}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdGroup className="w-[1rem] h-[1rem]" />
                  <span>{person.size}</span>
                  <MdScience className="w-[1rem] h-[1rem]" />
                  <span>{person.funding}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdPhone className="w-[1rem] h-[1rem]" />
                  <span>{person.contactNo}</span>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>)}

      </div>

      {/* {How It Works} */}

      <div className="flex flex-col justify-center lg:gap-80 md:flex-row items-center gap-3 mt-20 px-5 md:px-20 relative">
        <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8 w-[600px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
        

      </div>
        {/* Left Text Section */}
        <div className="flex flex-col gap-8 text-left max-w-xl relative">
          <h2 className="text-white text-[3rem] font-spaceGrotesk ">
            How It Works
          </h2>

          {/* Step 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-400 font-spaceGrotesk">
              1. Enter A Name Or Domain
            </h3>
            <p className="text-gray-500 text-sm font-inter">
              Start by entering the person’s name and their company, or just the
              company’s domain (e.g., example.com). Our system will start
              searching immediately.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-spaceGrotesk">
              2. We Search Public Sources
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Our tool scans thousands of publicly available web pages,
              professional profiles, corporate websites, and social platforms to
              locate matching email patterns.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-spaceGrotesk">
              3. Verify Every Email
            </h3>
            <p className="text-gray-500 font-inter">
              Our tool scans thousands of publicly available web pages,
              professional profiles, corporate websites, and social platforms to
              locate matching email patterns.
            </p>
          </div>
        </div>

        {/* Right Side Image Card with Gradient Border */}
        <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] p-[2px] rounded-2xl shadow-xl">
          <div className="relative w-[18.75rem] sm:w-[25rem] md:w-[28.75rem] lg:w-[23.75rem] h-[18.75rem] sm:h-[25rem] md:h-[28.75rem] lg:h-[23.75rem] rounded-2xl overflow-hidden bg-[#111827]">
            <img
              src={img1}
              alt="video"
              className="w-full h-full object-cover rounded-2xl bg-opacity-10"
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex justify-center items-center  bg-opacity-40 hover:bg-opacity-40 transition duration-300">
              <FaPlayCircle className="text-white text-6xl cursor-pointer hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
      <SimplePlans />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <FAQSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;
