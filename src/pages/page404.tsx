import { FunctionComponent } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"


const Page404: FunctionComponent = () => {
  return (
    <div className="m-5">
      <div className="flex flex-col  justify-center items-center mt-[10rem] text-[15px] sm:text-[1.1rem] md:text-[1.3rem] text-[#714326]">
      
      <FaExclamationTriangle className="text-[#714326] text-[60px] sm:text-[80px] md:text-[100px] mb-[2rem] " />
      <h1 className="mb-[1rem] sm:mb-[2rem]"><span className="font-bold text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem]">404</span> - Page Not Found</h1>
      <p className="mb-[1.5rem] sm:mb-[2.5rem]">We're sorry, but the page you are looking for does not exist.</p>
      <Link to="/">
      <a className="bg-[#714326] text-[white] p-[5px] sm:p-[7px] px-[14px] sm:px-[18px] rounded-2xl">Go back to Home</a> 
      </Link>
      </div>
   
    </div>
  )
}

export default Page404
