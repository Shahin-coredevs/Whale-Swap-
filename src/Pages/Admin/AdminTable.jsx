/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import removeIcon from "../../assets/removeIcon.svg";
import editIcon from "../../assets/Edit.svg";
import { useState } from "react";
import Modal from "../../Shared/Modal";
import InputFiled from "../../Shared/InputField";
import { toggleInput } from "../../Shared/toggleInput";
import showIcon from "../../assets/ShowIcon.svg";
import closeIcon from "../../assets/CloseIcon.svg";
import { useForm } from "react-hook-form";
import Pagination from "../../Shared/Pagination";
const AdminTable = ({ tableHeader, data }) => {
  const [type, setType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
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
    <div className="overflow-hidden">
      <table className="w-full  text-sm text-left  text-White ">
        <thead className="text-xl mb-5">
          <tr>
            {tableHeader.map((e) => {
              console.log(e);
              return <th className="px-6 py-6  bg-slate-800">{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentData?.map((d) => {
            return (
              <tr className="border-b-2 border-slate-800">
                <td className="px-6 py-6">
                  {<input className="" type="checkbox" />}
                </td>
                <td className="px-6 py-6">{d?.id}</td>
                <td className="px-6 py-6">{d?.name}</td>
                <td className="px-6 py-6">{d?.email}</td>
                <td className="px-6 py-6">
                  {
                    <div className="flex gap-20 items-center">
                      <button
                        onClick={() => setEditModal(true)}
                        className="flex items-center gap-3"
                      >
                        <figure>
                          <img src={editIcon} alt="" />
                        </figure>
                        <p>Edit</p>
                      </button>
                      {editModal && (
                        <Modal modal={editModal}>
                          <div className="border flex justify-center items-center flex-col rounded-lg bg-BGColor  border-borderGradient hover:border-[#0094FF]  w-[670px] h-[532px] p-[70px]">
                            <form
                              className="w-full"
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              <div className="flex justify-between mb-10">
                                <h1 className="text-2xl text-White font-semibold">
                                  Edit
                                </h1>
                                <button onClick={() => setEditModal(false)}>
                                  <img
                                    className="w-6 h-6"
                                    src={closeIcon}
                                    alt=""
                                  />
                                </button>
                              </div>
                              <InputFiled
                                type="text"
                                placeholder="Type your name"
                                lebel="Full Name"
                                onChange={(e) => console.log(e.target.value)}
                                register={() =>
                                  register("name", "required: true")
                                }
                              />
                              <InputFiled
                                type="email"
                                name="email"
                                placeholder="Type your email"
                                lebel="Email"
                                register={() =>
                                  register("email", "required: true")
                                }
                              />

                              <InputFiled
                                lebel="Password"
                                type={type}
                                name="password"
                                placeholder="Type your password"
                                register={() =>
                                  register("password", "required: true")
                                }
                              />
                              <button
                                onClick={() => toggleInput(type, setType)}
                                className="absolute"
                              >
                                <img
                                  className="relative lg:bottom-11 lg:left-[490px]"
                                  src={showIcon}
                                  alt=""
                                />
                              </button>
                              <button
                                type="submit"
                                className="bg-primary w-[530px] h-12 rounded-lg text-White text-lg font-medium mt-9"
                              >
                                Save Changes
                              </button>
                            </form>
                          </div>
                        </Modal>
                      )}
                      <button
                        onClick={() => setShowRemoveModal(true)}
                        className="flex items-center gap-3 text-red-500 cursor-pointer"
                      >
                        <figure>
                          <img src={removeIcon} alt="" />
                        </figure>
                        <p>Remove</p>
                      </button>
                      {showRemoveModal && (
                        <Modal modal={showRemoveModal}>
                          <div className="w-[500px] h-60 border rounded-lg">
                            <div className="py-10 px-12">
                              <h1 className="text-2xl text-White text-center">
                                Are your sure you want to remove this admin.
                              </h1>
                              <div className="flex justify-center gap-5 mt-12">
                                <button
                                  onClick={() => setShowRemoveModal(false)}
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
                    </div>
                  }
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

export default AdminTable;
