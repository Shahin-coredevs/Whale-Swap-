import Chart from "react-apexcharts";
import DropDown from "../../Shared/Dropdown/Dropdown";
import { months } from "../../../data";

const LineCharts = () => {
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
    markers: {
      colors: ["#0580d9", "#00c0cf"],
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
      name: "trade Buy",
      data: [18, 23, 29, 7, 18, 16, 22, 8, 29, 6, 11, 26],
    },
    {
      name: "trade Sell",
      data: [26, 15, 18, 9, 16, 27, 15, 17, 28, 7, 14, 30],
    },
  ];

  return (
    <div>
      <div className="my-5 h-10 flex justify-between items-center px-2">
        <h1 className="text-White text-lg">Referral Statistics</h1>

        <div className="flex justify-end items-center gap-5 text-White">
          <div className="flex justify-between gap-2 items-center">
            <div className="bg-[#0580d9] w-2 h-2 rounded-full"></div>
            <p className="text-[#0580d9]">Trade Sell</p>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <div className="bg-[#00c0cf] w-2 h-2 rounded-full"></div>
            <p className="text-[#00c0cf]">Trade Buy</p>
          </div>
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
      <div className="">
        <Chart options={options} series={series1} type="bar" height="400px" />
      </div>
    </div>
  );
};

export default LineCharts;
