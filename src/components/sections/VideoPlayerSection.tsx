import React from "react";
import MainButton from "../common/MainButton";

function VideoPlayerSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 mt-[11.31rem]">
      <div>
        <p className="text-lightBlue font-bold text-2xl ">
          Many Blocks and Components
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.{" "}
        </p>
        <MainButton
          text="Explore"
          classes="!h-[3.01544rem] hover:bg-white w-[8.2925rem] text-lightBlue font-bold text-[1rem] rounded-[6.25rem] border-[4px] border-[#EBEAED] bg-white shadow-none"
        />
      </div>
      <div>
        <img src="/images/video_player.png" alt="video player" />
      </div>
    </section>
  );
}

export default VideoPlayerSection;
