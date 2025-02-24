import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EditStudent: FunctionComponent = () => {
  return (
    <div className="min-h-screen text-[#714326]">
      <Link to="/students">
        <FaArrowLeft className="text-[#714326] text-[18px] sm:text-[20px] lg:text-[22px] mt-[3rem] ml-[1.5rem] cursor-pointer mb-9" />
      </Link>
      <h1 className="text-center text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-bold mt-[8%] mb-[10%]">Edit Student Details</h1>
     

      <div className="block sm:flex sm:mb-[4rem] items-center text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] justify-center">
        <div className="">
          <label htmlFor="firstname" className="">
            First name:
          </label>
          <br />{" "}
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="id" className="">
            Id:
          </label>
          <br />{" "}
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="age" className="">
            Age:
          </label>{" "}
          <br />
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
        </div>

        <div className="">
          <label htmlFor="lastname" className="">
            Last name:
          </label>
          <br />{" "}
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="grade" className="">
            Grade:
          </label>
          <br />{" "}
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="address" className="">
            Address:
          </label>
          <br />{" "}
          <input className="bg-[#efefef] w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
        </div>
        
      </div>
      <div className="text-center">
<button className="text-[13px] sm:text-[15px] sm:px-[2.5rem] md-px-[3.2rem] md:text-[17px] text-[white] bg-[#714326] p-[10px] px-[15px] border-none rounded-[0.5rem] hover:bg-[#53311c] mb-[5%]">
          Update Info
        </button>
        </div>
          
      
      
    </div>
  );
};

export default EditStudent;
