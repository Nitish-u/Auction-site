import React from 'react'
import { LuHelpCircle } from "react-icons/lu";
import { TbMessageReport } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";

export default function JoinRoomFooter() {
  return (
<div className="footer hidden max-[440px]:flex justify-center gap-2 border-t-2 border-gray-200">
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
      </div>  )
}
