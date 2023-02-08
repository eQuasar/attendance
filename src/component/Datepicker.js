import React,{useState} from 'react';

const DatePick=()=>{
    const[date, setDate]=useState();

    return(
        <>
        <h2>Select Date</h2>
        <input type="date" onChange={e=>setDate(e.target.value)}></input>
        </>
    )
}

export default DatePick;