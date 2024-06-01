import React from "react";
import { BsFillMicMuteFill } from "react-icons/bs";

export default function MeetingGridItem({
  joineeName,
  joineeURL,
  joineeMicStatus,
}) {
  return (
    <div className="w-64 h-36 bg-[#3c4042] rounded-xl relative overflow-hidden object-cover flex justify-center items-center">
    <video src={joineeURL} autoPlay loop muted className="bg-cover" />
      <div className={`footer absolute bottom-0 p-2 flex items-center gap-2 ${joineeMicStatus ? "px-4" : ""} w-full`}>
        {joineeMicStatus ? (
          ""
        ) : (
          <BsFillMicMuteFill size="2rem" className="p-2 bg-red-500 rounded-full" />
        )}
        <h3 className="text-white text mix-blend-difference">{joineeName}</h3>
      </div>
    </div>
  );
}
