// import React, {useState} from 'react';
// import {Button, Typography} from "@mui/material";
//
//
//
// const Counter = () => {
//   const state = {
//     title: "Counter",
//   };
//
//   const [counter,setCounter]=useState(0)
//
//   const incrementCounter = () => {
//     setCounter((prevState) => ({
//       counter: prevState.counter + 1,
//     }));
//   };
//
//   const decrementCounter = () => {
//     setCounter((prevState) => ({
//       counter: prevState.counter - 1,
//     }));
//   };
//   return (
//     <>
//       <section className="section">
//         <div className="container">
//           <h1 className="title">{state.title}</h1>
//           <div className="level">
//             <div className="level-item">
//               <button className="button" onClick={incrementCounter}>
//                 <span className="icon">
//                 +
//                 </span>
//               </button>
//             </div>
//             <div className="level-item">
//               <h2>{counter}</h2>
//             </div>            <div className="level-item">
//               <button className="button" onClick={decrementCounter}>
//                 <span className="icon">
//                   -
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*<Button></Button>*/}
//       {/*<Typography>{count}</Typography>*/}
//       {/*<Button></Button>*/}
//     </>
//   );
// };
//
// export default Counter;
import React, { useState } from "react";
import {Typography} from "@mui/material";

const Counter = ({price}) =>{
  const [count, setCount] = useState(1);

  function inc() {
    setCount((prev)=>{
      return prev + 1
    });
  }
  //
  function dec() {
    setCount((prev)=>{
     return  prev>1 && prev - 1
    });
  }

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{marginRight:"15px"}}>
        Кількість замовлення
      </Typography>
      <button
        onClick={inc}
        style={{ height: "20px" }}
        type=""
      >
        +
      </button>
      <p style={{margin:"0"}}>{count}</p>
      <button onClick={dec} style={{ height: "20px" }} type="">
        -
      </button>
      <p style={{textAlign:"center",margin:"0",padding:"0"}}>{price * count}</p>
    </div>
    </>
  );
};

export default Counter;
