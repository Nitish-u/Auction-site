import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import JoinRoomHeroLeft from "../../components/JoinRoom hero left/JoinRoomHeroLeft";
import JoinRoomHeroRight from "../../components/JoinRoom hero right/JoinRoomHeroRight";
import JoinRoomFooter from "../../components/JoinRoom Footer/JoinRoomFooter";

export default function JoinRoom() {
  return (
    <div className="joinTeam flex flex-col xl:h-dvh select-none min-h-fit">
      <NavBar />
      <div className="hero h-full flex max-[840px]:flex-col gap-8 min-h-fit">
        <JoinRoomHeroLeft />
        <JoinRoomHeroRight />
      </div>
      <JoinRoomFooter />
    </div>
  );
}
