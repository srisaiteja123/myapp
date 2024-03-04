import React from 'react'

export default function App5() {
    //let names =["sri","chandu","madhu"];
    let product =[{id:1, name:"product1", price:20}];
  return (
    <ul>
        {product.map((e,i)=>(
        <li key={i}>{e.name}-{e.price}</li>
        ))}
    </ul>
    
  );
}


