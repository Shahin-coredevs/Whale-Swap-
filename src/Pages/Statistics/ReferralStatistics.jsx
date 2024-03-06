import { useEffect, useState } from "react";
import { months } from "../../../data";
import DropDown from "../../Shared/Dropdown/Dropdown";
import StatisticsTable from "./StatisticsTable";

const ReferralStatistics = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const tableHeader = ["Rank", "User Name", "Total Referral", "Total Earning"];
  useEffect(() => {
    fetch("statisticdata.json")
      .then((res) => res.json())
      .then((data) => {
        return filter == "Months"
          ? data
          : data.filter((e) => e.month == filter);
      })
      .then((data) => {
        setData(data);
      });
  }, [filter]);
  return (
    <div className="bg-BGColor">
      <div className="my-5 h-10 flex justify-between items-center px-2">
        <h1 className="text-White text-lg">Referral Statistics</h1>
        <div className="">
          {
            <DropDown
              data={months}
              type="action"
              getValue={(e) => {
                setfilter(e);
              }}
            />
          }
        </div>
      </div>
      <div className="">
        <StatisticsTable tableHeader={tableHeader} data={data} />
      </div>
    </div>
  );
};

export default ReferralStatistics;
