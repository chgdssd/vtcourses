"use client";

import { useState, useEffect } from "react";

export default function WhatsAppGroups() {
  const [copiedLink, setCopiedLink] = useState("");
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load groups from JSON
  useEffect(() => {
    fetch("/whatsapp.json")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading groups:", error);
        setLoading(false);
      });
  }, []);

  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(link);
      setTimeout(() => setCopiedLink(""), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading WhatsApp groups...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner - Keep as is */}
      <div className="bg-[#25D366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our WhatsApp Communities
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Connect with like-minded learners, get instant help, and grow together in our specialized WhatsApp groups.
            </p>
          </div>
        </div>
      </div>

      {/* Content - Simplified without categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Group Image */}
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Group Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.name}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                    </svg>
                    Join Group
                  </a>
                  <button
                    onClick={() => copyToClipboard(group.link)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    title="Copy link"
                  >
                    {copiedLink === group.link ? (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Message */}
        {copiedLink && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Link copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}