// import Table from 'react-bootstrap/Table';
// import React, {useState, useEffect} from 'react';
// import axios from "axios";
// //import {useNavigate} from 'react-router-dom'
// import server from './host.json'
// import Button from 'react-bootstrap/Button';
// import { AiFillDelete } from "react-icons/ai";
// import 'reactjs-popup/dist/index.css';
// import Form from "react-bootstrap/Form";
// import Modal from 'react-bootstrap/Modal';
// //import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// //import "@fortawesome/fontawesome-free/css/all.min.css";



// const Employee=()=> {
  

//   ////////// AddEmployee ////////

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
    
//   //const auth = localStorage.getItem('user');

//   const [employee , setEmployee] = useState({
//   name: "",
//   date: "",
//   time: ""
//   })

//   const {name,date,time} = employee;
  
  

//   function onInputsChange(e){
//       setEmployee({
//           ...employee,
//           [e.target.name]: e.target.value
//       })
//   }

//   async function onAddSubmit(e){
//       e.preventDefault()
      
//       try{
//            await axios.post('https://api.equasar.com/attendance/add', employee)
//             alert("Employae Data added successfully!")
//             window.location.reload()
//           // navigate('/')
//       }
//       catch (error){
//           alert("Something went wrong")
//       }
      
//   }


//   ////////// AddEmployee Ends //////////

//   ////////// EditEmployee Starts ////////

//   // const {id} = useParams();
//   // const navigate = useNavigate();
//   // const auth = localStorage.getItem('user');

//   const [tid, setTid] = useState("");

//   const [editShow, setEditShow] = useState(false);

//   const handleEditClose = () => setEditShow(false);

//   const handleEditShow = (event) => {
//     var id=event.currentTarget.dataset.rowid;
//     loadEditEmployee(id)
//     console.log(id)
//     setTid(id)
//     setEditShow(true);
//   }

//  const [editEmployee , setEditEmployee] = useState({
//  name: '',
//  date: '',
//  InTime: ''
//  })

// //  const {name,date,InTime} = editEmployee;

//  function onEditInputChange(e){
//      setEditEmployee({
//          ...editEmployee,
//          [e.target.name]: e.target.value
//      })
//  }

//  useEffect(() => {
//      loadEditEmployee();
//  }, [])

 

//  const loadEditEmployee = async id => {
//   // alert(id)
//   const myId = id;
//      const result  = await axios.get(`https://api.equasar.com/attendance/findById/${myId}`);
//       console.log(result)
//           setEditEmployee(result.data.data[0])
//           console.log(editEmployee)
      
//  }

//  async function onEditSubmit(e){
//      e.preventDefault()
//      console.log(tid)
//      try{
//            await axios.put(`https://api.equasar.com/attendance/update/${tid}`, editEmployee)
         
//           alert("Employee data updated sucessfully!")
//           // navigate('/')
//      }
//      catch (error){
//          alert("Something went wrong")
//      }
     
//   }
  
//   /////////  EditEmployee Ends  /////////


//   ////////// Delete Employee Starts /////////

//   const [did, setDid] = useState("");

//   const [showDelete, setShowDelete] = useState(false);

//   const handleDeleteClose = () => setShowDelete(false);

//   const handleDeleteShow = (event) => {
//     var id=event.currentTarget.dataset.rowid;
//     console.log(id)
//     setDid(id)
//     console.log(did)
//     setShowDelete(true);

//   }

//   const handleDeleteEmployee = async id => {
//     await axios.delete(`https://api.equasar.com/attendance/delete/${did}`)
//     var newemployees = employees.filter((item) =>{
//       return item.id !== id;
//     })
//     setEmployees(newemployees);
//   }

//   // const handleDelete = async id => {
//   //   await axios.delete(`https://api.equasar.com/attendance/delete/${id}`)
//   //   var newemployees = employees.filter((item) =>{
//   //     return item.id !== id;
//   //   })
//   //   setEmployees(newemployees);
//   // }

//   ///////// Delete Employee Ends ////////////

//   const[dates, setDate] = useState({
//     data: ""
//   })
  
//   function onInputChange(e){
//     setDate({
//       ...dates,
//       [e.target.name]: e.target.value
//     })
    
//   }
//   console.log(dates.data)

//   //....................................................

//   const [employees, setEmployees] = useState([]);
//   //const { id } = useParams();
//   //const navigate = useNavigate();

//   useEffect(() =>{
//     if(dates.data){
//       searchDateData();
//     }
//     else{getAllEmployees();}
    
// },[dates.data])
// async function getAllEmployees(){
//   try {
   
//     const employees = await axios.get(server.SERVER_URL + "attendance/findAll")
//      console.log(employees.data)
//     setEmployees(employees.data.data.reverse())
//     //  setLockEmployees(employees.data.data)
//       console.log(employees.data.data[0].id)
//      //setEmpId(employees.data.data[0].id)
//   }
//   catch(error){
//     console.log("Something is wrong")
//   }
// }



// async function searchDateData(){
//   try {
   
//     const employees = await axios.get(server.SERVER_URL + `attendance/findByDate/${dates.data}`)
//     // console.log(users.data)
//     setEmployees(employees.data.data.reverse())
//   }
//   catch(error){
//     console.log("Something is wrong")
//   }
// }

// // const routeChange =event=>{
      
// //   var id=event.currentTarget.dataset.rowid;
// //   let path = `/employee/editemployee/`+id;
// //   navigate(path); 
// // }

// // const addChange=event=>{
// //   let path=`/employee/adddemployee`;
// //   navigate(path)
// // }





//   return (
//     <div className='common'>
//     <div className='date'>
//       <div><h2>Attendance Table </h2></div>

//       {/* ///// Modal Add Starts Here ///// */}

//       <Button variant="primary" className='addattendance' onClick={handleShow}>
//         Add Attendance
//       </Button>
                         
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 name="name" id="name" onChange={e => onInputsChange(e)} value={name} placeholder="Name"
//                 autoFocus
//               />
//             </Form.Group>

//             <Form.Label>Select Date</Form.Label>
//             <Form.Control
//                 type="date"
//                 name="date"
//                 placeholder="DateRange"
//                 onChange={e => onInputsChange(e)}
//                 value={date}
//                 //onChange={(e) => setUpdateDate(e.target.value)}
//             /><br></br>

//             <Form.Label>Select Time</Form.Label>
//             <div className='adddemployee'>
//             <input type="time" id="time" name="time" value={time} onChange={e => onInputsChange(e)} />
//             </div>

//             {/* <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Example textarea</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group> */}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={onAddSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* ////// Modal Edit Starts Here ///  */}

//       <Modal show={editShow}  onHide={handleEditClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" >
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 name="name" id="name" onChange={e => onEditInputChange(e)} value={editEmployee.name} placeholder="Name"
//                 autoFocus
//               />
//             </Form.Group>

//             <Form.Label>Select Date</Form.Label>
//             <Form.Control
//                 type="date"
//                 name="date"
//                 placeholder="DateRange"
//                 onChange={e => onEditInputChange(e)}
//                 value={editEmployee.date}
//                 //onChange={(e) => setUpdateDate(e.target.value)}
//             /><br></br>

//             <Form.Label>Select Time</Form.Label>
//             <div className='adddemployee'>
//             <input type="time" id="times" name="InTime" value={editEmployee.InTime} onChange={e => onEditInputChange(e)} />
//             </div>

//             {/* <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Example textarea</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group> */}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleEditClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={onEditSubmit}>
//             Update Data
//           </Button>
//         </Modal.Footer>
//       </Modal>      


//       {/* ////// Modal Delete Starts Here  //////       */}

//       <Modal show={showDelete} onHide={handleDeleteClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure want to delete this data ?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleDeleteClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" data-rowid={employees.id} onClick={handleDeleteEmployee}>
//             Delete Data
//           </Button>
//         </Modal.Footer>
//       </Modal>
    

//           <div className='right datecontainer'><input 
//               type="date"
//               name="data" 
//               id='data'
//               value={date.data}
//               onChange={e => onInputChange(e)}   
//               //  onClick={e => onFormSubmit(e)}

//           /></div>

        
     
//     </div>
    
    
//     <Table striped>
       
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Name</th>
//           <th>Date</th>
//           <th>InTime</th>
//           <th>Image</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//       {
//           employees.map((employees, index) =>{
//             return (
//               <tr>
//                 <th scope="row">{index + 1}</th>
//                 <td>{employees.name}</td>
//                 <td>{employees.date}</td>
//                 <td>{employees.InTime}</td>
//                 <td><img src={employees.image_url} alt=""/></td>
//                 <td>
//                 {/* <h5 style={{color: "indigo"}}><AiFillEdit /></h5> */}
//                 <div className='icons' style={{top: '35px'}}>
//                 <i class="bi bi-pencil-square" onClick={handleEditShow} data-rowid={employees.id}></i>
//                 <h5 style={{color: "crimson"}}><AiFillDelete data-rowid={employees.id} onClick ={handleDeleteShow}/></h5>
//                 {/* <i class="bi bi-lock"></i> */}
//                 </div>
//                {/* <Button variant="danger" data-rowid={employees.id} onClick ={() => handleDelete(employees.id)}>Delete</Button> */}
//                {/* <Popup trigger={<button> Trigger</button>} position="center">
//                     <div>Popup content here !!</div>
//                 </Popup> */}
//                 </td>
//               </tr>
//             )
          
//           })
            
//         }
//       </tbody>
//     </Table>
//     </div>
//   );
// }

// export default Employee;