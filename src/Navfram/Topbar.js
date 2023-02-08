// import React,{useState} from 'react'
// import '../Navfram/Test.css'
// import axios from 'axios';
// import { useNavigate, Link} from 'react-router-dom'

// const Topbar=()=>{ 
//   const auth = localStorage.getItem('user')
//  // const navigate = useNavigate();
//   const[date, setDate] = useState({
//     data: ""
//   })
  
//  const {data} = date;

//   function onInputChange(e){
//     setDate({
//       ...date,
//       [e.target.name]: e.target.value
//     })
//     console.log(date);
//   }
  
//   const navigate = useNavigate();
//     const logout=()=>{
//       localStorage.clear();
//         navigate('/login')
//     }
        
//   <Link onClick={logout} to="/login">Logout</Link>
//  async function onFormSubmit(e){
//   e.preventDefault()
//   console.warn(e);
//   try{
//       const data = await axios.get(`https://api.equasar.com/attendance/findByDate/${date.data}`)
//        let res = data;
//       console.log(res)
//   }
//   catch (error){
//       alert("Something went wrong")
//   }
  
// }
     
//   return (
// <>
// { auth ? <div className="wrapper">
//   <nav className="main-header navbar navbar-expand navbar-white navbar-light">

//      <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><i class="fas fa-bars"></i></a>
//       </li>
//     </ul> 
//      <ul className="navbar-nav ml-auto">
//       <li className="nav-item">
//          <a className="nav-link" data-widget="navbar-search"   href="/#" role="button"> 
//            <i className="fas fa-search"></i>
//         </a> 
//         <div className="navbar-search-block">
//           <form className="form-inline" >
//             <div className="input-group input-group-sm">
//               <input className="form-control form-control-navbar" type="search"  name="data" id='data' value={data} onChange={e => onInputChange(e)} placeholder="YYYY-MM-DD" aria-label="Search"/>
//               <div className="input-group-append">
//                 <button className="btn btn-navbar" onClick={e => onFormSubmit(e)} type="submit">
//                   <i className="fas fa-search" ></i>
//                 </button>
                  
//                 <button className="btn btn-navbar" type="button"  data-widget="navbar-search">
//                   <i className="fas fa-times"></i>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </li>

      

//       <li className="nav-item dropdown">
//         <a className="nav-link" data-toggle="dropdown" href="/#">
//           <i className="fas fa-comments"></i>
//         </a>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link" data-toggle="dropdown" href="/#">
//         <i className="fas fa-bell"></i>
//         </a>
//       </li>
//     </ul> 
//   </nav>
// </div>
// :
// null}

// </>
//   )
// }
// export default Topbar;
