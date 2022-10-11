import "./Home.css"
import Axios from 'axios';
import { useEffect,useState } from "react";




const Home=()=>{
    const [goods,setGoods]=useState([]);

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log(res.data);
            setGoods(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
        {
        goods.map(ele=>(
           <div key={"ele"}>
            <h4>{ele.id}</h4>
            <h1>{ele.title}</h1>
            <p>{ele.body}</p>
          </div>
               
                

        ))}
        </>
    )
}

export default Home;