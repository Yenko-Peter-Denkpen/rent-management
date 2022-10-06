import React from 'react'
import house from '../imgs/house.webp'
import houses from '../imgs/images (14).jpeg'
import Houses from '../imgs/images (19).jpeg'
<imgs />
function Bungalow() {
  return (
    <div>
    <div className='card'>
    <h2>bungalow</h2>
    <img src={house} alt="" />
    <p>this house contain 12 rooms, bathroom, kicthen,toilet and garage</p>
    <button>contact owner</button>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    </div>
    
    <div>
    <div className='card'>
    <h2>bungalow</h2>
    <img src={houses} alt="" />
    <p>this house contain 12 rooms, bathroom, kicthen,toilet and garage</p>
    <button>contact owner</button>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    </div>
    </div>
    <div>
    <div className='card'>
    <h2>bungalow</h2>
    <img src={Houses} alt="" />
    <p>this house contain 12 rooms, bathroom, kicthen,toilet and garage</p>
    <button>contact owner</button>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    </div>
    </div>
    </div>
  )
}

export default Bungalow
