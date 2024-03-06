import LineCharts from "./LineCharts";
import ReferralStatistics from "./ReferralStatistics";

const Statistics = () => {
  return (
    <div>
      <LineCharts />
      <div className="grid grid-cols-2">
        <ReferralStatistics />
      </div>
    </div>
  );
};

export default Statistics;
