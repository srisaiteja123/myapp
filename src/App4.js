import React from 'react';
import Sqr1 from "./Sqr1";
export default function App4() {
    const sqrFunction = (num)=>{
        return num * num;
    };
  return (
    <div><Sqr1 n={5} f={sqrFunction}/></div>
  )
}
//<App4/>
