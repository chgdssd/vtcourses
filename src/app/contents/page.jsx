"use client";

import { useEffect, useState } from "react";

export default function ContentPage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoveredTopic, setHoveredTopic] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch("/contents.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
    
    // Check if mobile on mount and on resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: isMobile ? "auto" : "93vh",
        overflow: "hidden",
        backgroundColor: "#f8fafc",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: isMobile ? "100%" : "420px",
          minWidth: isMobile ? "auto" : "320px",
          backgroundColor: "white",
          borderRight: isMobile ? "none" : "1px solid #e2e8f0",
          borderBottom: isMobile ? "1px solid #e2e8f0" : "none",
          padding: isMobile ? "16px" : "24px",
          height: isMobile ? "auto" : "93vh",
          maxHeight: isMobile ? "50vh" : "none",
          overflowY: "auto",
          boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.1)" : "0 0 20px rgba(0,0,0,0.08)",
          background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          flexShrink: 0,
        }}
      >
        {/* Header Section */}
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "16px",
            borderBottom: "2px solid #f1f5f9",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: isMobile ? "32px" : "40px",
                height: isMobile ? "32px" : "40px",
                backgroundColor: "#3b82f6",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                flexShrink: 0,
              }}
            >
              <svg
                style={{ width: isMobile ? "16px" : "20px", height: isMobile ? "16px" : "20px" }}
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h2
                style={{
                  margin: "0 0 4px 0",
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "800",
                  color: "#1e293b",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.2",
                }}
              >
                Courses
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "14px" : "18px",
                  color: "#64748b",
                  fontWeight: "500",
                }}
              >
                {courses.length} courses available
              </p>
            </div>
          </div>
        </div>

        {/* Courses List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {courses.map((course) => {
            const isSelected = selectedCourse?.id === course.id;
            const isHovered = hoveredCourse === course.id;

            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                style={{
                  padding: isMobile ? "14px" : "18px",
                  cursor: "pointer",
                  backgroundColor: isSelected
                    ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                    : isHovered
                    ? "#f8fafc"
                    : "transparent",
                  background: isSelected
                    ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                    : isHovered
                    ? "#f8fafc"
                    : "white",
                  color: isSelected ? "white" : "#334155",
                  borderRadius: "12px",
                  border: isSelected
                    ? "2px solid #e2e8f0"
                    : isHovered
                    ? "2px solid #e2e8f0"
                    : "2px solid #f1f5f9",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontWeight: isSelected ? "700" : "500",
                  boxShadow: isSelected
                    ? "0 8px 25px rgba(59, 130, 246, 0.4)"
                    : isHovered
                    ? "0 4px 15px rgba(0, 0, 0, 0.08)"
                    : "0 1px 3px rgba(0, 0, 0, 0.05)",
                  transform: isSelected ? "scale(1.02)" : "scale(1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "4px",
                      height: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                    }}
                  />
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      fontWeight: "inherit",
                      lineHeight: "1.4",
                      flex: 1,
                      wordBreak: "break-word",
                    }}
                  >
                    {course.name}
                  </div>
                </div>

                {course.topics && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "8px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? "14px" : "16px",
                        opacity: isSelected ? 0.9 : 0.7,
                        fontWeight: isSelected ? "500" : "400",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <svg
                        style={{
                          width: isMobile ? "12px" : "14px",
                          height: isMobile ? "12px" : "14px",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      {course.topics.length} topics
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Help Text - Hide on mobile when course is selected */}
        {(!isMobile || !selectedCourse) && (
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#f8fafc",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: isMobile ? "14px" : "15px",
                color: "#64748b",
                fontWeight: "500",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px", flexShrink: 0 }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Click on any course to view its content and topics</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? "20px" : "40px",
          height: isMobile ? "auto" : "93vh",
          overflowY: "auto",
          backgroundColor: "#fafafa",
          minHeight: isMobile ? "50vh" : "auto",
        }}
      >
        {selectedCourse ? (
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Header */}
            <div style={{ marginBottom: isMobile ? "24px" : "40px" }}>
              <h1
                style={{
                  fontSize: isMobile ? "24px" : "36px",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: "0 0 12px 0",
                  lineHeight: "1.2",
                  letterSpacing: "-0.025em",
                  wordBreak: "break-word",
                }}
              >
                {selectedCourse.name}
              </h1>
              {selectedCourse.description && (
                <p
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    color: "#475569",
                    lineHeight: "1.6",
                    margin: 0,
                    fontWeight: "500",
                  }}
                >
                  {selectedCourse.description}
                </p>
              )}
            </div>

            {/* Topics Section */}
            <div>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "12px",
                marginBottom: isMobile ? "20px" : "28px",
                flexWrap: isMobile ? "wrap" : "nowrap",
              }}>
                <div style={{
                  width: "4px",
                  height: isMobile ? "20px" : "28px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "2px",
                  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  flexShrink: 0,
                }} />
                <h3
                  style={{
                    fontSize: isMobile ? "20px" : "24px",
                    fontWeight: "700",
                    color: "#0f172a",
                    margin: 0,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Course Topics
                </h3>
                <span style={{
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: "600",
                  color: "#64748b",
                  backgroundColor: "#f1f5f9",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  marginLeft: isMobile ? "0" : "8px",
                  flexShrink: 0,
                }}>
                  {selectedCourse.topics.length} topics
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "12px",
                }}
              >
                {selectedCourse.topics.map((topic, index) => {
                  const isTopicHovered = hoveredTopic === index;

                  return (
                    <a
                      key={index}
                      href={topic.link}
                      onMouseEnter={() => setHoveredTopic(index)}
                      onMouseLeave={() => setHoveredTopic(null)}
                      style={{
                        display: "block",
                        padding: isMobile ? "16px" : "24px",
                        backgroundColor: isTopicHovered 
                          ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" 
                          : "white",
                        background: isTopicHovered 
                          ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" 
                          : "white",
                        border: "1px solid #f1f5f9",
                        borderRadius: "7px",
                        textDecoration: "none",
                        color: isTopicHovered ? "white" : "#334155",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
                        transform: isTopicHovered && !isMobile
                          ? "translateY(-2px) scale(1.01)"
                          : "translateY(0) scale(1)",
                        boxShadow: isTopicHovered
                          ? "0 8px 25px rgba(59, 130, 246, 0.25)"
                          : "0 2px 8px rgba(0, 0, 0, 0.1)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Hover Effect Background */}
                      {isTopicHovered && (
                        <div style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                          pointerEvents: "none"
                        }} />
                      )}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          marginBottom: topic.description ? "8px" : "0",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "600",
                            fontSize: isMobile ? "16px" : "17px",
                            lineHeight: "1.4",
                            flex: 1,
                            wordBreak: "break-word",
                          }}
                        >
                          {topic.topic}
                        </span>
                        <svg
                          style={{
                            width: isMobile ? "16px" : "20px",
                            height: isMobile ? "16px" : "20px",
                            opacity: isTopicHovered ? 1 : 0.7,
                            flexShrink: 0,
                            marginLeft: "12px",
                            transition: "transform 0.2s ease",
                            transform: isTopicHovered ? "translateX(2px)" : "translateX(0)"
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      {topic.description && (
                        <p
                          style={{
                            margin: "0",
                            fontSize: isMobile ? "14px" : "15px",
                            opacity: isTopicHovered ? 0.95 : 0.8,
                            lineHeight: "1.5",
                            fontWeight: isTopicHovered ? "500" : "400",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {topic.description}
                        </p>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Enhanced Empty State */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: isMobile ? "40vh" : "100%",
              color: "#64748b",
              textAlign: "center",
              padding: isMobile ? "40px 20px" : "60px 40px",
            }}
          >
            <div style={{
              width: isMobile ? "80px" : "120px",
              height: isMobile ? "80px" : "120px",
              backgroundColor: "#f8fafc",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: isMobile ? "16px" : "24px",
              border: "2px dashed #e2e8f0"
            }}>
              <svg
                style={{
                  width: isMobile ? "32px" : "48px",
                  height: isMobile ? "32px" : "48px",
                  opacity: 0.7,
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: "700",
                margin: "0 0 8px 0",
                color: "#334155",
                letterSpacing: "-0.025em",
              }}
            >
              Select a Course
            </h3>
            <p
              style={{
                margin: "0",
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: "1.5",
                maxWidth: "400px",
                fontWeight: "500",
              }}
            >
              Choose a course from the sidebar to explore its topics and learning materials
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
