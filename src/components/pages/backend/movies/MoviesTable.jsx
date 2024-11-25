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
import { setIsArchive, setIsConfirm, setIsDelete, setIsRestore, setIsView } from "@/components/store/storeAction";
import React from "react";
import ModalDelete from "../partials/Modals/ModalDelete";
import ModalConfirm from "../partials/Modals/ModalConfirm";
import ModalViewMovie from "./ModalViewMovie";

const MoviesTable = () => {
  const{store,dispatch} = React.useContext(StoreContext);
  const handleDelete = () => {
    dispatch(setIsDelete(true))
  };
  const handleRestore = () => {
    dispatch(setIsRestore(true))
  };
  const handleArchive = () => {
    dispatch(setIsArchive(true))
  };
  const handleView = () => {
    dispatch(setIsView(true))
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
              {Array.from(Array(10).keys()).map((i) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>Arcane</td>
                  <td>2024</td>
                  <td>2 Seasons</td>
                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="View"
                              onClick={handleView}
                            >
                              <FileVideo />
                            </button>
                          </li>
                          <li>
                            <button className="tooltip" data-tooltip="Edit">
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
      {store.isView && <ModalViewMovie />}
    </>
  );
};

export default MoviesTable;
