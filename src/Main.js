import React from 'react'
// import './Main.css';


const Main = (props) => {
  // const[Isdata,setIsdata]=React.useState({})
  // const handlechange=(e)=>{
  //   let name=e.target.name;
  //   let value=e.target.value;
  //   setIsdata({...Isdata,[name]:value})

  // }
  return (
    <div style={{backgroundColor:"white"}}>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" style={{paddingLeft:"20%" ,fontSize:"30px" ,color:"red"}}> Expenses Tracker</span>

    <button type="button" class="btn btn-primary btn-lg" onClick={()=>{
      props.checkvalue()
    }}
      
     
    >Click ME</button>
    <img src="/images/image1.png" class="img-thumbnail" alt="..." style={{paddingRight:"100px"}} ></img>
  </div>
</nav>

    </div>            
  )
}

export default Main;