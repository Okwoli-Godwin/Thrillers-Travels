import img from "../../assets/bit.png"
import img2 from "../../assets/bit2.png"
import img3 from "../../assets/trill1.png"
import img4 from "../../assets/bit3.png"
import { useNavigate, useLocation } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { CiWallet, CiSettings } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { VscPieChart } from "react-icons/vsc"

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;
    
  return (
    <div className="w-[20%] h-[100vh] bg-[#425C5A] rounded-tr-[20px] rounded-br-[20px] flex-col overflow-hidden fixed">
        
        <div className="w-[100%] flex flex-col items-center pt-[20px] bg-[#3D5654] pb-[20px]">
            <div className="w-[70px] h-[70px] rounded-full bg-transparent border border-[#BB9537] flex justify-center items-center">
                <img src={img} alt="" className="h-[90%] w-[90%]"/>
            </div>
            <h3 className="text-[#fff] text-[18px] font-[700] mt-[8px]">ALEX JOHNSON</h3>
            <p className="text-[12px] text-[#fff]">alexjohnson@gmail.com</p>
        </div>
        
        <div className="w-[100%] h-[100%] flex flex-col pt-[15px] pl-[10px]">
            <div onClick={() => {navigate("/");}} className={`relative w-[100%] min-h-[43px] flex justify-start items-center pl-[20px] mb-[5px] rounded-tl-full rounded-bl-full cursor-pointer ${active === "/" ? "bg-[#E1ECEB] myElement text-[#3D5654]" : "text-[#fff]"}`}>
                <div className="text-[#BB9537] text-[22px]"><IoHomeOutline /></div>
                <h4 className="ml-[15px] mt-[3px] text-[15px] font-[600]">DASHBOARD</h4>
            </div>
            <div onClick={() => {navigate("/flights");}} className={`relative w-[100%] min-h-[43px] flex justify-start items-center pl-[20px] mb-[5px] rounded-tl-full rounded-bl-full cursor-pointer ${active === "/flights" ? "bg-[#E1ECEB] myElement text-[#3D5654] w-[100%]" : "text-[#fff]"}`}>
                <div className="text-[#BB9537] text-[22px]"><LuPlane /></div>
                <h4 className="ml-[15px] mt-[3px] text-[15px] font-[600]">FLIGHTS</h4>
            </div>
            <div onClick={() => {navigate("/wallet");}} className={`relative w-[100%] min-h-[43px] flex justify-start items-center pl-[20px] mb-[5px] rounded-tl-full rounded-bl-full cursor-pointer ${active === "/wallet" ? "bg-[#E1ECEB] myElement text-[#3D5654] w-[100%]" : "text-[#fff]"}`}>
                <div className="text-[#BB9537] text-[22px]"><CiWallet /></div>
                <h4 className="ml-[15px] mt-[3px] text-[15px] font-[600]">WALLET</h4>
            </div>
            <div onClick={() => {navigate("/reports");}} className={`relative w-[100%] min-h-[43px] flex justify-start items-center pl-[20px] mb-[5px] rounded-tl-full rounded-bl-full cursor-pointer ${active === "/reports" ? "bg-[#E1ECEB] myElement text-[#3D5654] w-[100%]" : "text-[#fff]"}`}>
                <div className="text-[#BB9537] text-[22px]"><FaRegFileAlt /></div>
                <h4 className="ml-[15px] mt-[3px] text-[15px] font-[600]">REPORTS</h4>
            </div>
            <div onClick={() => {navigate("/statistics");}} className={`relative w-[100%] min-h-[43px] flex justify-start items-center pl-[20px] mb-[5px] rounded-tl-full rounded-bl-full cursor-pointer ${active === "/statistics" ? "bg-[#E1ECEB] myElement text-[#3D5654] w-[100%]" : "text-[#fff]"}`}>
                <div className="text-[#BB9537] text-[24px]"><VscPieChart /></div>
                <h4 className="ml-[15px] mt-[3px] text-[15px] font-[600]">STATISTICS</h4>
            </div>
            <div onClick={() => {navigate("/settings");}} className={`relative w-[100%] min-h-[43px] flex justify-start items-center pl-[20px] mb-[5px] rounded-tl-full rounded-bl-full cursor-pointer ${active === "/settings" ? "bg-[#E1ECEB] myElement text-[#3D5654] w-[100%]" : "text-[#fff]"}`}>
                <div className="text-[#BB9537] text-[24px]"><CiSettings /></div>
                <h4 className="ml-[15px] mt-[3px] text-[15px] font-[600]">SETTINGS</h4>
            </div>
            
            <div className="w-[100%] pl-[20px] flex flex-col">
                <h4 className="text-[#BB9537] text-[13px] mt-[20px]">ACTIVE USERS</h4>
                
                <div className="flex items-center mt-[15px]">
                    <div className="w-[38px] h-[38px] rounded-full border border-[#425C5A]" >
                        <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full border-[2px] border-[#425C5A] ml-[-10px]" >
                        <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full border-[2px] border-[#425C5A] ml-[-10px] z-10" >
                        <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full border-[2px] border-[#425C5A] ml-[-10px] z-20" >
                        <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full border-[2px] border-[#425C5A] bg-[#BB9537] ml-[-10px] z-20 flex justify-center items-center" >
                        <p className="text-[#fff] text-[12px] cursor-pointer">+70</p>
                    </div>
                </div>
                
                <div className="w-[180px] h-[90px] bg-[red] mt-[12px]">
                    <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar