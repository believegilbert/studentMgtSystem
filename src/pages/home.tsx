
const Home = () => {
  return (
    <div className=" mt-[1rem] h-screen w-[100%] bg-[url('/home.jpg')] bg-cover bg-center justify-center">
      <div className="grid justify-center bg-[black]/30 backdrop-blur-md p-10 rounded-lg">
        <h1 className="typing-effect text-[white] text-[2.5rem] font-bold">
      "Welcome to SMS, Enjoy Your Stay!
          
        </h1>
        <span className="text-[white] text-[1.2rem] font-bold">
          (Student Management System)
        </span>
        <br />
      </div>
      <div className="flex items-baseline justify-center bg-[black]/30 backdrop-blur-md">
        <div>
          <h2 className="text-[white] p-[1.5rem] mb-[-23%]">
            Our Student Management System is the best
          </h2>
          <h3 className="text-[white] p-[5rem]">Let's GO!</h3>
        </div>

        <button className="text-[white] text-[0.75rem] mt-[10%] bg-[#714326] hover:bg-[white] hover:text-[#714326] border-none p-[1rem] px-[1.85rem] rounded-full mr-[2%]">
          
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
