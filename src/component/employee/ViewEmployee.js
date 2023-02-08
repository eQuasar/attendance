import React,{useState,useEffect} from 'react';
import axios from 'axios';
import server from '../host.json'

const ViewEmployee=()=>{
    
    const [absentEmployees, setAbsentEmployees] = useState([]) 
    
    useEffect(() => {
        loadAbsentEmployees();
    }, [])

    const loadAbsentEmployees = async e => {
        const result  = await axios.get(server.SERVER_URL + "attendance/info");
         setAbsentEmployees(result.data.absentList)
         



        // for(var i=0;i<=result.data.absentList.length;i++){
        //     setAbsentEmployees([result.data.absentList[i].name])
        // }
     
        console.log(absentEmployees)
        // setLeadId(result.data.leads.lead_id)
        //  setLead(result.data.leads)
        //  setAgent(result.data.agent)
         //console.log(view)
    }


    // let abList=absentEmployees.name.map((data)=>{
    //     <li key={data}>{data}</li>
    // })
    
   
    return(
        <>

        <div className="container py-4 ">
            <h5 style={{ marginLeft: '40px' }}>Absent Employees</h5>
            <hr />
            <ul className="list-group w-50">
                {/* <li className="list-group-item">{""}{""}Name</li> */}
                {

absentEmployees.map((data,index)=>{
    return <li className="list-group-item">{index+1}{"."}  {data.name} </li>
  
})
                }
            
                
            </ul>
        </div>
        </>
    )
  
}

export default ViewEmployee;