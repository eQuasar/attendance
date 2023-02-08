import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select';
import { AiOutlineHome } from "react-icons/ai";

const MonthReport = () => {

    // const options = [
    //     { value: 'january', label: 'January' },
    //     { value: 'february', label: 'February' },
    //     { value: 'march', label: 'March' },
    //     { value: 'april', label: 'April' },
    //     { value: 'may', label: 'May' },
    //     { value: 'june', label: 'June' },
    //     { value: 'july', label: 'July' },
    //     { value: 'august', label: 'August' },
    //     { value: 'september', label: 'September' },
    //     { value: 'october', label: 'October' },
    //     { value: 'november', label: 'November' },
    //     { value: 'december', label: 'December' },
    // ];

    // const [selectedOption, setSelectedOption] = useState(null);

    // const navigate = useNavigate()

    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/login')
    // }

    // <Link onClick={logout} to="/login">Logout</Link>

    // function handleHome(){
    //     navigate('/')
    // }

    // const [month, setMonth] = useState()

    // function onInputChange(e){
    //     setMonth({
    //       ...month,
    //       [e.target.name]: e.target.value
    //     })
        
    //   }
    //   console.log(month)

    return (
        <>

        <h4>This is month report</h4>
            {/* <div className="content-header"> */}

                {/* <div className="month-header">
                    <img style={{ marginTop: '8px' }} className='equasar' src='../eQuasar.png' /> */}



                    {/* <div className="month-logout">

                        <h3 style={{ marginRight: '10px', cursor : 'pointer' }} onClick={handleHome} >  <AiOutlineHome /> </h3>

                            <img className='logout' src='../logout.png' onClick={logout} />  <h6 style={{ color: 'red', cursor: "pointer", margin: '0px' }} onClick={logout}> Logout</h6>
                        
                    </div> */}


                {/* </div> */}

                {/* <div className="month-date"> */}

                {/* <Select 
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    /> */}

                {/* <input type="month" id="month" name="month" value={month}  onChange={e => onInputChange(e)} />

                </div> */}
            {/* </div> */}

            {/*  */}

        </>

    )
}

export default MonthReport;