import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" mt-[1rem] h-screen w-[100%] bg-[url('/home.jpg')] bg-cover bg-center justify-center">
      <div className="grid justify-center bg-[black]/20 backdrop-blur-sm p-10 rounded-lg">
    
           <h1 className="typing-effect text-[white] text-[2rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[3rem] font-bold">
      Welcome to our SMS, Enjoy Your Stay!
          
        </h1>
     
     
        <span className="text-[white] text-center text-[1.2rem] sm:text-[1.5rem]">
          (Student Management System)
        </span>
        <br />
      
        <div className="grid justify-center">
          <h2 className="text-[white] text-[1.1rem] sm:text-[1.2rem] p-[1.5rem] mb-[-23%]">
            Our Student Management System is the best
          </h2>
          <h3 className="text-[white] text-[1.1rem] sm:text-[1.2rem] p-[5rem] font-bold">Let's GO!</h3>
        </div>
 <div className="text-center w-[]">
  <Link to="/login">
  <button className="text-[white] text-[15px] mt-[10%] bg-[#714326] hover:bg-[white] active:outline-[#714326] active:bg-[white] active:text-[#714326] hover:text-[#714326] border-none p-[1rem] px-[1.85rem] sm:px-[2.5rem] md:px-[4.5rem] rounded-full mr-[2%]">
          
          Get Started
        </button>
        </Link>
 </div>
        
      </div>
    </div>
  );
};

export default Home;
