// PricingSection.jsx
import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Transitional SMS",
      price: "₹ 0.15/SMS",
      points: [
        "Check API stream with API key to integrate with your Software/Website.",
        "Send OTP or Transaction related Details",
        "You can send SMS via our Portal",
        "100% Instant Delivery on one – one transaction",
        "We help with DLT registration as well",
        "24/7 support ,instant delivery report",
      ],
      color: "bg-gradient-to-r from-gray-800 to-gray-900",
    },
    {
      name: "Promotional SMS",
      price: "₹ 0.10/SMS",
      points: [
        "Delivery Assurance is 85% to 90% on NON DND Numbers",
        "We help with DLT registration as well.",
        "The messages will be delivered via 6 Digit Numeric ID",
        "Life time validity",
        "24/7 support ,instant delivery report",
      ],
      color: "bg-gradient-to-r from-gray-800 to-gray-900",
    },
    {
      name: "Bulk Whatsapp SMS",
      price: "₹ 0.12 /SMS",
      points: [
        "Delivery Assurance is 95 % to 99%.",
        "Send Text with image and PDF, video , links",
        "Messages will be delivered via Virtual server number.",
        "Life time validity",
        "24/7 support ,instant delivery report",
      ],
      color: "bg-gradient-to-r from-gray-800 to-gray-900",
    },
    {
      name: "Whatsapp Api SMS",
      price: "₹ 0.15/SMS",
      points: [
        "Delivery Timing is 1 hours",
        "Message will be delivered by brand name and logo",
        "Mssages will be delivered by own Number.",
        "Life time validity.",
        "24/7 support ,instant delivery report.",
      ],
      color: "bg-gradient-to-r from-gray-800 to-gray-900",
    },
    {
      name: "Website Page",
      price: "₹ 3999/",
      points: [
        "20 pages (Dynamic Website)",
        "1 Year Free Domain and Hoisting",
        "Limited(500MB) Images and Videos",
        "1 Business Email Id",
        "Free SSL Certificate",
        "100% Responsive Design",
        "Unlimited (Bandwidth/Space)",
        "24/7 support (Phone/Email/Chat)",
      ],
      color: "bg-gradient-to-r from-gray-800 to-gray-900",
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12">Our Packages</h2>

      {/* Custom grid: first row 3, second row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 max-w-7xl w-full px-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center relative hover:scale-105 transform transition duration-300 ${plan.color}`}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 -mt-12 text-2xl">
              💬
            </div>
            <h3 className="text-xl font-bold mt-4 text-white">{plan.name}</h3>

            {/* Content grows, button always at bottom */}
            <div className="flex-grow w-full">
              <ul className="text-sm mt-6 space-y-3 text-left text-white">
                {plan.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    ✔ {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Always aligned button */}
            <div className="w-full flex justify-center mt-6">
              <button className="bg-white text-gray-900 px-5 py-2 rounded font-medium hover:bg-gray-200 transition">
                Price: <span className="font-bold">{plan.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
