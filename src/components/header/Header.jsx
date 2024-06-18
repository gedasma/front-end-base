// import User from "../user/User"
import React from 'react';
import User from '../user/User';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">ProductSite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">All Products</Link>
              </li>
              <User/>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header