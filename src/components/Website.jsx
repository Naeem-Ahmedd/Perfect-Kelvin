import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workImages = [
    "https://media.istockphoto.com/id/838473458/photo/air-conditioner-units-on-a-roof-of-industrial-building-with-blue-sky-and-clouds-in-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=FGl8GAGy-KvhLuovQ5aZlbmE9hqdFtk1OUQJWunSZ1o=",
    "https://plus.unsplash.com/premium_photo-1680700148912-fa9b748a3885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWMlMjBhbmQlMjByZWZlcmlnZXJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1526312770748-63dd8c6b94e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdG9yJTIwY3ljbGV8ZW58MHx8MHx8fDA%3D",
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % workImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + workImages.length) % workImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const partners = [
    {
      name: "Partner 1",
      logo: "https://plus.unsplash.com/premium_photo-1668902826965-4c233f0af0f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Partner 2",
      logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueSUyMGxvZ29zfGVufDB8fDB8fHww",
    },
    {
      name: "Partner 3",
      logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ29zfGVufDB8fDB8fHww",
    },
    {
      name: "Partner 4",
      logo: "https://images.unsplash.com/photo-1554048968-670223ca9141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Perfect Kelvin</div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-200 transition-colors">
                Home
              </a>
              <a href="#work" className="hover:text-blue-200 transition-colors">
                Our Work
              </a>
              <a
                href="#partners"
                className="hover:text-blue-200 transition-colors"
              >
                Partners
              </a>
              <a
                href="#contact"
                className="hover:text-blue-200 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <a
                href="#home"
                className="block hover:text-blue-200 transition-colors"
              >
                Home
              </a>
              <a
                href="#work"
                className="block hover:text-blue-200 transition-colors"
              >
                Our Work
              </a>
              <a
                href="#partners"
                className="block hover:text-blue-200 transition-colors"
              >
                Partners
              </a>
              <a
                href="#contact"
                className="block hover:text-blue-200 transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow pt-16">
        {/* Our Work Section */}
        <section
          id="work"
          className="py-12 bg-gradient-to-r from-blue-50/50 to-purple-50/50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Our Work
            </h2>
            <div className="relative max-w-4xl mx-auto h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden group">
              <div className="relative h-full">
                <img
                  src={workImages[currentImageIndex]}
                  alt={`Work sample ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {workImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-12 bg-white/70">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Our Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/90 rounded-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact"
          className="py-12 bg-gradient-to-r from-purple-50/50 to-blue-50/50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Contact Us
            </h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6 bg-white/90 p-6 rounded-lg shadow-lg backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a company dedicated to delivering exceptional solutions
                and creating lasting partnerships with our clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> 123 Business Street
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> info@company.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
