"use client";

import { useEffect, useState } from "react";
import ChatComponent from "./ChatComponent";
import ModalComponent from "./ModalComponent";
import Image from "next/image";

export default function MainComponent() {
  let [isOpen, setIsOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [webType, setWebType] = useState("");
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
    if (event.key === "Enter") {
      // 👇 Get input value
      if (chatMessage != "") {
        let currDate = new Date();
        let hoursMin = currDate.getHours() + ":" + currDate.getMinutes();
        const month = (currDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currDate.getDate().toString().padStart(2, "0");
        const formattedDate = `${day}.${month}`;
        setMessages([
          ...messages,
          {
            message: chatMessage,
            author: "Кирилл Чирясов",
            time: formattedDate + " | " + hoursMin,
          },
        ]);
        setChatMessage("");
      }
    }
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

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
            <div className="grid grid-cols-1">
              <div className="mb-3">
                <div className="flex">
                  <p className="px-2 text-left text-xs text-[#989898]">
                    Загрузить пост-источник:
                  </p>
                  <div className="flex space-x-4">
                    <button onClick={() => {
                      setWebType('Telegram')
                      setIsOpen(true)
                      }}>
                  <Image
                    priority
                    src="/svg/TelegramIcon.svg"
                    height={15}
                    width={15}
                  />
                    </button>
                    <button onClick={() => {
                      setWebType('Instagram')
                      setIsOpen(true)
                      }}>
                  <Image
                    priority
                    src="/svg/InstagramIcon.svg"
                    height={15}
                    width={15}
                  />
                    </button>
                    <button onClick={() => {
                      setWebType('VK')
                      setIsOpen(true)
                      }}>
                    <Image
                    priority
                    src="/svg/VkIcon.svg"
                    height={15}
                    width={15}
                  />
                    </button>
                  
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <input
                  value={chatMessage}
                  className="py-2 px-3 placeholder:text-[#BDBDBD] placeholder:font-light bg-[#333334] w-10/12 h-12 rounded-lg text-sm border-solid border-b border-t border-r border-l border-[#494949]"
                  placeholder="О чем поговорим сегодня?"
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
                <button
                  onClick={() => {
                    if (chatMessage != "") {
                      let currDate = new Date();
                      let hoursMin =
                        currDate.getHours() + ":" + currDate.getMinutes();
                      const month = (currDate.getMonth() + 1)
                        .toString()
                        .padStart(2, "0");
                      const day = currDate
                        .getDate()
                        .toString()
                        .padStart(2, "0");
                      const formattedDate = `${day}.${month}`;
                      setMessages([
                        ...messages,
                        {
                          message: chatMessage,
                          author: "Кирилл Чирясов",
                          time: formattedDate + " | " + hoursMin,
                        },
                      ]);
                      setChatMessage("");
                    }
                  }}
                  className="ml-7 h-12 w-12 rounded-lg bg-[#9E00FF]"
                >
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

      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="px-4 flex mx-2 mb-2">
              <div className="flex space-x-2">
            <Image
              priority
              src={`/svg/${webType}Icon.svg`}
              height={15}
              width={15}
            />
            <p className="text-[#989898]">{webType}</p>
              </div>
            <p className="mx-auto text-[14px] font-light align-text-bottom">
              Вставьте ссылку или воспользуйтесь поиском:
            </p>
            <button className="ml-auto" onClick={() => setIsOpen(false)}>
              <Image
                priority
                src="/svg/CloseButton.svg"
                height={15}
                width={15}
              />
            </button>
          </div>
          <hr className="w-full h-[0.4px] mt-2 mb-4 bg-[#494949] border-0" />
          <div className="flex space-x-4 justify-center px-6">
            <input
              className="w-full py-2 px-3 placeholder:text-[#494949] text-[#494949] placeholder:text-opacity-50 text-opacity-50 placeholder:font-light bg-[#ECECEC] h-8 rounded-lg text-sm border-solid border-b border-t border-r border-l border-[#494949]"
              placeholder="Ссылка или название источника"
            />
            <button>
              <Image
                priority
                src="/svg/SearchIcon.svg"
                height={20}
                width={20}
              />
            </button>
          </div>

          <hr className="w-full h-[0.4px] mt-4 bg-[#494949] border-0" />
        
        <div className="flex mx-6 pt-4">
            <button className="flex space-x-2">
        <Image
                priority
                src="/svg/HistoryButton.svg"
                height={20}
                width={20}
              />
            <p className="text-sm text-[#989898] underline underline-offset-4">История запросов</p>
            </button>
        </div>
          <hr className="w-full h-[0.4px] mt-4 bg-[#494949] border-0" />
      </ModalComponent>


    </div>
  );
}
