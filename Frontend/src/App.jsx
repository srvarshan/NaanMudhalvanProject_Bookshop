import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ahome from './Admin/Ahome';
import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asignup';
import Seller from './Admin/Seller';
import Users from './Admin/Users';
import Body from './Componenets/Body';
import Home from './Componenets/Home';
import Addbook from './Seller/Addbook';
import Book from './Seller/Book';
import Myproducts from './Seller/Myproducts';
import Orders from './Seller/Orders';
import Shome from './Seller/Shome';
import Slogin from './Seller/Slogin';
import Ssignup from './Seller/Ssignup';
import Login from './User/Login';
import Myorders from './User/Myorders';
import OrderItem from './User/OrderItem';
import Products from './User/Products';
import Signup from './User/Signup';
import Uhome from './User/Uhome';
import Uitem from './User/Uitem';
import Unavbar from './User/Unavbar';
import Wishlist from './User/Wishlist';
// import './App.css'

function App() {
  return (
      <div>
       
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>} />


      {/* Admin */}
      <Route path='/alogin' element={<Alogin/>} />
      <Route path='/asignup' element={<Asignup/>} />
      <Route path='/ahome' element={<Ahome/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/sellers' element={<Seller/>} />
      <Route path='/Home' element={<Body></Body>} />



           {/* seller */}
        <Route path='/slogin' element={<Slogin/>} />
      <Route path='/ssignup' element={<Ssignup/>} />
       <Route path='/shome' element={<Shome/>} />
       <Route path='/myproducts' element={<Myproducts/>} />
       <Route path='/addbook' element={<Addbook/>} />
       <Route path='/book/:id' element={<Book/>} />
       <Route path='/orders' element={<Orders/>} />

      {/* user */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
        <Route path='/nav' element={<Unavbar/>}/>
         <Route path='/uhome' element={<Uhome/>} />
         <Route path='/uproducts' element={<Products/>} />
       <Route path='/uitem/:id' element={<Uitem/>} />
       <Route path="/orderitem/:id" element={<OrderItem/>} />
       <Route path="/myorders" element={<Myorders />} />
       <Route path="/wishlist" element={<Wishlist />} />

       </Routes>
       </BrowserRouter>


      </div>
  )
}

export default App
