import React from 'react'
import hfd from '../imgs/hfd.jpeg'
import hyu from '../imgs/hyu.jpeg'
import rin from '../imgs/rin.jpeg'
<imgs/>
function Singleroom() {
  return (
    <div>
    <div className='card'>
    <h2>singleroom</h2>
    <img src={hfd} alt="" />
    <p>it have 1room, bathroom</p>
    <p>location:zongo</p>
    <p>number of rooms 1</p>
    <button>contact:0207481917</button>
    <button>email:yenkopeter7@gmail.com</button>
    </div>
    
    <div>
    <div className='card'>
    <h2>singleroom</h2>
    <img src={hyu} alt="" />
    <p>it have 1room,
    bathroom, toilet </p>
    <p>location:zongo</p>
    <p>number of rooms 1</p>
    <button>contact:0207467785</button>
    <button>email:yenkoper7@gmail.com</button>
    </div>
    </div>
    
    <div>
    <div className='card'>
    <h2>singleroom</h2>
    <img src={rin} alt="" />
    <p>it have 1room bathroom, toilet  </p>
    <p>location:zongo</p>
    <p>number of rooms 9</p>
    <button>contact:0594578634</button>
    <button>email:yenkopeter7@gmail.com</button>
    </div>
    </div>
    </div>
    
    
  )
}

export default Singleroom
