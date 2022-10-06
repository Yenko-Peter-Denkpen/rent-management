import React from 'react';
import { FaImages } from 'react-icons/fa';
import Header from '../components/Header';
import house from '../imgs/house.webp';
import houses from '../imgs/images (8).jpeg';
import House from '../imgs/images (10).jpeg';
import Houses from '../imgs/images (21).jpeg';
import {Link} from 'react-router-dom'




function Category() {
  return (
    <div>
    
<h1>click on any to see your desired room</h1>
<div className='firstrow'>

      
<div className='card'>
<h2>bungalow</h2>
<img src={house} alt="" />
<p>this house contain 12 rooms, bathroom, kicthen,toilet and garage </p>
<p>GHC4500 1yr</p>
<button><Link to='/bungalow'>click to see more</Link></button>
</div>


<div className='card'>
<h2>self contain</h2>
<img src={houses} alt="" />
<p>it has 4bedrooms, kicthen and toilet</p>
<p>GHC3000 1yr</p>
<button><Link to='/self contain'>click to see more</Link></button>
</div>

<div className='card'>
<h2>compound house</h2>
<img src={House} alt="" />
<p> a single room with bathroom and toilet</p>
<p>GHC780 1yr</p>
<button><Link to='/compound house'>click to see more</Link></button>
</div>

<div className='card'>
<h2>single step story building</h2>
<img src={Houses} alt="" />
<p>it have 5rooms, hall, kicthen,
bathroom, toilet and a swiming pool</p>
<p>GHC5000</p>
<button><Link to='/single step story building'>click to see more</Link></button>
</div>
</div>


</div>
    
    
  )
}

export default Category