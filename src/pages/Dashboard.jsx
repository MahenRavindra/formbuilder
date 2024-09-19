import React, {useState} from "react";
import ToolTitle from "../components/sub/ToolTitle";
import FlexOneHeader from "../components/main/FlexOneHeader";
import FlexOneSteps from "../components/main/FlexOneSteps";
import NewElement from "../components/sub/Welcome";
import Welcome from "../components/sub/Welcome";
import EmailBtn from "../components/sub/EmailBtn";
import PlusAddBtn from "../components/sub/PlusAddBtn";
import EndButton from "../components/sub/EndButton";
import SaveAndPublishBtn from "../components/sub/SaveAndPublishBtn";

const Dashboard = () => {
  // set 1st flex header title active color
  const [activateTitle, setActiveTitle] = useState("Content");
  const handleToolClick = (name) => {
    setActiveTitle(name);
  };

  return (
    <>
      {/* main div */}
      <div className="flex justify-normal h-[100vh] bg-gray-100 ">
        {/* 1 st flex item */}
        <div className=" p-[10px] w-[20%]  bg-gray-100 shadow-md">
          <div className=" bg-[#dfe4ea]  shadow-md w-auto h-full rounded-md ">
            <FlexOneHeader />
            <div className="w-min mx-auto  shadow-md rounded-md bg-[#d2dae2]   flex items-center justify-center p-[3px]  ">
              {/* 1 st flex header bar */}
              <ToolTitle
                name="Content"
                position="rounded-l-md"
                isActivate={activateTitle === "Content"}
                onclick={() => handleToolClick("Content")}
              />
              <ToolTitle
                name="Design"
                isActivate={activateTitle === "Design"}
                onclick={() => handleToolClick("Design")}
              />
              <ToolTitle
                name="Share"
                isActivate={activateTitle === "Share"}
                onclick={() => handleToolClick("Share")}
              />
              <ToolTitle
                name="Replies"
                position="rounded-r-md"
                isActivate={activateTitle === "Replies"}
                onclick={() => handleToolClick("Replies")}
              />
            </div>

            {/* steps header title */}
            <FlexOneSteps />
            {/* New Buttons Add Element */}
            <div className="mx-[10px]">
              <Welcome />
              <EmailBtn />
              <PlusAddBtn />
              <hr className="mt-10 border border-[#a4b0be]" />
              <EndButton />
            </div>
            <SaveAndPublishBtn />
          </div>
        </div>
        {/* 2nd flex item */}
        <div className="w-[80%]">
          <div className=" p-[10px] w-auto h-full">
            <div className=" bg-slate-100 w-auto h-full rounded-md shadow-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
