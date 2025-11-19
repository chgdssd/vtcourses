"use client";

export default function SuccessStories() {
  const stories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "/priya.jpg",
      story:
        "VirajeTech's AI course transformed my career. I went from a beginner to landing my dream job at Google within 6 months. The hands-on projects were incredible!",
      before: "Fresher",
      after: "₹25 LPA",
      course: "AI & Machine Learning",
    },
    {
      name: "Rahul Kumar",
      role: "Cloud Architect at Amazon",
      image: "/rahul.jpg",
      story:
        "The AWS certification program helped me transition from a support role to a Cloud Architect position with a 300% salary hike. The mentorship was exceptional.",
      before: "IT Support",
      after: "₹35 LPA",
      course: "AWS Solutions Architect",
    },
    {
      name: "Anita Patel",
      role: "Frontend Developer at Microsoft",
      image: "/anita.jpg",
      story:
        "As a commerce graduate, I never thought I could break into tech. VirajeTech's full-stack program made it possible. The placement support was outstanding.",
      before: "Commerce Graduate",
      after: "₹18 LPA",
      course: "Full Stack Development",
    },
    {
      name: "Sanjay Mehta",
      role: "Data Scientist at IBM",
      image: "/sanjay.jpg",
      story:
        "The Data Science program provided real-world projects that helped me build a strong portfolio. I received 3 job offers within a month of completion.",
      before: "Business Analyst",
      after: "₹28 LPA",
      course: "Data Science & Analytics",
    },
    {
      name: "Neha Reddy",
      role: "DevOps Engineer at Netflix",
      image: "/neha.jpg",
      story:
        "The DevOps program's practical approach and industry connections helped me land a role at Netflix. The career guidance was invaluable.",
      before: "System Admin",
      after: "₹40 LPA",
      course: "DevOps Engineering",
    },
    {
      name: "Arjun Singh",
      role: "Product Manager at Meta",
      image: "/arjun.jpg",
      story:
        "VirajeTech's product management course helped me transition from technical roles to product leadership. The case studies and mock interviews were extremely helpful.",
      before: "Tech Lead",
      after: "₹45 LPA",
      course: "Product Management",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real stories from our students who transformed their careers with
            VirajeTech
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Students Placed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">₹20L+</div>
            <div className="text-gray-600">Average Salary</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Student Info Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{story.role}</p>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 italic">"{story.story}"</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Course:</span>
                    <span className="font-medium text-gray-900">
                      {story.course}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Before:</span>
                    <span className="font-medium text-gray-900">
                      {story.before}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Package:</span>
                    <span className="font-bold text-green-600">
                      {story.after}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers with
            VirajeTech
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              href="/#courses"
            >
              Browse Courses
            </a>
            <a
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              href="https://wa.me/918618501719"
            >
              Talk to Counselor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
