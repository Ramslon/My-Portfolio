const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Ramson Lunayo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
