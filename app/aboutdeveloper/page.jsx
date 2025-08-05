// app/aboutdeveloper/page.jsx
'use client';

import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../dashboard/_components/Header";
import Footer from "../dashboard/_components/Footer";

const AboutDeveloper = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(238,231,248,1) 0%, rgba(239,239,239,1) 50%, rgba(238,231,248,1) 100%)",
        }}
      >
        <div className="flex justify-center items-center pt-20 pb-10">
          <div className="w-full max-w-md px-4">
            <article className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  alt="Vaishnavi Patil"
                  src="/cute.jpg"
                  className="h-full w-full object-cover object-top transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  About Me
                </h3>

                <p className="text-sm text-gray-700 text-justify font-medium">
                  Hiii...I am <strong>Vaishnavi Patil</strong>, a passionate full-stack developer with a strong
                  interest in building modern, scalable web applications. My projects
                  often use technologies like <strong>React, Tailwind CSS, Node.js, MongoDB,</strong> and <strong>Drizzle ORM</strong>.
                  I enjoy solving DSA problems, learning systems design, and applying computer science in real-world apps.
                </p>

                <div className="mt-4 flex gap-4">
                  <a
                    href="https://www.instagram.com/vaishnavi_p_30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-pink-500 hover:text-white text-pink-600 p-2 rounded-full transition"
                  >
                    <FaInstagram size={22} />
                  </a>
                  <a
                    href="https://github.com/vaishnavipatil49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-slate-900 hover:text-white text-slate-900 p-2 rounded-full transition"
                  >
                    <FiGithub size={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vaishnavi-patil-74717b27a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-blue-600 hover:text-white text-blue-600 p-2 rounded-full transition"
                  >
                    <FaLinkedinIn size={22} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutDeveloper;
