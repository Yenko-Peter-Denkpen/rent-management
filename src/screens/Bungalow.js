import React from 'react'
import din from '../imgs/din.jpeg'
import pete from '../imgs/pete.jpeg'
import rau from  '../imgs/rau.webp'
<imgs />
function Bungalow() {
  return (
    <div>
    <div className='card'>
    <h2>bungalow</h2>
    <img src={din} alt="" />
    <p>this house contain 12 rooms, bathroom, kicthen,toilet and garage</p>
    <button>contact owner</button>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    </div>
    
    <div>
    <div className='card'>
    <h2>bungalow</h2>
    <img src={pete} alt="" />
    <p>this house contain 10 rooms, bathroom, kicthen,toilet and garage</p>
    <button>contact owner</button>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    </div>
    </div>
    <div>
    <div className='card'>
    <h2>bungalow</h2>
    <img src={rau} alt="" />
    <p>this house contain 9 rooms, bathroom, kicthen,toilet and garage</p>
    <button>contact owner</button>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    </div>
    </div>
    </div>
  )
}

export default Bungalow
