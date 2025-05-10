
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

const Blog = () => {
  // Add same animation effect as the Index page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 space-y-4 sm:space-y-8">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-center mb-8">
            Pulse Robot Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Stay updated with the latest news, insights, and developments in robotics and AI.
          </p>
        </div>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
