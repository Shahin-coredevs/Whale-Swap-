import Chart from "react-apexcharts";
import { months } from "../../../data";
import DropDown from "../../Shared/Dropdown/Dropdown";

const BotTransactions = () => {
  const options = {
    xaxis: {
      axisTicks: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      min: 0,
    },
    markers: {
      colors: ["#0580d9"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  const series1 = [
    {
      data: [
        2000, 5000, 10000, 12000, 8000, 5000, 6000, 7000, 9000, 6000, 4000,
        17000,
      ],
    },
  ];

  return (
    <div>
      <div className="my-2 pt-3 h-10 flex justify-between items-center px-2">
        <h1 className="text-White text-lg">Bot Transactions</h1>
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
      <div>
        <div className="">
          <Chart options={options} series={series1} type="area" />
        </div>
      </div>
    </div>
  );
};

export default BotTransactions;
