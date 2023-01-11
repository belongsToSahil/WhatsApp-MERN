import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcSearch } from "react-icons/fc ";
import { BsEmojiLaughing } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";

const Chat = (props) => {
  return (
    <>
      <div className="received_chats bg-transparent h-[7vh] flex items-center ">
        <span className="bg-[#1f2c33] text-white mx-[2vw] py-[0.6vh] px-[0.8vw] rounded-[0.5rem] max-w-[50vw]">
          {props.message}
        </span>
      </div>
    </>
  );
};

const Chats = ({ messages }) => {
  return (
    <div className="w-[70vw] h-[95vh] bg-[#111b21] my-3 ">
      <div className="w-[69.9vw] h-[10vh] bg-[#1f2c33] flex items-center justify-between">
        <div className="w-[20vw] h-[10vh]  bg-[#1f2c33] flex">
          <button>
            <CgProfile className="sidebar_profile rounded-full bg-transparent  flex item-center mx-2.5" />
          </button>
          <button className="text-[1.2rem] bg-[#1f2c33] text-white">
            Demo User
          </button>
        </div>
        <div className="w-[10vw] h-[10vh]  bg-[#1f2c33] flex justify-between px-[2.5vw]">
          <button>
            <FcSearch className="search_icon bg-transparent" />
          </button>
          <button>
            <BsThreeDotsVertical className="sidebar_icon bg-transparent rounded-full text-white" />
          </button>
        </div>
      </div>
      <div className="bg_chats w-[69.9vw] h-[77vh]">
        {/* <img
          src="bg.png"
          alt="No image found"
          className="w-[69.9vw] h-[77vh]"
        /> */}
        {/* <div className="received_chats bg-transparent h-[7vh] flex items-center ">
          <span className="bg-[#1f2c33] text-white mx-[2vw] py-[0.6vh] px-[0.8vw] rounded-[0.5rem] max-w-[50vw]">
          This is dummy message
          </span>
        </div> */}
        {messages.map((element, index) => {
              return <Chat index={index._id} message={element.message} />;
            })}
        <div className="send_chats bg-transparent h-[7vh] flex items-center justify-end ">
          <span className="bg-[#1f2c33] text-white mx-[2vw] py-[0.6vh] px-[0.8vw] rounded-[0.5rem]">
            This is Send Dummy Chat
          </span>
        </div>
      </div>
      <div className="w-[69.9vw] h-[8vh] bg-[#1f2c33] flex justify-center items-center">
        <div className="w-[67vw] h-[7vh] bg-[#1f2c33] flex">
          <div className=" w-[7vw] h-[7vh]  bg-[#1f2c33] flex justify-center items-center">
            <button>
              <BsEmojiLaughing className="chats_icons mx-[0.9vw]" />
            </button>
            <button>
              <IoIosAttach className="chats_icons mx-[0.9vw]" />
            </button>
          </div>
          <div className="w-[58vw] h-[7vh]  bg-[#1f2c33] justify-center items-center flex">
            <div className="chat_box bg-[#2a3942] m-3 w-[55vw] h-[5vh] items-center rounded-md flex justify-between">
              <input
                className="search_box bg-transparent w-[55vw] px-[2vw] justify-left mr-[2vw]"
                type="Search"
                placeholder="Search or start new chat"
              />
            </div>
          </div>
          <div className="w-[2vw] h-[7vh]  bg-[#1f2c33] flex justify-center items-center">
            <FaMicrophoneAlt className="chats_icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
