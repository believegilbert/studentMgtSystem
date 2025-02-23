import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EditStudent: FunctionComponent = () => {
  return (
    <div className="min-h-screen text-[#714326]">
      <Link to="/students">
        <FaArrowLeft className="text-[#714326] text-[18px] mt-[3rem] ml-[1.5rem] cursor-pointer mb-9" />
      </Link>
      <h1 className="text-center mt-[8%] mb-[15%]">Edit Student Details</h1>
     

      <div className="block md:flex mx-auto">
        <div className="m-[1rem]">
          <label htmlFor="firstname" className="">
            First name:
          </label>
          <br />{" "}
          <input className="w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="id" className="">
            Id:
          </label>
          <br />{" "}
          <input className="w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="age" className="">
            Age:
          </label>{" "}
          <br />
          <input className="w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
        </div>

        <div className="m-[1rem]">
          <label htmlFor="lastname" className="">
            Last name:
          </label>
          <br />{" "}
          <input className="w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="grade" className="">
            Grade:
          </label>
          <br />{" "}
          <input className="w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
          <br />
          <label htmlFor="address" className="">
            Address:
          </label>
          <br />{" "}
          <input className="w-[300px] p-[7px] m-[1rem] rounded-[0.5rem] border-[#efefef] outline-[#714326]" />
        </div>
      </div>
      <div className="text-center mt-[2%]">
        <button className="text-[white] bg-[#714326] p-[10px] px-[15px] border-none rounded-[0.5rem] hover:bg-[#53311c] mb-[5%]">
          Update Info
        </button>
      </div>
    </div>
  );
};

export default EditStudent;
