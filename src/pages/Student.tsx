import { FunctionComponent, useEffect, useState  } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { publicRequest } from "../requestMethod"

interface Student {
  _id: number;
  firstName: string;
  lastName: string;
  country: string;
  grade: number;
  age: number;
} 

const Student: FunctionComponent = () => {
  const [student, setStudent] = useState<Student>({} as Student)
const studentId = location.pathname.split("/")[2] //get the student id from the url

//get the student details from the database
useEffect(() =>{
  const findStudent = async() => {
    try {
    const res = await publicRequest.get("/find/"+ studentId)
     setStudent(res.data)
    } catch (error:unknown) {
      console.log(error)
    }
  }
  //call the function to get the student details
  findStudent()
  
},[])
  return (
    <div className="h-[100vh] text-[#714326] text-[16px] sm:text-[18px]">
    
<Link to="/students">
          <FaArrowLeft className="text-[#714326] text-[18px] mt-[3rem] ml-[1.5rem] cursor-pointer" />
        </Link>
        <div className="grid justify-center items-center mt-[5rem]">
            <img src="/profile.svg" width=""className=" cursor-pointer" />
            <div className="flex justify-between mt-[3rem]">
              <div className="mr-[3rem]">
    <p className="pb-[1rem]">First name: </p>
     <p className="pb-[1rem]">Last name:</p>
     <p className="pb-[1rem]">Age:</p>
     <p className="pb-[1rem]">Address:</p>
     <p className="pb-[1rem]">Id:</p>
    
              </div>
  <div className="ml-[3rem]">
    <p className="pb-[1rem]">{student.firstName}</p>
    <p className="pb-[1rem]">{student.lastName}</p>
    <p className="pb-[1rem]">{student.age}</p>
    <p className="pb-[1rem]">{student.country}</p>
    <p className="pb-[1rem]">{student._id}</p>
  </div>
            </div>
    
        </div>
    </div>
  )
}

export default Student
