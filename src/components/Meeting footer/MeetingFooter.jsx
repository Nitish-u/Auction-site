import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { BsFillMicMuteFill } from "react-icons/bs";
import { LuVideo, LuVideoOff } from "react-icons/lu";
import { MdClosedCaptionOff, MdClosedCaption } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoHandRightOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { ImPhoneHangUp } from "react-icons/im";
import { IoMdPeople } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { PiChatCenteredDotsBold } from "react-icons/pi";
import { BsHeadsetVr } from "react-icons/bs";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import BidPaddle from "../Bid Paddle/BidPaddle";

export default function MeetingFooter({ maxBid, setMaxBid, numberOfMembers }) {
  const [bidAmt, setBidAmt] = useState("");
  const [micToggle, setMicToggle] = useState(true);
  const [videoToggle, setVideoToggle] = useState(true);
  const [captionToggle, setCaptionToggle] = useState(true);
  const [showPaddle, setShowPaddle] = useState(false);
  const nameOfRoom = "Group Meeting";
  function modifyBid(bidAmt) {
    setMaxBid((prevState) => {
      return { ...prevState, bidAmt: bidAmt, bidder: "Nitish" };
    });
    setShowPaddle(true);
    setTimeout(() => {
      setShowPaddle(false);
    }, 5000);
  }

  return (
    <>
      <div
        className={`paddleContainer fixed bottom-24 right-4 sm:right-10 z-50 h-fit ${
          showPaddle ? "block" : "hidden"
        }`}
      >
        <BidPaddle bid={bidAmt} />
      </div>
      <div className="fixed top-0 max-[390px]:flex hidden justify-between  w-full p-4 bg-[#3c4042] items-center">
        <GiHamburgerMenu size="1.5rem" color="white" />
        <div className="flex text-white items-center gap-1 text-xs">max bid: <BsCurrencyDollar size="1rem"  /><span className="text-xl">{maxBid.bidAmt}</span></div>
      </div>
      <IconContext.Provider
        value={{
          size: "2.5rem",
          color: "white",
          className: "p-2 cursor-pointer active:bg-gray-600 rounded-full w-fit",
        }}
      >
        <div className="fixed bottom-0 flex justify-center sm:justify-between items-center w-full p-4 bg-[#3c4042] select-none max-w-full">
          <div className="left text-xl text-white hidden sm:block">{nameOfRoom}</div>
          <div className="center flex items-center gap-2 max-w-full flex-wrap justify-center">
            {micToggle ? (
              <FaMicrophone
                size="2.3rem"
                onClick={() => setMicToggle(!micToggle)}
              />
            ) : (
              <BsFillMicMuteFill
                size="2.3rem"
                onClick={() => setMicToggle(!micToggle)}
              />
            )}
            {videoToggle ? (
              <LuVideo onClick={() => setVideoToggle(!videoToggle)} />
            ) : (
              <LuVideoOff onClick={() => setVideoToggle(!videoToggle)} />
            )}
            {captionToggle ? (
              <MdClosedCaptionOff
                onClick={() => setCaptionToggle(!captionToggle)}
                className="sm:block hidden"
              />
            ) : (
              <MdClosedCaption
                onClick={() => setCaptionToggle(!captionToggle)}
                className="sm:block hidden"
              />
            )}
            <IoHandRightOutline className="min-[450px]:block hidden" />
            <label
              htmlFor="bidAmount"
              className="flex items-center border-2 border-gray-400 rounded-xl w-28 px-2 focus-within:border-blue-500"
            >
              <FaHandHoldingDollar />
              <input
                type="number"
                id="bidAmount"
                className="outline-none border-none w-full bg-transparent text-white"
                placeholder="Bid Amt"
                value={bidAmt}
                onChange={(e) => setBidAmt(e.target.value)}
              />
            </label>
            <button
              className={`${
                bidAmt - maxBid.bidAmt <= 0
                  ? "bg-white text-gray-400"
                  : "text-white bg-blue-500"
              } p-2 px-4 rounded-xl`}
              disabled={bidAmt - maxBid.bidAmt <= 0 ? true : false}
              title={
                bidAmt - maxBid.bidAmt <= 0
                  ? "Bid amount cannot be less than or equal to max bid"
                  : "Offer em!"
              }
              onClick={() => modifyBid(bidAmt)}
            >
              Bid
            </button>
            <SlOptionsVertical size="2.2rem" className="min-[390px]:block hidden" />
            <ImPhoneHangUp className="w-14 h-10 bg-red-600" />
          </div>
          <div className="right hidden lg:flex items-center gap-2">
            <RiErrorWarningLine />
            <div className="relative">
              <IoMdPeople />
              <span className="text-xs rounded-full z-30 absolute top-0 right-0 text-white bg-red-500 w-4 h-4 text-center ">
                {numberOfMembers}
              </span>
            </div>
            <PiChatCenteredDotsBold />
            <BsHeadsetVr />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
