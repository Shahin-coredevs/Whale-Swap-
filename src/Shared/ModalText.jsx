const ModalText = ({ text }) => {
  return (
    <div className="p-5 w-full h-16 mb-5  border border-slate-800  bg-sidebg flex justify-end items-center rounded-lg">
      <button className="px-4 py-2 bg-primary rounded-lg text-White">
        {text}
      </button>
    </div>
  );
};

export default ModalText;
