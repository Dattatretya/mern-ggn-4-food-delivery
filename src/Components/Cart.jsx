import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import ItemCard from './ItemCard'
import { deleteItems } from '../constants/cartSlice'

const Cart = () => {

    const selector = useSelector((store)=>store.cartItems)

    const dispatch = useDispatch()
    

    const handleDelete = (e) =>{
        dispatch(deleteItems(e))
    }

    if (selector.length===0){
        return <p className='font-bold flex justify-center bg-yellow-100 p-1'>Your cart is Empty...Please add something to your cart</p>
    }

  return (
    <div>
        
    <div>
        {selector.map((item)=>(
            <div className='flex flex-col justify-center items-center'>
                <ItemCard data={item}/>
                <button 
                 onClick={()=>handleDelete(item)}
                className='bg-red-600 p-2 rounded-lg m-2'>Delete</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Cart