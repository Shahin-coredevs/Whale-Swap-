/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Pagination from "../../Shared/Pagination";

const UserTable = ({ data, tableHeader }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <table className="w-full  text-sm text-left  text-White ">
        <thead className="text-xl mb-5">
          <tr>
            {tableHeader.map((e) => {
              return <th className="px-6 py-6  bg-slate-800">{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentData?.map((d) => {
            return (
              <tr className="border-b-2 border-slate-800">
                <td className="px-6 py-6">{d?.Username}</td>
                <td className="px-6 py-6">{d?.JoiningDate}</td>
                <td className="px-6 py-6">${d?.TotalEarning}</td>
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

export default UserTable;
