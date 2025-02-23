import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Student: FunctionComponent = () => {
  return (
    <div className="h-[100vh] text-[#714326] text-[1.1rem]">
    
<Link to="/students">
          <FaArrowLeft className="text-[#714326] text-[18px] mt-[3rem] ml-[1.5rem] cursor-pointer" />
        </Link>
        <div className="grid justify-center items-center">
            <img src="/profile.svg" width=""className=" cursor-pointer" />
     <p className="">First name: <span className="ml-[5rem]">Mike</span></p>
     <p className="">Last name:<span className="ml-[5rem]">Jane</span></p>
     <p className="">Age:<span className="ml-[8rem]">29</span></p>
     <p className="">Address:<span className="ml-[5rem]">Lagos</span></p>
     <p className="">Id:<span className="ml-[5rem]">U2009/55edro</span></p>
    
        </div>
    </div>
  )
}

export default Student
