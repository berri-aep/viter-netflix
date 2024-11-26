import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Trash2,
} from "lucide-react";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import LoadMore from "../partials/LoadMore";
import Pills from "../partials/Pills";
import TableLoader from "../partials/TableLoader";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore, setIsView } from "@/components/store/storeAction";
import React from "react";
import ModalDelete from "../partials/Modals/ModalDelete";
import ModalConfirm from "../partials/Modals/ModalConfirm";
import ModalViewMovie from "./ModalViewMovie";
import ModalAddMovie from "./ModalAddMovie";
import { movies } from "./datamovies";

const MoviesTable = () => {
  const{store,dispatch} = React.useContext(StoreContext);
  let counter = 1;
  const [movieInfo,setMovieInfo] = React.useState("");

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleEdit = () => {
    dispatch(setIsAdd(true));
  };
  const handleRestore = () => {
    dispatch(setIsRestore(true));
  };
  const handleArchive = () => {
    dispatch(setIsArchive(true));
  };
  const handleView = (item) => {
    dispatch(setIsView(true));
    setMovieInfo(item);
  };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={5} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Year</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr>
            <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr> */}

              {movies.map((item, key) => (
                <tr key={key}>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>{item.movie_title}</td>
                  <td>{item.movie_year}</td>
                  <td>{item.movie_duration}</td>
                  <td>
                    <ul className="table-action">
                      {item.movie_is_active ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="View"
                              onClick={() => handleView(item)}
                            >
                              <FileVideo />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit()}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={handleArchive}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button className="tooltip" data-tooltip="Restore">
                              <ArchiveRestore onClick={() => handleRestore()} />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={handleDelete}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isRestore && <ModalConfirm />}
      {store.isArchive && <ModalConfirm />}
      {store.isView && <ModalViewMovie movieInfo={movieInfo} />}
      {store.isAdd && <ModalAddMovie />}
    </>
  );
};

export default MoviesTable;
