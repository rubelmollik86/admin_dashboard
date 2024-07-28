import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import DashboardSideBar from "./component/DashboardSideBar/DashboardSideBar";
import SalesTable from "./component/Dashboard/SalesTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardSideBar />}>
            <Route path="/dashboard" element={<SalesTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
