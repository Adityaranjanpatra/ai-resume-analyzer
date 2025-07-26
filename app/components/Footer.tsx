
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          Built with ❤️ by Aditya Ranjan Patra
        </p>
        <p className="text-xs mt-1">
          © {new Date().getFullYear()} AI Resume Analyzer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
