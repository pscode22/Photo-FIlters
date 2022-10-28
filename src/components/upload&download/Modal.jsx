import React from "react";
import ReactDOM from "react-dom";
import { VscChromeClose } from "react-icons/vsc";
import "react-toastify/dist/ReactToastify.css";
import { ImageContext } from "../ImageContext";
import photo from "../../digital_photo/samurai.jpg";
import { toast } from "react-toastify";

export function Modal({ showModal, setShowModal }) {
  const uploadSuccess = React.useContext(ImageContext);
  const { setImages } = uploadSuccess;

  const [state, setState] = React.useState(true);
  const [imageState, setImageState] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadImg = document.getElementById("uploadImage");

    console.log(uploadImg.src);

    uploadImg.src === ""
      ? setImages(photo)
      : setImages({ name: uploadImg.src });

    setShowModal(false);
    setImageState(false);
    return setState(true);
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(e.target.files);

    const imgFile = e.target.files;

    const imgPreview = document.getElementById("uploadImage");

    if (files.every((item) => item.type.match(/image.*/))) {
      let reader = new FileReader();
      reader.readAsDataURL(imgFile[0]);
      reader.onload = (e) => {
        imgPreview.src = e.currentTarget.result;
      };

      setState(false);
      setImageState(true);
      return;
    } else if (undefined) {
      return state === false ? setState(true) : null;
    } else {
      e.target.value = "";
      toast.error("Choose only Image type");
      return state === false ? setState(true) : null;
    }
  };

  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-auto w-[95%] my-6 mx-auto max-w-3xl">

              {/* -------- content -------- */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-[#161b22] outline-none focus:outline-none">
                
                {/* -------- header -------- */}
                <div className="flex items-start justify-between pt-2 pr-4 border-0 border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      setImageState(false);
                      return;
                    }}
                  >
                    <span className="bg-transparent text-black dark:text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <VscChromeClose />
                    </span>
                  </button>
                </div>

                {/* -------- body -------- */}
                <div className="relative p-6 flex-auto mb-12">
                  <div
                    className="w-full sm:w-[500px] h-[200px]  
                      dark:text-white text-center relative"
                  >
                    <div
                      className="absolute z-10"
                      style={{ display: imageState ? "block" : "none" }}
                    >
                      <img
                        id="uploadImage"
                        src={""}
                        alt="preview"
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <div className="w-full h-full  relative z-0">
                      <input
                        type="file"
                        multiple
                        className="w-full h-full text-center place-items-center pt-10 pl-[27%] sm:pl-[30%]
                          dark:bg-gray-700 border-2 border-dashed dark:border-white"
                        onChange={handleChange}
                        style={{
                          display: imageState === false ? "block" : "none",
                        }}
                      />

                      <p className="dark:text-white relative bottom-[50%] z-0">
                        Drag your files here or click in this area.
                      </p>
                    </div>

                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 
                        rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all 
                        duration-150 disabled:bg-gray-500"
                      disabled={state}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>,
    document.getElementById("modal")
  );
}
