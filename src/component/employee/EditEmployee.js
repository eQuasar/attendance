import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Form from "react-bootstrap/Form";

const EditEmployee = () =>{

     const {id} = useParams();
     const navigate = useNavigate();
     const auth = localStorage.getItem('user');

    const [employee , setEmployee] = useState({
    name: '',
    date: '',
    time: ''
    })

    const {name,date,time} = employee;

    function onInputChange(e){
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async e => {
        const result  = await axios.get(`https://api.equasar.com/attendance/findById/${id}`);
             setEmployee(result.data.data[0])
             console.log(employee)
         
    }

    async function onFormSubmit(e){
        e.preventDefault()
        try{
              await axios.put(`https://api.equasar.com/attendance/update/${id}`, employee)
            
             alert("Employee data updated sucessfully!")
             navigate('/')
        }
        catch (error){
            alert("Something went wrong")
        }
        
     }

    return(
        <div>
         <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card px-1 py-4">
        <div class="card-body">
            <div class="d-flex flex-row"> <label class="radio mr-1">   </label>  </div>
            <h6 class="information mt-4">Update Employee</h6>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <input class="form-control" type="text" name="name" id="name" onChange={e => onInputChange(e)} value={name} placeholder="Name" /> </div>
                </div>
            </div>

            {/* <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="text" placeholder="Mobile" /> </div>
                    </div>
                </div>
            </div> */}

            <Form.Control
                type="date"
                name="date"
                placeholder="DateRange"
                onChange={e => onInputChange(e)}
                value={date}
                //onChange={(e) => setUpdateDate(e.target.value)}
            /><br></br> 

            <label for="name">Select Time</label>

            <div className='adddemployee'>
            <input type="time" id="time" name="time" value={time} onChange={e => onInputChange(e)} />
            </div>

            {/* <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="text" placeholder="Email ID" /> </div>
                    </div>
                </div>
            </div> */}

            <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small class="agree-text">By Updating this employee you agree to the</small> <a href="#" class="terms">Terms & Conditions</a> </div> 
            <button onClick={e => onFormSubmit(e)} type="submit" class="btn btn-primary btn-block confirm-button">Confirm</button>
        </div>
    </div>
</div>
        
       
       </div>       
    )
}

export default EditEmployee;
