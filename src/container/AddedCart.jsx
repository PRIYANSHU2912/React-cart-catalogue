import React from 'react'
import './AddedCart.css'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove} from '../redux/slice/CounterSlice'
const AddedCart = ({item}) => {
    let dispatch = useDispatch();
    function delHandler(){
       dispatch(remove(item.id));
    }
  return (
    <div className='addedcart'>
      <div className='cartimg'>
        <img src={item.image}/>
      </div>
      <div className='cartcontent'>
        <div className='carttitle'>{item.title}</div>
        <div className='cartdesc'>{item.description.substring(0,81)}...</div>
        <div className='cartfoot'>
            <div className='cartprice'>${item.price}</div>
            <div className='del' onClick={delHandler}><MdDelete /></div>
        </div>
      </div>
    </div>
  )
}

export default AddedCart
