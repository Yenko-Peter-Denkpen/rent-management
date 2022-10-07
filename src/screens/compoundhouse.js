import React from 'react'
import  uys from '../imgs/uys.jpeg'
import mou from '../imgs/mou.jpeg'
import inv from '../imgs/inv.jpeg'


<imgs/>
function Compoundhouse() {
  return (
    <div>
    <div className='card'>
    <h2>compound house</h2>
    <img src={uys} alt="" />
    <p> a single room with bathroom and toilet</p>
    <p>number of rooms 16</p>
    <p>location:charia rood</p>
    <div>contact:0204338483</div>
    <div>email:waduj@gmail.com</div>
    <button>contact owner</button>
    </div>
    
    
    <div>
    <div className='card'>
    <h2>compound house</h2>
    <img src={mou} alt="" />
    <p> a single room with bathroom and toilet</p>
    <p>number of rooms 10</p>
    <p>location:chahaa rood</p>
    <div>contact:0553661240</div>
    <div>email:denkpen444@gmail.com</div>
    <button>contact owner</button>
    </div>
    </div>
    
    <div>
    <div className='card'>
    <h2>compound house</h2>
    <img src={inv} alt="" />
    <p> a single room with bathroom and toilet</p>
    <p>number of rooms 24</p>
    <p>location:near dobile lowcoast</p>
    <div>contact:0204322483</div>
    <div>email:gandaare@gmail.com</div>
    <button>contact owner</button>
    <button>contact:020-7481917</button>
    </div>
    </div>
    
   
    </div>
  )
}

export default Compoundhouse
