"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setSelectedCategory(data[0]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Learn In-Demand Skills
                <br />
                <span className="text-yellow-300">Build Your Future</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl">
                Join thousands of students mastering the most sought-after tech
                skills with expert-led courses and hands-on projects.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <a
                  href="#courses"
                  className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Explore Courses
                </a>
                <a
                  href="https://wa.me/918618501719"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Talk to Expert
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-yellow-300">10K+</div>
                  <div className="text-blue-200 text-sm">Students Trained</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-yellow-300">95%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-yellow-300">15+</div>
                  <div className="text-blue-200 text-sm">Countries</div>
                </div>
              </div>
            </div>
            {/* Right Video */}
            {/* Right Video */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/bz3-Hckk6hw?autoplay=1&mute=1"
                  title="VirajeTech Course Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 sm:h-80 lg:h-96 rounded-xl"
                ></iframe>
              </div>
              <p className="text-center text-blue-200 text-sm mt-3">
                Watch our course demo video
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* Content */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        id="courses"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Categories
              </h3>

              <div className="space-y-2">
                {categories.map((cat) => {
                  const isSelected = selectedCategory?.id === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-medium">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="flex-1">
            {selectedCategory && (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedCategory.name} Courses
                  </h2>

                  <span className="text-gray-500">
                    {selectedCategory.courses.length} courses available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCategory.courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Course Image */}
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                      />

                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {course.title}
                        </h3>

                        {/* Demo Preview Button */}
                        {course.demo && course.demo.trim() !== "" && (
                          <button
                            onClick={() => window.open(course.demo, "_blank")}
                            className="text-sm text-blue-600 mb-3 hover:underline"
                          >
                            ▶ Watch Demo
                          </button>
                        )}

                        {/* Buttons */}
                        <div className="flex gap-3 mt-4">
                          <a
                            href={course.content}
                            target="_blank"
                            className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
                          >
                            View Content
                          </a>

                          <a
                            target="_blank"
                            href="https://www.virajetech.com/auth/login"
                            className="flex-1 text-center bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-gray-800"
                          >
                            Enroll
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Alumni at
            </h2>
            <p className="text-gray-600 text-lg">
              Our graduates work at top companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
              },
              {
                name: "Microsoft",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
              },
              {
                name: "Meta",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png",
              },
              {
                name: "Netflix",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
              },
              {
                name: "Apple",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png",
              },
            ].map((company, index) => (
              <div key={index} className="transition-opacity duration-300">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-30 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className = "text-gray-500 font-semibold text-sm";
                    fallback.textContent = company.name;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose VirajeTech?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing the best learning experience with
              proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Mentors",
                description:
                  "Learn from industry professionals with 10+ years of real-world experience",
              },
              {
                icon: "💻",
                title: "Hands-on Projects",
                description:
                  "Build portfolio-worthy projects that demonstrate your skills to employers",
              },
              {
                icon: "⏱️",
                title: "Flexible Learning",
                description:
                  "Learn at your own pace with 24/7 access to all course materials",
              },
              {
                icon: "🤝",
                title: "Career Support",
                description:
                  "Get personalized career guidance and interview preparation",
              },
              {
                icon: "📈",
                title: "Proven Results",
                description:
                  "Join 10,000+ students who've transformed their careers",
              },
              {
                icon: "🔄",
                title: "Lifetime Access",
                description:
                  "Keep access to updated course content and future revisions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Reviews */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of satisfied learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Software Engineer at Google",
                avatar: "SC",
                review:
                  "The AI course completely transformed my career. I went from beginner to landing my dream job in 6 months!",
                rating: 5,
              },
              {
                name: "Mike Rodriguez",
                role: "Frontend Developer at Netflix",
                avatar: "MR",
                review:
                  "The hands-on projects were incredible. I built a full-stack application that helped me stand out in interviews.",
                rating: 5,
              },
              {
                name: "Emily Watson",
                role: "UX Designer at Apple",
                avatar: "EW",
                review:
                  "The mentorship program was invaluable. My mentor provided guidance that went beyond just technical skills.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students transforming their careers with our
            expert-led courses
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              href="https://wa.me/918618501719"
            >
              Talk on WhatsApp
            </a>
            <a
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              href="https://www.virajetech.com/contact-us"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
