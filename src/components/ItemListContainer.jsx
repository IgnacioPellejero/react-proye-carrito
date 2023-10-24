// eslint-disable-next-line react/prop-types
import { useState,useEffect } from "react";
import { getProductos } from "./asyncMock.jsx";
import { ItemList } from "./itemList.jsx";
const ItemListContainer = ({greeting})=>{
    const[productos,setProductos]=useState([])
    useEffect(
        ()=>{
            getProductos()
            .then(response=>{
                setProductos(response)
            })
            .catch(error=>{
                console.error(error)
            })
        },[])
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer