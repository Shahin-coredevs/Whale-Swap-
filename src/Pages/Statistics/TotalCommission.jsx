import Chart from "react-apexcharts";
import { months } from "../../../data";
import DropDown from "../../Shared/Dropdown/Dropdown";

const TotalCommission = () => {
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
        22000, 12000, 16000, 10000, 13000, 15000, 17000, 11000, 19000, 14000,
        16000, 12000,
      ],
    },
  ];

  return (
    <div>
      <div className="my-2 pt-3 h-10 flex justify-between items-center px-2">
        <h1 className="text-White text-lg">Total Commissions</h1>
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

export default TotalCommission;
