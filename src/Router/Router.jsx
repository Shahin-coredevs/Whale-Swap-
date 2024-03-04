import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../Pages/Statistics/Statistics";
import Admin from "../Pages/Admin/Admin";
import Message from "../Pages/Message/Message";
import BotCMS from "../Pages/Bot-CMS/BotCMS";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/message" element={<Message />} />
          <Route path="/botcms" element={<BotCMS />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
