import { Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/userReducer";
import { HiMenu } from "react-icons/hi"
import { useState } from "react";
//I imported the store to get the user state type
import store from "../redux/store";

const Navbar = () => {
  //I used the RootState type to get the user state type
  type RootState = ReturnType<typeof store.getState>;
  //I used the useSelector hook to get the user state
  const user = useSelector((state:RootState) => state.user);
  const [showButton, setShowButton] = useState<boolean>(false);

  //initialize the dispatch function
  const dispatch = useDispatch();

  const handleLogout = () => {
    //I dispatched the logout action here
     dispatch(logOut())
  
  }
  const showLogoutDarkmode = () => { 
setShowButton(!showButton)
  }

  return (
    //specifying the height of our navbar first
    <div className="h-[6vh] w-[100%]">
      {/* we will center the content of our navbar while making sure the width is 80% so it looks good*/}
      <div className=" mx-[0.8rem] my-[0.8rem]">
        {/* we will use flexbox to align the content of our navbar so that the logo, links and login will be inline and spaced evenly*/}
        <nav className="flex items-center justify-between text-[14px]  sm:text-[17px]">
          {/* logo */}
          <div className="Logo">
            <h1 className="text-[#714326] text-[20px] sm:text-[24px] select-none font-bold">SMS</h1>
          </div>
          {/* links */}
          <ul className="flex justify-between list-none text-[#714326] cursor-pointer">
            <Link to="/">
            <li className="p-[0.5rem] hover:text-[#422716] hover:text-[1.1rem]">Home</li>
            </Link>
            <Link to="/students">
            <li className="p-[0.5rem] hover:text-[#422716] hover:text-[1.1rem]">Students</li>
         </Link>
          <li className="p-[0.5rem] hover:text-[#422716] hover:text-[1.1rem]">Contact</li>
         </ul>


         <button className="sm:hidden" onClick={showLogoutDarkmode}>
          <HiMenu className="text-[#714326]"/>
          </button><div className="sm:hidden ">
          {showButton && <div className="bg-[#775743] text-[#fff] flex flex-col items-center  justify-center absolute top-[7vh] right-0 w-[100px] h-[10vh] rounded-[1rem] z-50 mr-[1rem]">
            {user.currentUser ? <Link to='/'><button className="
          cursor-pointer text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] py-2 mb-[1rem] text-[white] 
           border-none rounded-lg px-[1.2rem] hover:text-[0.9rem] p-[0.75rem] bg-[#714326] font-semibold"
           onClick={handleLogout}>
            Log out
          </button>
          </Link>: 
           <Link to="/login">
            <button className="
          cursor-pointer text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] py-2 text-[#714326]  border-none rounded-[1rem] px-[1.2rem] hover:text-[0.9rem] p-[0.75rem] mb-[1rem] bg-[white] font-semibold">
            Login
          </button>
          </Link>}
          </div>}
          </div>
         
          {/* login button */}
          <div className="hidden sm:block">
          {user.currentUser ? <Link to='/'><button className="
          cursor-pointer text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] hover:bg-[white] outline hover:text-[#714326] border hover:border-brown-500 py-3 text-[white] 
           border-none rounded-lg px-[1.2rem] hover:text-[0.9rem] p-[0.75rem] bg-[#714326] font-semibold"
           onClick={handleLogout}>
            Log out
          </button>
          </Link>: 
           <Link to="/login">
            <button className="
          cursor-pointer text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] hover:bg-[white] outline border hover:text-[#714326] hover:border-brown-500 py-3 text-[white]  border-none rounded-full px-[1.2rem] hover:text-[0.9rem] p-[0.75rem] bg-[#714326] font-semibold">
            Login
          </button>
          </Link>}
         
</div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
