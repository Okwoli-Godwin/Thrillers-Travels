import { MdLocationOn, MdChair } from "react-icons/md";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { RxCalendar } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"
import img from "../assets/emirates.svg"
import img2 from "../assets/qatar.png"
import img3 from "../assets/lufthansa.png"
import img4 from "../assets/newplane.png"

const Flights = () => {
    const [isActiveFirst, setIsActiveFirst] = useState(true);
    const [isActiveSecond, setIsActiveSecond] = useState(false);
    const [isActiveThird, setIsActiveThird] = useState(false);

    const handleClickThird = () => {
    setIsActiveThird(true);
    setIsActiveFirst(false);
    setIsActiveSecond(false);
  };
    const handleClickFirst = () => {
    setIsActiveFirst(true);
    setIsActiveSecond(false);
    setIsActiveThird(false);
  };

  const handleClickSecond = () => {
    setIsActiveFirst(false);
      setIsActiveSecond(true);
      setIsActiveThird(false);
  };
  return (
    <div className="w-[80%] flex h-[100%] flex-col p-[20px] pb-[10px] pl-[40px] pr-[40px]">
        <div className="w-[100%] flex p-[20px] pb-[10px] bg-[#fff] rounded-[20px] flex-wrap justify-between mb-[15px]">
            <div className="w-[440px] h-[45px] rounded-full bg-[#E1ECEB] p-[12px] flex items-center justify-between mb-[20px]">
                <div className="flex items-center">
                    <div className="text-[#425C5A] text-[20px]"><MdLocationOn /></div>
                    <p className="text-[13px] ml-[7px] font-[500] text-[#425C5A]">NEW YORK (JFK)</p>
                </div>
                <div className="w-[35px] h-[35px] rounded-full bg-[#425C5A] flex justify-center items-center">
                    <div className="text-[20px] text-[#fff]"><HiArrowsRightLeft /></div>
                </div>
                <div className="flex items-center">
                    <div className="text-[#425C5A] text-[20px]"><MdLocationOn /></div>
                    <p className="text-[13px] ml-[7px] font-[500] text-[#425C5A]">MUMBAI (BOM)</p>
                </div>
            </div>
            <div className="w-[250px] h-[45px] rounded-full bg-[#E1ECEB] flex items-center justify-center mb-[20px]">
                <div className="text-[#425C5A] text-[20px]"><RxCalendar /></div>
                <p className="text-[13px] ml-[10px] font-[500] text-[#425C5A]">29 JULY 2019</p>
            </div>
            <div className="w-[250px] h-[45px] rounded-full bg-[#E1ECEB] flex items-center justify-center mb-[20px]">
                <div className="text-[#425C5A] text-[20px]"><IoPersonSharp /></div>
                <p className="text-[13px] ml-[10px] font-[500] text-[#425C5A]">2 TRAVELLER</p>
            </div>
            <div className="w-[440px] h-[45px] rounded-full bg-[#E1ECEB] p-[5px] flex items-center justify-between">
                <div onClick={handleClickFirst} className={`w-[140px] h-[40px] rounded-full flex justify-center items-center cursor-pointer ${isActiveFirst ? 'bg-[#425C5A] text-[#fff]' : 'text-[#425C5A]'}`}>
                    <h4 className="text-[13px] font-[600]">ONE WAY</h4>
                </div>
                <div onClick={handleClickSecond} className={`w-[140px] h-[40px] rounded-full flex justify-center items-center cursor-pointer ${isActiveSecond ? 'bg-[#425C5A] text-[#fff]' : 'text-[#425C5A]'}`}>
                    <h4 className="text-[13px] font-[600]">ROUND TRIP</h4>
                </div>
                <div onClick={handleClickThird} className={`w-[140px] h-[40px] rounded-full flex justify-center items-center cursor-pointer ${isActiveThird ? 'bg-[#425C5A] text-[#fff]' : 'text-[#425C5A]'}`}>
                    <h4 className="text-[13px] font-[600]">MULTI CITY</h4>
                </div>
            </div>
            <div className="w-[250px] h-[45px] rounded-full bg-[#E1ECEB] flex items-center justify-center">
                <div className="text-[#425C5A] text-[20px]"><MdChair /></div>
                <p className="text-[13px] ml-[10px] font-[500] text-[#425C5A]">FIRST CLASS</p>
            </div>
            <button className="w-[250px] h-[45px] rounded-full bg-[#C99C33] flex items-center justify-center mb-[13px]">
                <p className="text-[13px] ml-[10px] font-[500] text-[#fff]">SEARCH</p>
            </button>
        </div>
        
        <div className="w-[100%] flex flex-col">
            <div className="w-[100%] flex justify-between">
                <h3 className="text-[14px] font-[700] text-[#425C5A]">RESULT (25)</h3>
                <div className="flex items-center">
                    <button className="h-[35px] w-[120px] bg-[#fff] rounded-full flex justify-center items-center text-[13px] font-[600] text-[#425C5A] mr-[12px]">
                        FILTER
                    </button>
                    <button className="h-[35px] w-[180px] bg-[#fff] rounded-full flex justify-center items-center text-[13px] font-[600] text-[#425C5A]">
                        TICKET OF CLASS
                        <IoIosArrowDown className="text-[#425C5A] text-[16px] ml-[7px]"/>
                    </button>
                </div>
            </div>
            
            <div className="w-[100%] h-[100%] flex mt-[10px] justify-between">
                <div className="w-[55%] bg-[#fff] rounded-[20px] overflow-hidden">
                    <div className="w-[100%] relative items-center flex justify-between MyCurve h-[100px] bg-[#fff] border-b border-[#E1ECEB] border-dashed p-[15px] pt-[60px] pb-[60px]">
                        <img src={img} alt="" className="h-[40px]"/>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[18px] font-[700] text-[#425C5A]">JFK</h3>
                            <p className="text-[12px] text-[#425C5A] font-[500]">13:00</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-[9px] text-[#425C5A] font-[600]">EMIRATES</p>
                            <p className="text-[12px] text-[#C99C33] font-[600]">11H 20M</p>
                            <p className="text-[13px] text-[#425C5A] font-[600]">NON STOP</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[18px] font-[700] text-[#425C5A]">BOM</h3>
                            <p className="text-[12px] text-[#425C5A] font-[500]">14:20</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-[11px] font-[800] text-[#425C5A]">$1,572</p>
                            <button className="w-[110px] mt-[6px] h-[30px] bg-[#C99C33] flex justify-center items-center rounded-full text-[10px] font-[600] text-[#fff]">BOOK NOW</button>
                        </div>
                </div>
                    
                 <div className="w-[100%] relative items-center flex justify-between Curve h-[100px] bg-[#fff] border-b border-dashed p-[15px] pt-[10px]">
                    <div className="flex w-[100%] justify-between items-center">
                        <img src={img2} alt="" className="h-[20px]"/>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[18px] font-[700] text-[#425C5A]">JFK</h3>
                        <p className="text-[12px] text-[#425C5A] font-[500]">13:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[9px] text-[#425C5A] font-[600]">QATAR AIRWAYS</p>
                        <p className="text-[12px] text-[#C99C33] font-[600]">11H 20M</p>
                        <p className="text-[13px] text-[#425C5A] font-[600]">NON STOP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[18px] font-[700] text-[#425C5A]">BOM</h3>
                        <p className="text-[12px] text-[#425C5A] font-[500]">14:20</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[11px] font-[800] text-[#425C5A]">$2,072</p>
                        <button className="w-[110px] mt-[6px] h-[30px] bg-[#C99C33] flex justify-center items-center rounded-full text-[10px] font-[600] text-[#fff]">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="before:absolute before:h-[10px] before:w-[10px] before:bottom-0 before:left-0 before:rounded-tr-full before:bg-[#E1ECEB]"></div>
                    <div className="before:absolute before:h-[10px] before:w-[10px] before:bottom-0 before:right-0 before:rounded-tl-full before:bg-[#E1ECEB]"></div>
                </div>
                
                <div className="w-[100%] relative items-center flex justify-between Curve h-[100px] bg-[#fff] border-b border-dashed p-[15px] pt-[10px]">
                    <div className="flex w-[100%] justify-between items-center">
                        <img src={img3} alt="" className="h-[13px]"/>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[18px] font-[700] text-[#425C5A]">JFK</h3>
                        <p className="text-[12px] text-[#425C5A] font-[500]">13:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[9px] text-[#425C5A] font-[600]">EMIRATES</p>
                        <p className="text-[12px] text-[#C99C33] font-[600]">11H 20M</p>
                        <p className="text-[13px] text-[#425C5A] font-[600]">NON STOP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[18px] font-[700] text-[#425C5A]">BOM</h3>
                        <p className="text-[12px] text-[#425C5A] font-[500]">14:20</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[11px] font-[800] text-[#425C5A]">$1,572</p>
                        <button className="w-[110px] mt-[6px] h-[30px] bg-[#C99C33] flex justify-center items-center rounded-full text-[10px] font-[600] text-[#fff]">BOOK NOW</button>
                    </div>
                    </div>
                    <div className="before:absolute before:h-[10px] before:w-[10px] before:bottom-0 before:left-0 before:rounded-tr-full before:bg-[#E1ECEB]"></div>
                    <div className="before:absolute before:h-[10px] before:w-[10px] before:bottom-0 before:right-0 before:rounded-tl-full before:bg-[#E1ECEB]"></div>
                </div>
                
                <div className="w-[100%] relative items-center flex justify-between Curve h-[100px] bg-[#fff] border-b border-dashed p-[15px] pt-[50px] pb-[50px]">
                    <div className="flex w-[100%] justify-between">
                        <img src={img} alt="" className="h-[40px]"/>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[18px] font-[700] text-[#425C5A]">JFK</h3>
                        <p className="text-[12px] text-[#425C5A] font-[500]">13:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[9px] text-[#425C5A] font-[600]">EMIRATES</p>
                        <p className="text-[12px] text-[#C99C33] font-[600]">11H 20M</p>
                        <p className="text-[13px] text-[#425C5A] font-[600]">NON STOP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[18px] font-[700] text-[#425C5A]">BOM</h3>
                        <p className="text-[12px] text-[#425C5A] font-[500]">14:20</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[11px] font-[800] text-[#425C5A]">$1,572</p>
                        <button className="w-[110px] mt-[6px] h-[30px] bg-[#C99C33] flex justify-center items-center rounded-full text-[10px] font-[600] text-[#fff]">BOOK NOW</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="w-[42%] h-[100%] bg-[#425C5A] rounded-[20px] flex-col flex pt-[20px] overflow-hidden">
                    <div className="w-[100%] flex justify-between pr-[20px] pl-[20px]">
                        <p className="text-[11px] text-[#fff]">FROM</p>
                        <p className="text-[11px] text-[#fff]">TO</p>
                    </div>
                    <div className="w-[100%] flex items-center justify-between pr-[20px] pl-[20px]">
                        <h3 className="text-[19px] font-[600] text-[#fff]">JFK</h3>
                        <p className="text-[11px] text-[#fff] ">NON STOP</p>
                        <h3 className="text-[19px] font-[600] text-[#fff]">BOM</h3>
                    </div>
                    
                    <div className="w-[100%] h-[170px] mt-[30px] flex justify-center items-center">
                        <img src={img4} alt="" className=" h-[150px] object-cover"/>
                    </div>
                    
                    <div className="w-[100%] mt-[10px] bg-[#3D5654] flex flex-col pl-[20px] pr-[20px] pt-[20px] pb-[20px]">
                        <div className="w-[100%] flex items-center justify-between">
                            <button className="w-[120px] h-[40px] rounded-full flex justify-center items-center text-[#fff] text-[12px] bg-[#C99C33]">
                            NON STOP
                        </button>
                        <button className="w-[120px] h-[40px] rounded-full flex justify-center items-center text-[#fff] text-[12px]">
                            ONE STOP
                        </button>
                        <button className="w-[120px] h-[40px] rounded-full flex justify-center items-center text-[#fff] text-[12px]">
                            MORE STOP
                        </button>
                        </div>
                        
                        <div className="flex flex-col w-[100%] relative">
                            <p className="text-[#fff] text-[12px] mt-[10px]">Price</p>
                            <div className="w-[100%] h-[1px] bg-[#4E6967] mt-[15px]"></div>
                            <div className="w-[100%] flex justify-between">
                                <div className="w-[12px] h-[12px] rounded-full bg-[#C99C33] mt-[-6px] ml-[40px]"></div>
                                <div className="w-[12px] h-[12px] rounded-full bg-[#C99C33] mt-[-6px] mr-[40px]"></div>
                            </div>
                            <div className="w-[100%] flex justify-between">
                                <div className="w-[70px] h-[19px] justify-center flex rounded-full items-center text-[12px] text-[#fff] bg-[#C99C33] mt-[10px] ml-[13px]">$6000</div>
                                <div className="w-[70px] h-[19px] justify-center flex rounded-full items-center text-[12px] text-[#fff] bg-[#C99C33] mt-[10px] mr-[10px]">$6000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Flights