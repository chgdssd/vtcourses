"use client";

import { useState } from "react";

export default function PaymentInfo() {
  const [copiedField, setCopiedField] = useState("");

  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const paymentMethods = [
    {
      title: "Bank Transfer",
      icon: "🏦",
      details: [
        { label: "Account Name", value: "GANGILVIRAJE SOLUTIONS PRIVATE LIMITED", copyable: true },
        { label: "Account Number", value: "143905001523", copyable: true },
        { label: "IFSC Code", value: "ICIC0001439", copyable: true }
      ]
    },
    {
      title: "PayPal",
      icon: "🔗",
      details: [
        { label: "PayPal Link", value: "https://www.paypal.me/gangilviraje", copyable: true, isLink: true }
      ]
    },
    {
      title: "UPI Payments",
      icon: "📱",
      details: [
        { label: "UPI ID", value: "gangilvirajesolutionsprivatelimited.ibz@icici", copyable: true },
        { label: "Supported Apps", value: "Google Pay, PhonePe, Paytm" }
      ]
    }
  ];

  const requirements = [
    "Email ID",
    "Government ID Proof",
    "Passport-size Photo",
    "Phone Number",
    "Transaction ID"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your payment using any of the methods below. Please ensure you share all required documents after payment.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{method.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
              </div>
              
              <div className="space-y-3">
                {method.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {detail.label}
                    </label>
                    <div className="flex items-center gap-2">
                      {detail.isLink ? (
                        <a 
                          href={detail.value} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-blue-600 hover:text-blue-700 font-medium truncate"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="flex-1 text-gray-900 font-mono text-sm bg-gray-50 px-3 py-2 rounded-lg border">
                          {detail.value}
                        </span>
                      )}
                      {detail.copyable && (
                        <button
                          onClick={() => copyToClipboard(detail.value, `${method.title}-${detail.label}`)}
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedField === `${method.title}-${detail.label}` ? (
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Required Documents & Information</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            After completing your payment, please share the following documents and information with us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@virajetech.com" className="text-blue-100 hover:text-white transition-colors">
                info@virajetech.com
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
              <h3 className="font-semibold mb-2">Website</h3>
              <a href="https://www.virajetech.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                www.virajetech.com
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a href="https://wa.me/918618501719" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                +91-8618501719
              </a>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {copiedField && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}