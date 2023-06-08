"use client";

import { useEffect, useState } from "react";
import ChatComponent from "./ChatComponent";

export default function MainComponent() {
  const [chatMessage, setChatMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      message:
        "Пост из Instagram от 25.05 пользователя @account38238. Текст поста + текст из JPEG (PRO)",
      author: "Кирилл Чирясов",
      time: "04.08 | 14:28",
    },
    {
      message:
        "Пост из Instagram от 24.05 пользователя @account38238. Текст поста + текст из JPEG (PRO)",
      author: "Synapse Bot",
      time: "04.08 | 14:28",
    },
  ]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      if (chatMessage != "") {
        let currDate = new Date();
        let hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
        const month = (currDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${day}.${month}`;
        setMessages([...messages, {message: chatMessage, author: "Кирилл Чирясов", time: formattedDate + " | " + hoursMin}])
        setChatMessage("")
      }
    }
  };

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="grid grid-cols-4 mt-10 mb-10 mr-10 ml-5 h-[90vh] rounded-3xl w-full bg-[#23252B]">
        <div className="col-span-3 m-3 grid grid-rows-1">
          <div className="chat mt-8 row-span-3/4 block h-[66vh] overflow-auto">
            {messages.map((message) => {
              if (message.author == "Кирилл Чирясов") {
                return (
                  <div className="w-11/12 text-left rounded-lg mb-8 pt-5 pl-5 pb-3 m-auto bg-[#282C34]">
                    <h1 className="pb-3 font-light">{message.author}</h1>
                    <p className="font-light text-sm">{message.message}</p>
                    <p className="text-right pr-4 text-[#727272] text-sm">
                      {message.time}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div className="w-11/12 text-left rounded-lg mb-8 pt-5 pl-5 pb-3 m-auto bg-[#4D3E56]">
                    <h1 className="pb-3 font-light">{message.author}</h1>
                    <p className="font-light text-sm">{message.message}</p>
                    <p className="text-right pr-4 text-[#727272] text-sm">
                      {message.time}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="row-span-1/4 pb-3">
            <hr className="h-px mb-5 bg-[#494949] border-0" />
            <div className="flex flex-col">
              <div className="">
              <button className="bg-[#282C34] w-fit mb-4 p-1 rounded-lg flex  border-solid border-b border-t border-r border-l border-[#494949] text-[#989898]">
                <svg
                  className="h-6 ml-2"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00001 6.50604L5.15733 1.51725C5.6483 0.928087 6.45171 0.928087 6.94268 1.51725L11.1 6.50604"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="px-2 text-left text-sm">
                  Выбрать посты из парсера
                </p>
              </button>
            </div>

            <div className="flex justify-center items-center">
              <input value={chatMessage}
                className="py-2 px-3 placeholder:text-[#BDBDBD] placeholder:font-light bg-[#333334] w-10/12 h-12 rounded-lg text-sm border-solid border-b border-t border-r border-l border-[#494949]"
                placeholder="О чем поговорим сегодня?"
                onKeyDown={handleKeyDown}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <button
              onClick={() => {
                if (chatMessage != "") {
                  let currDate = new Date();
                  let hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                  const month = (currDate.getMonth() + 1).toString().padStart(2, '0');
                  const day = currDate.getDate().toString().padStart(2, '0');
                  const formattedDate = `${day}.${month}`;
                  setMessages([...messages, {message: chatMessage, author: "Кирилл Чирясов", time: formattedDate + " | " + hoursMin}])
                  setChatMessage("")
                }
              }}
              className="ml-7 h-12 w-12 rounded-lg bg-[#9E00FF]">
                <svg
                  className="ml-5"
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999999 1L8.90303 7.58586C9.83636 8.36364 9.83636 9.63636 8.90303 10.4141L1 17"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div class="second-column absolute -ml-0.5 top-0 bottom-0 w-0.5 bg-[#494949] opacity-50" />
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}
