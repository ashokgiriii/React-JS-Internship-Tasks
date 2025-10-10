import ReactDom from "react-dom";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#fafafa] bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4  rounded-2xl p-6 z-50">
        <h2 className=" text-center font-bold shadow p-4 rounded-md bg-white mb-4 text-black">
          This is The Model Pop Up
        </h2>
        <button
          className=" p-4 rounded-md bg-green-200 shadow cursor-pointer hover:bg-green-300 text-red-800 w-full"
          onClick={onClose}
        >
          Close Modal
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
