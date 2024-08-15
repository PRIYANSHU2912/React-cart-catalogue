import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import AddedCart from './AddedCart'
import {Link} from 'react-router-dom'
import './Cartbill.css'
const Cartbill = () => {
  let {counter} = useSelector(function (state) { //***
    return state;
  }) //always take the name that you have considered in create redux case *****
  let amount = counter.reduce(function(total,item){
    return total = total + item.price
  },0);
  return (
    <div>
      <Navbar />
      {
        counter.length > 0 ?
         <div className='container1'>
           <div className='cartcontainer'>
            {
              counter.map(function(item){
                return <AddedCart key={item.id} item={item}/>
              })
            }
           </div>
           <div className='container2'>
            <div className='topcontainer'>
              <div className='top'>
                <p className='head'>YOUR CART</p>
                <div className='summary'>SUMMARY</div>
              </div>
              
              <div className='total'>
                Total Items: {counter.length}
              </div>
            </div>
            <div>
              <p className='amount'>Total Amount:{amount}</p>
              <button className='buttonamount'>Checkout Now</button>
            </div>
            </div>
        </div>
         : 
         <div className='emptycontainer'>
          <p className='lastpara'>Your cart is empty!</p>
          <Link to='/'>
          <button className='lastbutton'>
            SHOP NOW</button></Link>
         </div>
      }
    </div>
  )
}

export default Cartbill
