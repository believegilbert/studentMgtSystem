import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { publicRequest } from "../requestMethod";
import { toast, ToastContainer } from "react-toastify";

const EditStudent: FunctionComponent = () => {
const studentId = location.pathname.split("/")[2] //get the student id from the url

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  country: string;
  grade:string;
  age: string;
}

const [studentData, setStudentData] = useState<Student>({} as Student) //create a state to hold the student data
const [input, setInput] = useState({
  firstname: "",
  lastname: "",
  country: "",
  grade: "",
  age: "",
}) //create a state to hold the input value 

//get the student details from the database
useEffect(() =>{
  const getStudent = async() =>{
    try {
  const res = await publicRequest.get("/find/" + studentId)  
  setStudentData(res.data)  
    } catch (error:unknown) {
      console.log(error)
      
    }
  }

  //call the function to edit the student details
  getStudent()
 
},[studentId])

//function to handle the input change
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

 setInput((prev)=>({...prev, [e.target.name]: e.target.name === "grade" ? e.target.value.toUpperCase() : e.target.value }))
 
}
 
//function to update the student details
const updateInfo = async() => {
  try {
    

  if( !input.firstname || !input.lastname || !input.country || !input.grade || !input.age) {
    toast.error("Please fill in all fields") //show an error message if the input fields are empty
    return
  }

  
await publicRequest.put(`/${studentId}`, input) //send a put request to the server to update the student details
toast.success("Student details updated successfully") //show a success message

//navigate to the students page
window.location.replace("/students")

  } catch (error:unknown) {
    console.log(error, input)
    toast.error("Failed to update student details") //show an error message if the request fails
    
  }}

  return (
    <div className="min-h-screen text-[#714326]">
      <Link to="/students">
        <FaArrowLeft className="text-[#714326] text-[18px] sm:text-[20px] lg:text-[22px] mt-[3rem] ml-[1.5rem] cursor-pointer mb-9" />
      </Link>
      <h1 className="text-center text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-bold mt-[8%] mb-[7%]">Edit Student Details</h1>
      <p className="text-red-700 text-[14px] sm:text-[15px] md:text-[16px] text-center mb-[2rem]"><i>*note: student Id cannot be edited!</i></p>
     

      <div className="block sm:flex sm:mb-[4rem] items-center text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] justify-center">
        <div className="">
          <label htmlFor="firstname" className="font-medium">
            First name:
          </label>
          <br />{" "}
          <input name="firstname" onChange={handleChange} placeholder={studentData.firstName} 
          className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          
          <label htmlFor="age" className="font-medium">
            Age:
          </label>{" "}
          <br />
          <input name="age" onChange={handleChange} placeholder={studentData.age} className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br/>

          <label htmlFor="id" className="font-medium">
            Id:
          </label>{" "}
          <br />
          <input name="age" value={studentData._id} className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          
        </div>

        <div className="">
          <label htmlFor="lastname" className="font-medium">
            Last name:
          </label>
          <br />{" "}
          <input name="lastname" onChange={handleChange} placeholder={studentData.lastName} className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="grade" className="font-medium">
            Grade:
          </label>
          <br />{" "}
          <input name="grade" onChange={handleChange} placeholder={studentData.grade} className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="address" className="font-medium">
            country:
          </label>
          <br />{" "}
          <input name="country" onChange={handleChange} placeholder={studentData.country} className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
        </div>
        
      </div>
      <div className="text-center">
<button className="text-[13px] sm:text-[15px] sm:px-[2.5rem] md-px-[3.2rem] md:text-[17px] text-[white] bg-[#714326] p-[10px] px-[15px] border-none rounded-[0.5rem] hover:bg-[#53311c] mb-[5%]"
onClick={updateInfo}>
          Update Info
          
        </button>
        
        <ToastContainer/>
        </div>
          
      
      
    </div>
  );
};

export default EditStudent;
