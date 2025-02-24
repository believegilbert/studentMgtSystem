
const Footer = () => {
  return (
    <div className=" h-[100%] w-[100%]  bg-[#714326] text-[white] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-10 w-full justify-between items-center p-[1rem] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
        <div className="text-[0.8rem] sm:text-[18px]">
         
            
          <span className="select-none font-semibold">SMS</span><br />
          
          <span className="">we love our students</span><br />
          <span className="">&copy;2025 Gilbert TIA cohort-4</span>
        </div>
        <div className="grid justify-center items-center text-[0.8rem] sm:text-[17px]">
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
