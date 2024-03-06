import { useForm } from "react-hook-form";
import { messageData } from "../../../data";
import MessagesTable from "./MessagesTable";
import InputFiled from "../../Shared/InputField";
import Modal from "../../Shared/Modal";
import { useState } from "react";
import closeIcon from "../../assets/CloseIcon.svg";

const Message = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const checkbox = <input type="checkbox" />;
  const tableHeader = [checkbox, "Message", "Date", "Actions"];
  return (
    <div>
      <div className="p-5 w-full h-16 mb-5  border border-slate-800  bg-sidebg flex justify-end items-center rounded-lg">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-primary rounded-lg text-White"
        >
          Send Message All Users
        </button>
      </div>
      {showModal && (
        <Modal modal={showModal}>
          <div className="border flex justify-center items-center flex-col rounded-lg bg-BGColor hover:border-[#0094FF]  w-[670px] h-[680px] p-[70px]">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-between mb-10">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-2xl text-White font-semibold"
                >
                  Send Message To All Users
                </button>
                <button onClick={() => setShowModal(false)}>
                  <img className="w-6 h-6" src={closeIcon} alt="" />
                </button>
              </div>
              <div className="mb-3">
                <p className="text-white mb-3">Message</p>
                <textarea
                  className="w-full h-52 bg-BGColor text-white p-4 rounded-lg border border-[#ffffff14] resize-none placeholder:text-bodyText"
                  placeholder="Type your message"
                  {...register("message", "required: true")}
                />
              </div>
              <InputFiled
                type="date"
                placeholder="Pick message delete date"
                lebel="Date"
                register={() => register("date", "required: true")}
              />

              <InputFiled
                type="date"
                placeholder="Pick message delete date"
                lebel="Time"
                register={() => register("Time", "required: true")}
              />
              <button
                type="submit"
                className="bg-primary w-[530px] h-12 rounded-lg text-White text-lg font-medium mt-9"
              >
                Send Message To All Users
              </button>
            </form>
          </div>
        </Modal>
      )}

      <MessagesTable tableHeader={tableHeader} data={messageData} />
    </div>
  );
};

export default Message;
