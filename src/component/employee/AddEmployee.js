// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Form from "react-bootstrap/Form";

// const AddEmployee=()=>{

//     const navigate = useNavigate();
    
//     const auth = localStorage.getItem('user');

//     const [employee , setEmployee] = useState({
//     name: "",
//     date: "",
//     InTime: ""
//     })

//     const {name,date,InTime} = employee;
    
//     function onInputChange(e){
//         setEmployee({
//             ...employee,
//             [e.target.name]: e.target.value
//         })
//     }

//     async function onFormSubmit(e){
//         e.preventDefault()
        
//         try{
//              await axios.post('https://api.equasar.com/attendance/add', employee)
//             navigate('/')
//         }
//         catch (error){
//             alert("Something went wrong")
//         }
        
//     }

//     return(
//         <>
//         <div>
//         {auth ? <div className="user">
//             <h3>Add Employee</h3><br>
//             </br>
             

//             {/* <input type='text' placeholder='Enter employee name' className='inputBox' 
//             name="name" id='name' value={name} onChange={e => onInputChange(e)}
//             /> */}

//         <div class="form-group ">
//             <label for="inputEmail3" class="col-sm-2 col-form-label">Name :</label>
//             <div class="col-sm-10">
//                 <input type="text" class="form-control new"  name="name" id="name" placeholder="Name"  value={name} onChange={e => onInputChange(e)}
//                 />
//             </div>
//         </div>

//         <label for="inputEmail3" class="col-sm-2 col-form-label">Select Date :</label>
//                      <div className='formControl' style={{width: '515px'}}>  <Form.Control
//                                     type="date"
//                                     name="date"
//                                     placeholder="DateRange"
//                                     onChange={e => onInputChange(e)}
//                                     value={date}
//                                     //onChange={(e) => setUpdateDate(e.target.value)}
//                                 /><br></br> 
//                         </div>

//                     <label for="inputEmail3" class="col-sm-2 col-form-label">Select Time:</label>
//                         <input type="time" id="time" name="InTime" value={InTime} onChange={e => onInputChange(e)} /><br>
//                         </br>
//                         <br>
//                         </br>

//             {/* <button onClick={e => onFormSubmit(e)} className='appButton'>Update Employee </button> */}
//             <button onClick={e => onFormSubmit(e)} type="submit"  class="btn btn-primary">Add Employee</button> 
//         </div>
//         : null}  
        
       
//        </div>       
//         </>
//     )
// }

// export default AddEmployee;