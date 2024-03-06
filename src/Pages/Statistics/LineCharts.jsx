import Chart from "react-apexcharts";

const LineCharts = () => {
  const options = {
    xaxis: {
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
    row: {
      opacity: 0.1,
      width: "1px",
    },
    column: {
      opacity: 0.05,
      width: "1px",
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "18px",
      fontWeight: 400,
      radius: 12,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    pattern: {
      width: 3,
      height: 3,
      strokeWidth: 1,
    },
  };

  const series1 = [
    {
      name: "trade Buy",
      data: [
        "18",
        "23",
        "29",
        "7",
        "18",
        "16",
        "22",
        "8",
        "29",
        "6",
        "11",
        "26",
      ],
    },
    {
      name: "trade Sell",
      data: [26, 15, 18, 9, 16, 27, 15, 17, 28, 7, 14, 30],
    },
  ];

  return (
    <div className="">
      <Chart
        lebel={false}
        options={options}
        series={series1}
        type="bar"
        height="400px"
      />
    </div>
  );
};

export default LineCharts;
