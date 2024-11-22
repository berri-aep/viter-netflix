import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Trash2,
} from "lucide-react";
import React from "react";
import Pills from "../partials/Pills";
import IconServerError from "../partials/IconServerError";
import LoadMore from "../partials/LoadMore";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import SpinnerTable from "../partials/spinners/SpinnerTable";

const MoviesTable = () => {
  return (
    <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
      {/* <SpinnerTable /> */}
      <div className="table-wrapper custom-scroll">
        <TableLoader count={20} cols={5} />
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
            <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr>
            <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr>
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
                          <button className="tooltip" data-tooltip="View">
                            <FileVideo />
                          </button>
                        </li>
                        <li>
                          <button className="tooltip" data-tooltip="Edit">
                            <FilePenLine />
                          </button>
                        </li>
                        <li>
                          <button className="tooltip" data-tooltip="Archive">
                            <Archive />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button className="tooltip" data-tooltip="Restore">
                            <ArchiveRestore />
                          </button>
                        </li>
                        <li>
                          <button className="tooltip" data-tooltip="Delete">
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
  );
};

export default MoviesTable;
