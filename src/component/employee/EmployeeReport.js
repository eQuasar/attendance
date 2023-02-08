import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { MagnifyingGlass} from  'react-loader-spinner'
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom' 

const EmployeeReport = () => {

  const [months, setMonths] = useState();
  const [loading, setLoading] = useState(false);
  const [employeedata, setEmployeeData] = useState([]);
  const[dateAlert, setDateAlert]=useState("")

  const navigate = useNavigate();

  const logout =()=>{
    localStorage.clear();
    navigate('/login')
}

<Link onClick={logout} to="/login">Logout</Link>

function home(){
    navigate("/")
}

  const [years, setYears] = useState();

  const [employeeReport, setEmployeeReport] = useState({
    name: "",
    month: "",
    year: "",
  });

  const { emp_name, month, year } = employeeReport;

  function onInputChange(e) {
    setEmployeeReport({
      ...employeeReport,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    loadEmployeeName();
  }, []);

  const [employeeName, setEmployeeName] = useState([]);

  const loadEmployeeName = async (e) => {
    const name = await axios.get(
      "https://api.equasar.com/attendance/nameApi"
    );
    // console.log(name);

    setEmployeeName(name.data.data);
    // console.log(employeeName)
  };

  // console.log(employeeName);

//   useEffect(() => {
//     showReport();
//   }, []);

const [glass, setGlass] = useState(false);

  async function showReport() {
    // e.preventDefault();

    try {
      const employeedata = await axios.post(
        "https://api.equasar.com/attendance/employeeReport",
        employeeReport
      );
      //  console.log(employeedata);
      setEmployeeData(employeedata.data.data);
      setLoading(true)
      setGlass(true)
    setTimeout(()=>{
     setGlass(false)
     
    },1500)
      // console.log(employeedata)
      //  setMessage("Employee Data has been added successfully!");
      //  setVariant("success");
      // alert("Employae Data added successfully!")

      //              setTimeout(function(){
      //    window.location.reload()
      //              },2000)
      // navigate('/')
    } catch (error) {
      // console.log("No data fetched");
      setDateAlert(`Data doesn't exist `);
      setTimeout(()=>{
        setLoading(false)
        
       },1500)

      //     setAddEmployeeAlert("ERROR :  "+error.response.data.errors[0].message)
      //    setVariant('danger')
      //    setTimeout(function(){
      //     setAddEmployeeAlert()
      //    },2000)

    }
  }

  return (
    <>
      <div>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                <img style={{ marginTop: '8px' }} className='equasar' onClick={home} src='../eQuasar.png' alt='' />
                    {/* <h1 className="m-0">Dashboard</h1> */}
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                    {/* <Button style={{width: '95px', height: '38px'}} variant="primary" size="sm"> */}
                        <img  className='logout' src='../logout.png' alt='' onClick={logout} />  <h6 style={{color:'red',cursor:"pointer"}} onClick={logout}> Logout</h6>
                    {/* </Button> */}
                    {/* <Link className='breadcrumb-item' onClick={logout} to="/login">Logout</Link> */}
                    {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
                    </ol>
                </div>
                </div>
            </div>
        </div>

        <div class="card">
        <div
            style={{ backgroundColor: "cadetblue", height: "50px", textAlign: "center" }}
            className="employeeHeading"
          >
            <h5
               style={{ marginTop: "11px", color: "white" }}
              
            >
              Employee Report
            </h5>
          </div>

          <div class="card-body">
            <div className="heading">
              <Form.Group as={Col}>
                <Form.Label>Select Employee</Form.Label>
                <Form.Select 
                  className="employeeSelect formSelect"
                  value={emp_name}
                  name="name"
                  onChange={(e) => onInputChange(e)}
                >
                  <option selected value="">
                    Select Employee
                  </option>
                  {employeeName.map((x) => {
                    return <option>{x.name}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <br></br>

              <Form.Group style={{marginLeft: '68px'}} as={Col}>
                <Form.Label>Select Month</Form.Label>
                <Form.Select
                  className="employeeSelect formSelect"
                  value={month}
                  name="month"
                  onChange={(e) => onInputChange(e)}
                  placeholder="select"
                >
                  <option selected value="">
                    Select Month
                  </option>
                  <option value={"1"}>January</option>
                  <option value={"2"}>February</option>
                  <option value={"3"}>March</option>
                  <option value={"4"}>April</option>
                  <option value={"5"}>May</option>
                  <option value={"6"}>June</option>
                  <option value={"7"}>July</option>
                  <option value={"8"}>August</option>
                  <option value={"9"}>September</option>
                  <option value={"10"}>October</option>
                  <option value={"11"}>November</option>
                  <option value={"12"}>December</option>
                </Form.Select>
              </Form.Group>
              <br></br>

              <Form.Group as={Col}>
                <Form.Label>Select Year</Form.Label>
                <Form.Select
                  className="employeeSelect formSelect"
                  value={year}
                  name="year"
                  onChange={(e) => onInputChange(e)}
                >
                  <option selected value="">
                    Select Year
                  </option>
                  <option value={"2023"}>2023</option>
                  <option value={"2022"}>2022</option>
                </Form.Select>
              </Form.Group>

              <buttton className="employeeReportSubmit" onClick={showReport}>
                Submit
              </buttton>
            </div>
          </div>
        </div>
     

    {!loading?
    (dateAlert?(swal("Sorry!",dateAlert,"error"),setDateAlert()):
    null
    ):
<>{glass?
    <MagnifyingGlass
  visible={true}
  height="100"
  width="100%"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = 'coral'
/>:
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
        </tr>
      </thead>
      <tbody>
      {
          employeedata.map((employeedata, index) =>{
            return (
              <tr className="tableRow" style={{textAlign: 'center'}}>
                <th scope="row">{index + 1}</th>
                <td >{employeedata.name}</td>
                <td>{employeedata.date}</td>
                <td>{employeedata.day}</td>
                <td>{employeedata.InTime}</td>
                <td>{employeedata.outTime}</td>
                <td>{employeedata.working_hours}</td>
                <td><img src={employeedata.image_url} alt=""/></td>
              </tr>

            )
          
})

}
      </tbody>
    </Table>}



</>


}

</div>
    </>
  );
};

export default EmployeeReport;
