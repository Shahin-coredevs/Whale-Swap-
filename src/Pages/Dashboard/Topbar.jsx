import { useLocation } from "react-router-dom";
import user from "../../assets/user.jpg";

const title = {
  admin: "Admin Information",
  Statistics: "Statistics",
  botcms: "Bot CMS",
  message: "Message",
};
const Topbar = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  return (
    <div>
      <div className=" w-full bg-gradient-to-r bg-sidebg p-5 text-white  flex justify-between items-center">
        <h3 className="text-lg font-bold text-white p-2">{title[path]}</h3>
        <div className="z-10 flex justify-between gap-2">
          <img className=" h-10 w-10 rounded-lg z-50" src={user} alt="" />
          <div>
            <h1>John</h1>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
