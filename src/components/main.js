import MonthlyTable from "./monthlyTable";
import { useState,useEffect } from "react";
import { useRef } from "react";
const Main = () => {
   let date = new Date();
   let currentYear = date.getFullYear();
   let monthList = [1,2,3,4,5,6,7,8,9,10,11,12];
   const[selectedMonth,setSelectedMonth] = useState(date.getMonth());
   const[selectedYear,setSelectedYear] = useState(date.getFullYear());
   const[selectedDay,setSelectedDay] =useState(date.getDate());
   
   let searchRef = useRef();
   let allYear = [];
   let startYear = 1950;
   while(startYear <= currentYear){
    allYear.push(currentYear);
    currentYear--;
   }

  const getDay =(e) => {
    e.preventDefault();
    setSelectedDay(searchRef.current.value);
    console.log(selectedDay +" = slected day");
  }
    return(
       <div>
        
         <div className="dropdown">
          <button className="dropbtn">Select Year   🔻 </button>
          <div className="dropdown-content year-box">
             {allYear.map((elem,idx)=>{
              return(
                <a href="#" onClick={()=> setSelectedYear(elem)} key={idx}>{elem}</a>
              )
             })}                     
         
          </div>
         </div>

         <div className="dropdown">
          <button className="dropbtn">Select Month   🔻 </button>
          <div className="dropdown-content">
             {monthList.map((elem,idx)=>{
              return(
                <a href="#" onClick={()=> setSelectedMonth(elem-1)} key={idx} >{elem}</a>
                // <button onClick={()=> selectedMonth(elem)}>{elem}</button>
              )
             })}                     
         
          </div>
         </div>
               <MonthlyTable month={selectedMonth} year={selectedYear} selectedDay={selectedDay}/>
        <form onSubmit={getDay}>
        <input type ="text" placeholder="Enter the day" ref={searchRef} />
        <button className="dropbtn">Enter</button>
        </form>
       </div> 
    )
}

export default Main