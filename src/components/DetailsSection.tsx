
import React, { useEffect } from "react";

const DetailsSection = () => {
  useEffect(() => {
    // Add Tally script dynamically
    const tallySrc = "https://tally.so/widgets/embed.js";
    const existingScript = document.querySelector(`script[src="${tallySrc}"]`);
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = tallySrc;
      script.onload = () => {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        } else {
          document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
            iframe.setAttribute('src', iframe.getAttribute('data-tally-src') || '');
          });
        }
      };
      document.body.appendChild(script);
    } else {
      // If script exists, just load the embeds
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.setAttribute('src', iframe.getAttribute('data-tally-src') || '');
        });
      }
    }
    
    return () => {
      // No need to remove the script as it might be used by other components
    };
  }, []);

  return <section id="details" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                The details
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Precision engineering meets adaptive intelligence
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Height:</span> 5'8"
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Capacity:</span> 55lbs
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Weight:</span> 140lbs
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Uptime:</span> 6hr
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Movement:</span> 1.5M/S
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form (replaced with Tally) */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Contact us
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Let's talk
              </h2>
            </div>
            
            {/* Card Content - Tally Form */}
            <div className="bg-white p-4 sm:p-8" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC",
              minHeight: "350px"
            }}>
              <iframe 
                data-tally-src="https://tally.so/embed/3xogVJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="400" 
                title="Contact form"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default DetailsSection;
