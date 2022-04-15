import { useEffect, useState } from "react"
import axios from "axios"
import Cards from "./Cards";
const Item = () => {
    /////////////////////////
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);       
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(data => {
            setItems(data.data)
            setUsers(data.data)
        })
    }, [])
    console.log(items)
    ////////////////////////
   
    /////////////////////////
    function search(e) {

        const value = e.target.value;
        
        console.log(value)
        
        const display = users.filter(e => {
      
             return e.name.toLowerCase().includes(value)

        })
        setItems(display)
    }
    ///////////////////////////
    return (

        <div className="containor">
            <header>
                <h1>Robofans</h1>
                <input type="text" placeholder="searchrobot"
                    className="input1" onChange={search}
                />
            </header>

            <div className="itemscame">{items.map(data => {
        return <Cards name={data.name} email={data.email} img={data.id}
        key={data.id}
        />
            })}</div>
        </div>
    );
}

export default Item;