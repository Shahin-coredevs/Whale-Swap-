import { NavLink } from "react-router-dom";
import adminIcon from "../../assets/adminIcon.svg";
import statisticsIcon from "../../assets/statisticsIcon.svg";
import botIcon from "../../assets/botIcon.svg";
import mesageIcon from "../../assets/messageIcon.svg";
import logoutIcon from "../../assets/logoutIcon.svg";
const style = {
  active: "activeBG w-full  p-3 mb-5 rounded-xl flex gap-3 text-[#A9B5C5]",
  normal: "w-full p-3 flex gap-3 mb-5 text-[#A9B5C5]",
};
const Sidebar = () => {
  return (
    <div className="bg-sidebg w-[15.625rem] h-screen">
      <div className=" h-full md:w-full overflow-y-auto overflow-hidden">
        <header className="w-screen md:w-full  py-8 border-b-2 border-slate-800 h-[4.375rem] mb-5">
          <div className="">
            <h3 className="pb-5 font-bold text-[22px] text-center text-primary">
              Whale Swap
            </h3>
          </div>
          <button className="z-50   block md:hidden">
            <p>X</p>
          </button>
        </header>
        <div className=" relative z-[2] p-3">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? style["active"] : style["normal"]
            }
          >
            <div className="flex gap-3">
              <img src={adminIcon} alt="" />
              Admin
            </div>
          </NavLink>

          <NavLink
            to="/Statistics"
            className={({ isActive }) =>
              isActive ? style["active"] : style["normal"]
            }
          >
            <div className="flex gap-3">
              <img src={statisticsIcon} alt="" />
              Statistics
            </div>
          </NavLink>
          <NavLink
            to="/message"
            className={({ isActive }) =>
              isActive ? style["active"] : style["normal"]
            }
          >
            <div className="flex gap-3">
              <img src={mesageIcon} alt="" />
              Message
            </div>
          </NavLink>
          <NavLink
            to="/botcms"
            className={({ isActive }) =>
              isActive ? style["active"] : style["normal"]
            }
          >
            <div className="flex gap-3">
              <img src={botIcon} alt="" />
              Bot CMS
            </div>
          </NavLink>
          <div className="w-full p-3 flex gap-3 mb-5 items-center text-[#A9B5C5]">
            <figure>
              <img src={logoutIcon} alt="" />
            </figure>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
