import React from "react";
import { FaUpload, FaDownload } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import { Modal } from "./Modal";

export default function Buttons({ btnClass, btnStyle, imageRef }) {
    const [showModal, setShowModal] = React.useState(false);
  
    return (
      <>
        <button
          className={btnClass}
          style={btnStyle}
          type="button"
          onClick={() => setShowModal(true)}
        >
          Upload <FaUpload className="inline mb-1" />
        </button>
  
        <button
          className={btnClass}
          style={btnStyle}
          type="button"
          onClick={() => {
            domtoimage
              .toBlob(imageRef.current)
              .then((blob) => saveAs(blob, "Image.jpg"))
              .catch((err) => `something went wrong, ${err}`);
          }}
        >
          Download <FaDownload className="inline mb-1" />
        </button>
  
        {<Modal showModal={showModal} setShowModal={setShowModal} />}
  
        <ToastContainer />
      </>
    );
  }