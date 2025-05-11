
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 border-t">
      <div className="container px-4 mx-auto">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Brandweave BV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
