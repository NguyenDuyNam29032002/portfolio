
import React from 'react';
import { MapPin, Calendar, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Nguyễn Duy Nam
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Developer & Solution Architect
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Born: 29/03/2002</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Hanoi, Vietnam</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>Male</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
        </div>

        <div className="mt-12">
          <a 
            href="#about" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
