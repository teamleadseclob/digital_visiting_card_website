import React from 'react'; 
import Logo from '.././assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-40 h-auto">
          <img src={Logo} alt="Website Logo" className="object-contain" />
        </div>

        {/* Login/Signup Buttons */}
        <div className="flex flex-row items-center space-x-2">
          <button className="text-[#1167b1] font-semibold border border-[#1167b1] px-4 py-1 rounded-lg hover:bg-blue-50">
            Login
          </button> 
          <button className="bg-[#1167b1] text-white px-4 py-1  rounded-lg hover:bg-[#0f5b9d]">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

