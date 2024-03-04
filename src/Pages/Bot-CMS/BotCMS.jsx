/* eslint-disable react/jsx-key */
import { botData } from "../../../data";
import edit from "../../assets/Edit.svg";

const BotCMS = () => {
  return (
    <div>
      {botData.map((e) => {
        return (
          <div className="bg-sidebg p-3 pb-2 rounded-lg">
            <div className="p-5 bg-BGColor text-[#A9B5C5] rounded-lg">
              <div className="flex justify-between items-center rounded-lg mb-4">
                <h1>{e.head}</h1>
                <div className="flex gap-3 items-center">
                  <figure>
                    <img src={edit} alt="" />
                  </figure>
                  <p>Edit</p>
                </div>
              </div>
              <p className="p-5 bg-slate-800 rounded-lg">{e.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BotCMS;
