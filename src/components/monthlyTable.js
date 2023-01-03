import React from 'react'
import { useEffect,useState } from 'react';
const MonthlyTable = ({month,year,selectedDay}) => {
  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]
  const[daylist,setDayList] = useState(days);
  const[singleday,setSingleDay] = useState();
  const[noOfDaysInMonth,setNoOfDaysInMonth]= useState(new Date(year,month+1,0).getDate());
  const[firstDay,setFirstDay] = useState(new Date(year,month,1).getDay());
  const weeks = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  
  
  useEffect(()=> {
     setFirstDay(new Date(year,month,1).getDay()); 
     setNoOfDaysInMonth(new Date(year,month+1,0).getDate());
    console.log("days in month in " + month +" = "+ noOfDaysInMonth); 
    for(let i=0; i<days.length; i++){
      // if(days[i] >noOfDaysInMonth+firstDay)
       while(days[i] >noOfDaysInMonth+firstDay)
           days.pop();
        
    }
    setDayList(days);
    setSingleDay(selectedDay);
      
  },([selectedDay,month,year]))
  // console.log(month + "= selected month");
  // console.log(year + " = selected Year");
  // console.log(firstDay +" = first day in week");
  return (
<div className='calender'>
  <div className='calender-header'>
   { weeks.map((week,idx)=> {
       return(
        <div className="grid-item" key={idx}>{week}</div>
       )
    })}
  </div>
  <div className='grid-box'>
      {daylist.map((singleDay,idx)=> {
        const curDay = singleDay-firstDay;
       
      return(
          <div key={idx} className={`${curDay> 0 && curDay<=noOfDaysInMonth ?"grid-item" : "display-none"} ${ singleday === curDay? "active" : false}`}>{ curDay> 0 && curDay<=noOfDaysInMonth ? curDay: false}</div>
        )
      })}
         
 
    </div>
</div>
  )
}

export default MonthlyTable