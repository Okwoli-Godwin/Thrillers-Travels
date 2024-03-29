import { Outlet } from "react-router-dom"
import {Sidebar} from "../blocks"

const DashboardLayout = () => {
  return (
    <div className="flex w-[100%] ">
        <Sidebar />
        <div className="bg-[#E1ECEB] h-[100%] w-[100%] flex justify-end">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout