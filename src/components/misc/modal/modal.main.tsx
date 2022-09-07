import { useEffect, useState } from 'react'

type ModalProps = {
  successLabel?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: JSX.Element;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { isOpen, onClose } = props
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   setShowModal(isOpen);
  // }, [isOpen]);

  // useEffect(() => {
  //   if (!showModal && onClose) {
  //     onClose();
  //   }
  // }, [onClose, showModal]);

  return (
    <>
      { isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              { /*content*/ }
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                { props.children }
                { /*footer*/ }
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onClose()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onClose()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null }
    </>
  )
}

export { Modal }
