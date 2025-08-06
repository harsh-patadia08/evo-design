import Button from "@/app/components/Button";
import { LucideEye, LucideEyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { DOMAttributes, useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const ButtonEvents: DOMAttributes<HTMLButtonElement> = {
    onClick: (event) => {
      setLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false);
      }, 2000);
      console.log("the event triggered is:", event.nativeEvent);
    },
  };


  function handleFormData(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  return (
    <>
      <form className="grid grid-cols-1 gap-3.5">
        {/* Email input field*/}
        <div className="grid grid-cols-1 items-start gap-0.5">
          <label htmlFor="email" className="text-[16px] font-normal text-[#06060680]" >
            Email address</label>
          <input type="text" id="email" name="email" placeholder="Ex. jhondoe@mailsample.com"
            onChange={handleFormData}
            className="text-[#06060680] border-[#06060680] border-[1.5px] px-2 bg-[#FFF8F5] py-2 sm:py-3 rounded-[8px] placeholder:text-[16px] placeholder:font-normal pr-18 focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C]"/>
        </div>

        {/* Password input field*/}
        <div className="relative grid grid-cols-1 items-start gap-0.5">

            {/* Password input */}
          <label htmlFor="password" className="text-[16px] font-normal text-[#06060680]">Password</label>
          <input type={passwordVisible ? "text" : "password"} id="password" name="password" placeholder="* * * * * * * *"
            onChange={handleFormData}
            className="text-[#06060680] border-[#06060680] border-[1.5px] px-2 bg-[#FFF8F5] py-2 sm:py-3 rounded-[8px] placeholder:text-[16px] placeholder:font-normal pr-20 focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C]"/>
          
          {/* Password visibility toggle icon */}
          <span className="absolute right-3 sm:top-11 top-[38px]" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? ( <LucideEye size={20} className="text-gray-400" />
            ) : ( <LucideEyeClosed size={20} className="text-gray-400" />
            )}
          </span>
        </div>

        {/* Remember me checkbox */}
        <div className="grid grid-cols-1 items-start gap-0.5">
            <div className=" relative flex gap-2 items-center" id="rememberMe">
                {/* Checkbox */}
                <input type="checkbox" id="remember_me" name="remember_me"
                className="appearance-none w-4 h-4 border border-[#06060680] rounded-[2px] bg-white checked:bg-[#FD5900] checked:border-[#FD5900]"/>
                <label htmlFor="remember_me" className="text-[16px] font-normal text-[#06060680]">Remember me </label>
                {/* Checked icon used for overlay */}
                <span className="checked-icon">
                    <img src="img/checkbox.svg" alt="Checked" />
                </span>
            </div>
        </div>

        {/* Login button */}
        <div className="grid grid-cols-1">

            {/* button component */}
          <Button title={ <span className="text-white h-[100%] w-[100%] block py-2 sm:py-3 text-lg"> {loading ?  "Loading..." : "Log in"} </span>}
            type="button" events={ButtonEvents}/>
        </div>

        {/* Forgot password link */}
        <div className="grid text-center">
          <a id="forgot_password" className="text-black text-sm cursor-pointer underline">Forgot the password ? </a>
        </div>
      </form>
    </>
  );
}
