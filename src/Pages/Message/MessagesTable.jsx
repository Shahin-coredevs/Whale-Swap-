/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Modal from "../../Shared/Modal";
import removeIcon from "../../assets/removeIcon.svg";
import Pagination from "../../Shared/Pagination";

const MessagesTable = ({ data, tableHeader }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className=" h-[500px]">
      <table className="w-full  text-sm text-left  text-White ">
        <thead className="text-xl mb-5 bg-slate-800 rounded-lg">
          <tr className="p-6  ">
            {tableHeader.map((e) => {
              return <th className="p-6">{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentData?.map((d) => {
            return (
              <tr className="border-b-2 border-slate-800">
                <td className="px-6 py-6">{<input type="checkbox" />}</td>
                <td className="px-6 py-6 ">{d?.message}</td>
                <td className="px-6 py-6 w-48">{d?.Date}</td>
                <td className="px-6 py-6">
                  {
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center gap-3 text-red-500"
                    >
                      <figure>
                        <img src={removeIcon} alt="" />
                      </figure>
                      <p>Remove</p>
                    </button>
                  }
                  {showModal && (
                    <Modal modal={showModal}>
                      <div className="w-[500px] h-60 border rounded-lg">
                        <div className="py-10 px-12">
                          <h1 className="text-2xl text-White text-center">
                            Are your sure you want to remove this message.
                          </h1>
                          <div className="flex justify-center gap-5 mt-12">
                            <button
                              onClick={() => setShowModal(false)}
                              className="rounded-lg px-6 py-2 text-lg font-semibold text-White border border-[#FFFFFF] w-[100px] h-12 "
                            >
                              Cancel
                            </button>
                            <button className="w-[100px] h-12 bg-error rounded-lg px-6 py-2 text-lg font-semibold text-White">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full flex justify-end mr-5 text-White">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MessagesTable;
