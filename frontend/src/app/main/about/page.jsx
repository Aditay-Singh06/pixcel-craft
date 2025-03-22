'use client';
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Code, Terminal, Database, Cpu } from 'lucide-react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

function AboutPage() {
  const developers = [
    {
      name: "Aditya Singh",
      role: "Full Stack Developer",
      image: "/aditya.jpg",
      bio: "Full-stack developer with expertise in Node.js and Express.js. Leading the core architecture of PixcelCraft.",
      skills: ["Node.js", "API Design", "Express.js", "Performance Optimization"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Anishk Jaiswal",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Frontend specialist focusing on User Experience. Driving the performance improvements in PixcelCraft.",
      skills: ["React.js", "Figma", "UI/UX",  "Editor", "Version Control"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const features = [
    { icon: Code, title: "Clean Code", description: "Maintaining high code quality standards" },
    { icon: Terminal, title: "CLI Tools", description: "Powerful command-line utilities" },
    { icon: Database, title: "Optimized Storage", description: "Efficient image storage solutions" },
    { icon: Cpu, title: "Fast Processing", description: "High-performance image processing" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-100">About PixcelCraft</h1>
          <p className="text-gray-400 mt-2">Meet the team behind the technology</p>
        </div>
      </header> */}
      <Navbar/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Our Vision</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We're building the next generation of image processing tools, making complex image manipulation accessible to developers worldwide through simple, powerful APIs.
          </p>
        </div>

        {/* Features Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className=" bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="h-12 w-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 ">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {developers.map((dev, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col items-center">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
                />
                <h3 className="text-2xl font-bold text-gray-100 mt-4">{dev.name}</h3>
                <p className="text-blue-400 font-medium">{dev.role}</p>
                <p className="text-gray-400 text-center mt-4">{dev.bio}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {dev.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a href={dev.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href={dev.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href={dev.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={`mailto:${dev.name.toLowerCase().replace(' ', '.')}@PixcelCraft.dev`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer/>
      {/* <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              PixcelCraft
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-400 transition-colors">NPM</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500">
            © {new Date().getFullYear()} PixcelCraft. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default AboutPage;