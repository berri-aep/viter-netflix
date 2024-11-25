import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Plus,
  Trash2,
} from "lucide-react";
import React from "react";
import TableLoader from "../../partials/TableLoader";
import IconNoData from "../../partials/IconNoData";
import IconServerError from "../../partials/IconServerError";
import Pills from "../../partials/Pills";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import ModalConfirm from "../../partials/Modals/ModalConfirm";
import ModalAddMovie from "../../movies/ModalAddMovie";
import ModalAddCategory from "../category/ModalAddCategory";
import ModalAddGenre from "./ModalAddGenre";

const Genre = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleArchive = () => {
    dispatch(setIsArchive(true));
  };
  return (
    <>
      <div className="bg-secondary p-4 mt-5 border border-line rounded-md ">
        <button className="btn btn-add" onClick={handleAdd}>
          <Plus size={16} />
          Add New
        </button>
        <div className="table-wrapper custom-scroll mt-5  max-h-[60vh] ">
          {/* <TableLoader count={20} cols={5} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Genre</th>
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
                  <td>Horror</td>
                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
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
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={handleRestore}
                            >
                              <ArchiveRestore />
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
        </div>
      </div>
      {store.isDelete && <ModalDelete />}
      {store.isArchive && <ModalConfirm />}
      {store.isAdd && <ModalAddGenre />}
    </>
  );
};

export default Genre;
