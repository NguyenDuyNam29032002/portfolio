import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in building scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a dedicated programmer with a strong foundation in both frontend and backend development. 
              My experience spans across modern web technologies, with a focus on creating efficient and user-friendly solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing my degree in Information Technology at Hanoi University of Industry, 
              I combine academic knowledge with practical experience gained through various projects and internships.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">Bachelor of Information Technology</p>
                <p className="text-sm text-gray-500">HANOI VOCATIONAL COLLEGE OF TECHNOLOGY (2020-2024)</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <p className="text-gray-600">Email: duynam2003@gmail.com</p>
                <p className="text-gray-600">Phone: 0386371850</p>
                <p className="text-gray-600">Address: So 24, ngo 245, Dinh Cong, Hoang Mai, Ha Noi</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Frontend</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>React.js</div>
                    <div>Vue.js</div>
                    <div>JavaScript</div>
                    <div>HTML/CSS</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Backend</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Laravel</div>
                    <div>Node.js</div>
                    <div>PostgreSQL</div>
                    <div>MongoDB</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redis</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jenkins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
