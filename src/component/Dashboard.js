import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Tables from './Tables'
import server from "./host.json";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom' 
import Popup from 'reactjs-popup'; 
//import Button from 'react-bootstrap/Button'; 

const Dashboard=()=> {

    ///////////////////// ViewEmployeee /////

    const [absentEmployees, setAbsentEmployees] = useState([]) 
    
    useEffect(() => {
        loadAbsentEmployees();
    }, [])

    const loadAbsentEmployees = async e => {
        const result  = await axios.get(server.SERVER_URL + "attendance/info");
         setAbsentEmployees(result.data.absentList)

     
        // console.log(absentEmployees)
        // setLeadId(result.data.leads.lead_id)
        //  setLead(result.data.leads)
        //  setAgent(result.data.agent)
         //console.log(view)
    }
        ///////////////////// VieEmployee Code Ends ////////

    // const auth = localStorage.getItem('user');
    // const navigate = useNavigate();
    // const logout=()=>{
    //     localStorage.clear();
    //     navigate('/loginnn')
    // }

  

    // const routeChange =event=>{
    // // var id=event.currentTarget.dataset.rowid;
    // let path = `/viewemployee`;
    // navigate(path);
    // }  

    const navigate=useNavigate();

  useEffect(() =>{
    getAllEmpData();
}, [] );

const[absent,setAbsent]=useState("");
const [employe,setEmploye]=useState("");
const[present,setPresent]=useState("");

const logout =()=>{
    localStorage.clear();
    navigate('/login')
}

<Link onClick={logout} to="/login">Logout</Link>

async function getAllEmpData(){
  try {
    const data = await axios.get(server.SERVER_URL + "attendance/info")
    let emp = data;
    // console.log(emp)
    // console.log(emp.data.absent)
    setAbsent(emp.data.absent);
    setEmploye(emp.data.total);
    setPresent(emp.data.present);


    

    // console.log(users.data)
    //setEmpData(empdata.data.data.reverse())
  }
  catch(error){
    console.log("Something is wrong")
  }
}

  return (
    <div className='common'>
     <div>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                <img style={{ marginTop: '8px' }} className='equasar' src='./eQuasar.png' alt='' />
                    {/* <h1 className="m-0">Dashboard</h1> */}
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                    {/* <Button style={{width: '95px', height: '38px'}} variant="primary" size="sm"> */}
                        <img  className='logout' src='logout.png' alt='' onClick={logout} />  <h6 style={{color:'red',cursor:"pointer"}} onClick={logout}> Logout</h6>
                    {/* </Button> */}
                    {/* <Link className='breadcrumb-item' onClick={logout} to="/login">Logout</Link> */}
                    {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
                    </ol>
                </div>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-4 col-6">

                    <div className="small-box shadows">
                        <div className="inner">
                            <h3 style={{color:'#fa6062'}}>{employe}</h3>
                            <p style={{color : 'darkseagreen'}}>Total Employee</p>
                        </div>
                        <div className="icon">
                        <i class="fas fa-users" style={{color : 'darkseagreen'}}></i>  
                        </div>
                         {/* <a href="#/" className="small-box-footer"> <i className="fas fa-arrow-circle-right"></i></a>  */}
                    </div>
                </div>

                <div className="col-lg-4 col-6">

                    <div className="small-box shadows">
                        <div className="inner">
                            <h3 style={{color:'#fa6062'}}>{present}</h3>
                            <p style={{color : 'cadetblue'}}>Present</p>
                        </div>
                        <div className="icon">
                        <i class="fas fa-user-check" style={{color : 'cadetblue'}}></i>
                        </div>
                        {/* <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    </div>
                </div>

                <div className="col-lg-4 col-6">

                    <div className="small-box shadows absent">
                        <div className="inner">
                            <h3 style={{color:'#fa6062'}}>{absent}</h3>
                            <p style={{color : 'coral' }}>Absent  <Popup  trigger={<a href="#/" ><i style={{color : 'coral' }}className="fas fa-arrow-circle-right"></i></a>} >
                            <div className='absent'>
                            
                        {

                            absentEmployees.map((data,index)=>{
                                return <li>{index+1} {data.name}</li>
                            
                            })
                        }
                            
                            
                            </div>
                        </Popup></p>
                        </div>
                        <div className="icon">
                        <i class="fas fa-user-times" style={{color : 'coral' }}></i>
                        </div>
                        
                        {/* <a href="#/" className="small-box-footer" onClick={routeChange}> More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    </div>
                    
                </div>

                 {/* <div className="col-lg-3 col-6">

                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup>%</sup></h3>
                            <p>About</p>
                        </div>
                        <div className="icon">
                        <i class="fas fa-chart-bar"></i>
                        </div>
                        <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>   */}

            </div>
            <Tables />
            </div>
        </div>
    </div>
    
  </div>
  )
}
export default Dashboard;