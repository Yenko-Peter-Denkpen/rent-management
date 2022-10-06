import React from 'react'
import NavBar from '../components/NavBar'
import house from '../imgs/house.webp';
import houses from '../imgs/images (8).jpeg';
import House from '../imgs/images (10).jpeg';
import Houses from '../imgs/images (21).jpeg';
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
    


    
<h1>welcome to your solutions in house renting</h1>
<div className='firstrow'>

      
<div className='card'>
<h2>bungalow</h2>
<img src={house} alt="" />

</div>


<div className='card'>
<h2>self contain</h2>
<img src={houses} alt="" />

</div>

<div className='card'>
<h2>compound house</h2>
<img src={House} alt="" />

</div>
</div>

    
    </div>
    
  )
}

export default Home