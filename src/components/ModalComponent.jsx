import { Dialog } from "@headlessui/react";
import Image from "next/image";

function ModalComponent({ isOpen, setIsOpen, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      as="div"
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
    >
      <Dialog.Panel>
        <div className="flex flex-col bg-[#22252A] text-white w-[36rem] min-h-[40rem] py-5 text-center rounded-xl">
          <Dialog.Overlay />
          {children}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ModalComponent;
