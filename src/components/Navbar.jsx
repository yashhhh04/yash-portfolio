import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Yash<span className="text-blue-500">.Portfolio</span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-black text-white flex flex-col items-center justify-center transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xl py-4"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
