import React from 'react'
import Expense from "./Expense";
import Main from'./Main';



function App() {
  const[data,setdata]=React.useState(true)
  
  const checkvalue=()=>{
    setdata(false)
  }
  return (
    <div className="App">
     {
      data?< Main checkvalue={checkvalue}/>:<Expense/>
     }
    </div>
  );
}

export default App;
