import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex justify-between'>
      <div>
      <p className='m-2 font-bold text-2xl underline'>Food Delivery App Mern GGN 4</p>
      <p className='m-2 text-xl'>Welcome to FoodExpress, your ultimate destination for delicious, fast, and reliable food delivery! At FoodExpress, we believe that everyone deserves access to their favorite meals without the hassle of cooking or leaving the comfort of their home.</p>

<p className='m-2 font-bold text-xl'>Our Mission:</p>

<p className='m-2 text-xl'>Our mission is to make your dining experience as enjoyable and convenient as possible. We strive to connect you with the best local restaurants, offering a wide variety of cuisines to satisfy every craving. Whether you're in the mood for a gourmet meal, a quick snack, or a late-night dessert, FoodExpress is here to deliver.
</p>
<div className='flex justify-center items-center'>
<Link to="/login"><button className='w-56 m-2 p-2 bg-yellow-300 rounded-lg'>Login Now</button></Link>
</div>
</div>
<div className='flex justify-center items-center'>
  <img className='rounded-lg' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/611200102654043.5f3ba98fbe55c.png'/>
</div>

    </div>
  )
}

export default About