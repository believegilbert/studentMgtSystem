import { FunctionComponent } from "react"
import { useState } from "react"

const Login: FunctionComponent = () => {
const [email, setEmail] = useState<string> ("")
const [showPassword, setShowPassword] = useState<boolean> (false)
const [isLoading, setIsLoading] = useState<boolean> (false)

const handlePasswordToggle= ()=>{
setShowPassword(!showPassword)
}

const handleLogin = ()=>{

setIsLoading(true)
}
  return (
    <div className="grid items-center justify-center mt-[15%]">
      <div className="bg-[#efefef] w-[330px] sm:w-[450px] py-[3rem] md:w-[450px] rounded-[2rem] p-[5px]" style={{border: "1px solid white", boxShadow:"0px 2px 8px", top:"50%", left:"50%", transform: "translate"}}>
       <h1 className="text-[#714326] text-[1.1rem] sm:text-[1.3rem] font-bold text-center select-none">Login</h1> 
       <div className=" grid text-center rounded-[2rem] p-[1rem]">
    
      
        <input
         type="text"
         value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter Email" 
        className="p-[10px] shadow-2xl outline-none rounded-full border-1 my-[5px]  border-[#dbdbdb] bg-white"
        /><br/>
        
       <div className="flex items-center pb-[1rem] w-[106%]">
        <input type={showPassword ? "text": "password"} placeholder="enter password"
         className="p-[10px]  w-[100%] rounded-full border-1 my-[5px] outline-none border-[#dbdbdb] bg-white"/>
         <br/>
      <span className="cursor-pointer select-none hover:text-[1.2rem] px-[8px]" onClick={handlePasswordToggle}>{showPassword ? "👁️": "🔒"}</span></div>
         <button className="hover:bg-[#4d2d1a] bg-[#714326] text-[white] border-none p-[10px] px-[15px] rounded-full w-[full]" onClick={handleLogin}>{isLoading ? "Loading...": "Login"}</button>
       
    </div>
    </div>
    </div>
  )
}

export default Login
