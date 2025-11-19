"use client";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About VirajeTech</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming careers through cutting-edge technology education and
              bridging the gap between learning and employment.
            </p>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Founded with a vision to democratize technology education,
                VirajeTech has been at the forefront of empowering individuals
                with in-demand tech skills. We believe in the transformative
                power of education and its ability to create meaningful career
                opportunities.
              </p>
              <p>
                From beginners to experienced professionals, we provide the
                tools and guidance needed to succeed in the ever-evolving tech
                landscape.
              </p>
              <p>
                With a focus on practical, hands-on learning and
                industry-relevant curriculum, we've helped thousands of students
                transition into successful tech careers across the globe.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology education and career development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Tech Training",
                description:
                  "Hands-on courses in AI, Cloud, Web Development, and emerging technologies",
              },
              {
                icon: "💼",
                title: "Career Placement",
                description:
                  "Job assistance and placement support in top companies worldwide",
              },
              {
                icon: "🌍",
                title: "Global Opportunities",
                description:
                  "Connecting talent with international job markets including USA, Canada, and Europe",
              },
              {
                icon: "🤝",
                title: "Community Building",
                description:
                  "Active learning communities and professional networking opportunities",
              },
            ].map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Specializations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "Artificial Intelligence & ML",
                "Cloud Computing (AWS/Azure/GCP)",
                "Web Development",
                "Data Science",
                "DevOps",
                "UI/UX Design",
                "Cybersecurity",
                "Mobile Development",
              ].map((specialization, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <span className="text-gray-700 font-medium">
                    {specialization}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Office Location */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at our headquarters
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                VirajeTech Headquarters
              </h3>

              <div className="space-y-4 text-gray-600 text-lg">
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Majestic Terraces, Electronic City, Bangalore, Karnataka
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+911234567890"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +91 8618501719
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us through any of
              these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8618501719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium">+91-8618501719</p>
              <p className="text-gray-500 text-sm mt-2">Quick chat support</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@virajetech.com"
              className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-blue-600 font-medium">info@virajetech.com</p>
              <p className="text-gray-500 text-sm mt-2">Detailed inquiries</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+8618501719"
              className="bg-purple-50 rounded-xl p-6 text-center hover:bg-purple-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-purple-600 font-medium">+91-8618501719</p>
              <p className="text-gray-500 text-sm mt-2">Direct conversation</p>
            </a>

            {/* Contact Form Link */}
            <a
              href="https://www.virajetech.com/contact-us"
              className="bg-orange-50 rounded-xl p-6 text-center hover:bg-orange-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Send Message</h3>
              <p className="text-orange-600 font-medium">Contact Form</p>
              <p className="text-gray-500 text-sm mt-2">Detailed message</p>
            </a>
          </div>

          {/* Website Link */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-gray-50 rounded-lg px-6 py-4">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                />
              </svg>
              <span className="text-gray-700">Visit our website:</span>
              <a
                href="https://www.virajetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                www.virajetech.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
