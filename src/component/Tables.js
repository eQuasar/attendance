import Table from 'react-bootstrap/Table';
import React, {useState, useEffect} from 'react';
import axios from "axios";
//import {useNavigate} from 'react-router-dom'
import server from './host.json'
import Button from 'react-bootstrap/Button';
import { AiFillDelete } from "react-icons/ai";
import 'reactjs-popup/dist/index.css';
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBSelect } from 'mdb-react-ui-kit';
//import Form from 'react-bootstrap/Form';
//import { useNavigate } from 'react-router-dom';
//import { setMilliseconds } from 'date-fns';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { MagnifyingGlass} from  'react-loader-spinner'
import swal from 'sweetalert';

const Employee=()=> {
  
  
  const navigate = useNavigate();

  ////////// MonthReport ////////
  const [month, setMonth] = useState();
  //console.log("-------------------",months)
  //const month = months;
  //console.log(month)

  const [years, setYears] = useState();
  
  //console.log(years)
  //const year = years;
  //console.log(year)

  const [monthReport , setMonthReport] = useState({
    month: "",
    year: ""
    });

    const[variant,setVariant]=useState("");
    const[message,setMessage]=useState("");
    const[monthalert, setMonthAlert]=useState("")
    const[addemployee, setAddEmployeeAlert]=useState("")
    const[dateAlert, setDateAlert]=useState("")

    const[loading, setLoading]= useState(false);

    //const {month,year} = monthReport;

  //   function onInputsChange(e){
  //     setMonthReport({
  //         ...monthReport,
  //         [e.target.name]: e.target.value
  //     })
  // }


  const handleChangeYear = (event) => {
    setYears(event.target.value);
    // console.log(years)
    setMonthReport({
      ...monthReport,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
    // console.log(month)
    setMonthReport({
      ...monthReport,
      [event.target.name]: event.target.value,
    });
  };
    // console.log(month)
    // console.log(year)

    // console.log(monthReport)
  


  const [monthShow, setMonthShow] = useState(false);

  const handleMonthClose = () => setMonthShow(false);
  const handleMonthShow = () => setMonthShow(true);
    
  //const auth = localStorage.getItem('user');

  // const [monthData , setMonthData] = useState({ 
  // months: "",
  // year: ""
  // })

  // const [monthData , setMonthData] = useState({reportmonth : " - "})

//  const {month,year} = monthData;
  
  // const {reportmonth} = monthData;

  function onInputsChange(e){
    console.log(e);   
      // setMonthData({
      //     ...monthData,
      //     [e.target.name]: e.target.value
      // })
  }

  //alert(monthData.month)
  //console.log(monthData.month)

  // console.log(monthData.reportmonth);
  // console.log(reportmonth);

  async function onMonthSubmit(e){
      e.preventDefault()
      // console.log(month)
      // console.log(years)
      try{
          const mon = await axios.post('https://api.equasar.com/attendance/report',monthReport);
          // console.log(mon)
          
            setMonthAlert("Employee Data has been downloaded successfully!");
            setVariant("success");
            window.location.replace(mon.data.url);
            setTimeout(function(){
              window.location.reload()
             },1500)
          // navigate('/')
      }
      catch (error){
        // console.log(error)
         setMonthAlert("ERROR : "+error.response.data.errors[0].message)
         setVariant('danger')
         setTimeout(function(){
          setMonthAlert()
         },2000)

         
        //console.log(mon.data.error)ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          //alert("Something went wrong")
      }
      
  }

  /////////  MonthReport Ends ////////

  ////////// AddEmployee ////////

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  //const auth = localStorage.getItem('user');

  const [employee , setEmployee] = useState({
  name: "",
  date: "",
  time: "",
  outTime: ""

  })

  const {emp_name,date,time,outTime} = employee;

  function onInputsChange(e){
      setEmployee({
          ...employee,
          [e.target.name]: e.target.value
      })
  }

  useEffect(() => {
    loadEmployeeData();
  }, []);

  const [employeeName, setEmployeeName] = useState([]);

  const loadEmployeeData = async (e) => {
    const name = await axios.get(
      "https://api.equasar.com/attendance/nameApi"
    );
    // console.log(name);

    setEmployeeName(name.data.data);
    // console.log(employeeName)
  };


  async function onAddSubmit(e){
      e.preventDefault()
      
      try{
          const add = await axios.post('https://api.equasar.com/attendance/add', employee)
          // console.log(add)
           setMessage("Employee Data has been added successfully!");
           setVariant("success");
            // alert("Employae Data added successfully!")
           
           setTimeout(function(){
 window.location.reload()
           },2000)
          // navigate('/')
      }
      catch (error){
        
          setAddEmployeeAlert("ERROR :  "+error.response.data.errors[0].message)
         setVariant('danger')
         setTimeout(function(){
          setAddEmployeeAlert()
         },2000)
         
      }
      
  }


  ////////// AddEmployee Ends //////////

  ////////// EditEmployee Starts ////////

  // const {id} = useParams();
  // const navigate = useNavigate();
  // const auth = localStorage.getItem('user');

  const [tid, setTid] = useState("");

  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);

  const handleEditShow = (event) => {
    var id=event.currentTarget.dataset.rowid;
    loadEditEmployee(id)
    // console.log(id)
    setTid(id)
    setEditShow(true);
  }

 const [editEmployee , setEditEmployee] = useState({
 name: '',
 date: '',
 InTime: '',
 outTime: ''
 })

  //  const {editEmployee.name,date,InTime,outTime} = editEmployee;

 function onEditInputChange(e){
     setEditEmployee({
         ...editEmployee,
         [e.target.name]: e.target.value
     })
 }

 useEffect(() => {
     loadEditEmployee();
 }, [])

 

 const loadEditEmployee = async id => {
  // alert(id)
  const myId = id;
     const result  = await axios.get(`https://api.equasar.com/attendance/findById/${myId}`);
       console.log(result)
          setEditEmployee(result.data.data[0])
           console.log(editEmployee)
           console.log(editEmployee.name)
      
 }

 async function onEditSubmit(e){
     e.preventDefault()
    //  console.log(tid)
     try{
           await axios.put(`https://api.equasar.com/attendance/update/${tid}`, editEmployee)
         
         setMessage("Data has been updated successfully!");
           setVariant("success");
           setTimeout(function(){
            window.location.reload()
           },2000)
          // navigate('/')
     }
     catch (error){
      setMessage("ERROR :  "+error.response.data.errors[0].message)
      setVariant('danger')
      setTimeout(function(){
        setMessage()
       },2000)
     }
     
  }
  
  /////////  EditEmployee Ends  /////////


  ////////// Delete Employee Starts /////////

    const [did, setDid] = useState("");

  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClose = () => setShowDelete(false);

  const handleDeleteShow = (event) => {
    var id=event.currentTarget.dataset.rowid;
    // console.log(id)
    setDid(id)
    // console.log(did)
    setShowDelete(true);

  }

  const handleDeleteEmployee = async id => {
    await axios.delete(`https://api.equasar.com/attendance/delete/${did}`)
    var newemployees = employees.filter((item) =>{
      return item.id !== id;
    })
    setEmployees(newemployees);
    setMessage("Data has been deleted successfully!");
           setVariant("danger");
           setTimeout(function(){
            window.location.reload()
           },2000)
    
  }

  ///////// Delete Employee Ends ////////////
  

  /////////// Lock Employee Starts //////////

  const[lid, setLid] = useState()
  const [showLock, setLockShow] = useState(false);

  const handleLockClose = () => setLockShow(false);
  const handleLockShow = (event) => {
    var id=event.currentTarget.dataset.rowid;
    // console.log("===============================================",id)
    loadLockEmployee(id)
    setLid(id)
    // console.log(lid)
    setLockShow(true);
  }

  const [lockEmployee , setLockEmployee] = useState()
    
    

    useEffect(() => {
        loadLockEmployee();
    }, [])
   
    
   
    const loadLockEmployee = async id => {
      // console.log("lock id is ",id)
     const mylid = id;
     //alert(mylid)
    //  console.log(mylid)
        const result  = await axios.get(`https://api.equasar.com/attendance/findById/${mylid}`);
        //  console.log(result)
             setLockEmployee(result.data.data[0])
            //  console.log(lockEmployee)
         
    }

    // console.log(lockEmployee)

    async function onLockSubmit(e){
        e.preventDefault()
        // console.log(tid)
        try{
              await axios.get(`https://api.equasar.com/attendance/error/${lid}`)
            
              setMessage("Data has been locked successfully!");
              setVariant("success");
              setTimeout(function(){
               window.location.reload()
              },2000)
             // navigate('/')
        }
        catch (error){
            alert("Something went wrong")
        }
        
     }


   
    // async function onEditSubmit(e){
    //     e.preventDefault()
    //     console.log(tid)
    //     try{
    //           await axios.put(`https://api.equasar.com/attendance/update/${tid}`, editEmployee)
            
    //          alert("Employee data updated sucessfully!")
    //          // navigate('/')
    //     }
    //     catch (error){
    //         alert("Something went wrong")
    //     }
        
    //  }

  //////////  Lock Employee Ends  //////////

  const[dates, setDate] = useState({
    data: ""
  })
  
  function onInputChange(e){
    setDate({
      ...dates,
      [e.target.name]: e.target.value
    })
    
  }
  // console.log(dates.data)

  //....................................................

  const [employees, setEmployees] = useState([]);
  //const { id } = useParams();
  //const navigate = useNavigate();

  useEffect(() =>{
    if(dates.data){
      searchDateData();
    }
    else{getAllEmployees();}
},[dates.data])

async function getAllEmployees(){
  try {
   
    const employees = await axios.get(server.SERVER_URL + "attendance/findAll")
    //  console.log(employees.data)
    setEmployees(employees.data.data.reverse())
    //  setLockEmployees(employees.data.data)
      // console.log(employees.data.data[0].id)
     //setEmpId(employees.data.data[0].id)
  }
  catch(error){
    console.log("Something is wrong")
  }
}



async function searchDateData(){
  try {
   
    const employees = await axios.get(server.SERVER_URL + `attendance/findByDate/${dates.data}`)
    // console.log(users.data)
    setEmployees(employees.data.data.reverse())
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
     
    },1500)
  }
  catch(error){
    setDateAlert(`Data doesn't exist for date ${dates.data}`);
    setVariant("danger");
     setTimeout(()=>{
     setLoading(false)
     
    },1500)
   

    console.log("Something is wrong")
  }
}

function handleEmployeeReport(){
  navigate('employee/EmployeeReport')
}

// const routeChange =event=>{
      
//   var id=event.currentTarget.dataset.rowid;
//   let path = `/employee/editemployee/`+id;
//   navigate(path); 
// }

// const addChange=event=>{
//   let path=`/employee/adddemployee`;
//   navigate(path)
// }

// function handleMonthReport(){
//   let path='./employee/monthreport';
//   navigate(path)
// }


  // function monthData(){
  //   navigate("/employee/monthreport")
  // }

 function disableDates()
 {
    var today,dd,mm,yyyy;
    today=new Date();
    dd=today.getDate()+1;
    mm=today.getMonth()+1;
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;
 }

  return (
    
    
    <>
    
    
    <div className='common'>
    <div  className='date'>
      <div><h4 style={{color:'cadetblue',marginTop: '8px'}}>Attendance Table </h4></div>

        <div   className='test'>
            
            {/* <Button  className='addattendance' onClick={handleShow}>
                Add Attendance
            </Button> */}

            {/* <buttton className='addattendance' onClick={handleMonthReport}>Month Report</buttton> */}

            <buttton className='addattendance' onClick={handleShow}>Add Attendance</buttton>
            <buttton className='addattendance' onClick={handleMonthShow}>Reports</buttton>
            <buttton className='addattendance' onClick={handleEmployeeReport}>Employee Reports</buttton>

            

            

            <div ><input
            className="myDatePicker" 
                    type="date"
                    name="data" 
                    
                    id='data'
                    value={date.data}
                    // max={disableDates()}
                    max={moment().format("YYYY-MM-DD")}
                    // maxDate={new Date()}
                    // maxDate={moment().toDate()}
                    // excludeDates={[new Date(), subDays(new Date(), 1)]}
                    onChange={e => onInputChange(e)}   
                    //  onClick={e => onFormSubmit(e)}

                /></div>

        </div>

      {/* //// Modal Month Report Starts Here ///// */}      

      <Modal show={monthShow} onHide={handleMonthClose}>
        <div className='ModalHeading'>
        <Modal.Header  closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Month Report</h5></Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body>
          <Form>


          {/* <Form.Select value={months} onChange={e=>setMonths(e.target.value)}> */}
          <Form.Label>Month</Form.Label>
          <Form.Select value={month} name="month" onChange={handleChangeMonth} placeholder="select">
        <option value="">Select Month</option>
        <option  value={"1"}>January</option>
        <option  value={"2"}>February</option>
        <option  value={"3"}>March</option>
        <option  value={"4"}>April</option>
        <option  value={"5"}>May</option>
        <option  value={"6"}>June</option>
        <option  value={"7"}>July</option>
        <option  value={"8"}>August</option>
        <option  value={"9"}>September</option>
        <option  value={"10"}>October</option>
        <option  value={"11"}>November</option>
        <option  value={"12"}>December</option>
      </Form.Select>
       <br></br>     
      {/* <Form.Select value={years} onChange={e=>setYears(e.target.value)}> */}
      <Form.Label>Year</Form.Label>
      <Form.Select value={years} name="year" onChange={handleChangeYear}>
        <option value="">Select Year</option>
        <option  value={"2023"}>2023</option>
        <option  value={"2022"}>2022</option>
        
        </Form.Select>




         

        {monthalert?<Alert  variant={variant}>{monthalert}</Alert>:null}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="danger" onClick={handleMonthClose}>
            Close
          </Button>
          
          
          {/* <Button variant="primary" onClick={onAddSubmit}>
            Save Changes
          </Button> */}
          <buttton className='saveChanges' onClick={onMonthSubmit}>Download</buttton>
        </Modal.Footer>
      </Modal>  



      {/* ///// Modal Add Starts Here ///// */}

                         
      <Modal show={show} onHide={handleClose}>
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Add Employee</h5></Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select Employee</Form.Label>
              {/* <Form.Control
                name="name" id="name" onChange={e => onInputsChange(e)} value={name} placeholder="Name"
                autoFocus
              /> */}
              <Form.Select 
                  id="name"
                  className=""
                  value={emp_name}
                  name="name"
                  onChange={e => onInputsChange(e)}
                >
                  <option selected value="">
                    Select Employee
                  </option>
                  {employeeName.map((x) => {
                    return <option>{x.name}</option>;
                  })}
                </Form.Select>
            </Form.Group>

            <Form.Label>Select Date</Form.Label>
            <Form.Control
                type="date"
                name="date"
                id="addDate"
                placeholder="DateRange"
                max={moment().format("YYYY-MM-DD")}
                onChange={e => onInputsChange(e)}
                value={date}
                //onChange={(e) => setUpdateDate(e.target.value)}
            /><br></br>

            <Form.Label>Select InTime</Form.Label>
            <div className='selectTime'>
            <input type="time" id="time" name="time" value={time} onChange={e => onInputsChange(e)} />
            </div>

            <br></br>

            <Form.Label>Select OutTime</Form.Label>
            <div className='selectTime'>
            <input type="time" id="outTime" name="outTime" value={outTime} onChange={e => onInputsChange(e)} />
            </div>

            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            {addemployee?<Alert  variant={variant}>{addemployee}</Alert>:null}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* {message?<Alert  variant={variant}>{message}</Alert>:null} */}
          <Button  variant="danger" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={onAddSubmit}>
            Save Changes
          </Button> */}
          <buttton className='saveChanges' onClick={onAddSubmit}>Save Changes</buttton>
        </Modal.Footer>
      </Modal>

      {/* ////// Modal Edit Starts Here ///  */}

      <Modal show={editShow}  onHide={handleEditClose}>
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Update Employee</h5></Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Select 
                  id="name"
                  className=""
                  value={editEmployee.name}
                  name="name"
                  onChange={e =>  onEditInputChange(e)}
                >
                  <option selected value="">
                    Select Employee
                  </option>
                  {employeeName.map((x) => {
                    return <option>{x.name}</option>;
                  })}
                </Form.Select>
              {/* <Form.Control
                name="name" id="name" onChange={e => onEditInputChange(e)} value={editEmployee.name} placeholder="Name"
                autoFocus
              /> */}
            </Form.Group>

            <Form.Label>Select Date</Form.Label>
            <Form.Control
                type="date"
                name="date"
                id="editDate"
                placeholder="DateRange"
                onChange={e => onEditInputChange(e)}
                value={editEmployee.date}
                //onChange={(e) => setUpdateDate(e.target.value)}
            /><br></br>

            <Form.Label>Select Time</Form.Label>
            <div className='adddemployee'>
            <input type="time" id="editTime" name="InTime" value={editEmployee.InTime} onChange={e => onEditInputChange(e)} />
            </div>

            <Form.Label>Select OutTime</Form.Label>
            <div className='adddemployee'>
            <input type="time" id="editTime" name="outTime" value={editEmployee.outTime} onChange={e => onEditInputChange(e)} />
            </div>

            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            {message?<Alert  variant={variant}>{message}</Alert>:null}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleEditClose}>
            Cancel
          </Button>
          <buttton className='saveChanges' onClick={onEditSubmit}>Update Data</buttton>
          {/* <Button variant="primary" onClick={onEditSubmit}>
            Update Data
          </Button> */}
        </Modal.Footer>
      </Modal>      


      {/* ////// Modal Delete Starts Here  //////       */}

      <Modal show={showDelete} onHide={handleDeleteClose}>
        {message?<Alert  variant={variant}>{message}</Alert>:null}
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Delete Employee</h5></Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body>Are you sure want to delete this data ?</Modal.Body>
        <Modal.Footer>
          
          <Button variant="danger" onClick={handleDeleteClose}>
            Cancel
          </Button>

          {/* <Button variant="primary" data-rowid={employees.id} onClick={handleDeleteEmployee}>
            Delete Data
          </Button> */}
          <buttton className='saveChanges' data-rowid={employees.id} onClick={handleDeleteEmployee}>Delete Data</buttton>
        </Modal.Footer>
      </Modal>

      {/* ////////// Modal LockEmployee Starts Here /////////// */}

      <Modal show={showLock} onHide={handleLockClose}>
      {message?<Alert  variant={variant}>{message}</Alert>:null}
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Lock Data</h5></Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body >Are you sure want to lock this data ?</Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={handleLockClose}>
            Cancel
          </Button>
          {/* <Button variant="primary" onClick={onLockSubmit} data-rowid={employees.id} >
            Lock Data
          </Button> */}
          <buttton className='saveChanges' data-rowid={employees.id} onClick={onLockSubmit}>Lock Data</buttton>
        </Modal.Footer>
      </Modal>
    

          

        
     
    </div>
    
    {!loading?
    (dateAlert?(swal("Sorry!",dateAlert,"error"),setDateAlert()):
    <Table>
      <thead>
        <tr style={{backgroundColor : 'cadetblue', padding:'1px',textAlign: 'center'}}>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Day</th>
          <th>InTime</th>
          <th>OutTime</th>
          <th>WorkingHours</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          employees.map((employees, index) =>{
            return (
              <tr className="tableRow" style={{textAlign: 'center'}}>
                <th scope="row">{index + 1}</th>
                <td >{employees.name}</td>
                <td>{employees.date}</td>
                <td>{employees.day}</td>
                <td>{employees.InTime}</td>
                <td>{employees.outTime}</td>
                <td>{employees.working_hours}</td>
                <td><img src={employees.image_url} alt=""/></td>
                <td>
                {/* <h5 style={{color: "indigo"}}><AiFillEdit /></h5> */}
                <div className='icons'>
                <i class="bi bi-pencil-square" style={{cursor : 'pointer', color: 'seagreen'}} onClick={handleEditShow} data-rowid={employees.id}></i>
                <i style={{color: "crimson", cursor: 'pointer'}} class="bi bi-trash" data-rowid={employees.id} onClick ={handleDeleteShow}></i>
                <i class="bi bi-lock-fill" data-rowid={employees.id} style={{cursor : 'pointer', color: 'coral'}} onClick={handleLockShow}></i>
                {/* <h5 style={{color: "crimson", cursor: 'pointer'}}><AiFillDelete data-rowid={employees.id} onClick ={handleDeleteShow}/></h5> */}
                {/* <i data-rowid={employees.id} style={{cursor : 'pointer', color: 'coral'}} onClick={handleLockShow} class="bi bi-lock"></i> */}
                </div>
               {/* <Button variant="danger" data-rowid={employees.id} onClick ={() => handleDelete(employees.id)}>Delete</Button> */}
               {/* <Popup trigger={<button> Trigger</button>} position="center">
                    <div>Popup content here !!</div>
                </Popup> */}
                </td>
              </tr>
            )
          
          })
            
        }
      </tbody>
    </Table>
    
    
    
    
    
    
    
    
    
    
     ):
  // <BallTriangle className="mySpinner"
    
  //   radius={5}
  //   marginBottom={20}
  //   height={100}
  //   width={1400}
  //   color="#4fa94d"
  //   ariaLabel="ball-triangle-loading"
  //   wrapperClass={{}}
  //   wrapperStyle=""
  //   visible={true}
    
  // />
<MagnifyingGlass
  visible={true}
  height="100"
  width="100%"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = 'coral'
/>}
  </div>
  </>
 

  );
}

export default Employee;