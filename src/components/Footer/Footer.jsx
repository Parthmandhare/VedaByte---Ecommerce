import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

import logo from "../../assets/Logol.png"
import payment from "../../assets/payment_img.png"
import { IoIosMail } from "react-icons/io";
import Faq from "../FAQ/Faq";

const FooterLinks = [
  {
    title: "Laptops",
    link: "/#",
  },
  {
    title: "Desktop",
    link: "/#about",
  },
  {
    title: "Printers",
    link: "/#contact",
  },
  {
    title: "Accessories",
    link: "/#blog",
  },
];

const FooterLinks1 = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Best Sellers",
    link: "/#about",
  },
  {
    title: "Testimonials",
    link: "/#contact",
  },
  {
    title: "Brands",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              <img src={logo} alt="not found" />
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
            Welcome to Vedabyte Store electronics store. We offer high-quality refurbished laptops and desktops from popular brands like Dell, HP, and Lenovo at affordable prices.
            </p>
            
            <img clas src={payment} alt="not found" className=" mt-14" />
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks1.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="pt-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Renuka Mata Nagar, Maharashtra 440034</p>
          

                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 98900 36028</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <IoIosMail />
                  <p>sales@vedabyte.com</p>
                </div>

                {/* <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>CIN: U47411MH2023PTC411446</p>
                </div> */}

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <Faq/> */}
      </div>
    </div>
  );
};

export default Footer;
