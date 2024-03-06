import { useEffect, useState } from "react";
import { months } from "../../../data";
import DropDown from "../../Shared/Dropdown/Dropdown";
import botUser from "../../assets/BotUserIcon.svg";
import dollar from "../../assets/DollarIcon.svg";
import activeUser from "../../assets/ActiveIcon.svg";
import UserTable from "./UserTable";

const UserStatistics = () => {
  const [data, setData] = useState([]);

  const tableHeader = ["User Name", "Joining Date", "Trade Amount"];
  useEffect(() => {
    fetch("statisticdata.json")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="bg-BGColor">
      <div className="my-5 h-10 flex justify-between items-center px-2">
        <h1 className="text-White text-lg">User Statistics</h1>
        <div className="">
          {
            <DropDown
              data={months}
              type="action"
              getValue={(e) => {
                console.log(e);
              }}
            />
          }
        </div>
      </div>
      <div className="my-5 grid grid-cols-3 gap-5">
        <div className="bg-slate-800 p-5 flex justify-between items-center rounded-lg ">
          <div>
            <h1 className="text-sm text-White">Total Bot User:</h1>
            <p className="text-xl text-primary">2,02,147</p>
          </div>
          <figure>
            <img src={botUser} alt="" />
          </figure>
        </div>
        <div className="bg-slate-800 p-5 flex justify-between items-center rounded-lg ">
          <div>
            <h1 className="text-sm text-White">Active User Today:</h1>
            <p className="text-xl text-primary">20,02,147</p>
          </div>
          <figure>
            <img src={activeUser} alt="" />
          </figure>
        </div>
        <div className="bg-slate-800 p-5 flex justify-between items-center rounded-lg ">
          <div>
            <h1 className="text-sm text-White">Total Trade Amount:</h1>
            <p className="text-xl text-primary">$20,02,147.21</p>
          </div>
          <figure>
            <img src={dollar} alt="" />
          </figure>
        </div>
      </div>
      <div className="">
          <UserTable tableHeader={tableHeader} data={data} />
        </div>
    </div>
  );
};

export default UserStatistics;
