/* eslint-disable react/prop-types */
const InputFiled = ({ lebel = "", height,  register = () => {}, ...rest }) => {
    return (
      <>
        <lebel className="text-white ">{lebel}</lebel>
        <input
          className={`${
            height ? height : "h-10"
          } my-3 w-[530px] h-12 p-4 rounded-lg text-white cursor-pointer bg-[#121A27] border border-[#ffffff14] placeholder:text-bodyText`}
          {...register()}
          {...rest}
        />
      </>
    );
  };
  
  export default InputFiled;