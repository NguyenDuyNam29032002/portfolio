
import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "THADICO - HR Management System",
      period: "11/2024 - 5/2025",
      client: "DAI QUANG MINH Company (THADICO)",
      description: "Comprehensive HR management system for employee data management",
      features: [
        "Employee database management with advanced search and filtering",
        "Department and role management system",
        "Report generation and data export functionality"
      ],
      technologies: ["Laravel", "PostgreSQL", "RabbitMQ", "Redis", "Keycloak", "AWS S3", "Docker"],
      teamSize: 8,
      role: "Full-Stack Developer"
    },
    {
      title: "THADICO - Real Estate Management",
      period: "4/2024 - 10/2024",
      client: "DAI QUANG MINH Company (THADICO)",
      description: "Real estate management system with comprehensive property tracking",
      features: [
        "Property listing and management interface",
        "Customer relationship management",
        "Sales tracking and reporting system",
        "Document management and approval workflow"
      ],
      technologies: ["Laravel", "MongoDB", "RabbitMQ", "Redis", "AWS S3", "Docker"],
      teamSize: 6,
      role: "Full-Stack Developer"
    },
    {
      title: "THADICO E-Learning Platform",
      period: "9/2023 - 3/2024",
      client: "DAI QUANG MINH Company (THADICO)",
      description: "Online learning platform for corporate training and development",
      features: [
        "Course management and content delivery system",
        "User progress tracking and analytics",
        "Assessment and certification system",
        "Interactive learning modules"
      ],
      technologies: ["Laravel", "PostgreSQL", "Keycloak", "RabbitMQ", "Redis", "AWS S3"],
      teamSize: 8,
      role: "Full-Stack Developer"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{project.teamSize} members</span>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium mb-4">Client: {project.client}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Role:</span> {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
