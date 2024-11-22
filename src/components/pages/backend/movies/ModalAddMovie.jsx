import React from "react";
import ModalWrapper from "../partials/Modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";

const ModalAddMovie = () => {
  return (
    <>
      <ModalWrapper>
        <div className="modal-side fixed absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add Show</h5>
            <button>
              <X />
            </button>
          </div>

          <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
            <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
              <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                {true ? (
                  <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    // src={
                    //   photo
                    //     ? URL.createObjectURL(photo) // preview
                    //     : imgPath + "/" + itemEdit?.movies_image // check db
                    // }
                    alt="employee photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                  />
                )}
              </div>
              <div className="input-wrap">
                <label htmlFor="">Title</label>
                <input type="text" />
                <span className="show-error">*Required</span>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Year</label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label htmlFor="">Duration</label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label htmlFor="">Category</label>
                <select name="" id="">
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="TV shows">TV shows</option>
                  <option value="Western Movie">Western Movie</option>
                  <option value="Anime">Anime</option>
                  <option value="KDrama">Korean Drama</option>
                </select>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Genre</label>
                <select name="" id="">
                  <option value="" hidden>
                    Select Genre
                  </option>
                  <option value="Horror">Horror</option>
                  <option value="Suspense">Suspense</option>
                  <option value="Action">Action</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Romance">Drama</option>
                </select>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Summary</label>
                <textarea name="" id=""></textarea>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Cast</label>
                <textarea name="" id=""></textarea>
              </div>
            </div>
            <div className="form-action flex p-4 justify-end gap-5">
              <button className="btn btn-accent">
                <SpinnerButton />
                Save
              </button>
              <button className="btn btn-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddMovie;
