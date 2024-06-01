import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import linkImg from "../../assets/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg";
import calenderImg from "../../assets/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg";
import securityImg from "../../assets/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg";
import { GoDotFill } from "react-icons/go";

export default function JoinRoomHeroRight() {
    const carouselImgs = [linkImg, securityImg, calenderImg];
  const caroselDetails = [
    {
      heading: "Get link you can share",
      para:
        "Click" +
        <b>New Auction</b> +
        "to get a link you can send to people you want to meet with",
    },
    {
      heading: "Plan ahead",
      para:
        "Click" +
        <b>New Auction</b> +
        "to schedule meetings in Google Calender and send invites to participants",
    },
    {
      heading: "Your meeting is safe",
      para: "No one can join unless invited or admitted by the host",
    },
  ];
  const [carouselImg, setCarouselImg] = useState(0);
  return (
    <div className="right flex items-center h-full justify-center px-20 w-1/2 max-[840px]:w-full max-w-full min-h-fit py-10">
          <div className="carousel flex flex-col gap-8 items-center sm:w-4/5 justify-center">
            <div className="carouselImgContainer flex items-center sm:gap-20 gap-4 justify-center">
              <div
                className="left rotate-180"
                onClick={() =>
                  carouselImg > 0
                    ? setCarouselImg(carouselImg - 1)
                    : setCarouselImg(2)
                }
              >
                <IoIosArrowForward
                  size="3rem"
                  className="p-2 active:bg-gray-200 rounded-full cursor-pointer"
                />
              </div>
              <div className="images sm:w-52 w-40">
                <img
                  src={carouselImgs[carouselImg]}
                  alt="carouselImg"
                  className="w-full"
                />
              </div>
              <div
                className="right"
                onClick={() =>
                  carouselImg < 2
                    ? setCarouselImg(carouselImg + 1)
                    : setCarouselImg(0)
                }
              >
                <IoIosArrowForward
                  size="3rem"
                  className="p-2 active:bg-gray-200 rounded-full cursor-pointer"
                />
              </div>
            </div>
            <div className="carouselImgDetails h-32">
              <h1 className="text-2xl text-center">
                {caroselDetails[carouselImg].heading}
              </h1>
              <p className="text-center">{caroselDetails[carouselImg].para}</p>
            </div>
              <div className="carouselDots flex justify-center">
                <GoDotFill size="1rem" className={`${carouselImg == 0 ? "text-blue-500" : "text-gray-400" } `} />
                <GoDotFill size="1rem" className={`${carouselImg == 1 ? "text-blue-500" : "text-gray-400" } `} />
                <GoDotFill size="1rem" className={`${carouselImg == 2 ? "text-blue-500" : "text-gray-400" } `} />
              </div>
          </div>
        </div>
  )
}
