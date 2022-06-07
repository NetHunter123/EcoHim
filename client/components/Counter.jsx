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

const Counter = function () {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <div style={{display:"flex"}
    }>
      <p>{count}</p>
      <button onClick={inc} style={{height:"20px"}} type="">
        +
      </button>
      <button onClick={dec} style={{height:"20px"}} type="">
        -
      </button>
    </div>
  );
};

export default Counter;
