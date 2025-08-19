import { useState } from "react";
import { AlertCircle, PlusCircle, ClipboardList } from "lucide-react";

export default function CreateIssue() {
  const [issue, setIssue] = useState({ title: "", description: "", priority: "Medium", type: "Bug" });
  const [issues, setIssues] = useState([
    { id: 1, title: "Login page not responsive", description: "The login page breaks on mobile devices", priority: "High", type: "Bug", status: "Open" },
    { id: 2, title: "Add dark mode", description: "Implement dark mode across the application", priority: "Medium", type: "Feature", status: "Open" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (issue.title && issue.description) {
      setIssues([...issues, { id: issues.length + 1, ...issue, status: "Open" }]);
      setIssue({ title: "", description: "", priority: "Medium", type: "Bug" });
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
              Issue <span className="text-indigo-400">Tracker</span>
            </h1>
            <p className="text-gray-300 max-w-md">
              Create, assign, and track issues seamlessly with a clear dashboard.
            </p>

            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
                <PlusCircle className="w-6 h-6 text-indigo-400" />
                New Issue
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Title"
                  value={issue.title}
                  onChange={(e) => setIssue({ ...issue, title: e.target.value })}
                />
                <textarea
                  className="w-full p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
                  rows="3"
                  placeholder="Description"
                  value={issue.description}
                  onChange={(e) => setIssue({ ...issue, description: e.target.value })}
                ></textarea>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                    value={issue.priority}
                    onChange={(e) => setIssue({ ...issue, priority: e.target.value })}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>

                  <select
                    className="w-full p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                    value={issue.type}
                    onChange={(e) => setIssue({ ...issue, type: e.target.value })}
                  >
                    <option>Bug</option>
                    <option>Feature</option>
                    <option>Enhancement</option>
                    <option>Task</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md"
                >
                  Create Issue
                </button>
              </form>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30 h-[550px] flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
              <ClipboardList className="w-6 h-6 text-indigo-400" />
              Recent Issues
            </h2>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {issues.map((i) => (
                <div
                  key={i.id}
                  className="p-4 rounded-xl bg-indigo-900/40 border border-indigo-400/20 hover:bg-indigo-900/60 transition"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-white">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      {i.title}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium whitespace-nowrap ${
                        i.priority === "Critical"
                          ? "bg-red-500/20 text-red-300"
                          : i.priority === "High"
                          ? "bg-orange-500/20 text-orange-300"
                          : i.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {i.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{i.description}</p>
                  <div className="flex justify-between text-xs text-indigo-300 mt-2">
                    <span>{i.type}</span>
                    <span>{i.status}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
