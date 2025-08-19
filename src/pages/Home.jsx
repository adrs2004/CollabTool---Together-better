import React from "react";

function ListItem({ dotColor, title, status }) {
  return (
    <li className="flex items-center gap-3 p-3 hover:bg-indigo-800/50 rounded-lg transition-all">
      <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
      <span className="text-gray-100">{title}</span>
      <span className="ml-auto text-sm text-gray-400">{status}</span>
    </li>
  );
}

function ActivityCard({ title, color, icon, items, buttonText }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${color} p-3 rounded-lg text-white`}>{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <ListItem key={i} {...item} />
        ))}
      </ul>

      <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2">
        {buttonText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  const repos = [
    { dotColor: "bg-indigo-500", title: "project-collab-tool", status: "2h ago" },
    { dotColor: "bg-indigo-500", title: "docs-website", status: "2h ago" },
    { dotColor: "bg-indigo-500", title: "api-service", status: "2h ago" },
  ];

  const pullRequests = [
    { dotColor: "bg-green-500", title: "Fix login styling", status: "Open" },
    { dotColor: "bg-purple-500", title: "Add dark mode", status: "Merged" },
    { dotColor: "bg-gray-400", title: "Update dependencies", status: "Closed" },
  ];

  const projects = [
    { dotColor: "bg-yellow-400", title: "Website Redesign", status: "In Progress" },
    { dotColor: "bg-indigo-500", title: "Mobile App", status: "Planning" },
    { dotColor: "bg-green-500", title: "API Integration", status: "Completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-2/3 right-1/4 w-28 h-28 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
      <main className="flex-grow">

        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <div className="md:w-1/2 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Collaborate <span className="text-indigo-400">Better</span>,
                <br />Build <span className="text-indigo-400">Faster</span>
              </h1>
              <p className="text-lg text-gray-300">
                Your all-in-one platform for seamless project collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-md">
                  Create Repository
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-800 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
                  Import Project
                </button>
              </div>


              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((id) => (
                    <div key={id} className="w-10 h-10 rounded-full bg-indigo-700 border-2 border-indigo-900"></div>
                  ))}
                </div>
                <p className="text-gray-300">
                  Join <span className="font-semibold text-indigo-200">1000+</span> developers already collaborating
                </p>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl overflow-hidden h-80 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Project Dashboard</h3>
                    <p className="text-indigo-200">Your collaboration hub</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-transparent rounded-t-3xl shadow-lg">
          <div className="relative flex items-center justify-center mb-12">
        <div className="absolute bottom-0 w-40 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <h2 className="text-3xl font-extrabold tracking-wide text-gray-100 relative z-10 
              after:content-[''] after:block after:w-12 after:h-1 after:mx-auto after:mt-2 
              after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-purple-500">
              Recent Activity
          </h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActivityCard
              title="Recent Repositories"
              color="bg-indigo-600"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
              items={repos}
              buttonText="View all repositories"
            />

            <ActivityCard
              title="Pull Requests"
              color="bg-green-600"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>}
              items={pullRequests}
              buttonText="View all pull requests"
            />

            <ActivityCard
              title="Your Projects"
              color="bg-purple-600"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
              items={projects}
              buttonText="View all projects"
            />
          </div>
        </section>
<section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
  <div className="flex-1 flex justify-center">
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl w-full max-w-4xl overflow-hidden">

      <div className="flex items-center gap-2 bg-gray-800 px-4 py-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <p className="ml-auto text-gray-400 text-sm font-medium">Developer Issues Dashboard</p>
      </div>

      <div className="p-6 space-y-4">
        {[
          {
            devName: "Adarsh Kumar",
            project: "Collab Tool",
            issueTitle: "Fix login button alignment",
            techStack: ["React", "TailwindCSS", "Node.js"],
            contributors: 3,
          },
          {
            devName: "Priya Sharma",
            project: "API Service",
            issueTitle: "Update API endpoint documentation",
            techStack: ["Python", "FastAPI"],
            contributors: 2,
          },
          {
            devName: "Rahul Verma",
            project: "Docs Website",
            issueTitle: "Add dark mode toggle",
            techStack: ["JavaScript", "HTML", "CSS"],
            contributors: 4,
          },
        ].map((issue, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-gray-800 hover:bg-gray-700 rounded-xl p-4 transition-all shadow-sm"
          >
            {/* Developer & Project */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                {issue.devName[0]}
              </div>
              <div>
                <p className="text-white font-semibold">
                  {issue.devName} - <span className="text-indigo-400">{issue.project}</span>
                </p>
                <p className="text-gray-400 text-sm">{issue.issueTitle}</p>
              </div>
            </div>

            {/* Tech & Contributors */}
            <div className="flex flex-col items-end gap-1">
              <div className="flex flex-wrap gap-2 mb-1">
                {issue.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">{issue.contributors} contributors</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right Side: Clean & Professional Info Panel */}
  <div className="flex-1 flex flex-col justify-center gap-6">
    <div className="relative">
      {/* Heading with gradient accent */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 relative z-10
          after:content-[''] after:block after:w-16 after:h-1 after:mt-3 after:rounded-full
          after:bg-gradient-to-r after:from-indigo-400 after:via-purple-400 after:to-pink-400">
        Developer Issues
      </h2>

      {/* Subheading */}
      <p className="text-gray-300 mt-4 text-lg md:text-xl leading-relaxed">
        Discover real-time issues, contribute to projects, and showcase your coding skills. 
        Collaborate efficiently and stay on top of your team’s progress in one sleek dashboard.
      </p>
    </div>

    {/* Small accent cards for features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div className="bg-indigo-600/20 p-4 rounded-xl shadow-md hover:bg-indigo-600/30 transition-all">
        <p className="font-semibold text-indigo-200">Real-time Updates</p>
        <p className="text-gray-300 text-sm mt-1">Track issues instantly as they appear.</p>
      </div>
      <div className="bg-purple-600/20 p-4 rounded-xl shadow-md hover:bg-purple-600/30 transition-all">
        <p className="font-semibold text-purple-200">Team Collaboration</p>
        <p className="text-gray-300 text-sm mt-1">Work seamlessly with multiple contributors.</p>
      </div>
    </div>

    {/* Button */}
    <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-all w-max mt-4">
      Explore All Issues
    </button>
  </div>
</section>



      </main>
    </div>
  );
}
