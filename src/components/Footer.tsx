
const Footer = () => {
  return (
    <div className=" h-[100%] w-[100%]  bg-[#714326] text-[white] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-10 w-full justify-between items-center p-[1rem] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
        <div className="text-[0.8rem] sm:text-[15px]">
         
            
          <span className="select-none font-semibold">SMS</span><br />
          
          <span className="">we love our students</span><br />
          <span className="">&copy;2025 Gilbert TIA cohort-4</span>
        </div>
        <div className="grid justify-center items-center text-[0.8rem] sm:text-[15px]">
          <span>Ogun state, Nigeria</span>
        </div>

        <div className="flex items-center justify-center">
          
          
        <span className="p-[3px] cursor-pointer"><a href="https://www.linkedin.com/in/gilbert-believe/"><img src="/linkedin.svg" width="40px" height="55px"/></a></span>
<span className="p-[3px] cursor-pointer"><a href="https://www.instagram.com/valan.boy"><img src="/instagram.svg" width="40px" height="55px"/></a></span>
<span className="p-[3px] cursor-pointer"><a href="https://github.com/valanboy"><img src="/github.svg" width="40px" height="55px"/></a></span>
  </div>

      </div>
    </div>
  )
}

export default Footer
