import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Landing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">HR Insight</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-slate-200">About Us</a></li>
            <li><a href="#services" className="hover:text-slate-200">Services</a></li>
            <li><a href="#contact" className="hover:text-slate-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Building Better Workplaces Together</h2>
          <p className="text-lg mb-6">Customized HR Solutions for Business Excellence</p>
          <a href="#services" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition">Explore Our Services</a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">About Us</h3>
          <p className="text-slate-700 max-w-2xl mx-auto">
            At HR Insight, we are committed to fostering strong employee relationships that fuel business success. 
            Our mission is to empower organizations with comprehensive HR services designed to drive growth and cultivate a healthy, productive work environment.
            We envision a world where businesses and their employees thrive together, creating lasting success for all.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-100 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Recruitment & Staffing</h4>
              <p className="text-slate-700">We find the right talent for your business to drive success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Employee Relations</h4>
              <p className="text-slate-700">Fostering a positive work culture and handling workplace issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Training & Development</h4>
              <p className="text-slate-700">Empower your team with the latest skills and knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 HR Insight. All Rights Reserved.</p>
          <ul className="flex justify-center space-x-4 mt-4">
            <li><a href="#about" className="hover:text-slate-200">About Us</a></li>
            <li><a href="#services" className="hover:text-slate-200">Services</a></li>
            <li><a href="#contact" className="hover:text-slate-200">Contact</a></li>
            <li><a href="#" className="hover:text-slate-200">Privacy Policy</a></li>
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-slate-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-slate-200"><FaTwitter /></a>
            <a href="#" className="hover:text-slate-200"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-slate-200"><FaInstagram /></a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default Landing;
