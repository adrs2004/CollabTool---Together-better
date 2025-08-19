import { useState } from "react";
import { Plus, FolderKanban, ClipboardList, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", description: "Revamp company site", status: "In Progress" },
    { id: 2, name: "Mobile App", description: "iOS + Android app", status: "Planning" },
    { id: 3, name: "API Integration", description: "Connect to external APIs", status: "Completed" },
  ]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProject.name && newProject.description) {
      setProjects([...projects, { id: projects.length + 1, ...newProject, status: "Planning" }]);
      setNewProject({ name: "", description: "" });
    }
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-white flex flex-col relative overflow-hidden">
      
      <div className="absolute top-20 -left-10 w-60 h-60 bg-indigo-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

      <main className="flex-grow container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
             Projects <span className="text-indigo-400">Dashboard</span>
            </h1>
            <p className="text-gray-300 max-w-md">
              Plan, create, and monitor your team’s projects with clarity and style.
            </p>

            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
                <Plus className="w-6 h-6 text-indigo-400" />
                New Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Project Name"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                />
                <textarea
                  className="w-full p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                  rows="3"
                  placeholder="Description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md"
                >
                  Create Project
                </button>
              </form>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30 h-[550px] flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
              <FolderKanban className="w-6 h-6 text-indigo-400" />
              Active Projects
            </h2>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl bg-indigo-900/40 border border-indigo-400/20 flex justify-between items-start hover:bg-indigo-900/60 transition"
                >
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-white">
                      {p.status === "Completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <ClipboardList className="w-5 h-5 text-yellow-400" />
                      )}
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">{p.description}</p>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium whitespace-nowrap ${
                      p.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : p.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-gray-500/20 text-gray-300"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
