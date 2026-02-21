const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
            <h1 className="text-2xl font-bold text-blue-600">Ramson.dev</h1>
            <div className="space-x-6 ">
                <a href="#home" className="hover:text-blue-500">Home</a>
                <a href="#about" className="hover:text-blue-500">About</a>
                <a href="#projects" className="hover:text-blue-500">Projects</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;