import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "#1a202c";
      
    } else {
      
      document.body.style.backgroundColor = "#fff";
      
    }
    
  }, [darkTheme]);

  return (
    <button
      onClick={() => setDarkTheme(!darkTheme)}
      className="p-1 bg-white dark:bg-gray-800 rounded-lg text-[13px] cursor-pointer 
     text-[#714326]"
    >
      {darkTheme === true ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;