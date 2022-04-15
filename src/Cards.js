import { useState } from "react";
import Data from "./Data";
const Cards = (props) => {
    const [jerry,setJerry]=useState()


 return ( 
        <div class="card">
        <img src={`https://robohash.org/${props.img}?200x200`} alt="" />
        <div class="container">
          <h4><b>{props.name}</b></h4> 
          <p>{props.email}</p> 
        </div>
      </div>
     );
}
 
export default Cards;