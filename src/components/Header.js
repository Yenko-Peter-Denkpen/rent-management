import React, {useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import {FaSignOutAlt, FaUser } from "react-icons/fa"

function Header() {
    const navigate = useNavigate();
    const { success, loading, user, authLogout} = useContext(AuthContext);

useEffect (() =>{
  if (!user) {
    navigate("/login");
}

}, [user]);


  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><Link>
          <a class="nav-link active"  href="#">Home
            <span class="visually-hidden">(contact)</span>
          </a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">location</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">category</a>
        </li>
        
      </ul>
      <ul class= "navbar-nav-ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FaUser />
                {user.username}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" type="button"
                onClick={() => authLogout()}
                href="/">
                <FaSignOutAlt/>
              </a>      
      </li>
          </ul>
      
      </div>
    </div>
</nav>
  )
}

export default Header