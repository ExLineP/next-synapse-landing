import DatePicker from "@/components/DatePicker";
import ModalComponent from "@/components/ModalComponent";
import Image from "next/image";
import { useEffect, useState } from "react";

function LoadPostModal({isOpen, setIsOpen, webType}) {
  const [modalStep, setModalStep] = useState("Initial")
  const [url, setUrl] = useState("")
  const [keywords, setKeywords] = useState("")

  const handleCloseModal = () => {
    setUrl("")
    setModalStep("Initial")
  };


  useEffect(() => {
    return () => {
      handleCloseModal();
    };
  }, [isOpen]);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  }

  switch (modalStep) {
    case "Initial":
      return (
        <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="px-4 flex mx-2 mb-2">
            <div className="flex space-x-2">
              <Image
                priority
                src={`/svg/${webType}Icon.svg`}
                height={15}
                width={15}
              />
              <p className="text-[#989898] text-[14px]">{webType}</p>
            </div>
            <p className="mx-auto text-[14px] font-light align-text-bottom">
              Вставьте ссылку или воспользуйтесь поиском:
            </p>
            <button className="ml-auto" onClick={() => setIsOpen(false)}>
              <Image priority src="/svg/CloseButton.svg" height={15} width={15} />
            </button>
          </div>
          <hr className="w-full h-[0.4px] mt-2 mb-4 bg-[#494949] border-0" />
          <div className="flex space-x-4 justify-center px-6">
            <input
              value={url}
              onChange={handleUrlChange}
              className="outline-none	w-full py-2 px-3 placeholder:text-[#494949] text-[#494949] placeholder:text-opacity-50 text-opacity-50 placeholder:font-light bg-[#ECECEC] h-8 rounded-lg text-sm border-solid border-b border-t border-r border-l border-[#494949]"
              placeholder="Ссылка или название источника"
            />
            <button
             onClick={() => {
              setModalStep("Scrape")
            }}>
              <Image priority src="/svg/SearchIcon.svg" height={18} width={18} />
            </button>
          </div>
    
          <hr className="w-full h-[0.4px] mt-4 bg-[#494949] border-0" />
    
          <div className="flex mx-6 pt-4">
            <button onClick={() => setModalStep("History")} className="flex space-x-2">
              <Image priority src="/svg/HistoryButton.svg" height={20} width={20} />
              <p className="text-sm text-[#989898] underline underline-offset-4">
                История запросов
              </p>
            </button>
          </div>
          <hr className="w-full h-[0.4px] mt-4 bg-[#494949] border-0" />
        </ModalComponent>
      );
    case "Scrape":
      return(
        <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="px-4 flex mx-2 mb-2">
            <div className="flex space-x-2">
              <Image
                priority
                src={`/svg/${webType}Icon.svg`}
                height={15}
                width={15}
              />
              <p className="text-[#989898] text-[14px]">{webType}</p>
            </div>
            <p className="pl-5 text-[14px] font-light align-text-bottom">
                Выберите публикацию:
            </p>
            <button className="ml-auto" onClick={() => setIsOpen(false)}>
              <Image priority src="/svg/CloseButton.svg" height={15} width={15} />
            </button>
          </div>
          <hr className="w-full h-[0.4px] mt-2 bg-[#494949] border-0" />
          <div className="mx-6 pt-4 flex">
          <input
              value={keywords}
              onChange={handleKeywordsChange}
              className="outline-none	w-6/12 py-2 px-3 placeholder:text-[#494949] text-[#494949] placeholder:text-opacity-50 text-opacity-50 placeholder:font-light bg-[#ECECEC] h-8 rounded-lg text-sm border-solid border-b border-t border-r border-l border-[#494949]"
              placeholder="Ключевые слова"
            />
            <div className="flex mx-auto">
              <DatePicker/>
            </div>
            <button
            className="ml-auto"
             onClick={() => {
              ////////////////////////////////
            }}>
              <Image priority src="/svg/SearchIcon.svg" height={18} width={18} />
            </button>
          </div>
          <hr className="w-full h-[0.4px] mt-4 bg-[#494949] border-0" />

        </ModalComponent>
      )
      case "History":
        return(
          <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="px-4 flex mx-2 mb-2">
            <div className="flex space-x-2">
              <Image
                priority
                src={`/svg/${webType}Icon.svg`}
                height={15}
                width={15}
              />
              <p className="text-[#989898] text-[14px]">{webType}</p>
            </div>
            <p className="pl-9 text-[14px] font-light">
               История запросов
            </p>
            <button className="ml-auto" onClick={() => setModalStep("Initial")}>
            <Image priority src="/svg/BackButton.svg" height={20} width={20} />
            </button>
            <button className="" onClick={() => setIsOpen(false)}>
              <Image priority src="/svg/CloseButton.svg" height={15} width={15} />
            </button>
          </div>
          </ModalComponent>
        )
  }
}

export default LoadPostModal