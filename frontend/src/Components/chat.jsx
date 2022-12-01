import React from 'react'

const chat = (props) => {
  return (
    <div>
         <div className="received_chats bg-transparent h-[7vh] flex items-center ">
            <span className="bg-[#1f2c33] text-white mx-[2vw] py-[0.6vh] px-[0.8vw] rounded-[0.5rem] max-w-[50vw]">
            {props.messages}
          </span>
        </div>
    </div>
  )
}

export default chat
