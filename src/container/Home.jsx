import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import Cart from './Cart'
import './Home.css'
import Loader from './Loader'
const Home = () => {
  let api = "https://fakestoreapi.com/products";
  let [posts, setpost] = useState([]);
  let [loading, setloading] = useState(true);
  async function fetchapi() {
    setloading(true);
    try {
      let response = await fetch(api);
      let data = await response.json();
      setpost(data);
      setloading(false);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(
    function () {
      fetchapi()
    }
    , []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {
        loading ? <Loader /> :

          (
            <div className='cartgrid'>{
              posts.map(function (item) {
                return <Cart key={item.id} item={item} />
              })
            }
            </div>
          )}
    </div>

  )
}

export default Home
