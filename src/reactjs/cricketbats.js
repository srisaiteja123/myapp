import React from 'react'

export default function Fruits() {
   let fruits= [{
        name:"CEAT",
        description: "This is dummy text",
        price:300,
        image: "https://5.imimg.com/data5/TK/OZ/ZC/SELLER-73795199/bat-jpeg.jpeg",
    },
    {
        name:"DSC",
        description: "This is dummy text",
        price:200,
        image:"https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/6d9f53a3f26f3a62c1c1c9add7c6ad94/i/n/intense-storm-dsc-kw-bat-2_1.jpg",
    },
    {
        name:"SPARTAN",
        description: "This is dummy text",
        price:400,
        image:"https://4.imimg.com/data4/QC/OO/MY-26187521/de05cc62-2259-4f46-b82e-a3cb00c880e5_500x500-500x500.jpg",
    },
    {
        name:"SG",
        description: "This is dummy text",
        price:600,
        image:"https://shop.teamsg.in/cdn/shop/products/PROFILE-XTREME_5-scaled.jpg?v=1696578181",
    },
    {
        name:"MRF",
        description: "This is dummy text",
        price:700,
        image:"https://rukminim2.flixcart.com/image/850/1000/krce64w0/bat/r/9/g/1-1-2-virat-kohli-grand-edition-tennis-cricket-bat-short-handle-original-imag55zexgqmtznz.jpeg?q=20&crop=false",
    },
    {
        name:"KOKABURRA",
        description: "This is dummy text",
        price:900,
        image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/bat/y/a/u/1-kookaburra-black-pro-player-long-handle-01-na-grade-1-willow-original-imagz3uq8hgpmxa9.jpeg?q=90&crop=false",}]
  return (
    <div>
        {fruits.map((value,index)=>(
            <div class="container">
                <div><img src={value.image} width={175} height={150} alt='BATIMG'></img></div>
                <div id="fname">{value.name}</div>
                <div>{value.description}</div>
                <div>{value.price}</div>
                <div><button id="btn" onclick="addCart(${index})">ADD</button></div>
            </div> 

            ))
        }
    </div>
  )
    }