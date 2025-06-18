import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/userReducer";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import store from "../redux/store";

const Navbar = () => {
  type RootState = ReturnType<typeof store.getState>;
  const user = useSelector((state: RootState) => state.user);
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    setShowButton(false);
  };

  const toggleMenu = () => {
    setShowButton((prev) => !prev);
  };

  return (
    <header className="w-full h-[6vh] sm:h-[10vh] bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <nav className="flex items-center justify-between h-full text-sm sm:text-base text-[#714326]">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-lg sm:text-2xl text-[#714326] select-none"
          >
            SMS
          </Link>

          {/* Desktop Links */}
          <ul className="hidden sm:flex sm:space-x-6">
            <li>
              <Link
                to="/"
                className=" hover:scale-105 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className=" hover:scale-105 transition"
              >
                Students
              </Link>
            </li>
            <li className=" hover:scale-105 transition">
              Contact
            </li>
          </ul>

          {/* Desktop Auth Button */}
          <div className="hidden sm:block">
            {user.currentUser ? (
              <Link to="/">
                <button
                  onClick={handleLogout}
                  className="bg-[#714326] text-white py-2 px-4 rounded-lg hover:bg-white hover:text-[#714326] border transition font-semibold"
                >
                  Log out
                </button>
              </Link>
            ) : (
              
              <Link to="/login">
                <button className="bg-[#714326] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#714326] border transition font-semibold">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <button className="sm:hidden" onClick={toggleMenu}>
            <HiMenu className="text-2xl" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {showButton && (
          <div className="sm:hidden mt-1 p-5 bg-[#775743] text-white rounded-lg shadow-lg absolute right-4 top-[7vh] w-[300px] z-50">
            {user.currentUser ? (
              <div>
                 <ul className="text-sm sm:hidden space-y-2 mb-2 text-center">
                  <li>
                    <Link
                      to="/"
                      className=" hover:scale-105 active:bg-[white] px-[35px] active:py-[5px] active:rounded-lg active:text-[#422716] transition"
                    >
                      <button onClick={() => setShowButton(false)}> Home</button>
                     
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/students"
                      className=" hover:scale-105 active:bg-[white] px-[27px] active:py-[5px] active:rounded-lg active:text-[#422716] transition"
                    >
                     <button onClick={() => setShowButton(false)}>Students</button> 
                    </Link>
                  </li>
                  <li className=" hover:scale-105 active:bg-[white] px-[27px] active:py-[5px] active:rounded-lg active:text-[#422716] transition">
                   <button onClick={() => setShowButton(false)}>Contact</button> 
                  </li>
                </ul>
                
              <Link to="/">
                <button
                  onClick={handleLogout}
                  className="block w-full py-2 text-sm bg-[white] text-[#775743] rounded-md hover:opacity-80 transition"
                >
                  Log out
                </button>
              </Link>
              </div>
            ) : (
              <div>
                <ul className="text-sm sm:hidden space-y-2 mb-2 text-center">
                  <li>
                    <Link
                      to="/"
                      className=" hover:scale-105 active:bg-[white] px-[35px] active:py-[5px] active:rounded-lg active:text-[#422716] transition"
                    >
                      <button onClick={() => setShowButton(false)}>Home</button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/students"
                      className=" hover:scale-105 active:bg-[white] px-[27px] active:py-[5px] active:rounded-lg active:text-[#422716] transition"
                    >
                     <button onClick={() => setShowButton(false)}>Students</button> 
                    </Link>
                  </li>
                  <li className=" hover:scale-105 active:bg-[white] px-[27px] active:py-[5px] active:rounded-lg active:text-[#422716] transition">
                   <button onClick={() => setShowButton(false)}>Contact</button> 
                  </li>
                </ul>
                <Link to="/login">
                  <button className="block w-full py-1 text-sm bg-white text-[#714326] rounded-md hover:opacity-90 transition">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
