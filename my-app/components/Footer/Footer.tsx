import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-pink text-white py-8 mt-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <nav className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-0">
            <Link href="#home" className="hover:text-gray-400">Home</Link>
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#courses" className="hover:text-gray-400">Courses</Link>
          </nav>
          
          <div className="flex gap-4 mb-6 sm:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>

        <div className="text-center text-white mt-6">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
