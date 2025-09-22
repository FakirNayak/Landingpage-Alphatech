import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-grey-900 text-black py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <a
            href="mailto:info@company.com"
            className="text-sm text-black-300 hover:text-cyan-400"
          >
            Support@sanyacodegenies.in
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Number</h3>
          <p className="text-sm text-black-300">Mobile Number: 7451879273</p>
          <p className="text-sm text-black-300">
            WhatsApp Number: : 7451879273
          </p>
        </div>

        <div>
          <p className="text-sm text-black-300 font-bold">
            Address:65-66 AMR Teck park bommanhalli hosur road Bangalore  560068
          </p>
          <p className="text-sm text-black-300 font-bold">
            Head Office: Corprate office A-37 Block A sector 60 Noida 201309
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
