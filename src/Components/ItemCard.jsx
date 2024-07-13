import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../constants/cartSlice'

const ItemCard = ({data}) => {

  const dispatch = useDispatch()

    const handleAddItem = () =>{
        dispatch(addItems(data))
    }

  return (
    <div className=' w-1/2 m-1 p-2 flex flex-col justify-center items-center border border-l-0 border-r-0 border-black'>
        <img className='w-48' src={data.image}/>
        <p className='bg-slate-100 rounded-md font-bold p-2 m-1'>{data.title}</p>
        <p className='font-bold'>${data.price}</p>
        <p className='font-bold'>Rating: {data.rating.rate}({data.rating.count})</p>
        <button
        onClick={handleAddItem}
        className='bg-black text-white p-2 m-1 rounded-lg'>Add+</button>
        <br/>
    </div>
  )
}

export default ItemCard