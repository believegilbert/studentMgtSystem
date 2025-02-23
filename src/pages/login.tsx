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
      <div className="bg-[#efefef] rounded-[2rem] p-[5px]" style={{border: "1px solid white", boxShadow:"0px 2px 8px", top:"50%", left:"50%", transform: "translate"}}>
       <h1 className="text-[#714326] text-center select-none">Login</h1> 
       <div className="w-[300px] grid rounded-[2rem] p-[1rem]">
    
      
        <input
         type="text"
         value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter Email" 
        className="p-[10px] rounded-full border-1 my-[5px] outline-none border-none"
        /><br/>
        
       <div className="flex items-center pb-[1rem]"> <input type={showPassword ? "text": "password"} placeholder="enter password" className="p-[10px] w-[88%] rounded-full border-1 my-[5px] outline-none border-none"/><br/>
      <span className="cursor-pointer select-none hover:text-[1.2rem] px-[5px]" onClick={handlePasswordToggle}>{showPassword ? "👁️": "🔒"}</span></div>
         <button className="hover:bg-[#4d2d1a] bg-[#714326] text-[white] border-none p-[10px] px-[15px] rounded-full w-[full]" onClick={handleLogin}>{isLoading ? "Loading...": "Login"}</button>
       
    </div>
    </div>
    </div>
  )
}

export default Login
