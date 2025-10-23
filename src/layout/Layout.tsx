import { FaPlay, FaUpload } from 'react-icons/fa';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 fixed top-0 left-0 w-full p-4 text-black flex items-center justify-between shadow-md">
        <div className="flex items-center">
          {/* Ikon yang menyerupai Videy */}
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
            <FaPlay className="text-white" />
          </div>
          <h1 className="text-xl font-bold">No Ads Stream</h1>
        </div>
        <a
          href="/upload.html"
          className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpload />
          <span>Upload</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white text-black pt-20">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-black text-center mt-auto">
        <p>© 2024 No Ads Stream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;