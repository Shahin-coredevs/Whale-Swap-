import BotTransactions from "./BotTransactions";
import LineCharts from "./LineCharts";
import ReferralStatistics from "./ReferralStatistics";
import TotalCommission from "./TotalCommission";
import UserStatistics from "./UserStatistics";

const Statistics = () => {
  return (
    <div>
      <LineCharts />
      <div className="my-8 grid grid-cols-2 gap-8">
        <BotTransactions />
        <TotalCommission />
        <UserStatistics />
        <ReferralStatistics />
      </div>
    </div>
  );
};

export default Statistics;
