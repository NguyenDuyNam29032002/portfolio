
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Nguyễn Duy Nam
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:duynam2003@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100014550833431" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
