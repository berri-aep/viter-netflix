import { CheckCircle } from "lucide-react";
import React from "react";

const ToastSuccess = () => {
  return (
    <>
      <div className="fixed top-10 left-1/2 -translate-x-1/2 border border-line bg-primary text-success rounded-md flex gap-2 items-center p-1.5 px-2.5">
        <CheckCircle size={16} />
        Record Successfully Added!
      </div>
    </>
  );
};

export default ToastSuccess;
