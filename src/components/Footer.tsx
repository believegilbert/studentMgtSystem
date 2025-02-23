
const Footer = () => {
  return (
    <div className=" h-[100%] w-[100%]  bg-[#714326] text-[white] flex items-center justify-center">
      <div className="grid grid-cols-3 w-full justify-between items-center p-[1rem] text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
        <div className="">
         
            
          <span className="text-[1rem] select-none font-semibold">SMS</span><br />
          
          <span className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">we care about the details of our students</span><br />
          <span className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">&copy;2025 Gilbert TIA cohort-4</span>
        </div>
        <div className="grid justify-center items-center text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
          <span>Ogun state, Nigeria</span>
        </div>

        <div className="flex items-center justify-center">
          
<span className="p-[3px] cursor-pointer"><img src="/twitter.svg" width="27px" height="55px"/></span>
<span className="p-[3px] cursor-pointer"><img src="/facebook.svg" width="27px" height="55px"/></span>
<span className="p-[3px] cursor-pointer"><img src="/youtube.svg" width="27px" height="55px"/></span>
        </div>

      </div>
    </div>
  )
}

export default Footer
