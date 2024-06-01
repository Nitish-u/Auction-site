import React, { useState } from "react";
import { MdKeyboard } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";
import { Link } from "react-router-dom";

export default function JoinRoomHeroLeft() {
  const [roomId, setRoomId] = useState("");

  return (
    <div className="left flex flex-col gap-10 justify-center w-1/2 sm:pl-10 px-6 h-full max-[840px]:w-full min-h-fit py-10">
      <div className="someText max-w-[580px]">
        <div className="heading text-4xl leading-[54px] font-semibold">
          Join the Excitement of Live Auctions
        </div>
        <div className="heroPara text-xl text-gray-500 hidden sm:block">
          Experience the thrill of live bidding and discover exclusive treasures
          - join our auction room today!
        </div>
      </div>
      <for className="inputFields flex items-center gap-4 flex-wrap">
        <button className="hostAuctionBtn bg-blue-500 text-white p-2 rounded-lg px-8 flex items-center gap-2 active:bg-blue-700 transition-colors duration-500 hover:bg-blue-600">
          <MdVideoCall size="1.7rem" /> New Auction
        </button>
        <label
          htmlFor="roomId"
          className="border-[3px] border-gray-400 flex items-center gap-2 w-fit focus-within:border-blue-500 rounded-lg overflow-hidden px-4"
        >
          <MdKeyboard size="1.5rem" color="gray" />
          <input
            type="text"
            id="roomId"
            className="outline-none border-none p-2"
            placeholder="Enter Room Id or link "
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </label>
        <Link
          to={`/room/${btoa(roomId)}`}
          className={` ${
            roomId.length > 0
              ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
              : "text-gray-200"
          } p-2 rounded-lg px-8 flex items-center gap-2 transition-colors duration-500 cursor-pointer`}
          disabled={roomId.length > 0 ? false : true}
        >Join</Link>
      </for>
      <hr className="bg-gray-200 w-full h-[2px]" />
      <p>
        <a href="#" className="text-blue-500">
          Learm more
        </a>{" "}
        about Auction
      </p>
    </div>
  );
}
