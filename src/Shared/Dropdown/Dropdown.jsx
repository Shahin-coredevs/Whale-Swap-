/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import downArrow from "../../assets/downarrow.svg";
const DropDown = ({ data = [], getValue, type = "" }) => {
  const [selected, setSelected] = useState("Months");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (type == "action") getValue(selected);
  }, [selected]);

  return (
    <div className="relative">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className=" min-w-36 justify-between flex gap-2 text-white py-2 px-1 cursor-pointer"
      >
        {selected}
        <img src={downArrow} alt="" />
      </div>
      {isVisible && (
        <div className="absolute w-full bg-sidebg z-10 top-10 right-40 rounded-lg px-3 py-2">
          {data?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setSelected(item);
                  setIsVisible(false);
                }}
                key={index}
                className=""
              >
                <p className="text-sm text-White hover:border-buttonBorder  mb-5 w-full">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
