import React from 'react'
import { Link } from 'react-router-dom'
import Body from './Body'
import { useSelector } from 'react-redux'

const Home = () => {

  const selector = useSelector((store)=>store.cartItems)

  return (
    <div className='flex justify-between items-center sticky top-1 '>
      
      <div className='m-2 p-2 w-28'>
        <img className='rounded-full' src='https://cdn2.vectorstock.com/i/1000x1000/27/01/food-delivery-logo-design-with-retro-scooter-vector-22912701.jpg' alt='image'/>
      </div>
        <ul className='flex flex-row font-bold text-lg bg-gradient-to-tr from-yellow-100 rounded-sm m-2'>
            <Link to="/"><li className='m-2 p-2 '>Home</li></Link>
            <Link to="/about"><li className='m-2 p-2 '>About</li></Link>
            <Link to="/cart"><li className='m-2 p-2 '>Cart({selector.length})</li></Link>
            <Link to="/login"><li className='m-2 p-2 '>Login</li></Link>
        </ul>
        </div>
  )
}

export default Home