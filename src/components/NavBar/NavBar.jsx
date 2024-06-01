import React,{useState} from 'react'
import logo from "../../assets/Logo.jpg";
import { LuHelpCircle } from "react-icons/lu";
import { TbMessageReport } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function NavBar() {
    const [now, setNow] = useState(new Date());

    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
    
      const dateOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
    
      const timeString = now
        .toLocaleTimeString("en-US", timeOptions)
        .replace(/\s/g, "");
      const dateString = now
        .toLocaleDateString("en-US", dateOptions)
        .replace(/,\s(\d{1,2})/, " $1");
    
      setInterval(() => {
        setNow(new Date());
      }, 60000);

  return (
<div className="navBar flex items-center justify-between p-2 shadow-md pr-6">
        <div className="logo sm:w-48 w-32">
          <img src={logo} alt="aution logo" />
        </div>
        <div className="rightSection text-xl text-gray-500 flex items-center gap-4">
          <div className="date&time items-center gap-2 hidden sm:flex">
            {`${timeString}`} <GoDotFill size="0.5rem" /> {` ${dateString}`}
          </div>
          <div className="support&settings hidden items-center sm:gap-4 gap-1 min-[440px]:flex">
            <LuHelpCircle
              size="2.7rem"
              className="hover:text-black active:bg-gray-200 rounded-full cursor-pointer p-2 transition-colors duration-500"
              title="support"
            />
            <TbMessageReport
              size="2.7rem"
              className="hover:text-black active:bg-gray-200 rounded-full cursor-pointer p-2 transition-colors duration-500"
              title="report"
            />
            <MdOutlineSettings
              size="2.7rem"
              className="hover:text-black active:bg-gray-200 rounded-full cursor-pointer p-2 transition-colors duration-500"
              title="settings"
            />
          </div>
          <div className="profile rounded-full bg-red-500 text-white w-10 h-10 flex items-center justify-center">
            N
          </div>
        </div>
      </div>  )
}
