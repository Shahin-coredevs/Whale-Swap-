/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const tableHeader = ["Rank", "User Name", "Total Referral", "Total Earning"];
const StatisticsTable = ({ data }) => {
  return (
    <div className="overflow-auto h-[500px]">
      <table className="w-full  text-sm text-left  text-White ">
        <thead className="text-xl mb-5">
          <tr>
            {tableHeader.map((e) => {
              return <th className="px-6 py-6  bg-slate-800">{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((d, index) => {
            return (
              <tr className="border-b-2 border-slate-800">
                <td className="px-6 py-6">{index + 1}</td>
                <td className="px-6 py-6">{d?.Username}</td>
                <td className="px-6 py-6">{d?.TotalReferral}</td>
                <td className="px-6 py-6">${d?.TotalEarning}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
