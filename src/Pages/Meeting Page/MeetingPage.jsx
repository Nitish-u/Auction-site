import React, { useState } from "react";
import MeetingGridItem from "../../components/Meeting Grid Item/MeetingGridItem";
import MeetingFooter from "../../components/Meeting footer/MeetingFooter";
import MaxBidCont from "../../components/Max Bid conatiner/MaxBidCont";
import vid1 from "../../assets/videos/WhatsApp Video 2024-06-01 at 02.03.05_a47618ec.mp4"
import vid2 from "../../assets/videos/WhatsApp Video 2024-06-01 at 02.03.13_a93d22bf.mp4"
import vid3 from "../../assets/videos/WhatsApp Video 2024-06-01 at 02.03.51_df6f2cc3.mp4"
import vid4 from "../../assets/videos/WhatsApp Video 2024-06-01 at 02.03.54_b21aeb5d.mp4"

export default function MeetingPage() {
    const [maxBid, setMaxBid] = useState({bidAmt: 1000, bidder: "Opening Bid"});
  return (
    <>
    <MaxBidCont maxBid={maxBid.bidAmt} Bidder={maxBid.bidder} />
      <div className="flex flex-wrap gap-4 p-4 justify-center items-center min-h-dvh bg-[#202124] pt-20 pb-40">
        <MeetingGridItem joineeMicStatus={true} joineeName={"Ram"} joineeURL={vid1} />
        <MeetingGridItem joineeMicStatus={false} joineeName={"Shyam"} joineeURL={vid2} />
        <MeetingGridItem joineeMicStatus={false} joineeName={"Hari"} joineeURL={vid3} />
        <MeetingGridItem joineeMicStatus={true} joineeName={"Nitish"} joineeURL={vid4} />
      </div>
      <MeetingFooter maxBid={maxBid} setMaxBid={setMaxBid} numberOfMembers={4} />
    </>
  );
}
