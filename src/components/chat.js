import React from "react";
import "./mainPage.css";
import ChatHistory from "../assets/chatHistory.svg";
import Send from "../assets/send.svg";
import Del2 from "../assets/del2.svg";
import Logout from "../assets/logoff.svg";
import Filter from "../assets/filter.svg";

export const chat = () => {
  const Examples = [
    "Best advices by CEOs around the world",
    "How to write good code in React JS",
    "How long it takes to become good coder?",
    "Is Angular better than React?",
    "Why people communicate less these days?",
    "Are you ChatGPT or AV?",
  ];
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] md:flex-row">
      <div className="w-full md:w-[30%] h-[30%] md:h-screen bg-[#eeeeee] p-4 md:p-12">
        <div className="py-2 border-b-2 text-lg md:text-xl font-semibold border-[#89AFCC] text-left md:text-left">
          Recent Activity
        </div>
        <div className="p-3 bg-white mt-4 rounded-md shadow-md h-[40%] md:h-[60%] overflow-x-clip hover:overflow-scroll">
          <div className="flex flex-row rounded-[10px] md:items-center mt-2">
            <div className="leftShape basis-1/10"></div>
            <p className="text-[18px] ml-3  basis-3/4  cursor-pointer">
              Tell me how can I register for Traaa.com
            </p>
            <span className="cursor-pointer ml-5 w-[18px] basis-1/10">
              <img src={ChatHistory}></img>
            </span>
            <span className="cursor-pointer ml-2 w-[18px] basis-1/10">
              <img src={Del2}></img>
            </span>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 9, 22, 44].map((item, index) => (
            <div className="flex flex-row mt-3 border-b-[1px] border-[#E6E6E6]">
              <p className="text-[18px] ml-3 basis-4/5 cursor-pointer">
                This is my Chat History
              </p>
              <span className=" w-[16px] ml-5 mt-1 basis-1/5">
                <p className="text-[12px] text-[#929292]">1:22 PM</p>
              </span>
            </div>
          ))}
        </div>

        <div className="h-[30%] md:h-[10%] mt-5">
          {/* {[1, 2, 3].map((item, index) => (
            <div className="flex flex-row mt-3">
              <p className=" text-[16px] ml-3 basis-4/5 cursor-pointer">
                This is my Chat History
              </p>
              <span className=" w-[16px] mt-1 basis-1/5"></span>
            </div>
          ))} */}

          <div className="text-[18px] font-[600] mt-[20%]">
            <div className="flex flex-row">
              <p className=" ml-3  basis-3/4 cursor-pointer">
                Delete Conversations
              </p>
              <span className="cursor-pointer w-[20px] mt-1 basis-1/10">
                <img src={Del2}></img>
              </span>
            </div>
            <div className="flex flex-row">
                <p className="ml-3 basis-3/4 cursor-pointer logout">Logout</p>
                <span className="cursor-pointer w-[20px] mt-1 basis-1/10 logout">
                  <img src={Logout} alt="Logout"></img>
                </span>
            </div>
          </div>
          <div>
            <button className="w-[100%] h-[55px] mt-8 text-white border rounded-[10px] bg-[#4cb469] hover:bg-[#61d381] cursor-pointer">
              + New chat
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%]">
        <div className="h-[80%] border flex flex-col justify-center items-center ">
          <div className="text-4xl bold mb-8">AV</div>
          <div className="flex flex-wrap justify-around max-w-[900px]">
            {Examples.map((items, index) => (
              <div className="text-lg p-4 border-2 rounded cursor-pointer mt-4 min-w-[400px] hover:bg-[#eeeeee]">
                {items}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[20%] ">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-[70%]  flex justify-center items-center relative">
              <span className="relative w-[24px] left-9">
                <img className="" src={Filter}></img>
              </span>
              <button className=" text-white h-[50px] mr-[25px] w-[115px] pl-[25px] border rounded-[10px] bg-[#346D7A] hover:bg-[#4d8f9e] cursor-pointer">
                Filter
              </button>
              <textarea
                type="text"
                className="borde w-full pr-[60px] resize-none  text-[14px] pt-4 pl-4 shadow-md bg-white rounded-[10px]"
                placeholder="Enter your query here."
              ></textarea>
              <span className="w-[32px] absolute right-5 top-5 cursor-pointer">
                <img src={Send}></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default chat;
