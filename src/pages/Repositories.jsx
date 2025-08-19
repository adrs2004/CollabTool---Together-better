import { useState } from "react";
import { FolderGit2, PlusCircle, Download } from "lucide-react";

export default function Repositories() {
  const [repos, setRepos] = useState([
    { id: 1, name: "project-tool", lastUpdated: "2 days ago" },
    { id: 2, name: "docs-site", lastUpdated: "1 week ago" },
    { id: 3, name: "api-service", lastUpdated: "3 days ago" },
  ]);
  const [repoName, setRepoName] = useState("");
  const [importUrl, setImportUrl] = useState("");

  const createRepo = (e) => {
    e.preventDefault();
    if (repoName) {
      setRepos([...repos, { id: repos.length + 1, name: repoName, lastUpdated: "Just now" }]);
      setRepoName("");
    }
  };

  const importRepo = (e) => {
    e.preventDefault();
    if (importUrl) {
      const name = importUrl.split("/").pop().replace(".git", "");
      setRepos([...repos, { id: repos.length + 1, name, lastUpdated: "Just now" }]);
      setImportUrl("");
    }
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-white flex flex-col relative overflow-hidden">

      <div className="absolute top-20 -left-10 w-60 h-60 bg-indigo-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

      <main className="flex-grow container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Manage Your <span className="text-indigo-400">Repositories</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Create new repositories or import existing ones with ease.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          <form
            onSubmit={createRepo}
            className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
              <PlusCircle className="w-6 h-6 text-indigo-400" />
              Create Repository
            </h2>
            <input
              className="w-full mb-4 p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
              placeholder="Repository Name"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
            />
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md"
            >
              Create
            </button>
          </form>


          <form
            onSubmit={importRepo}
            className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
              <Download className="w-6 h-6 text-green-400" />
              Import Repository
            </h2>
            <input
              className="w-full mb-4 p-3 rounded-lg bg-indigo-900/40 border border-indigo-400/30 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400"
              placeholder="Git URL"
              value={importUrl}
              onChange={(e) => setImportUrl(e.target.value)}
            />
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md"
            >
              Import
            </button>
          </form>
        </div>


        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-100">
            <FolderGit2 className="w-6 h-6 text-indigo-400" />
            Your Repositories
          </h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {repos.map((r) => (
              <div
                key={r.id}
                className="p-4 rounded-xl bg-indigo-900/40 border border-indigo-400/20 flex justify-between items-center hover:bg-indigo-900/60 transition"
              >
                <div>
                  <h3 className="font-semibold text-white">{r.name}</h3>
                  <p className="text-sm text-gray-300">Updated {r.lastUpdated}</p>
                </div>
                <button className="text-indigo-300 hover:text-white transition-colors">•••</button>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
