export default function PullRequests() {
  const pullRequests = [
    { id: 1, title: "Update README with setup guide", author: "dev1", status: "Open", repo: "project-tool" },
    { id: 2, title: "Fix navbar issues", author: "dev2", status: "Merged", repo: "website" },
    { id: 3, title: "Add dark mode", author: "dev3", status: "Closed", repo: "mobile-app" },
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white flex flex-col relative overflow-hidden">
      
      <div className="absolute top-20 -left-10 w-60 h-60 bg-indigo-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

      <main className="flex-grow container mx-auto px-6 py-16 relative z-10">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Pull <span className="text-indigo-400">Requests</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track, review, and manage all your pull requests in one place.
         </p>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>


        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-indigo-200/30">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">All Pull Requests</h2>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {pullRequests.map((pr) => (
              <div
                key={pr.id}
                className="p-4 rounded-xl bg-indigo-900/40 border border-indigo-400/20 flex justify-between items-start hover:bg-indigo-900/60 transition"
              >
                <div>
                  <h3 className="font-semibold text-white">{pr.title}</h3>
                  <p className="text-sm text-gray-300">
                    #{pr.id} by <span className="font-medium">{pr.author}</span> in {" "}
                    <span className="font-medium">{pr.repo}</span>
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium whitespace-nowrap ${
                    pr.status === "Open"
                      ? "bg-green-500/20 text-green-300"
                      : pr.status === "Merged"
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {pr.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
