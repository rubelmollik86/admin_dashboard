import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import DashboardSideBar from "./component/DashboardSideBar/DashboardSideBar";
import SalesTable from "./component/Dashboard/SalesTable";
import User from "./component/Manage/User";
import Transaction from "./component/Transaction/Transaction";
import Withdraw from "./component/Transaction/Withdraw";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardSideBar />}>
            <Route path="/dashboard" element={<SalesTable />} />
            <Route path="/user" element={<User />} />
            <Route path="/transection" element={<Transaction />} />
            <Route path="/widthdraw" element={<Withdraw />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
