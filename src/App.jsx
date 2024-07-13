import Home from './Components/Home'
import Body from './Components/Body'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart'
import About from './Components/About'
import Login from './Components/Login'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}

export default App
