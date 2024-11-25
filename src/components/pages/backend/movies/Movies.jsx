import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { imgPath } from "@/components/helpers/function-general";
import SideNav from "../partials/SideNav";
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Plus, SearchIcon, Trash2 } from "lucide-react";
import SearchBar from "../partials/SearchBar";
import Pills from "../partials/Pills";
import ModalDelete from "../partials/Modals/ModalDelete";
import ModalConfirm from "../partials/Modals/ModalConfirm";
import ModalValidation from "../partials/Modals/ModalValidation";
import ModalError from "../partials/Modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import LoadMore from "../partials/LoadMore";
import SpinnerWindow from "../partials/spinners/SpinnerWindow";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import ModalAddMovie from "./ModalAddMovie";
import MoviesTable from "./MoviesTable";
import ModalViewMovie from "./ModalViewMovie";
import { StoreContext, StoreProvider } from "@/components/store/storeContext";
import { setIsAdd, setMessage } from "@/components/store/storeAction";

const Movies = () => {
const {dispatch, store} = React.useContext(StoreContext);
const handleAdd = () => {
  dispatch(setIsAdd(true));
}
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNav menu="movies" />
          <main>
            <Header title="Movies" subtitle="List of available Movies" />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <MoviesTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddMovie />}
      {store.isView && <ModalViewMovie/>}
    </>
  );
};

export default Movies;
