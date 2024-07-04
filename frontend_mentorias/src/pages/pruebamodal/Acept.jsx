import React from "react";
import {
  AiOutlineClose,
} from "react-icons/ai";
import Modal from "react-modal";


const CONFIRMViewModal = ({ viewModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={viewModalOpen}
      onRequestClose={() => closeModal()}
      contentLabel="Encargado"
      className="w-fit h-fit bg-white overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative w-fit h-full p-10 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-3xl text-green-700">¡Registro exitoso!</h1>
          <br />
          <br />
          <p>El registro se realizó correctamente.</p>
          <br />
        </div>

        <button
          className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-2 mx-auto"
          onClick={() => closeModal()}
        >
          Entendido
        </button>
      </div>
    </Modal>
  )
}

export default CONFIRMViewModal
