import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { publicRequest } from "../requestMethod";
import {toast, ToastContainer} from "react-toastify";

const AddStudent: FunctionComponent = () => {
  //cretae a state to hold the loading state of the button
  const [addingStudent, setAddingStudent] = useState<boolean>(false);

  //create a state to hold the student details
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>(""); 
  const [age, setAge] = useState<string>(""); 
  const [country, setCountry] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  
  //function to handle the loading state of the button add student to database
  const handleAddStudent = async() => {
    try {
       //simulate adding a student
    setAddingStudent(true);
    //set a timeout to stop the loading state after 2 seconds
    setTimeout(() => {
      setAddingStudent(false);
    }, 2000);

    //add the student to the database
  await publicRequest.post("/", {
    firstName: firstName,
    lastName: lastName,
    age: age,
    country: country,
    grade: grade
  })
  toast("Student added successfully")
  //redirect to the students page
  window.location.replace("/students")


    } catch (error:unknown) {
      toast('Failed to add student')
      console.log(error)
    }
   

  }
  return (
    <div className="min-h-screen text-[#714326]">
      <Link to="/students">
        <FaArrowLeft className="text-[#714326] text-[18px] sm:text-[20px] lg:text-[22px] mt-[3rem] ml-[1.5rem] cursor-pointer mb-9" />
      </Link>
      <h1 className="text-center text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-bold mt-[8%] mb-[10%]">Add a Student</h1>
     

      <div className="block sm:flex sm:mb-[4rem]  text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] justify-center">
        <div className="">
          <label htmlFor="firstname" className="">
            First name:
          </label>
          <br />
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" 
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
          <br />

          <label htmlFor="lastname" className="">
            Last name:
          </label>
          <br />
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" 
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
       <br/>

       <label htmlFor="age" className="">
            Age:
          </label>
          <br />
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" 
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
 </div>

        <div className="">
          
          <label htmlFor="grade" className="">
            Grade:
          </label>
          <br />
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" 
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value.toUpperCase())}
          />
          <br />

          <label htmlFor="country" className="">
            Country:
          </label>
          <br />
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" 
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        
      </div>
      <div className="text-center">
<button className="text-[13px] sm:text-[15px] sm:px-[2.5rem] md-px-[3.2rem] md:text-[17px] text-[white] bg-[#714326] p-[10px] px-[15px] border-none rounded-[0.5rem] hover:bg-[#53311c] mb-[5%]"
onClick={handleAddStudent}
>
          {addingStudent ? "Adding...": "Add Student"}
       </button>
        <ToastContainer aria-label="Notification container"/>
        </div>
          
      
      
    </div>
  );
};

export default AddStudent;
