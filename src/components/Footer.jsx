import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-gray-300 border-t border-indigo-800">
      <div className="container mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        
          <div>
            <h3 className="text-xl font-bold text-white mb-2">CollabTool</h3>
            <p className="text-indigo-300 text-sm">
              Your all-in-one platform for seamless team collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
            <p className="text-gray-400 text-sm">support@CollabTool.com</p>
            <p className="text-gray-400 text-sm">+91 8528882012</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-indigo-400 transition">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-indigo-400 transition">
                <Link to="/repositories">Repositories</Link>
              </li>
              <li className="hover:text-indigo-400 transition">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:text-indigo-400 transition">
                <Link to="/pull-requests">Pull Requests</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} CollabTool. Built for better collaboration 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
