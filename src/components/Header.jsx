import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (

    <div style={{display : "unset"}}>
      <nav>
        <h1>TechStar.</h1>
        <main>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Contact</Link>
          <Link to={"/#about"}>About</Link>
          <Link to={"/#brands"}>Brands</Link>
          <Link to={"/services"}>services</Link>
        </main>
      </nav>
    </div>
  )
}

export default Header