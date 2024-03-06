import { useForm } from "react-hook-form";
import { adminData } from "../../../data";
import AdminTable from "./AdminTable";
import { useState } from "react";
import Modal from "../../Shared/Modal";
import InputFiled from "../../Shared/InputField";
import showIcon from "../../assets/ShowIcon.svg";
import closeIcon from "../../assets/CloseIcon.svg";
import { toggleInput } from "../../Shared/toggleInput";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("password");
  const [typeC, setTypeC] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const checkbox = <input type="checkbox" />;
  const tableHeader = [
    checkbox,
    "ID",
    "Admin Name",
    "Email Address",
    "Actions",
  ];
  return (
    <div>
      <div className="p-5 w-full h-16 mb-5  border border-slate-800  bg-sidebg flex justify-end items-center rounded-lg">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-primary rounded-lg text-White"
        >
          Add New Admin
        </button>
      </div>
      {showModal && (
        <Modal modal={showModal}>
          <div className="border flex justify-center items-center flex-col p-5 rounded-lg bg-BGColor border-borderGradient w-[670px] h-[623px]">
            <form className="p-[50px] w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-between mb-10">
                <h1 className="text-2xl text-White font-semibold">
                  Add New Admin
                </h1>
                <button onClick={() => setShowModal(false)}>
                  <img className="w-6 h-6" src={closeIcon} alt="" />
                </button>
              </div>
              <InputFiled
                lebel="Full Name"
                type="text"
                name="name"
                placeholder="Type your full name"
                register={() => register("name", "required: true")}
              />
              <InputFiled
                lebel="Email"
                type="email"
                name="email"
                placeholder="Type your email"
                register={() => register("email", "required: true")}
              />
              <InputFiled
                lebel="Password"
                type={type}
                placeholder="Type your password"
                register={() => register("password", "required: true")}
              />
              <span
                onClick={() => toggleInput(type, setType)}
                className="absolute"
              >
                <img
                  className="relative lg:bottom-11 lg:left-[490px]"
                  src={showIcon}
                  alt=""
                />
              </span>

              <InputFiled
                lebel="Confirm Password"
                type={typeC}
                placeholder="Type your confirm password"
                register={() => register("confirmPass", "required: true")}
              />
              <div
                onClick={() => toggleInput(typeC, setTypeC)}
                className="absolute"
              >
                <img
                  className="relative lg:bottom-11 lg:left-[490px]"
                  src={showIcon}
                  alt=""
                />
              </div>

              <button className="bg-primary w-[530px] h-12 rounded-lg text-White text-lg font-medium mt-12">
                Confirm To Add New Admin
              </button>
            </form>
          </div>
        </Modal>
      )}
      <AdminTable tableHeader={tableHeader} data={adminData} />
    </div>
  );
};

export default Admin;
