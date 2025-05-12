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
        <div className="max-w-2xl mx-auto">
          {/* Contact Form Card */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image */}
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