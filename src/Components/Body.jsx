import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import Shimmer from './Shimmer'

const Body = () => {
  const API = "https://fakestoreapi.com/products/"


  const [items, setItems] = useState([])

  useEffect(()=>{
    handleApi()
  },[])

  const handleApi = async () =>{
    const data = await fetch(API)
    const json = await data.json()
    console.log(json)
    setItems(json)
  }

  if (items.length===0){
    return <Shimmer/>
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {items.map((item)=>(
        <ItemCard key={item.id} data={item}/>
      ))}
    </div>
  )
}

export default Body