import { FunctionComponent, useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
//i imported store here becuase i want to use the store to get the user state type
import  store from "../redux/store";

const Login: FunctionComponent = () => {
  // state declarations
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // I used the RootState type to get the user state type
  type RootState = ReturnType<typeof store.getState>;
  
  const dispatch = useDispatch(); // initialize the dispatch function
  const user  = useSelector((state: RootState) => state.user); // get the user state from the store

  useEffect(() => {
    const timeout = setTimeout(() => {
      // alert the user to use the following credentials to login
      alert(
        "                    USE THESE TO LOG IN\n   \nEmail: example@123.com✅\n Password: 123456 ✅"
      );
    }, 2000);

    // clear the timeout to avoid memory leaks(prevent page from refreshing twice)
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // function to toggle password visibility on login form
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // function to handle login when login button is clicked
  const handleLogin = () => {
    console.log(email, password);
    // simulate a login request
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    //hard coded email domains to check from
    const validDomains = [
      "gmail.com",
      "live.com",
      "qq.com",
      "126.com",
      "163.com",
      "123.com",
      "yahoo.com",
      "msn.com",
      "yahoo.co.uk",
      "yahoo.co.in",
      "outlook.com",
      "mac.com",
      "me.com",
      "hotmail.com",
      "orange.fr",
      "laposte.net",
      "rediffmail.com",
      "hotmail.com",
      "protonmail.com",
      "icloud.com",
      ".org",
      ".edu",
      ".gov",
      ".protonmail",
      ".zohomail",
      "tutanota.com",
      "protonmail.com",
      "icloud.com",
      ".org",
      ".edu",
      ".gov",
      ".protonmail",
      ".zohomail",
      "tutanota.com",
      "btinternet.com",
      "mail.co.uk",
      "web.de",
    ];

    // function to check if email is valid
    function isInvalidEmail(email: string) {
      const domain = email.split("@")[1]; // Extract the domain from the email
      return !validDomains.includes(domain); // Return true if domain is not in the list
    }

    // check if email is invalid
    const emailIncorrect = isInvalidEmail(email);

    // check if email and password is empty
    if (!email && !password) {
      toast.error("please enter your email and password");
    } else if (emailIncorrect) {
      // check if email is incorrect
      toast.error("please enter a valid email address");
    } else if (!email.includes("@")) {
      //check if email includes @
      toast.error("please enter a valid email address");
    } else if (!password) {
      // check if password is empty
      toast.error("enter your password");
    }
    if (email === "example@123.com" && password === "123456") {
      login(dispatch, { email, password });
    } else {
      // if email and password is incorrect
      toast.error("Invalid login credentials");
    }
  };
  return (
    <div className="grid items-center justify-center mt-[15%]">
      <div
        className="bg-[#efefef] w-[330px] sm:w-[450px] py-[3rem] md:w-[450px] rounded-[2rem] p-[5px]"
        style={{
          border: "1px solid white",
          boxShadow: "0px 2px 8px",
          top: "50%",
          left: "50%",
          transform: "translate",
        }}
      >
        <h1 className="text-[#714326] text-[1.1rem] sm:text-[1.3rem] font-bold text-center select-none">
          Login
        </h1>
        <div className=" grid text-center rounded-[2rem] p-[1rem]">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter Email"
            className="p-[10px] shadow-2xl outline-none rounded-full border-1 my-[5px]  border-[#dbdbdb] bg-white"
          />
          <br />

          <div className="flex items-center pb-[1rem] w-[106%]">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
              className="p-[10px]  w-[100%] rounded-full border-1 my-[5px] outline-none border-[#dbdbdb] bg-white"
            />
            <br />
            <span
              className="cursor-pointer select-none hover:text-[1.2rem] px-[8px]"
              onClick={handlePasswordToggle}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>
          <button
            className="hover:bg-[#4d2d1a] bg-[#714326] text-[white] border-none p-[10px] px-[15px] rounded-full w-[full]"
            onClick={handleLogin}
          >
            {isLoading ? "Loading..." : "Login"}
            {user.currentUser && <Navigate to="/students"/>}
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
