import React from "react";
import { RiDonutChartFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FcSearch } from "react-icons/fc ";
import { MdOutlineArchive } from "react-icons/md";

// const chat = [
//   {
//     name: "Dashboard",
//     icon: <MdSpaceDashboard />,
//     click: "Dashboard",
//   },
//   {
//     name: "New Bookings",
//     icon: <MdSpaceDashboard />,
//     click: "NewBookings",
//   },
//   {
//     name: "Booking History",
//     icon: <MdSpaceDashboard />,
//     click: "BookingHistory",
//   },
//   {
//     name: "Messages",
//     icon: <MdSpaceDashboard />,
//     click: "Messages",
//   },
//   {
//     name: "Customer Documents",
//     icon: <MdSpaceDashboard />,
//     click: "CustomerDocuments",
//   },
// ];

function chatmodel(props) {
  return (
    <button className="chat w-[27.5vw] h-[8vh] bg-transparent">
      <button
        className="flex w-full items-center hover:bg-orange-300 flex-row text-white py-[0.5rem] px-[0.8rem] rounded-[1.2rem] shadow-md shadow-black border-2 border-[#0C1228] font-inter"
        onClick={props.setCurrentPage(props.click)}
      >
        <div className="text-[1.5rem] pr-[1rem]">{props.icon}</div>
        <div>{props.name}</div>
      </button>
    </button>
  );
}

const Sidebar = () => (
  <>
    <div className="sidebar_container w-[28vw] h-[97.5vh] bg-[#111b21] mt-3 ml-3 ">
      <div className="w-[27.9vw] h-[10vh] bg-[#1f2c33] flex justify-between ">
        <div className="w-[10vw] h-[10vh] bg-[#1f2c33] flex item-center">
          <button>
            <CgProfile className="sidebar_profile rounded-full bg-transparent  flex item-center mx-2.5" />
          </button>
        </div>
        <div className="sidebar_icons w-[12vw] h-[10vh] bg-[#1f2c33] flex items-center justify-between">
          <button>
            <MdGroups className="sidebar_icon bg-transparent rounded-full" />
          </button>
          <button>
            <RiDonutChartFill className="sidebar_icon bg-transparent rounded-full" />
          </button>
          <button>
            <BiMessageRoundedDots className="sidebar_icon bg-transparent rounded-full" />
          </button>
          <button>
            <BsThreeDotsVertical className="sidebar_icon bg-transparent rounded-full" />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className=" bg-[#1f2c33] m-3 w-[23vw] h-[5vh] items-center rounded-md flex justify-between">
          <FcSearch className="search_icon bg-transparent mx-[1vw]" />
          <input
            className="search_box bg-transparent w-[20vw] px-[2vw] justify-left mr-[2vw]"
            type="Search"
            placeholder="Search or start new chat"
          />
        </div>
        <button>
          <MdOutlineArchive className="archive_icon flex item-center" />
        </button>
      </div>
      {/*chats start  from here */}

      <button className="sidebar_chat flex items-left w-[27.5vw] h-[10vh]  items-center bg-[#1f2c33] mt-1">
        <CgProfile className="sidebar_chat_profile rounded-full bg-transparent  flex mx-2.5 item-center" />
        <div className="flex flex-col text-white text-left mx-[0.6vw] mb-1">
          <p className="text-[1.2rem] bg-[#1f2c33]">Demo User</p>
          <p className="text-[0.8rem] bg-[#1f2c33]">Hey, I am a demo user</p>
        </div>
        <div className=" text-white opacity-[80%] bg-[#1f2c33] ml-[8vw]">
          00:00
        </div>
      </button>
    </div>
  </>
);

export default Sidebar;
