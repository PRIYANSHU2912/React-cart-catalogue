import React, { useState } from 'react'
import './Cart.css'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { add ,remove} from '../redux/slice/CounterSlice'
const Cart = (props) => {
  let item = props.item;
  let [select, setselect] = useState(true);
  let dispatch = useDispatch();

  function addHandler() {
    toast.success('Item added to cart!');
    setselect(false);
    dispatch(add(item));
    
  }
  function removeHandler() {
    toast.error('Item removed');
    setselect(true);
    dispatch(remove(item.id));
  }
  return (
    <div className='cart'>
      <div className='title'>{item.title.substring(0, 14)}...</div>
      <div className='desc'>{item.description.substring(0, 110)}...</div>
      <div className='itemimg'>
        <img src={item.image} />
      </div>
      <div className='endrow'>
        <div className='price'>${item.price}</div>
        {
          select ? (<button className='buttoncart' onClick={addHandler}>
            ADD TO CART</button>) :
            (<button className='buttoncart' onClick={removeHandler}>
              REMOVE ITEM</button>)
        }
      </div>
    </div>
  )
}

export default Cart

