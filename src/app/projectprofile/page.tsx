import React from 'react';
import { GitBranch, Users, ExternalLink, Star, GitFork, Home, Settings, Calendar, CheckCircle, List } from 'lucide-react';

const ProjectProfile = () => {
  // Sample project data with member roles
  const project = {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce website with payment integration and user authentication.",
    projectLogo: "https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg",
    projectMembers: [
      { id: "60d5ec49f1b2c72d88f8e8b7", name: "John Doe", role: "Lead Developer" },
      { id: "60d5ec49f1b2c72d88f8e8b8", name: "Jane Smith", role: "Frontend Developer" }
    ],
    projectOwner: "60d5ec49f1b2c72d88f8e8b7",
    projectRepo: [
      "https://github.com/user/ecommerce-frontend",
      "https://github.com/user/ecommerce-backend"
    ],
    stats: {
      stars: 128,
      forks: 45
    },
    tasks: [
      { id: 1, title: "Implement Payment Gateway", status: "In Progress", assignedTo: "John Doe" },
      { id: 2, title: "Design Product Page", status: "Completed", assignedTo: "Jane Smith" },
      { id: 3, title: "Fix Authentication Bug", status: "To Do", assignedTo: "John Doe" }
    ]
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-secondary shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-8">
          <img 
            src={project.projectLogo}
            alt={project.title}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="text-xl font-bold text-muted-foreground">{project.title}</span>
        </div>
        <nav className="space-y-2">
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-100 hover:text-gray-900 transition-colors group">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-100 hover:text-gray-900 transition-colors group">
            <List className="w-5 h-5" />
            <span>Tasks</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-100 hover:text-gray-900 transition-colors group">
            <Calendar className="w-5 h-5" />
            <span>Calendar</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-100 hover:text-gray-900 transition-colors group">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="bg-primary rounded-lg shadow-sm p-6">
          <div className="flex items-start space-x-6">
            <img 
              src={project.projectLogo}
              alt={project.title}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-muted-foreground">{project.title}</h1>
                  <p className="mt-1 text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GitFork className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.stats.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Project Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Repository Section */}
            <div className="bg-primary rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center text-muted-foreground">
                <GitBranch className="w-5 h-5 mr-2 text-muted-foreground" />
                Repositories
              </h2>
              <div className="space-y-4">
                {project.projectRepo.map((repo, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex items-center space-x-3">
                      <GitBranch className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-white font-medium">{repo.split('/').pop()}</span>
                    </div>
                    <a 
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 flex items-center space-x-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks Section */}
            <div className="bg-primary rounded-lg shadow-sm p-6">
              <h2 className="text-lg text-muted-foreground font-semibold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-muted-foreground" />
                Tasks
              </h2>
              <div className="space-y-4">
                {project.tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-white">{task.title}</p>
                        <p className="text-xs text-gray-500">Assigned to: {task.assignedTo}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.status === "Completed" ? "text-green-600 bg-green-50" :
                      task.status === "In Progress" ? "text-yellow-600 bg-yellow-50" :
                      "text-red-600 bg-red-50"
                    }`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Team Members */}
          <div className="space-y-6">
            <div className="bg-primary rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center text-muted-foreground">
                <Users className="w-5 h-5 mr-2 text-white" />
                Team Members
              </h2>
              <div className="space-y-4">
                {project.projectMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    {member.id === project.projectOwner && (
                      <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                        Owner
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-primary rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 text-muted-foreground">Project Status</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-secondary rounded-lg text-center">
                  <p className="text-sm text-gray-500">Members</p>
                  <p className="text-xl font-semibold text-white">{project.projectMembers.length}</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg text-center">
                  <p className="text-sm text-gray-500">Repositories</p>
                  <p className="text-xl font-semibold text-white">{project.projectRepo.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProfile;