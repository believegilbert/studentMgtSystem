import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Student: FunctionComponent = () => {
  return (
    <div className="h-[100vh] text-[#714326] text-[16px] sm:text-[18px]">
    
<Link to="/students">
          <FaArrowLeft className="text-[#714326] text-[18px] mt-[3rem] ml-[1.5rem] cursor-pointer" />
        </Link>
        <div className="grid justify-center items-center mt-[5rem]">
            <img src="/profile.svg" width=""className=" cursor-pointer" />
            <div className="flex justify-between mt-[2rem]">
              <div>
                             <p className="">First name: </p>
     <p className="">Last name:</p>
     <p className="">Age:</p>
     <p className="">Address:</p>
     <p className="">Id:</p>
    
              </div>
  <div>
    <p className="">Mike</p>
    <p className="">Jane</p>
    <p className="">29</p>
    <p className="">Lagos</p>
    <p className="">U2009/55edro</p>
  </div>
            </div>
    
        </div>
    </div>
  )
}

export default Student
